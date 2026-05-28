"use client";

import InputField from "../molecules/imputeField";
import Button from "../atoms/button";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Login
      </h1>

      <div className="flex flex-col gap-6">
        <InputField
          label="Email"
          placeholder="Digite seu email"
          type="email"
        />

        <InputField
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
        />

        <Button
          text="Entrar"
          onClick={() => alert("Login realizado")}
        />
      </div>
    </div>
  );
}