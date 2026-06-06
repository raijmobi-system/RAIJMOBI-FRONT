import { css } from "@/styled-system/css";
import { Icon } from "../atoms/icon";

interface PaymentItemProps {
  type: "credit_card" | "debit_card" | "wallet";
  description: string;
  onEdit: () => void;
}

const icons = {
  credit_card: "credit_card",
  debit_card: "credit_card",
  wallet: "account_balance_wallet",
};

export const PaymentItem = ({ type, description, onEdit }: PaymentItemProps) => {
  return (
    <div onClick={onEdit} className={css({
      display: "flex",
      alignItems: "center",
      gap: "3",
      p: "3",
      cursor: "pointer",
      rounded: "xl",
      transition: "background 200ms",
      _hover: { bg: "surfaceContainerLow/60" },
    })}>
      <Icon name={icons[type]} size={22} className={css({ color: "brand.green" })} />
      <p className={css({ flex: 1, fontSize: "13px", color: "onSurface" })}>{description}</p>
      <Icon name="chevron_right" size={20} className={css({ color: "secondary/40" })} />
    </div>
  );
};