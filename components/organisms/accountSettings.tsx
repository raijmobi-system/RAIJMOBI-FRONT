import { css } from "@/styled-system/css";
import { Icon } from "../atoms/icon";

interface AccountSettingsProps {
  onPersonalInfo: () => void;
  onPrivacy: () => void;
  onLogout: () => void;
}

export const AccountSettings = ({ onPersonalInfo, onPrivacy, onLogout }: AccountSettingsProps) => {
  const items = [
    { icon: "person", label: "Informações Pessoais", color: "brand.green", onClick: onPersonalInfo },
    { icon: "logout", label: "Sair da Conta", color: "error", onClick: onLogout, isError: true },
  ];

  return (
    <section className={css({ bg: "white", border: "1px solid", borderColor: "outlineVariant/15", rounded: "2xl", p: "4", shadow: "sm" })}>
      <h3 className={css({ fontSize: "headlineMdMobile", fontWeight: "bold", color: "onSurface", mb: "4" })}>⚙️ Configurações da Conta</h3>
      <div className={css({ divideY: "1px solid", divideColor: "outlineVariant/10" })}>
        {items.map((item, idx) => (
          <div key={idx} onClick={item.onClick} className={css({
            display: "flex",
            alignItems: "center",
            gap: "3",
            p: "3",
            cursor: "pointer",
            rounded: "xl",
            transition: "background 200ms",
            _hover: { bg: item.isError ? "error/5" : "surfaceContainerLow/60" },
          })}>
            <Icon name={item.icon} size={22} className={css({ color: item.color })} />
            <p className={css({ flex: 1, fontSize: "13px", color: item.isError ? "error" : "onSurface", fontWeight: item.isError ? "semibold" : "normal" })}>{item.label}</p>
            <Icon name="chevron_right" size={20} className={css({ color: item.isError ? "error/50" : "secondary/40" })} />
          </div>
        ))}
      </div>
    </section>
  );
};