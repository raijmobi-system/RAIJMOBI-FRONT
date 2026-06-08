// components/organisms/logoutModal.tsx
"use client";

import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { useRouter } from "next/navigation";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoutModal = ({ isOpen, onClose }: LogoutModalProps) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLogout = () => {
    // Limpar tokens, estado, etc.
    localStorage.clear();
    sessionStorage.clear();
    // Redirecionar para login
    router.push("/auth/login");
  };

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "400px", animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" })} onClick={(e) => e.stopPropagation()}>
        <div className={css({ p: "5", borderBottom: "1px solid", borderColor: "gray.200", display: "flex", justifyContent: "space-between", alignItems: "center" })}>
          <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>Sair da conta</h3>
          <Button variant="ghost" onClick={onClose} className={css({ p: "2", rounded: "full" })}><Icon name="close" /></Button>
        </div>
        <div className={css({ p: "5", spaceY: "4", textAlign: "center" })}>
          <Icon name="logout" size={48} className={css({ color: "error", mb: "2" })} />
          <p className={css({ fontSize: "bodyLg", color: "onSurface" })}>Tem certeza que deseja sair?</p>
          <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant" })}>Você precisará fazer login novamente para acessar sua conta.</p>
          <div className={css({ display: "flex", gap: "3", pt: "2" })}>
            <Button variant="outline" onClick={onClose} className={css({ flex: 1 })}>Cancelar</Button>
            <Button variant="error" onClick={handleLogout} className={css({ flex: 1 })}>Sair</Button>
          </div>
        </div>
      </div>
    </div>
  );
};