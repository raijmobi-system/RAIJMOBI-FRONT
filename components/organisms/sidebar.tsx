"use client";

import { css } from "@/styled-system/css";
import { Icon } from "../atoms/icon";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "../atoms/badge";

const menuItems = [
  { path: "/", label: "Buscar Caronas", icon: "search" },
  { path: "/rides", label: "Minhas Caronas", icon: "directions_car", badge: 0 },
  { path: "/chat", label: "Chat", icon: "chat", badge: 3 },
  { path: "/profile", label: "Perfil", icon: "person" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className={css({
      display: { base: "none", md: "flex" },
      flexDirection: "column",
      w: "64",
      bg: "brand.dark",
      h: "screen",
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: 50,
      shadow: "2xl",
    })}>
      <div className={css({ px: "6", pt: "8", pb: "6", display: "flex", alignItems: "center", gap: "3", borderBottom: "1px solid", borderColor: "white/10" })}>
        <div className={css({ w: "10", h: "10", rounded: "xl", bg: "brand.green", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 })}>
          <Icon name="directions_car" size={22} fill className={css({ color: "white" })} />
        </div>
        <div>
          <h1 className={css({ fontSize: "headlineMd", color: "white", letterSpacing: "tight" })}>Kiwidi</h1>
          <p className={css({ fontSize: "11px", color: "white/50", leading: "none", mt: "0.5" })}>Caronas inteligentes</p>
        </div>
      </div>
      <nav className={css({ flex: 1, py: "4", spaceY: "0.5", px: "3" })}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "3",
                w: "full",
                px: "4",
                py: "3",
                roundedRight: "xl",
                color: isActive ? "white" : "white/70",
                bg: isActive ? "white/8" : "transparent",
                borderLeft: isActive ? "3px solid" : "3px solid transparent",
                borderLeftColor: isActive ? "inversePrimary" : "transparent",
                fontSize: "bodyMd",
                fontWeight: "medium",
                transition: "all 200ms",
                _hover: !isActive ? { bg: "white/4" } : {},
              })}
            >
              <Icon name={item.icon} size={22} fill={isActive} className={css({ color: isActive ? "inversePrimary" : "white/70" })} />
              <span>{item.label}</span>
              {item.badge ? <span className={css({ ml: "auto", bg: "brand.green", color: "white", fontSize: "10px", fontWeight: "bold", px: "2", py: "0.5", rounded: "full", minW: "20px", textAlign: "center" })}>{item.badge}</span> : null}
            </button>
          );
        })}
      </nav>
      <div className={css({ px: "5", py: "4", borderTop: "1px solid", borderColor: "white/10" })}>
        <div className={css({ display: "flex", alignItems: "center", gap: "3" })}>
          <img alt="Fernando" className={css({ w: "10", h: "10", rounded: "full", border: "2px solid", borderColor: "brand.green/60", objectFit: "cover", flexShrink: 0 })} src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5" />
          <div className={css({ minW: 0 })}>
            <p className={css({ fontSize: "13px", fontWeight: "semibold", color: "white", truncate: true })}>Fernando</p>
            <p className={css({ fontSize: "11px", color: "white/50", truncate: true })}>Plano Premium</p>
          </div>
        </div>
      </div>
    </aside>
  );
};