import { css, cx } from "@/styled-system/css";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "error";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles = {
  primary: css({ bg: "brand.green", color: "white", _hover: { filter: "brightness(1.1)" }, _active: { transform: "scale(0.98)" } }),
  outline: css({ border: "1px solid", borderColor: "outline", bg: "transparent", color: "onSurfaceVariant", _hover: { bg: "surfaceContainerLow" } }),
  ghost: css({ bg: "transparent", color: "onSurfaceVariant", _hover: { bg: "surfaceContainerLow" } }),
  error: css({ bg: "error", color: "white", _hover: { bg: "red.700" } }),
};

export const Button = ({ children, variant = "primary", onClick, loading, disabled, className, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cx(
        css({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2",
          px: "4",
          py: "2.5",
          rounded: "xl",
          fontWeight: "semibold",
          fontSize: "bodyMd",
          transition: "all",
          transitionDuration: "200ms",
          cursor: "pointer",
          _disabled: { opacity: 0.5, cursor: "not-allowed" },
        }),
        variantStyles[variant],
        className
      )}
    >
      {loading ? "..." : children}
    </button>
  );
};