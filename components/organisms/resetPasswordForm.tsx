"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { InputField } from "../molecules/inputField";
import { Button } from "../atoms/button";

interface ResetPasswordFormProps {
  token: string;
  onSubmit: (token: string, newPassword: string) => Promise<void>;
}

export const ResetPasswordForm = ({ token, onSubmit }: ResetPasswordFormProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await onSubmit(token, password);
      // Redirecionar para login ou mostrar sucesso
    } catch (err) {
      setError("Erro ao redefinir senha. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css({ spaceY: "4", w: "full", maxW: "400px", mx: "auto" })}>
      <InputField label="Nova senha" id="password" type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <InputField label="Confirmar senha" id="confirm" type="password" placeholder="••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      {error && <p className={css({ fontSize: "sm", color: "error", textAlign: "center" })}>{error}</p>}
      <Button type="submit" loading={loading} className={css({ w: "full" })}>Redefinir senha</Button>
    </form>
  );
};