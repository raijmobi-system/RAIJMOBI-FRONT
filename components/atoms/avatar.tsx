import { css } from "@/styled-system/css";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  border?: boolean;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
};

export const Avatar = ({ src, alt, size = "sm", border = false }: AvatarProps) => {
  const sizePx = size === "sm" ? 32 : size === "md" ? 40 : 56;
  return (
    <div className={css({ rounded: "full", overflow: "hidden", flexShrink: 0, border: border ? "2px solid" : "none", borderColor: "brand.green" })}>
      <Image src={src} alt={alt} width={sizePx} height={sizePx} className={css({ objectFit: "cover" })}unoptimized />
    </div>
  );
};