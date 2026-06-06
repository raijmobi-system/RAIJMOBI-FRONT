import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

export const ScrollButton = ({ direction, onClick, disabled }: ScrollButtonProps) => {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      disabled={disabled}
      className={css({
        w: "8",
        h: "8",
        md: { w: "9", h: "9" },
        rounded: "full",
        bg: "brand.dark",
        p: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        _disabled: { opacity: 0.35, pointerEvents: "none" },
      })}
    >
      <Icon name={direction === "left" ? "chevron_left" : "chevron_right"} size={18} />
    </Button>
  );
};