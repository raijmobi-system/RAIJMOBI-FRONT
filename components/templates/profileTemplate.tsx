// // "use client";

// // import { useState } from "react";
// // import { css } from "@/styled-system/css";
// // import { PageHeader } from "../organisms/pageHeader";
// // import { VehiclesList } from "../organisms/vehiclesList";
// // import { PaymentsList } from "../organisms/paymentsList";
// // import { AccountSettings } from "../organisms/accountSettings";
// // import { NotificationModal } from "../organisms/notificationModal";
// // import { useApp } from "@/hooks/useApp";

// // export const ProfileTemplate = () => {
// //   const { user, vehicles, payments, addVehicle, updateVehicle, addPayment, updatePayment, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } = useApp();
// //   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

// //   const handleAddVehicle = () => {
// //     const model = prompt("Modelo do veículo");
// //     const color = prompt("Cor");
// //     const plate = prompt("Placa");
// //     if (model && color && plate) addVehicle({ model, color, plate });
// //   };

// //   const handleEditVehicle = (index: number) => {
// //     const v = vehicles[index];
// //     const model = prompt("Modelo", v.model);
// //     const color = prompt("Cor", v.color);
// //     const plate = prompt("Placa", v.plate);
// //     if (model && color && plate) updateVehicle(index, { model, color, plate });
// //   };

// //   const handleAddPayment = () => {
// //     const type = prompt("Tipo (credit_card, debit_card, wallet)") as any;
// //     const description = prompt("Descrição");
// //     if (type && description) addPayment({ type, description });
// //   };

// //   const handleEditPayment = (index: number) => {
// //     const p = payments[index];
// //     const type = prompt("Tipo", p.type) as any;
// //     const description = prompt("Descrição", p.description);
// //     if (type && description) updatePayment(index, { type, description });
// //   };

// //   const handlePersonalInfo = () => {
// //     alert("Funcionalidade em desenvolvimento");
// //   };

// //   const handlePrivacy = () => {
// //     alert("Funcionalidade em desenvolvimento");
// //   };

// //   const handleLogout = () => {
// //     if (confirm("Tem certeza que deseja sair?")) alert("Logout");
// //   };

// //   return (
// //     <>
// //       <div className={css({ bg: "brand.dark", px: "4", md: "px-8", pt: "6", md: "pt-8", pb: "8", md: "pb-10", position: "sticky", top: 0, zIndex: 30, shadow: "lg" })}>
// //         <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "start" })}>
// //           <div className={css({ spaceY: "1" })}>
// //             <h2 className={css({ fontSize: "headlineMdMobile", md: { fontSize: "headlineLg" }, color: "brand.green" })}>Dados Pessoais</h2>
// //             <p className={css({ fontSize: "bodyMd", color: "white/70" })}>Gerencie seu perfil e preferências</p>
// //           </div>
// //           <div className={css({ display: "flex", alignItems: "start", gap: "3" })}>
// //             <button onClick={() => setIsNotificationOpen(true)} className={css({ position: "relative", p: "2", rounded: "full", transition: "background 200ms", _hover: { bg: "white/10" } })}>
// //               <span className="material-symbols-outlined" style={{ color: "white/80", fontSize: 24 }}>notifications</span>
// //               {getUnreadCount() > 0 && <span className={css({ position: "absolute", top: "-1", right: "-1", bg: "error", color: "white", fontSize: "10px", fontWeight: "bold", w: "18px", h: "18px", rounded: "full", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" })}>{getUnreadCount()}</span>}
// //             </button>
// //             <div className={css({ position: "relative", flexShrink: 0 })}>
// //               <div className={css({ w: "10", h: "10", md: { w: "14", h: "14" }, rounded: "full", border: "2px solid", borderColor: "brand.green", p: "0.5" })}>
// //                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5" alt="Profile" className={css({ w: "full", h: "full", rounded: "full", objectFit: "cover" })} />
// //               </div>
// //               <div className={css({ position: "absolute", bottom: "-2", right: 0, bg: "brand.green", color: "white", px: "2", py: "0.5", rounded: "full", display: "flex", alignItems: "center", gap: "1", shadow: "lg", border: "2px solid", borderColor: "brand.dark" })}>
// //                 <span className="material-symbols-outlined" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}>star</span>
// //                 <span className={css({ fontSize: "10px", fontWeight: "bold" })}>{user.rating}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className={css({ px: "4", md: "px-8", py: "6", md: "py-8", maxW: "1200px", mx: "auto", spaceY: "6" })}>
// //         <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "4" })}>
// //           <VehiclesList vehicles={vehicles} onAdd={handleAddVehicle} onEdit={handleEditVehicle} />
// //           <PaymentsList payments={payments} onAdd={handleAddPayment} onEdit={handleEditPayment} />
// //         </div>
// //         <AccountSettings onPersonalInfo={handlePersonalInfo} onPrivacy={handlePrivacy} onLogout={handleLogout} />
// //       </div>
// //       <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} notifications={notifications} onMarkRead={markNotificationRead} onMarkAllRead={markAllNotificationsRead} />
// //     </>
// //   );
// // };


