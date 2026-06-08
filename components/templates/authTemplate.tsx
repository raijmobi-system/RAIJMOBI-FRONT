"use client";

import { ReactNode } from "react";
import { css } from "@/styled-system/css";

interface AuthTemplateProps {
  children: ReactNode;
  title: string;
}

export const AuthTemplate = ({ children, title }: AuthTemplateProps) => {
  return (
    <div className={css({ minH: "screen", display: "flex", alignItems: "center", justifyContent: "center", bg: "surface", p: "4" })}>
      <div className={css({ w: "full", maxW: "md", textAlign: "center" })}>
        <h1 className={css({ fontSize: "displayLg", fontWeight: "bold", color: "brand.green", mb: "6" })}>Raijmobi</h1>
        <h2 className={css({ fontSize: "headlineLg", fontWeight: "bold", color: "onBackground", mb: "2" })}>{title}</h2>
        {children}
      </div>
    </div>
  );
};