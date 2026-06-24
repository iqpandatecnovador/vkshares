import Stripe from "stripe";

// Instancia única de Stripe para toda la app (evita duplicación y deriva de config).

const apiVersion = "2026-04-22.dahlia";
const secretKey = process.env.STRIPE_SECRET_KEY;

// Fail-fast en producción: nunca arrancar sin clave real (evita "pagos simulados").
if (!secretKey && process.env.NODE_ENV === "production") {
  throw new Error("STRIPE_SECRET_KEY es obligatoria en producción.");
}

// `isStripeConfigured` permite a las rutas degradar de forma segura en desarrollo
// (devolviendo 503) en lugar de fingir un pago exitoso.
export const isStripeConfigured = Boolean(secretKey);

export const stripe = new Stripe(secretKey ?? "sk_test_unconfigured", { apiVersion });
