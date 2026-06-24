import { redirect } from "next/navigation";
import { stripe, isStripeConfigured } from "@/lib/stripe";
import SuccessContent from "./SuccessContent";

// Server Component: verifica con Stripe que el pago realmente ocurrió ANTES
// de mostrar la confirmación. Sin session_id válido y pagado -> redirige a /.
export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id || !isStripeConfigured) {
    redirect("/");
  }

  let paid = false;
  let membershipLabel: string | null = null;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    paid = session.payment_status === "paid";
    membershipLabel = (session.metadata?.membershipLabel as string) || null;
  } catch (err) {
    console.error("No se pudo verificar la sesión de pago:", err);
    redirect("/");
  }

  if (!paid) {
    redirect("/");
  }

  return <SuccessContent membershipLabel={membershipLabel} />;
}
