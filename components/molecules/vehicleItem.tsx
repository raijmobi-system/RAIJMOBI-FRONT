import { css } from "@/styled-system/css";
import { Icon } from "../atoms/icon";

interface VehicleItemProps {
  model: string;
  color: string;
  plate: string;
  onEdit: () => void;
}

export const VehicleItem = ({ model, color, plate, onEdit }: VehicleItemProps) => {
  return (
    <div className={css({
      display: "flex",
      alignItems: "center",
      gap: "3",
      p: "3",
      rounded: "xl",
      bg: "surfaceContainerLow/60",
      cursor: "pointer",
      transition: "background 200ms",
      _hover: { bg: "surfaceContainerLow" },
    })}>
      <div className={css({ bg: "primaryContainer/10", p: "2", rounded: "xl" })}>
        <Icon name="commute" size={24} className={css({ color: "brand.green" })} />
      </div>
      <div className={css({ flex: 1 })}>
        <p className={css({ fontSize: "bodyMd", fontWeight: "semibold", color: "onSurface" })}>{model}</p>
        <p className={css({ fontSize: "12px", color: "secondary" })}>{color} • Placa: {plate}</p>
      </div>
      <button onClick={onEdit} className={css({ color: "brand.green", fontSize: "labelSm", fontWeight: "bold", _hover: { textDecoration: "underline" } })}>Editar</button>
    </div>
  );
};