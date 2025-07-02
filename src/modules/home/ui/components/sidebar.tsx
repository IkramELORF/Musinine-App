"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Users,
  BarChart3,
  Calendar,
  BookText,
  UserPlus,
  Settings,
  Bike,
  Star,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DashboardIcon = () => (
  <Image src="/logo.png" alt="Logo" width={45} height={50} />
);

export const routes = [
  { label: "Dashboard", href: "/home/dashboard", icon: DashboardIcon },
  { label: "Clients actifs", href: "/home/clients-actifs", icon: Users },
  {
    label: "KPI's",
    icon: BarChart3,
    subRoutes: [
      { label: "Activité en cours du mois", href: "/home/KPI/current-activity", icon: Calendar },
      { label: "Entrée passionnés", href: "/home/KPI/passionate-entry", icon: Users },
      { label: "Entrée clients", href: "/home/KPI/clients-entry", icon: Users },
    ],
  },
  { label: "Tickets clients", href: "/home/tickets", icon: Bike  },
  { label: "Matching", href: "/home/matching", icon: BookText },
  {
    label: "Passionnés",
    icon: Star,
    subRoutes: [
      { label: "Membre passionné", href: "/home/membre-passionne", icon: UserPlus },
    ],
  },
  { label: "Créer un membre", href: "/home/creer-un-membre", icon: UserPlus },
  { label: "Paramètres", href: "/home/parametres", icon: Settings },
];


export const Sidebar = () => {
  const pathname = usePathname();

  // États d'ouverture séparés pour chaque menu avec sousRoutes
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  // Ouvre automatiquement le sous-menu correspondant au pathname
  useEffect(() => {
    const newOpenMenus: Record<string, boolean> = {};
    routes.forEach((route) => {
      if (route.subRoutes) {
        const isActiveSub = route.subRoutes.some((sub) => pathname.startsWith(sub.href));
        newOpenMenus[route.label] = isActiveSub;
      }
    });
    setOpenMenus(newOpenMenus);
  }, [pathname]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="h-screen w-64 bg-white hidden lg:flex flex-col justify-between">
      <div>
        <div className="h-20 flex items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={75} height={50} />
        </div>

        <nav className="flex flex-col gap-1 px-3 py-4">
          {routes.map(({ label, href, icon: Icon, subRoutes }) => {
            const isActive = href ? pathname === href : false;
            const isMenuOpen = openMenus[label] || false;

            if (subRoutes) {
              // Menu avec sous-routes
              // On vérifie si le menu parent est actif (si une sous-route est active)
              const isParentActive = subRoutes.some((sub) => pathname.startsWith(sub.href));

              return (
                <div key={label} className="mb-2">
                  <button
                    onClick={() => toggleMenu(label)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-md w-full text-sm transition",
                      "text-gray-700 hover:text-[#24958f] font-normal"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                    <ChevronDown
                      className={cn(
                        "ml-auto transition-transform",
                        isMenuOpen ? "rotate-180" : "rotate-0"
                      )}
                      width={16}
                      height={16}
                    />
                  </button>

                  {isMenuOpen && (
                    <nav className="flex flex-col mt-1 ml-7 gap-1">
                      {subRoutes.map(({ href: subHref, label: subLabel, icon: SubIcon }) => {
                        const isSubActive = pathname === subHref;
                        return (
                          <Link
                            key={subHref}
                            href={subHref}
                            className={cn(
                              "flex items-center gap-3 px-4 py-2 rounded-md transition text-sm",
                              isSubActive
                                ? "text-[#24958f] font-semibold" // active submenu item colored & bold
                                : "text-gray-700 hover:text-[#24958f] font-normal"
                            )}
                          >
                            <SubIcon className="h-4 w-4" />
                            {subLabel}
                          </Link>
                        );
                      })}
                    </nav>
                  )}
                </div>
              );
            }

            // Menu simple sans sous-routes
            return (
              <Link
                key={href}
                href={href!}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-md transition text-sm",
                  isActive
                    ? "text-[#24958f] font-semibold" // active simple menu item colored & bold
                    : "text-gray-700 hover:text-[#24958f] font-normal"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
