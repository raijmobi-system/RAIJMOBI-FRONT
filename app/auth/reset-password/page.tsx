"use client";

import { useSearchParams } from "next/navigation";
import { AuthTemplate } from "@/components/templates/authTemplate";
import { ResetPasswordForm } from "@/components/organisms/resetPasswordForm";
import { useApp } from "@/hooks/useApp";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const { resetPassword } = useApp();

  return (
    <AuthTemplate title="Redefinir senha">
      <ResetPasswordForm token={token} onSubmit={resetPassword} />
    </AuthTemplate>
  );
}