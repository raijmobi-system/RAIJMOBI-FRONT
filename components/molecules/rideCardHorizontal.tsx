import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { RouteSeparator } from "../atoms/routeSeparator";

interface RideCardHorizontalProps {
  id: string;
  title: string;
  origin: string;
  destination: string;
  driverName: string;
  seats: string;
  price: string;
  imageUrl?: string;
  onParticipate: () => void;
  onClick: () => void;
}

export const RideCardHorizontal = ({
  title,
  origin,
  destination,
  driverName,
  seats,
  price,
  imageUrl,
  onParticipate,
  onClick,
}: RideCardHorizontalProps) => {
  const hasImage = !!imageUrl;
  return (
    <div onClick={onClick} className={css({
      minW: "260px",
      sm: { minW: "300px" },
      md: { minW: "320px" },
      bg: "white",
      rounded: "2xl",
      border: "1px solid",
      borderColor: "outlineVariant/20",
      overflow: "hidden",
      shadow: "sm",
      transition: "all 200ms",
      cursor: "pointer",
      _hover: { transform: { base: "none", md: "translateY(-2px)" }, shadow: "lg", borderColor: "brand.green" },
      display: "flex",
      flexDirection: "column",
    })}>
      <div className={css({ position: "relative", h: "28", md: { h: "36" } })}>
        {hasImage ? (
          <img src={imageUrl} alt={title} className={css({ w: "full", h: "full", objectFit: "cover" })} />
        ) : (
          <div className={css({ w: "full", h: "full", bg: "primaryContainer/8", display: "flex", alignItems: "center", justifyContent: "center" })}>
            <span className="material-symbols-outlined" style={{ fontSize: 40, color: "#547812" }}>directions_car</span>
          </div>
        )}
        <div className={css({ position: "absolute", top: "2", right: "2", md: { top: "3", right: "3" }, bg: "black/50", p: "1.5", rounded: "xl", backdropFilter: "blur(4px)" })}>
          <span className="material-symbols-outlined" style={{ fontSize: 16, color: "white" }}>zoom_out_map</span>
        </div>
      </div>
      <div className={css({ p: "3", md: { p: "5" }, spaceY: "2", md: { spaceY: "3" }, flex: 1, display: "flex", flexDirection: "column" })}>
        <h4 className={css({ fontSize: "15px", fontWeight: "bold", color: "onBackground" })}>{title}</h4>
        <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center" })}>
          <div className={css({ display: "flex", alignItems: "center", gap: "1.5", color: "onSurfaceVariant" })}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>group</span>
            <span className={css({ fontSize: "labelSm" })}>{seats} lugares</span>
          </div>
          <span className={css({ fontSize: "18px", fontWeight: "bold", color: "onBackground" })}>{price}</span>
        </div>
        <div className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "11px", color: "onSurfaceVariant", py: "1" })}>
          <RouteSeparator />
          <div className={css({ spaceY: "0.5" })}>
            <p className={css({ fontWeight: "medium" })}>{origin}</p>
            <p className={css({ color: "secondary" })}>{driverName}</p>
          </div>
        </div>
        <Button onClick={(e) => { e.stopPropagation(); onParticipate(); }} className={css({ w: "full", mt: "auto" })}>Participar</Button>
      </div>
    </div>
  );
};