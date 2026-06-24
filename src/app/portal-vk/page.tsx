import { Users, CreditCard, Activity, TrendingUp } from "lucide-react";

export default async function AdminDashboard() {
  // Aquí obtendríamos estadísticas reales más adelante
  const stats = [
    { title: "Ventas Totales", value: "$0.00", icon: CreditCard, trend: "+0%" },
    { title: "Nuevos Leads", value: "0", icon: Users, trend: "+0%" },
    { title: "Conversaciones Activas", value: "0", icon: Activity, trend: "0" },
    { title: "Tasa de Conversión", value: "0%", icon: TrendingUp, trend: "0%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Panel de Control</h1>
        <p className="text-white/60">Bienvenido al ecosistema VKSHARES. Aquí está el resumen de tu negocio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)]">
                  <Icon size={24} />
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-white/60 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Placeholder para gráficos y tablas recientes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[400px]">
          <h3 className="text-lg font-semibold text-white mb-4">Ingresos Recientes</h3>
          <div className="flex items-center justify-center h-[300px] text-white/40 border border-dashed border-white/10 rounded-xl">
            Gráfico de ingresos se renderizará aquí
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[400px]">
          <h3 className="text-lg font-semibold text-white mb-4">Últimos Leads</h3>
          <div className="flex items-center justify-center h-[300px] text-white/40 border border-dashed border-white/10 rounded-xl">
            Lista de leads recientes
          </div>
        </div>
      </div>
    </div>
  );
}
