import { css } from "@/styled-system/css";
import { VehicleItem } from "../molecules/vehicleItem";
import { Vehicle } from "@/hooks/useApp";

interface VehiclesListProps {
  vehicles: Vehicle[];
  onAdd: () => void;
  onEdit: (index: number) => void;
}

export const VehiclesList = ({ vehicles, onAdd, onEdit }: VehiclesListProps) => {
  return (
    <section className={css({ bg: "white", border: "1px solid", borderColor: "outlineVariant/15", rounded: "2xl", p: "4", shadow: "sm" })}>
      <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "4" })}>
        <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>🚗 Veículos</h3>
        <button onClick={onAdd} className={css({ color: "brand.green", fontSize: "labelLg", fontWeight: "bold", _hover: { textDecoration: "underline" } })}>+ Adicionar</button>
      </div>
      <div className={css({ spaceY: "2" })}>
        {vehicles.map((vehicle, idx) => (
          <VehicleItem key={idx} model={vehicle.model} color={vehicle.color} plate={vehicle.plate} onEdit={() => onEdit(idx)} />
        ))}
      </div>
    </section>
  );
};