import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { RouteSeparator } from "../atoms/routeSeparator";

interface RideCardVerticalProps {
  id: string;
  title: string;
  origin: string;
  destination: string;
  driverName: string;
  seats: string;
  price: string;
  onParticipate: () => void;
  onClick: () => void;
}

export const RideCardVertical = ({ title, origin, destination, driverName, seats, price, onParticipate, onClick }: RideCardVerticalProps) => {
  return (
    <div onClick={onClick} className={css({
      bg: "white",
      rounded: "2xl",
      border: "1px solid",
      borderColor: "outlineVariant/20",
      p: "3",
      shadow: "sm",
      cursor: "pointer",
      transition: "all 200ms",
      _hover: { transform: { base: "none", md: "translateY(-2px)" }, shadow: "lg" },
    })}>
      <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "start", mb: "3" })}>
        <div className={css({ display: "flex", alignItems: "center", gap: "1.5", color: "onSurfaceVariant" })}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>group</span>
          <span className={css({ fontSize: "labelSm" })}>{seats} lugares</span>
        </div>
        <span className={css({ fontSize: "18px", fontWeight: "bold", color: price === "Grátis" ? "brand.green" : "onBackground" })}>{price}</span>
      </div>
      <div className={css({ display: "flex", gap: "3", alignItems: "center" })}>
        <div className={css({ w: "20", h: "20", rounded: "2xl", bg: "primaryContainer/8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 })}>
          <span className="material-symbols-outlined" style={{ fontSize: 32, color: "#547812" }}>map</span>
        </div>
        <div className={css({ flex: 1, spaceY: "1", overflow: "hidden" })}>
          <h4 className={css({ fontSize: "14px", fontWeight: "bold", color: "onBackground", truncate: true })}>{title}</h4>
          <div className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "11px", color: "onSurfaceVariant" })}>
            <RouteSeparator />
            <div className={css({ spaceY: "0.5" })}>
              <p className={css({ fontWeight: "medium" })}>{origin}</p>
              <p className={css({ color: "secondary" })}>{driverName}</p>
            </div>
          </div>
        </div>
        <Button onClick={(e) => { e.stopPropagation(); onParticipate(); }} variant="primary" className={css({ px: "3", py: "2", fontSize: "11px", flexShrink: 0 })}>Participar</Button>
      </div>
    </div>
  );
};