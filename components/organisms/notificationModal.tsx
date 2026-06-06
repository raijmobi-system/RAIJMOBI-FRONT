"use client";

import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { Notification } from "@/hooks/useApp";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkRead: (id: number) => void;
  onMarkAllRead: () => void;
}

export const NotificationModal = ({ isOpen, onClose, notifications, onMarkRead, onMarkAllRead }: NotificationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "480px", maxH: "85vh", overflowY: "auto", animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" })} onClick={(e) => e.stopPropagation()}>
        <div className={css({ p: "5", borderBottom: "1px solid", borderColor: "gray.200", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, bg: "white", zIndex: 2 })}>
          <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>Notificações</h3>
          <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
            <button onClick={onMarkAllRead} className={css({ color: "brand.green", fontSize: "labelSm", fontWeight: "bold", _hover: { textDecoration: "underline" } })}>Marcar todas como lidas</button>
            <Button variant="ghost" onClick={onClose} className={css({ p: "2", rounded: "full" })}><Icon name="close" /></Button>
          </div>
        </div>
        <div className={css({ p: "5", spaceY: "1", divideY: "1px solid", divideColor: "outlineVariant/10" })}>
          {notifications.length === 0 ? (
            <div className={css({ textAlign: "center", py: "6" })}>
              <Icon name="notifications_off" size={48} className={css({ color: "outlineVariant/40", mb: "3" })} />
              <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant" })}>Nenhuma notificação.</p>
            </div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} onClick={() => onMarkRead(n.id)} className={css({
                display: "flex",
                alignItems: "start",
                gap: "3",
                p: "3",
                cursor: "pointer",
                transition: "background 200ms",
                bg: n.read ? "transparent" : "surfaceContainerLow/20",
                borderLeft: n.read ? "none" : "4px solid",
                borderLeftColor: n.read ? "transparent" : "brand.green",
                _hover: { bg: "surfaceContainerLow/60" },
              })}>
                <div className={css({ p: "2", rounded: "xl", bg: n.color.split(" ")[1] || "gray.50", flexShrink: 0 })}><Icon name={n.icon} size={20} className={css({ color: n.color.split(" ")[0] })} /></div>
                <div className={css({ flex: 1, minW: 0 })}>
                  <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "start" })}>
                    <p className={css({ fontSize: "14px", fontWeight: "semibold", color: "onSurface", truncate: true })}>{n.title}</p>
                    <span className={css({ fontSize: "10px", color: "secondary", ml: "2", flexShrink: 0 })}>{n.time}</span>
                  </div>
                  <p className={css({ fontSize: "12px", color: "onSurfaceVariant", mt: "0.5" })}>{n.message}</p>
                </div>
                {!n.read && <span className={css({ w: "2", h: "2", bg: "brand.green", rounded: "full", flexShrink: 0, mt: "2" })} />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};