// // components/templates/profileTemplate.tsx
// "use client";

// import { useState } from "react";
// import { css } from "@/styled-system/css";
// import { PageHeader } from "../organisms/pageHeader";
// import { VehiclesList } from "../organisms/vehiclesList";
// import { PaymentsList } from "../organisms/paymentsList";
// import { AccountSettings } from "../organisms/accountSettings";
// import { NotificationModal } from "../organisms/notificationModal";
// import { EditFormModal, FieldConfig } from "../organisms/editFormModal";
// import { LogoutModal } from "../organisms/logoutModal";
// import { useApp } from "@/hooks/useApp";

// export const ProfileTemplate = () => {
//   const { user, updateUser, vehicles, payments, addVehicle, updateVehicle, addPayment, updatePayment, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } = useApp();

//   const [isLogoutOpen, setIsLogoutOpen] = useState(false);
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);
//   const [modalState, setModalState] = useState<{
//     isOpen: boolean;
//     type: "vehicle" | "payment" | "personal";
//     mode?: "create" | "edit";
//     index?: number;
//   }>({ isOpen: false, type: "vehicle" });

//   const handleLogout = () => setIsLogoutOpen(true);

//   // --- Configurações de campos para cada tipo ---
//   const vehicleFields: FieldConfig[] = [
//     { id: "model", label: "Modelo", placeholder: "Ex: Honda Civic", required: true },
//     { id: "color", label: "Cor", placeholder: "Ex: Preto", required: true },
//     { id: "plate", label: "Placa", placeholder: "ABC-1234", required: true },
//   ];

//   const paymentFields: FieldConfig[] = [
//     { 
//       id: "type", 
//       label: "Tipo", 
//       type: "select", 
//       required: true,
//       options: [
//         { value: "credit_card", label: "Cartão de Crédito" },
//         { value: "debit_card", label: "Cartão de Débito" },
//         { value: "wallet", label: "Carteira Digital" },
//       ]
//     },
//     { id: "description", label: "Descrição", placeholder: "Ex: Visa final 8890", required: true },
//   ];

//   const personalFields: FieldConfig[] = [
//     { id: "name", label: "Nome completo", type: "text", required: true },
//     { id: "email", label: "E-mail", type: "email", required: true },
//     { id: "phone", label: "Telefone", type: "tel", placeholder: "(84) 99999-9999", required: true },
//   ];

//   // --- Handlers dos botões ---
//   const handleAddVehicle = () => setModalState({ isOpen: true, type: "vehicle", mode: "create" });
//   const handleEditVehicle = (index: number) => setModalState({ isOpen: true, type: "vehicle", mode: "edit", index });
//   const handleAddPayment = () => setModalState({ isOpen: true, type: "payment", mode: "create" });
//   const handleEditPayment = (index: number) => setModalState({ isOpen: true, type: "payment", mode: "edit", index });
//   const handlePersonalInfo = () => setModalState({ isOpen: true, type: "personal" });
//   const handlePrivacy = () => alert("⚙️ Funcionalidade em desenvolvimento");
//   const handleLogout = () => { if (confirm("Tem certeza que deseja sair?")) alert("Logout"); };

//   // --- Dados para preencher o modal (edição) ---
//   const getInitialData = () => {
//     const { type, mode, index } = modalState;
//     if (type === "vehicle" && mode === "edit" && index !== undefined) {
//       return vehicles[index];
//     }
//     if (type === "payment" && mode === "edit" && index !== undefined) {
//       return payments[index];
//     }
//     if (type === "personal") {
//       return { name: user.name, email: user.email, phone: user.phone };
//     }
//     return {};
//   };

//   const getModalTitle = () => {
//     const { type, mode } = modalState;
//     if (type === "vehicle") return mode === "create" ? "Adicionar Veículo" : "Editar Veículo";
//     if (type === "payment") return mode === "create" ? "Adicionar Pagamento" : "Editar Pagamento";
//     if (type === "personal") return "Informações Pessoais";
//     return "";
//   };

