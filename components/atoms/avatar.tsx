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

export const Avatar = ({ src, alt, size = "md", border = false }: AvatarProps) => {
  return (
    <div className={css({
      borderRadius: "full",
      overflow: "hidden",
      flexShrink: 0,
      width: sizeMap[size],
      height: sizeMap[size],
      border: border ? "2px solid" : "none",
      borderColor: "brand.green",
    })}>
      <img src={src} alt={alt} className={css({ width: "full", height: "full", objectFit: "cover" })} />
    </div>
  );
};