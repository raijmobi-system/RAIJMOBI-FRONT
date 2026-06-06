import { css } from "@/styled-system/css";
import { PaymentItem } from "../molecules/paymentItem";
import { Payment } from "@/hooks/useApp";

interface PaymentsListProps {
  payments: Payment[];
  onAdd: () => void;
  onEdit: (index: number) => void;
}

export const PaymentsList = ({ payments, onAdd, onEdit }: PaymentsListProps) => {
  return (
    <section className={css({ bg: "white", border: "1px solid", borderColor: "outlineVariant/15", rounded: "2xl", p: "4", shadow: "sm" })}>
      <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "4" })}>
        <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>💳 Pagamentos</h3>
        <button onClick={onAdd} className={css({ color: "brand.green", fontSize: "labelLg", fontWeight: "bold", _hover: { textDecoration: "underline" } })}>+ Adicionar</button>
      </div>
      <div className={css({ spaceY: "1", divideY: "1px solid", divideColor: "outlineVariant/10" })}>
        {payments.map((payment, idx) => (
          <PaymentItem key={idx} type={payment.type} description={payment.description} onEdit={() => onEdit(idx)} />
        ))}
      </div>
    </section>
  );
};