import { css } from "@/styled-system/css";

export const RouteSeparator = () => {
  return (
    <div className={css({ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5" })}>
      <div className={css({ w: "2", h: "2", rounded: "full", border: "2px solid", borderColor: "outline" })} />
      <div className={css({ w: "0.5", h: "4", bg: "outlineVariant/60" })} />
      <div className={css({ w: "2", h: "2", rounded: "full", bg: "onBackground" })} />
    </div>
  );
};