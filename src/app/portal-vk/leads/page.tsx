"use client";

import { Users, Search, Filter } from "lucide-react";

export default function LeadsPage() {
  // Mock data para validación de diseño
  const leads = [
    { id: "L-001", name: "John Doe", email: "john@example.com", phone: "+1 555-0123", source: "ai_concierge", status: "new", date: "2026-06-24" },
    { id: "L-002", name: "Jane Smith", email: "jane@example.com", phone: "+1 555-0198", source: "checkout_intent", status: "pending", date: "2026-06-23" },
    { id: "L-003", name: "Robert G.", email: "robert@pending.com", phone: "-", source: "web", status: "contacted", date: "2026-06-22" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Users className="text-[var(--color-brand)]" /> Gestión de Leads
          </h1>
          <p className="text-white/60 mt-1">Administra tus prospectos y captura de datos.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text" 
              placeholder="Buscar lead..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[var(--color-brand)] transition-colors"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-2 rounded-xl text-white hover:bg-white/10 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-black/20">
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Nombre</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Contacto</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Origen</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Estado</th>
                <th className="py-4 px-6 text-xs font-semibold text-white/60 uppercase tracking-wider">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="font-medium text-white">{lead.name}</div>
                    <div className="text-xs text-white/40">{lead.id}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-white/80">{lead.email}</div>
                    <div className="text-xs text-white/40">{lead.phone}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {lead.source}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      lead.status === 'new' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      lead.status === 'pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                      'bg-white/10 text-white/60 border-white/20'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-white/60">
                    {lead.date}
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