//   // --- Submissão unificada ---
//   const handleFormSubmit = (data: Record<string, any>) => {
//     const { type, mode, index } = modalState;
//     if (type === "vehicle") {
//       if (mode === "create") addVehicle(data as any);
//       else if (index !== undefined) updateVehicle(index, data as any);
//     } else if (type === "payment") {
//       if (mode === "create") addPayment(data as any);
//       else if (index !== undefined) updatePayment(index, data as any);
//     } else if (type === "personal") {
//       updateUser(data);
//     }
//     setModalState(prev => ({ ...prev, isOpen: false }));
//   };

//   return (
//     <>
//           <LogoutModal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)} />
//       <div className={css({ bg: "brand.dark", px: "4", md: "px-8", pt: "6", md: "pt-8", pb: "8", md: "pb-10", position: "sticky", top: 0, zIndex: 30, shadow: "lg" })}>
//         <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "start" })}>
//           <div className={css({ spaceY: "1" })}>
//             <h2 className={css({ fontSize: "headlineMdMobile", md: { fontSize: "headlineLg" }, color: "brand.green" })}>Dados Pessoais</h2>
//             <p className={css({ fontSize: "bodyMd", color: "white/70" })}>Gerencie seu perfil e preferências</p>
//           </div>
//           <div className={css({ display: "flex", alignItems: "start", gap: "3" })}>
//             <button onClick={() => setIsNotificationOpen(true)} className={css({ position: "relative", p: "2", rounded: "full", transition: "background 200ms", _hover: { bg: "white/10" } })}>
//               <span className="material-symbols-outlined" style={{ color: "white/80", fontSize: 24 }}>notifications</span>
//               {getUnreadCount() > 0 && <span className={css({ position: "absolute", top: "-1", right: "-1", bg: "error", color: "white", fontSize: "10px", fontWeight: "bold", w: "18px", h: "18px", rounded: "full", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" })}>{getUnreadCount()}</span>}
//             </button>
//             <div className={css({ position: "relative", flexShrink: 0 })}>
//               <div className={css({ w: "10", h: "10", md: { w: "14", h: "14" }, rounded: "full", border: "2px solid", borderColor: "brand.green", p: "0.5" })}>
//                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5" alt="Profile" className={css({ w: "full", h: "full", rounded: "full", objectFit: "cover" })} />
//               </div>
//               <div className={css({ position: "absolute", bottom: "-2", right: 0, bg: "brand.green", color: "white", px: "2", py: "0.5", rounded: "full", display: "flex", alignItems: "center", gap: "1", shadow: "lg", border: "2px solid", borderColor: "brand.dark" })}>
//                 <span className="material-symbols-outlined" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}>star</span>
//                 <span className={css({ fontSize: "10px", fontWeight: "bold" })}>{user.rating}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={css({ px: "4", md: "px-8", py: "6", md: "py-8", maxW: "1200px", mx: "auto", spaceY: "6" })}>
//         <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "4" })}>
//           <VehiclesList vehicles={vehicles} onAdd={handleAddVehicle} onEdit={handleEditVehicle} />
//           <PaymentsList payments={payments} onAdd={handleAddPayment} onEdit={handleEditPayment} />
//         </div>
//         <AccountSettings onPersonalInfo={handlePersonalInfo} onPrivacy={handlePrivacy} onLogout={handleLogout} />
//       </div>

//       <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} notifications={notifications} onMarkRead={markNotificationRead} onMarkAllRead={markAllNotificationsRead} />

//       <EditFormModal
//         isOpen={modalState.isOpen}
//         onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
//         title={getModalTitle()}
//         fields={
//           modalState.type === "vehicle" ? vehicleFields :
//           modalState.type === "payment" ? paymentFields :
//           personalFields
//         }
//         initialData={getInitialData()}
//         onSubmit={handleFormSubmit}
//       />
//     </>
//   );
// };

// components/templates/profileTemplate.tsx
"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { PageHeader } from "../organisms/pageHeader";
import { VehiclesList } from "../organisms/vehiclesList";
import { PaymentsList } from "../organisms/paymentsList";
import { AccountSettings } from "../organisms/accountSettings";
import { NotificationModal } from "../organisms/notificationModal";
import { EditFormModal, FieldConfig } from "../organisms/editFormModal";
import { LogoutModal } from "../organisms/logoutModal";
import { useApp } from "@/hooks/useApp";

