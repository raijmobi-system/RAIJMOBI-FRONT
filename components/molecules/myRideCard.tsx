import { css } from "@/styled-system/css";
import { StatusTag } from "../atoms/statusTag";
import { RouteSeparator } from "../atoms/routeSeparator";

interface MyRideCardProps {
  id: string;
  title: string;
  status: "Confirmado" | "Recusado" | "Pendente" | "Finalizada";
  origin: string;
  destination: string;
  driverName: string;
  date: string;
  onClick: () => void;
}

export const MyRideCard = ({ title, status, origin, destination, driverName, date, onClick }: MyRideCardProps) => {
  return (
    <div onClick={onClick} className={css({
      bg: "white",
      border: "1px solid",
      borderColor: "outlineVariant/20",
      rounded: "2xl",
      p: "3",
      shadow: "sm",
      display: "flex",
      gap: "3",
      alignItems: "center",
      cursor: "pointer",
      transition: "all",
      transitionDuration: "200ms",
      _hover: { transform: { base: "none", md: "translateY(-2px)" }, shadow: "lg" },
      _active: { transform: "scale(0.98)" },
    })}>
      <div className={css({ w: "24", h: "24", rounded: "xl", overflow: "hidden", bg: "surfaceContainer", flexShrink: 0, shadow: "sm", opacity: status === "Recusado" ? 0.75 : 1, filter: status === "Recusado" ? "grayscale(1)" : "none" })}>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOmSJkFvrw6fpmpqjkLibS417daM4JCOSeWWgi7IoqwjDuYJLSMUyArH7k5sDMhgDwNmOnVXRecNh2Wph-LDgb3gL0Dj-cXbMi_vSEoug3idodGB4rcfaKwt6FcOmllEbFK6Re2rewiB3B_Zq7gNk9ANFVqmP0izG12It8wHXKZpT-JKsiV4ItVMBSi2Ip0hScN_yHxftbTAfzfsZG1HRIi-OqRJGo3qJmTZLyALYtCmaPdVKeK1tfiO9bjAOpcqmd4JwDgMvstOtV" alt="Ride" className={css({ w: "full", h: "full", objectFit: "cover" })} />
      </div>
      <div className={css({ flex: 1, minW: 0 })}>
        <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "start", mb: "2" })}>
          <h4 className={css({ fontSize: "14px", fontWeight: "semibold", color: "onSurface" })}>{title}</h4>
          <StatusTag status={status} />
        </div>
        <div className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "11px", color: "onSurfaceVariant" })}>
          <RouteSeparator />
          <div className={css({ spaceY: "0.5" })}>
            <p className={css({ fontWeight: "medium" })}>{origin}</p>
            <p className={css({ color: "secondary" })}>{driverName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};