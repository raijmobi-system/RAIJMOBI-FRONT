"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { InputField } from "../molecules/inputField";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";

interface OnboardingFormProps {
  onComplete: (data: {
    name: string;
    email: string;
    phone: string;
    photo: string;
    type: "passenger" | "driver";
    vehicle?: {
      model: string;
      color: string;
      plate: string;
    };
  }) => void;
}

export const OnboardingForm = ({ onComplete }: OnboardingFormProps) => {
  const [type, setType] = useState<"passenger" | "driver">("passenger");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Nome obrigatório";
    if (!email.trim()) newErrors.email = "E-mail obrigatório";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "E-mail inválido";
    if (!phone.trim()) newErrors.phone = "Telefone obrigatório";
    if (type === "driver") {
      if (!model.trim()) newErrors.model = "Modelo obrigatório";
      if (!color.trim()) newErrors.color = "Cor obrigatória";
      if (!plate.trim()) newErrors.plate = "Placa obrigatória";
      else if (!/^[A-Z]{3}-\d{4}$/.test(plate.toUpperCase())) newErrors.plate = "Formato: ABC-1234";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const vehicle = type === "driver" ? { model, color, plate: plate.toUpperCase() } : undefined;
    onComplete({ name, email, phone, photo, type, vehicle });
  };

  return (
    <form onSubmit={handleSubmit} className={css({ spaceY: "5", textAlign: "left" })}>
      {/* Tipo de perfil */}
      <div>
        <label className={css({ fontSize: "labelLg", fontWeight: "semibold", mb: "2", display: "block" })}>
          Você é:
        </label>
        <div className={css({ display: "flex", gap: "3" })}>
          <button
            type="button"
            onClick={() => setType("passenger")}
            className={css({
              flex: 1,
              py: "3",
              px: "4",
              rounded: "xl",
              border: "2px solid",
              borderColor: type === "passenger" ? "brand.green" : "outlineVariant/40",
              bg: type === "passenger" ? "brand.green/10" : "transparent",
              color: type === "passenger" ? "brand.green" : "onSurfaceVariant",
              fontWeight: type === "passenger" ? "bold" : "normal",
              transition: "all 200ms",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1",
              _hover: { borderColor: "brand.green" },
            })}
          >
            <Icon name="person" size={24} fill={type === "passenger"} />
            Passageiro
          </button>
          <button
            type="button"
            onClick={() => setType("driver")}
            className={css({
              flex: 1,
              py: "3",
              px: "4",
              rounded: "xl",
              border: "2px solid",
              borderColor: type === "driver" ? "brand.green" : "outlineVariant/40",
              bg: type === "driver" ? "brand.green/10" : "transparent",
              color: type === "driver" ? "brand.green" : "onSurfaceVariant",
              fontWeight: type === "driver" ? "bold" : "normal",
              transition: "all 200ms",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1",
              _hover: { borderColor: "brand.green" },
            })}
          >
            <Icon name="directions_car" size={24} fill={type === "driver"} />
            Motorista
          </button>
        </div>
      </div>

      {/* Dados pessoais */}
      <div className={css({ spaceY: "3" })}>
        <InputField
          label="Nome completo"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          required
        />
        <InputField
          label="E-mail"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
        />
        <InputField
          label="Telefone"
          id="phone"
          type="tel"
          placeholder="(84) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
          required
        />
        <InputField
          label="URL da foto de perfil (opcional)"
          id="photo"
          placeholder="https://..."
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </div>

      {/* Seção do veículo (condicional) */}
      {type === "driver" && (
        <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4", spaceY: "3" })}>
          <h3 className={css({ fontSize: "headlineSm", fontWeight: "semibold", color: "onSurface" })}>
            🚗 Dados do veículo
          </h3>
          <div className={css({ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3" })}>
            <InputField
              label="Modelo"
              id="model"
              placeholder="Ex: Honda Civic"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              error={errors.model}
              required
            />
            <InputField
              label="Cor"
              id="color"
              placeholder="Ex: Preto"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              error={errors.color}
              required
            />
          </div>
          <InputField
            label="Placa"
            id="plate"
            placeholder="ABC-1234"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            error={errors.plate}
            required
          />
        </div>
      )}

      <Button type="submit" className={css({ w: "full" })}>
        Concluir perfil
      </Button>
    </form>
  );
};