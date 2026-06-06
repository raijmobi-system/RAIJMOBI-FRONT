import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Badge } from "../atoms/badge";
import { Icon } from "../atoms/icon";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  onNotificationsClick: () => void;
  notificationCount: number;
}

export const PageHeader = ({ title, subtitle, onNotificationsClick, notificationCount }: PageHeaderProps) => {
  return (
    <header className={css({
      bg: "brand.dark",
      position: "sticky",
      top: 0,
      zIndex: 30,
      px: "4",
      md: { px: "8" },
      py: "4",
      md: { py: "5" },
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      shadow: "lg",
    })}>
      <div>
        <h2 className={css({ fontSize: "headlineMdMobile", md: { fontSize: "headlineLg" }, color: "white" })}>{title}</h2>
        {subtitle && <p className={css({ fontSize: "bodyMd", color: "white/70", mt: "0.5" })}>{subtitle}</p>}
      </div>
      <button onClick={onNotificationsClick} className={css({ position: "relative", p: "2.5", rounded: "full", transition: "background 200ms", _hover: { bg: "white/10" } })}>
        <Icon name="notifications" size={24} className={css({ color: "white/80" })} />
        {notificationCount > 0 && <Badge count={notificationCount} />}
      </button>
    </header>
  );
};