"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { InputField } from "../molecules/inputField";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import Link from "next/link";

interface RegisterFormProps {
  onSubmit: (name: string, email: string, password: string) => Promise<void>;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);
    try {
      await onSubmit(name, email, password);
    } catch (err: any) {
      setError(err.message || "Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    // Mock: simula redirecionamento para OAuth do Google
    alert("🔜 Redirecionando para autenticação Google...");
    // Em produção: signIn("google", { callbackUrl: "/" })
  };

  return (
    <form onSubmit={handleSubmit} className={css({ spaceY: "4", w: "full", maxW: "400px", mx: "auto" })}>
      <InputField
        label="Nome completo"
        id="name"
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <InputField
        label="E-mail"
        id="email"
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputField
        label="Senha"
        id="password"
        type="password"
        placeholder="Mínimo 6 caracteres"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <InputField
        label="Confirmar senha"
        id="confirmPassword"
        type="password"
        placeholder="Repita a senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      {error && (
        <p className={css({ fontSize: "sm", color: "error", textAlign: "center" })}>
          {error}
        </p>
      )}
      <Button type="submit" loading={loading} className={css({ w: "full" })}>
        Criar conta
      </Button>

      <div className={css({ position: "relative", my: "4" })}>
        <div className={css({ borderTop: "1px solid", borderColor: "outlineVariant/30" })} />
        <span className={css({ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", bg: "surface", px: "3", color: "outline", fontSize: "labelSm" })}>
          ou
        </span>
      </div>

      <Button
        variant="outline"
        onClick={handleGoogleRegister}
        className={css({
          w: "full",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2",
          borderColor: "outlineVariant/50",
          bg: "white",
          color: "onSurface",
          _hover: { bg: "gray.50" },
        })}
      >
        {/* Ícone do Google (usando Material Symbols) */}
        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
          login
        </span>
        Continuar com Google
      </Button>

      <p className={css({ textAlign: "center", fontSize: "bodyMd", color: "onSurfaceVariant" })}>
        Já tem uma conta?{" "}
        <Link
          href="/auth/login"
          className={css({ color: "brand.green", fontWeight: "semibold", _hover: { textDecoration: "underline" } })}
        >
          Faça login
        </Link>
      </p>
    </form>
  );
};