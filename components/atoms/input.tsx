import { css, cx } from "@/styled-system/css";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = ({ className, error, ...props }: InputProps) => {
  return (
    <div className={css({ width: "full" })}>
      <input
        className={cx(
          css({
            width: "full",
            px: "4",
            py: "2.5",
            bg: "surfaceContainerLow",
            border: "2px solid",
            borderColor: "outlineVariant",       
            rounded: "full",
            fontSize: "bodyMd",
            _focus: {
              borderColor: "brand.green",          
              ring: "none",                        
              outline: "none"
            },
            _placeholder: { color: "outlineVariant/60" },
          }),
          className
        )}
        {...props}
      />
      {error && <span className={css({ fontSize: "12px", color: "error", mt: "1", display: "block" })}>{error}</span>}
    </div>
  );
};