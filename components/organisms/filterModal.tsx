"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { Input } from "../atoms/input";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

export const FilterModal = ({ isOpen, onClose, onApply }: FilterModalProps) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [radius, setRadius] = useState(20);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(100);
  const [seats, setSeats] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    onApply({ origin, destination, radius, date, time, price, seats });
    onClose();
  };

  const handleReset = () => {
    setOrigin("");
    setDestination("");
    setRadius(20);
    setDate("");
    setTime("");
    setPrice(100);
    setSeats("");
  };

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "520px", maxH: "85vh", overflowY: "auto", animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" })} onClick={(e) => e.stopPropagation()}>
        <div className={css({ p: "5", borderBottom: "1px solid", borderColor: "gray.200", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, bg: "white", zIndex: 2, roundedTop: "2xl" })}>
          <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>Filtros de Pesquisa</h3>
          <Button variant="ghost" onClick={onClose} className={css({ p: "2", rounded: "full" })}><Icon name="close" /></Button>
        </div>
        <div className={css({ p: "5", spaceY: "5" })}>
          <div className={css({ bg: "brand.green/5", rounded: "2xl", p: "4", border: "1px solid", borderColor: "brand.green/20" })}>
            <p className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "labelLg", fontWeight: "semibold", mb: "3" })}><Icon name="psychology" size={20} className={css({ color: "brand.green" })} /> Pesquisa Inteligente com IA</p>
            <div className={css({ position: "relative" })}>
              <Input placeholder="Descreva sua viagem ideal..." className={css({ pr: "12" })} />
            </div>
          </div>

          <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4" })}>
            <p className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "labelLg", fontWeight: "semibold", mb: "3" })}><Icon name="location_on" size={20} className={css({ color: "brand.green" })} /> Trajeto</p>
            <div className={css({ spaceY: "3" })}>
              <div><label className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>Origem</label><Input value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Cidade de partida" /></div>
              <div><label className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>Destino</label><Input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Cidade de destino" /></div>
              <div><label className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>Raio de busca (km)</label><input type="range" min="0" max="100" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className={css({ w: "full", accentColor: "brand.green" })} /><div className={css({ display: "flex", justifyContent: "space-between", fontSize: "xs", color: "secondary", mt: "1" })}><span>0 km</span><span>{radius} km</span><span>100 km</span></div></div>
            </div>
          </div>

          <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4" })}>
            <p className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "labelLg", fontWeight: "semibold", mb: "3" })}><Icon name="calendar_month" size={20} className={css({ color: "brand.green" })} /> Data e Hora</p>
            <div className={css({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3" })}>
              <div><label className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>Data</label><Input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
              <div><label className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>Horário</label><select value={time} onChange={(e) => setTime(e.target.value)} className={css({ w: "full", p: "2.5", rounded: "xl", bg: "surfaceContainerLow", border: "none" })}><option value="">Qualquer</option><option value="morning">Manhã (06-12h)</option><option value="afternoon">Tarde (12-18h)</option><option value="night">Noite (18-00h)</option></select></div>
            </div>
          </div>

          <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4" })}>
            <p className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "labelLg", fontWeight: "semibold", mb: "3" })}><Icon name="payments" size={20} className={css({ color: "brand.green" })} /> Preço e Vagas</p>
            <div className={css({ spaceY: "3" })}>
              <div><label className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>Preço máximo</label><div className={css({ display: "flex", alignItems: "center", gap: "3" })}><input type="range" min="0" max="200" value={price} onChange={(e) => setPrice(Number(e.target.value))} className={css({ flex: 1, accentColor: "brand.green" })} /><span className={css({ minW: "60px", textAlign: "right", fontWeight: "semibold", color: "brand.green" })}>R$ {price}</span></div></div>
              <div><label className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>Vagas disponíveis</label><select value={seats} onChange={(e) => setSeats(e.target.value)} className={css({ w: "full", p: "2.5", rounded: "xl", bg: "surfaceContainerLow", border: "none" })}><option value="">Qualquer</option><option value="1">1+ vaga</option><option value="2">2+ vagas</option><option value="3">3+ vagas</option></select></div>
            </div>
          </div>

          <div className={css({ display: "flex", gap: "3", pt: "2" })}>
            <Button variant="outline" onClick={handleReset} className={css({ flex: 1 })}>Limpar Filtros</Button>
            <Button onClick={handleApply} className={css({ flex: 1 })}>Aplicar Filtros</Button>
          </div>
        </div>
      </div>
    </div>
  );
};