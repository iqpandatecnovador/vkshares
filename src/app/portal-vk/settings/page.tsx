export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Configuración del Portal</h1>
      <p className="text-white/60">Gestiona los roles de usuario y parámetros del sistema.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Roles de Usuario</h2>
          <div className="text-white/40 border border-dashed border-white/10 rounded-xl p-4">
            Gestión de permisos (super_admin, admin, sales_agent, client) próximamente.
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Ajustes del Sistema</h2>
          <div className="text-white/40 border border-dashed border-white/10 rounded-xl p-4">
            Variables de entorno y automatizaciones.
          </div>
        </div>
      </div>
    </div>
  );
}
