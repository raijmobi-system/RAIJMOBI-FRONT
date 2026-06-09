"use client";

import { OnboardingTemplate } from "@/components/templates/onboardingTemplate";
import { useApp } from "@/hooks/useApp";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const { updateUser, addVehicle } = useApp();
  const router = useRouter();

  const handleComplete = (data: {
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
  }) => {
    // Atualiza dados do usuário
    updateUser({
      name: data.name,
      email: data.email,
      phone: data.phone,
      photo: data.photo,
      type: data.type,
    });
    // Se motorista, adiciona veículo
    if (data.type === "driver" && data.vehicle) {
      addVehicle(data.vehicle);
    }
    // Redireciona para home
    router.push("/");
  };

  return <OnboardingTemplate onComplete={handleComplete} />;
}