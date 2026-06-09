// app/(main)/layout.tsx
import { AppShell } from "@/components/templates/appShell";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}