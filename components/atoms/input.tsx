// interface InputProps {
//   type?: string;
//   placeholder?: string;
// }

// export default function Input({
//   type = "text",
//   placeholder,
// }: InputProps) {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       className="border border-gray-300 rounded-lg p-3 text-black outline-none focus:border-blue-500"
//     />
//   );
// }

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
            border: "none",
            rounded: "full",
            fontSize: "bodyMd",
            _focus: { ring: "2px", ringColor: "brand.green/30", outline: "none" },
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