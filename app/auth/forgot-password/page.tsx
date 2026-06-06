"use client";

import { AuthTemplate } from "@/components/templates/authTemplate";
import { ForgotPasswordForm } from "@/components/organisms/forgotPasswordForm";
import { useApp } from "@/hooks/useApp";

export default function ForgotPasswordPage() {
  const { requestPasswordReset } = useApp();

  return (
    <AuthTemplate title="Recuperar senha">
      <ForgotPasswordForm onSubmit={requestPasswordReset} />
    </AuthTemplate>
  );
}