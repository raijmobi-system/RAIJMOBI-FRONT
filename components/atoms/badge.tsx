import { css } from "@/styled-system/css";

interface BadgeProps {
  count: number;
  max?: number;
}

export const Badge = ({ count, max = 99 }: BadgeProps) => {
  if (count === 0) return null;
  const display = count > max ? `${max}+` : count;
  return (
    <span className={css({
      position: "absolute",
      top: "-0.25rem",
      right: "-0.25rem",
      bg: "error",
      color: "white",
      fontSize: "10px",
      fontWeight: "bold",
      minW: "18px",
      h: "18px",
      rounded: "full",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: "1",
      border: "2px solid white",
    })}>
      {display}
    </span>
  );
};