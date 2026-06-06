"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { InputField } from "../molecules/inputField";
import { Button } from "../atoms/button";

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => Promise<void>;
}

export const ForgotPasswordForm = ({ onSubmit }: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await onSubmit(email);
      setMessage({ type: "success", text: "Link de recuperação enviado para o e-mail." });
    } catch (err) {
      setMessage({ type: "error", text: "Erro ao enviar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css({ spaceY: "4", w: "full", maxW: "400px", mx: "auto" })}>
      <InputField label="E-mail" id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      {message && <p className={css({ fontSize: "sm", color: message.type === "success" ? "brand.green" : "error", textAlign: "center" })}>{message.text}</p>}
      <Button type="submit" loading={loading} className={css({ w: "full" })}>Enviar link</Button>
    </form>
  );
};