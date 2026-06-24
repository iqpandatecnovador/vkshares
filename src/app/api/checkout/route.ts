import { NextResponse } from "next/server";
import { stripe, isStripeConfigured } from "@/lib/stripe";
import { createHubSpotContact } from "@/lib/hubspot";
import { MEMBERSHIPS, isMembershipId } from "@/lib/pricing";
import { supabaseAdmin } from "@/lib/supabase/admin";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
    }

    const { membershipId, name, email, phone } = body as Record<string, unknown>;

    // Validación de servidor: el plan debe ser uno conocido.
    if (!isMembershipId(membershipId)) {
      return NextResponse.json({ error: "Plan de membresía inválido." }, { status: 400 });
    }
    if (typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Correo electrónico inválido." }, { status: 400 });
    }

    const safeName = typeof name === "string" ? name.trim().slice(0, 120) : null;
    const safePhone = typeof phone === "string" ? phone.trim().slice(0, 40) : null;

    // El precio se resuelve SIEMPRE en el servidor. El cliente no puede alterarlo.
    const { price, label } = MEMBERSHIPS[membershipId];

    // Captura de lead pre-pago en HubSpot (no bloquea ni rompe el flujo)
    createHubSpotContact(email, safePhone, safeName).catch(console.error);

    // Captura de lead en Supabase
    let finalLeadId = null;
    try {
      const { data: newLead } = await supabaseAdmin.from('leads').insert({
        email,
        phone: safePhone,
        name: safeName,
        source: 'checkout_intent',
        status: 'pending',
        notes: 'Intento de checkout'
      }).select().single();
      
      finalLeadId = newLead?.id;
    } catch (e) {
      console.error("Error al crear lead:", e);
    }

    // Crear Oportunidad
    let finalOpportunityId = null;
    if (finalLeadId) {
      try {
        const { data: newOpp } = await supabaseAdmin.from('opportunities').insert({
          lead_id: finalLeadId,
          stage: 'contract',
          estimated_value: price
        }).select().single();
        
        finalOpportunityId = newOpp?.id;
      } catch (e) {
        console.error("Error al crear oportunidad:", e);
      }
    }

    // Sin Stripe configurado degradamos de forma segura (NO simulamos un pago exitoso).
    if (!isStripeConfigured) {
      console.warn("Stripe no está configurado; no se puede iniciar el pago.");
      return NextResponse.json(
        { error: "El sistema de pagos no está disponible en este momento." },
        { status: 503 }
      );
    }

    const origin =
      process.env.NEXT_PUBLIC_BASE_URL ?? request.headers.get("origin") ?? "";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Membership Plan: ${label}`,
              description: "VKSHARES Management Services.",
            },
            unit_amount: price * 100, // precio de servidor, en centavos
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      // success_url con session_id para poder VERIFICAR el pago en /success.
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#memberships?canceled=true`,
      metadata: {
        membershipId,
        membershipLabel: label,
        customerName: safeName ?? "",
        customerPhone: safePhone ?? "",
        opportunityId: finalOpportunityId ?? "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout Error:", err);
    return NextResponse.json({ error: "Error al crear la sesión de pago." }, { status: 500 });
  }
}
