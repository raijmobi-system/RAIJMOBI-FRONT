"use client";

import { useState, useEffect } from "react";
import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { InputField } from "../molecules/inputField";
import { Vehicle } from "@/hooks/useApp";

interface RideFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
  vehicles: Vehicle[];
  mode: "create" | "edit";
}

export const RideFormModal = ({ isOpen, onClose, onSubmit, initialData, vehicles, mode }: RideFormModalProps) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [vehicleId, setVehicleId] = useState("");

  useEffect(() => {
    if (initialData) {
      setOrigin(initialData.origin || "");
      setDestination(initialData.destination || "");
      setDate(initialData.date || "");
      setTime(initialData.time || "");
      setPrice(initialData.price || "");
      setSeats(initialData.seats?.split("/")[1] || "");
      setVehicleId(initialData.vehicle ? vehicles.findIndex(v => v.model === initialData.vehicle.model && v.plate === initialData.vehicle.plate).toString() : "");
    } else {
      setOrigin("");
      setDestination("");
      setDate("");
      setTime("");
      setPrice("");
      setSeats("");
      setVehicleId("");
    }
  }, [initialData, vehicles]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!origin || !destination || !date || !time || !seats || !vehicleId) {
      alert("Preencha todos os campos.");
      return;
    }
    onSubmit({
      origin,
      destination,
      date,
      time,
      price: price || "0",
      seats: `0/${seats}`,
      vehicleId: parseInt(vehicleId),
    });
    onClose();
  };

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "460px", maxH: "85vh", overflowY: "auto", animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" })} onClick={(e) => e.stopPropagation()}>
        <div className={css({ p: "5", borderBottom: "1px solid", borderColor: "gray.200", display: "flex", justifyContent: "space-between", alignItems: "center" })}>
          <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>{mode === "create" ? "Criar Carona" : "Editar Carona"}</h3>
          <Button variant="ghost" onClick={onClose} className={css({ p: "2", rounded: "full" })}><Icon name="close" /></Button>
        </div>
        <div className={css({ p: "5", spaceY: "4" })}>
          <div className={css({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3" })}>
            <InputField label="Origem" id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Cidade de origem" required />
            <InputField label="Destino" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Cidade de destino" required />
          </div>
          <div className={css({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3" })}>
            <InputField label="Data" id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <InputField label="Horário" id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </div>
          <div className={css({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3" })}>
            <InputField label="Preço (R$)" id="price" type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0,00" />
            <InputField label="Vagas totais" id="seats" type="number" min="1" value={seats} onChange={(e) => setSeats(e.target.value)} placeholder="4" required />
          </div>
          <div>
            <label className={css({ fontSize: "labelLg", fontWeight: "semibold", mb: "1", display: "block" })}>Veículo</label>
            <select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} className={css({ w: "full", p: "2.5", rounded: "xl", bg: "surfaceContainerLow", border: "none" })} required>
              <option value="">Selecione um veículo</option>
              {vehicles.map((v, idx) => (
                <option key={idx} value={idx}>{v.model} - {v.plate} ({v.color})</option>
              ))}
            </select>
          </div>
          <Button onClick={handleSubmit} className={css({ w: "full" })}>{mode === "create" ? "Criar Carona" : "Salvar Alterações"}</Button>
        </div>
      </div>
    </div>
  );
};