"use client";

import { AuthTemplate } from "@/components/templates/authTemplate";
import { LoginForms } from "@/components/organisms/LoginForms";
import { useApp } from "@/hooks/useApp";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { requestPasswordReset } = useApp();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    // Simular login
    console.log("Login", email, password);
    router.push("/");
  };

  return (
    <AuthTemplate title="Entrar na sua conta">
      <LoginForms onLogin={handleLogin} />
    </AuthTemplate>
  );
}