interface IconProps {
  name: string;
  fill?: boolean;
  weight?: number;
  size?: number;
  className?: string;
}

export const Icon = ({ name, fill = false, weight = 400, size = 24, className = "" }: IconProps) => {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        fontSize: size,
      }}
    >
      {name}
    </span>
  );
};