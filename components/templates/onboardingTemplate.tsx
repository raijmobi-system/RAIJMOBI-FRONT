"use client";

import { css } from "@/styled-system/css";
import { OnboardingForm } from "../organisms/onboardingForm";

interface OnboardingTemplateProps {
  onComplete: (data: any) => void;
}

export const OnboardingTemplate = ({ onComplete }: OnboardingTemplateProps) => {
  return (
    <div className={css({ minH: "screen", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", bg: "surface", p: "4" })}>
      <div className={css({ w: "full", maxW: "520px", textAlign: "center" })}>
        <h1 className={css({ fontSize: "displayMd", fontWeight: "bold", color: "brand.green", mb: "4" })}>Raijmobi</h1>
        <h2 className={css({ fontSize: "headlineMd", fontWeight: "bold", color: "onBackground", mb: "2" })}>Complete seu perfil</h2>
        <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant", mb: "6" })}>
          Conte um pouco sobre você para começarmos
        </p>
        <OnboardingForm onComplete={onComplete} />
      </div>
    </div>
  );
};