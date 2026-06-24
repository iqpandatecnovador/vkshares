// Fuente ÚNICA de verdad de precios. Vive solo en el servidor.
// El cliente nunca envía montos: envía un `membershipId` y el servidor
// resuelve aquí el precio real. Esto elimina la manipulación de precios.

export const MEMBERSHIPS = {
  silver: { label: "Silver", price: 200 },
  gold: { label: "Gold", price: 300 },
  platinum: { label: "Platinum", price: 500 },
  specialPlatinum: { label: "Special Platinum", price: 1500 },
} as const;

export type MembershipId = keyof typeof MEMBERSHIPS;

export function isMembershipId(value: unknown): value is MembershipId {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(MEMBERSHIPS, value);
}
