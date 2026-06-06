import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { StatusTag } from "../atoms/statusTag";

interface DriverRideCardProps {
  id: string;
  title: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  seats: string;
  price: string;
  passengers: string[];
  pendingCount?: number;
  onEdit: () => void;
  onRequests: () => void;
  onClick: () => void;
}

export const DriverRideCard = ({
  title,
  origin,
  destination,
  date,
  time,
  seats,
  price,
  passengers,
  pendingCount = 0,
  onEdit,
  onRequests,
  onClick,
}: DriverRideCardProps) => {
  return (
    <div onClick={onClick} className={css({
      bg: "white",
      border: "1px solid",
      borderColor: "outlineVariant/20",
      rounded: "2xl",
      p: "3",
      shadow: "sm",
      cursor: "pointer",
      transition: "all",
      transitionDuration: "200ms",
      _hover: { transform: { base: "none", md: "translateY(-2px)" }, shadow: "lg" },
    })}>
      <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "start", mb: "2" })}>
        <h4 className={css({ fontSize: "14px", fontWeight: "semibold", color: "onSurface" })}>{title}</h4>
        <StatusTag status="Ativa" />
      </div>
      <div className={css({ mt: "3", display: "flex", alignItems: "center", justifyContent: "space-between" })}>
        <div className={css({ display: "flex", gap: "0", _spaceXReverse: { marginRight: "calc(-0.5rem * -1)" } })}>
          {passengers.slice(0, 3).map((p, i) => (
            <img key={i} src={`https://ui-avatars.com/api/?name=${p.replace(" ", "+")}&background=ccc&color=fff&size=64`} alt={p} className={css({ w: "7", h: "7", rounded: "full", border: "2px solid white", objectFit: "cover" })} />
          ))}
          {passengers.length > 3 && (
            <span className={css({ w: "7", h: "7", rounded: "full", bg: "surfaceContainerHighest", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "bold", color: "secondary" })}>+{passengers.length - 3}</span>
          )}
        </div>
        <span className={css({ fontSize: "xs", color: "secondary" })}>{seats} vagas</span>
      </div>
      <div className={css({ mt: "3", display: "flex", gap: "2" })} onClick={(e) => e.stopPropagation()}>
        <Button variant="outline" onClick={onEdit} className={css({ flex: 1, py: "2", fontSize: "12px", display: "flex", alignItems: "center", gap: "1" })}>
          <Icon name="edit" size={16} /> Editar
        </Button>
        <Button variant="outline" onClick={onRequests} className={css({ flex: 1, py: "2", fontSize: "12px", display: "flex", alignItems: "center", gap: "1", position: "relative" })}>
          <Icon name="group" size={16} /> Solicitações
          {pendingCount > 0 && (
            <span className={css({ position: "absolute", top: "-1", right: "-1", bg: "error", color: "white", fontSize: "9px", fontWeight: "bold", w: "4", h: "4", rounded: "full", display: "flex", alignItems: "center", justifyContent: "center" })}>{pendingCount}</span>
          )}
        </Button>
      </div>
    </div>
  );
};