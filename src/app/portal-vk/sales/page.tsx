"use client";

import { CreditCard, Search, Download } from "lucide-react";

export default function SalesPage() {
  // Mock data para validación de diseño
  const sales = [
    { id: "INV-001", customer: "Michael Brown", email: "michael@example.com", membership: "Signature", amount: "$300.00", currency: "usd", status: "paid", date: "2026-06-24" },
    { id: "INV-002", customer: "Sarah Connor", email: "sarah@example.com", membership: "Elite", amount: "$200.00", currency: "usd", status: "paid", date: "2026-06-23" },
    { id: "INV-003", customer: "David Wilson", email: "david@example.com", membership: "Founder", amount: "$1500.00", currency: "usd", status: "failed", date: "2026-06-21" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <CreditCard className="text-[var(--color-brand)]" /> Ventas y Membresías
          </h1>
          <p className="text-white/60 mt-1">Control de ingresos y pagos procesados por Stripe.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text" 
              placeholder="Buscar factura o cliente..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[var(--color-brand)] transition-colors"
            />
          </div>
          <button className="bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/20 p-2 rounded-xl hover:bg-[var(--color-brand)]/20 transition-colors flex items-center gap-2 px-4 text-sm font-medium">
            <Download size={16} /> Exportar
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-black/20">
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Factura</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Cliente</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Membresía</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Monto</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Estado</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sales.map((sale) => (
                <tr key={sale.id} className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 font-mono text-sm text-[var(--color-brand)]">
                    {sale.id}
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-white">{sale.customer}</div>
                    <div className="text-xs text-white/40">{sale.email}</div>
                  </td>
                  <td className="py-4 px-6 text-sm text-white/80">
                    {sale.membership}
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-white">{sale.amount}</div>
                    <div className="text-xs text-white/40 uppercase">{sale.currency}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      sale.status === 'paid' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {sale.status === 'paid' ? 'Pagado' : 'Fallido'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-white/60">
                    {sale.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
