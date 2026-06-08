"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { InputField } from "../molecules/inputField";
import { Button } from "../atoms/button";
import Link from "next/link";

interface LoginFormsProps {
  onLogin: (email: string, password: string) => Promise<void>;
}

export const LoginForms = ({ onLogin }: LoginFormsProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await onLogin(email, password);
    } catch (err) {
      setError("E-mail ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css({ spaceY: "4", w: "full", maxW: "400px", mx: "auto" })}>
      <InputField label="E-mail" id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <InputField label="Senha" id="password" type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error && <p className={css({ fontSize: "sm", color: "error", textAlign: "center" })}>{error}</p>}
      <Button type="submit" loading={loading} className={css({ w: "full" })}>Entrar</Button>
      <div className={css({ textAlign: "center", mt: "2" })}>
        <Link href="/auth/forgot-password" className={css({ fontSize: "sm", color: "brand.green", _hover: { textDecoration: "underline" } })}>Esqueceu a senha?</Link>
      </div>
    </form>
  );
};