"use client";

import { ReactNode } from "react";
import { css } from "@/styled-system/css";
import { Sidebar } from "../organisms/sidebar";
import { BottomNav } from "../organisms/bottomNav";

interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className={css({ display: "flex", minH: "screen", bg: "surfaceContainerLow" })}>
      <Sidebar />
      <main className={css({ flex: 1, md: { ml: "64" }, h: "screen", overflowY: "auto", bg: "surface" })}>
        {children}
      </main>
      <BottomNav />
    </div>
  );
};