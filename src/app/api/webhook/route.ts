import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // La verificación de firma es OBLIGATORIA. Sin secreto, no procesamos nada.
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET no está configurado. Webhook rechazado.");
    return NextResponse.json({ error: "Webhook no configurado." }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Falta la cabecera stripe-signature." }, { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    // constructEvent verifica la firma; lanza si el payload no es auténtico.
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "firma inválida";
    console.error("Verificación de firma de webhook fallida:", message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Solo registramos el id de sesión (sin PII en logs).
    console.log("Pago verificado. Sesión:", session.id);

    // Guardar la venta en Supabase
    try {
      const oppId = session.metadata?.opportunityId;

      await supabaseAdmin.from('sales').insert({
        opportunity_id: oppId || null,
        membership_id: session.metadata?.membershipId || 'unknown',
        membership_type: session.metadata?.membershipLabel || 'unknown',
        amount_usd: (session.amount_total || 0) / 100,
        currency: session.currency || 'usd',
        stripe_session_id: session.id,
        stripe_customer_id: typeof session.customer === 'string' ? session.customer : '',
        customer_email: session.customer_details?.email || session.customer_email || '',
        payment_status: 'paid'
      });
      console.log("Venta registrada en Supabase.");

      // Si existe oportunidad, actualizarla a 'won'
      if (oppId) {
        await supabaseAdmin.from('opportunities')
          .update({ stage: 'won' })
          .eq('id', oppId);
        console.log("Oportunidad actualizada a 'won'.");
      }
    } catch (dbError) {
      console.error("Error al guardar venta en Supabase:", dbError);
    }

    // =========================================================================
    // Lógica de negocio (pendiente de implementar de forma idempotente):
    // 1. Email de bienvenida VIP
    // 2. WhatsApp automático con el link de Calendly
    // 3. Mover el lead en HubSpot a "Cliente Confirmado"
    // 4. Notificar a los asesores de venta
    // =========================================================================
  }

  return NextResponse.json({ received: true });
}