export const ProfileTemplate = () => {
  const { user, updateUser, vehicles, payments, addVehicle, updateVehicle, addPayment, updatePayment, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } = useApp();

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "vehicle" | "payment" | "personal";
    mode?: "create" | "edit";
    index?: number;
  }>({ isOpen: false, type: "vehicle" });

  // Handlers dos modais
  const handleLogout = () => setIsLogoutOpen(true);
  const handlePrivacy = () => setIsPrivacyOpen(true);
  const handlePersonalInfo = () => setModalState({ isOpen: true, type: "personal" });
  const handleAddVehicle = () => setModalState({ isOpen: true, type: "vehicle", mode: "create" });
  const handleEditVehicle = (index: number) => setModalState({ isOpen: true, type: "vehicle", mode: "edit", index });
  const handleAddPayment = () => setModalState({ isOpen: true, type: "payment", mode: "create" });
  const handleEditPayment = (index: number) => setModalState({ isOpen: true, type: "payment", mode: "edit", index });

  // --- Configurações de campos para cada tipo ---
  const vehicleFields: FieldConfig[] = [
    { id: "model", label: "Modelo", placeholder: "Ex: Honda Civic", required: true },
    { id: "color", label: "Cor", placeholder: "Ex: Preto", required: true },
    { id: "plate", label: "Placa", placeholder: "ABC-1234", required: true },
  ];

  const paymentFields: FieldConfig[] = [
    { 
      id: "type", 
      label: "Tipo", 
      type: "select", 
      required: true,
      options: [
        { value: "credit_card", label: "Cartão de Crédito" },
        { value: "debit_card", label: "Cartão de Débito" },
        { value: "wallet", label: "Carteira Digital" },
      ]
    },
    { id: "description", label: "Descrição", placeholder: "Ex: Visa final 8890", required: true },
  ];

  const personalFields: FieldConfig[] = [
    { id: "name", label: "Nome completo", type: "text", required: true },
    { id: "email", label: "E-mail", type: "email", required: true },
    { id: "phone", label: "Telefone", type: "tel", placeholder: "(84) 99999-9999", required: true },
  ];

  // --- Dados para preencher o modal (edição) ---
  const getInitialData = () => {
    const { type, mode, index } = modalState;
    if (type === "vehicle" && mode === "edit" && index !== undefined) {
      return vehicles[index];
    }
    if (type === "payment" && mode === "edit" && index !== undefined) {
      return payments[index];
    }
    if (type === "personal") {
      return { name: user.name, email: user.email, phone: user.phone };
    }
    return {};
  };

  const getModalTitle = () => {
    const { type, mode } = modalState;
    if (type === "vehicle") return mode === "create" ? "Adicionar Veículo" : "Editar Veículo";
    if (type === "payment") return mode === "create" ? "Adicionar Pagamento" : "Editar Pagamento";
    if (type === "personal") return "Informações Pessoais";
    return "";
  };

  // --- Submissão unificada ---
  const handleFormSubmit = (data: Record<string, any>) => {
    const { type, mode, index } = modalState;
    if (type === "vehicle") {
      if (mode === "create") addVehicle(data as any);
      else if (index !== undefined) updateVehicle(index, data as any);
    } else if (type === "payment") {
      if (mode === "create") addPayment(data as any);
      else if (index !== undefined) updatePayment(index, data as any);
    } else if (type === "personal") {
      updateUser(data);
    }
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      {/* Cabeçalho fixo */}
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

      {/* Conteúdo principal */}
      <div className={css({ px: "4", md: "px-8", py: "6", md: "py-8", maxW: "1200px", mx: "auto", spaceY: "6" })}>
        <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "4" })}>
          <VehiclesList vehicles={vehicles} onAdd={handleAddVehicle} onEdit={handleEditVehicle} />
          <PaymentsList payments={payments} onAdd={handleAddPayment} onEdit={handleEditPayment} />
        </div>
        <AccountSettings onPersonalInfo={handlePersonalInfo} onPrivacy={handlePrivacy} onLogout={handleLogout} />
      </div>

      {/* Modais */}
      <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} notifications={notifications} onMarkRead={markNotificationRead} onMarkAllRead={markAllNotificationsRead} />
      <EditFormModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        title={getModalTitle()}
        fields={
          modalState.type === "vehicle" ? vehicleFields :
          modalState.type === "payment" ? paymentFields :
          personalFields
        }
        initialData={getInitialData()}
        onSubmit={handleFormSubmit}
      />
      <LogoutModal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)} />
    </>
  );
};