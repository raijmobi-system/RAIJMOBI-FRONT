"use client";

import { AppProvider } from "@/hooks/useApp";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}