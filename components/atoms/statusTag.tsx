import { css } from "@/styled-system/css";

interface StatusTagProps {
  status: "Confirmado" | "Recusado" | "Pendente" | "Ativa" | "Finalizada";
}

const statusStyles = {
  Confirmado: css({ bg: "primary/8", color: "primary" }),
  Recusado: css({ bg: "error/8", color: "error" }),
  Pendente: css({ bg: "amber.50", color: "amber.600" }),
  Ativa: css({ bg: "brand.green/8", color: "brand.green" }),
  Finalizada: css({ bg: "gray.100", color: "gray.600" }),
};

export const StatusTag = ({ status }: StatusTagProps) => {
  return (
    <span className={css({
      fontSize: "10px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      px: "2",
      py: "0.5",
      rounded: "full",
      display: "inline-block",
    }) + " " + statusStyles[status]}>
      {status}
    </span>
  );
};