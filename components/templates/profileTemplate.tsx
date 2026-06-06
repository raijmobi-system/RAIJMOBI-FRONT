"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { PageHeader } from "../organisms/pageHeader";
import { VehiclesList } from "../organisms/vehiclesList";
import { PaymentsList } from "../organisms/paymentsList";
import { AccountSettings } from "../organisms/accountSettings";
import { NotificationModal } from "../organisms/notificationModal";
import { useApp } from "@/hooks/useApp";

export const ProfileTemplate = () => {
  const { user, vehicles, payments, addVehicle, updateVehicle, addPayment, updatePayment, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } = useApp();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleAddVehicle = () => {
    const model = prompt("Modelo do veículo");
    const color = prompt("Cor");
    const plate = prompt("Placa");
    if (model && color && plate) addVehicle({ model, color, plate });
  };

  const handleEditVehicle = (index: number) => {
    const v = vehicles[index];
    const model = prompt("Modelo", v.model);
    const color = prompt("Cor", v.color);
    const plate = prompt("Placa", v.plate);
    if (model && color && plate) updateVehicle(index, { model, color, plate });
  };

  const handleAddPayment = () => {
    const type = prompt("Tipo (credit_card, debit_card, wallet)") as any;
    const description = prompt("Descrição");
    if (type && description) addPayment({ type, description });
  };

  const handleEditPayment = (index: number) => {
    const p = payments[index];
    const type = prompt("Tipo", p.type) as any;
    const description = prompt("Descrição", p.description);
    if (type && description) updatePayment(index, { type, description });
  };

  const handlePersonalInfo = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  const handlePrivacy = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  const handleLogout = () => {
    if (confirm("Tem certeza que deseja sair?")) alert("Logout");
  };

  return (
    <>
      <div className={css({ bg: "brand.dark", px: "4", md: "px-8", pt: "6", md: "pt-8", pb: "8", md: "pb-10", position: "sticky", top: 0, zIndex: 30, shadow: "lg" })}>
        <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "start" })}>
          <div className={css({ spaceY: "1" })}>
            <h2 className={css({ fontSize: "headlineMdMobile", md: { fontSize: "headlineLg" }, color: "brand.green" })}>Dados Pessoais</h2>
            <p className={css({ fontSize: "bodyMd", color: "white/70" })}>Gerencie seu perfil e preferências</p>
          </div>
          <div className={css({ display: "flex", alignItems: "start", gap: "3" })}>
            <button onClick={() => setIsNotificationOpen(true)} className={css({ position: "relative", p: "2", rounded: "full", transition: "background 200ms", _hover: { bg: "white/10" } })}>
              <span className="material-symbols-outlined" style={{ color: "white/80", fontSize: 24 }}>notifications</span>
              {getUnreadCount() > 0 && <span className={css({ position: "absolute", top: "-1", right: "-1", bg: "error", color: "white", fontSize: "10px", fontWeight: "bold", w: "18px", h: "18px", rounded: "full", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" })}>{getUnreadCount()}</span>}
            </button>
            <div className={css({ position: "relative", flexShrink: 0 })}>
              <div className={css({ w: "10", h: "10", md: { w: "14", h: "14" }, rounded: "full", border: "2px solid", borderColor: "brand.green", p: "0.5" })}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5" alt="Profile" className={css({ w: "full", h: "full", rounded: "full", objectFit: "cover" })} />
              </div>
              <div className={css({ position: "absolute", bottom: "-2", right: 0, bg: "brand.green", color: "white", px: "2", py: "0.5", rounded: "full", display: "flex", alignItems: "center", gap: "1", shadow: "lg", border: "2px solid", borderColor: "brand.dark" })}>
                <span className="material-symbols-outlined" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className={css({ fontSize: "10px", fontWeight: "bold" })}>{user.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css({ px: "4", md: "px-8", py: "6", md: "py-8", maxW: "1200px", mx: "auto", spaceY: "6" })}>
        <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "4" })}>
          <VehiclesList vehicles={vehicles} onAdd={handleAddVehicle} onEdit={handleEditVehicle} />
          <PaymentsList payments={payments} onAdd={handleAddPayment} onEdit={handleEditPayment} />
        </div>
        <AccountSettings onPersonalInfo={handlePersonalInfo} onPrivacy={handlePrivacy} onLogout={handleLogout} />
      </div>
      <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} notifications={notifications} onMarkRead={markNotificationRead} onMarkAllRead={markAllNotificationsRead} />
    </>
  );
};