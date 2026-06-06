"use client";

import { css } from "@/styled-system/css";
import { Icon } from "../atoms/icon";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { path: "/", label: "Buscar", icon: "search" },
  { path: "/rides", label: "Minhas", icon: "directions_car" },
  { path: "/chat", label: "Chat", icon: "chat", badge: 3 },
  { path: "/profile", label: "Perfil", icon: "person" },
];

export const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={css({
      display: { base: "flex", md: "none" },
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      justifyContent: "space-around",
      alignItems: "center",
      h: "16",
      bg: "brand.dark",
      roundedTop: "2xl",
      shadow: "0 -4px 10px rgba(0,0,0,0.3)",
      borderTop: "1px solid",
      borderColor: "white/10",
      pb: "env(safe-area-inset-bottom, 16px)",
    })}>
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: isActive ? "brand.green" : "white/60",
              fontWeight: isActive ? "700" : "normal",
              transform: isActive ? "scale(1.05)" : "scale(1)",
              transition: "all 200ms",
            })}
          >
            <div className={css({ position: "relative" })}>
              <Icon name={item.icon} size={22} fill={isActive} />
              {item.badge && (
                <span className={css({
                  position: "absolute",
                  top: "-0.5rem",
                  right: "-0.75rem",
                  bg: "brand.green",
                  color: "white",
                  fontSize: "10px",
                  fontWeight: "bold",
                  px: "1.5",
                  py: "0.5",
                  rounded: "full",
                  minW: "20px",
                  textAlign: "center",
                })}>{item.badge}</span>
              )}
            </div>
            <span className={css({ fontSize: "10px", mt: "0.5" })}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};