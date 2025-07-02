"use client";

import { usePathname } from "next/navigation";
import { MessageSquare, Bell } from "lucide-react";
import { useMemo } from "react";
import { routes } from "@/modules/home/ui/components/sidebar"; // adapte ce chemin selon ton projet
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();

  // Trouve le label actif dans routes ou sous-routes
  const currentLabel = useMemo(() => {
    for (const route of routes) {
      if (route.href === pathname) return route.label;
      if (route.subRoutes) {
        for (const sub of route.subRoutes) {
          if (sub.href === pathname) return sub.label;
        }
      }
    }
    return "";
  }, [pathname]);

  return (
    <header className="h-16 bg-white flex items-center justify-between px-6">
      {/* Breadcrumb */}
      <div className="text-gray-700 text-sm font-medium flex items-center">
        {/* Green vertical bar */}
        <span className="w-1 h-5 bg-teal-600 rounded mr-2"></span>
        <span className="mr-1">Dashboard</span>
        <span className="text-gray-400 mx-2">{">"}</span>
        <span>{currentLabel || "Accueil"}</span>
      </div>

      <div className="flex items-center gap-5">
        <button aria-label="Messages" className="text-gray-600 hover:text-gray-900 transition">
          <MessageSquare size={20} />
        </button>
        <button aria-label="Notifications" className="text-gray-600 hover:text-gray-900 transition">
          <Bell size={20} />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer select-none">
          <Image
            src="/avatar.jpg" // replace with your avatar image path or URL
            alt="User Avatar"
            width={35}
            height={35}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
};
