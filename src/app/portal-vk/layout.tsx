"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, CreditCard, MessageSquare, LogOut, Settings } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Si estamos en la página de login, no mostramos el sidebar
  if (pathname === "/portal-vk/login") {
    return <>{children}</>;
  }

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/portal-vk/login");
  };

  const navItems = [
    { name: "Resumen", href: "/portal-vk", icon: LayoutDashboard },
    { name: "Leads", href: "/portal-vk/leads", icon: Users },
    { name: "Ventas", href: "/portal-vk/sales", icon: CreditCard },
    { name: "Conversaciones", href: "/portal-vk/conversations", icon: MessageSquare },
    { name: "Configuración", href: "/portal-vk/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#030b14] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white tracking-wider">VK<span className="text-[var(--color-brand)]">ADMIN</span></h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "bg-[var(--color-brand)]/10 text-[var(--color-brand)]" 
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={20} className={isActive ? "text-[var(--color-brand)]" : ""} />
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full px-4 py-3 text-white/60 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-colors text-sm font-medium"
          >
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
