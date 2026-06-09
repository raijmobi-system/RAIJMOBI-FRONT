"use client";

import { AuthTemplate } from "@/components/templates/authTemplate";
import { RegisterForm } from "@/components/organisms/registerForm";
import { useApp } from "@/hooks/useApp";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register } = useApp();
  const router = useRouter();

  const handleRegister = async (name: string, email: string, password: string) => {
    try {
      await register(name, email, password);
      router.push("/"); // Redireciona após cadastro
    } catch (error) {
      console.error("Erro no cadastro:", error);
      throw error; // Será tratado no formulário
    }
  };

  return (
    <AuthTemplate title="Criar sua conta">
      <RegisterForm onSubmit={handleRegister} />
    </AuthTemplate>
  );
}