"use client";

import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { StarRating } from "../atoms/starRating";
import { RideDetail, DriverRide, MyRide } from "@/hooks/useApp";

type RideData = RideDetail | DriverRide | MyRide;

interface RideDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  ride: RideData | null;
  context: "search" | "myrides" | "driver";
  onParticipate?: () => void;
  onCancel?: () => void;
  onEdit?: () => void;
}

export const RideDetailModal = ({ isOpen, onClose, ride, context, onParticipate, onCancel, onEdit }: RideDetailModalProps) => {
  if (!isOpen || !ride) return null;

  const isDriver = context === "driver";
  const isPassenger = context === "myrides";
  const showJoin = context === "search";
  const showCancel = isPassenger && (ride as MyRide).cancelable;
  const showCancelDriver = isDriver && (ride as DriverRide).cancelable;
  const showEdit = isDriver;

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "460px", maxH: "85vh", overflowY: "auto", animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" })} onClick={(e) => e.stopPropagation()}>
        <div className={css({ p: "5", borderBottom: "1px solid", borderColor: "gray.200", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, bg: "white", roundedTop: "2xl" })}>
          <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface", truncate: true })}>{ride.title}</h3>
          <Button variant="ghost" onClick={onClose} className={css({ p: "2", rounded: "full" })}><Icon name="close" /></Button>
        </div>
        <div className={css({ p: "5", spaceY: "4" })}>
          <div className={css({ display: "flex", justifyContent: "space-between", alignItems: "center" })}>
            <span className={css({ bg: "primary/8", color: "primary", px: "2", py: "0.5", rounded: "full", fontSize: "xs", fontWeight: "semibold", display: "inline-flex", alignItems: "center", gap: "1" })}><Icon name="confirmation_number" size={16} /> #{ride.id}</span>
            <span className={css({ fontSize: "headlineMdMobile", color: "brand.green", fontWeight: "bold" })}>{ride.price}</span>
          </div>

          <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4" })}>
            <p className={css({ fontSize: "labelLg", fontWeight: "semibold", mb: "2" })}>👤 Motorista</p>
            <div className={css({ display: "flex", alignItems: "center", gap: "3" })}>
              <img src={ride.driver.photo} alt={ride.driver.name} className={css({ w: "14", h: "14", rounded: "full", border: "2px solid", borderColor: "brand.green", objectFit: "cover", flexShrink: 0 })} />
              <div className={css({ flex: 1, minW: 0 })}>
                <p className={css({ fontSize: "bodyLg", fontWeight: "semibold", color: "onSurface", truncate: true })}>{ride.driver.name}</p>
                <StarRating rating={ride.driver.rating} />
              </div>
              <Icon name="verified_user" size={28} className={css({ color: "brand.green" })} />
            </div>
          </div>

          <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4" })}>
            <p className={css({ fontSize: "labelLg", fontWeight: "semibold", mb: "2" })}>🚗 Veículo</p>
            <div className={css({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3", fontSize: "sm" })}>
              <div><p className={css({ fontSize: "xs", color: "secondary", mb: "0.5" })}>Modelo</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{ride.vehicle.model}</p></div>
              <div><p className={css({ fontSize: "xs", color: "secondary", mb: "0.5" })}>Cor</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{ride.vehicle.color}</p></div>
              <div><p className={css({ fontSize: "xs", color: "secondary", mb: "0.5" })}>Placa</p><p className={css({ fontWeight: "semibold", color: "onSurface", trackingWider: true })}>{ride.vehicle.plate}</p></div>
              <div><p className={css({ fontSize: "xs", color: "secondary", mb: "0.5" })}>Ano</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{(ride.vehicle as any).year}</p></div>
            </div>
          </div>

          <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4" })}>
            <p className={css({ fontSize: "labelLg", fontWeight: "semibold", mb: "3" })}>📍 Trajeto</p>
            <div className={css({ display: "flex", alignItems: "start", gap: "3" })}>
              <div className={css({ display: "flex", flexDirection: "column", alignItems: "center", gap: "1", pt: "1" })}>
                <div className={css({ w: "3", h: "3", rounded: "full", border: "2px solid", borderColor: "brand.green", bg: "white" })} />
                <div className={css({ w: "0.5", h: "10", bg: "outlineVariant/60" })} />
                <div className={css({ w: "3", h: "3", rounded: "full", bg: "brand.green" })} />
              </div>
              <div className={css({ spaceY: "3", flex: 1 })}>
                <div><p className={css({ fontSize: "xs", color: "secondary" })}>Origem</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{ride.origin}</p></div>
                <div><p className={css({ fontSize: "xs", color: "secondary" })}>Destino</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{ride.destination}</p></div>
              </div>
            </div>
          </div>

          <div className={css({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3" })}>
            <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4", textAlign: "center" })}><p className={css({ fontSize: "xs", color: "secondary", mb: "1" })}>📅 Data</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{ride.date}</p></div>
            <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4", textAlign: "center" })}><p className={css({ fontSize: "xs", color: "secondary", mb: "1" })}>🕒 Horário</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{ride.time}</p></div>
            <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4", textAlign: "center" })}><p className={css({ fontSize: "xs", color: "secondary", mb: "1" })}>👥 Vagas</p><p className={css({ fontWeight: "semibold", color: "onSurface" })}>{ride.seats}</p></div>
            <div className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4", textAlign: "center" })}><p className={css({ fontSize: "xs", color: "secondary", mb: "1" })}>💵 Preço</p><p className={css({ fontWeight: "semibold", color: "brand.green" })}>{ride.price}</p></div>
          </div>

          {showJoin && <Button onClick={onParticipate} className={css({ w: "full", mt: "2" })}><Icon name="check_circle" size={20} /> Participar desta carona</Button>}
          {showCancel && <Button variant="error" onClick={onCancel} className={css({ w: "full", mt: "2" })}><Icon name="cancel" size={20} /> Cancelar participação</Button>}
          {showCancelDriver && <Button variant="error" onClick={onCancel} className={css({ w: "full", mt: "2" })}><Icon name="cancel" size={20} /> Cancelar Carona</Button>}
          {showEdit && <Button onClick={onEdit} className={css({ w: "full", mt: "2" })}><Icon name="edit" size={20} /> Editar Carona</Button>}
        </div>
      </div>
    </div>
  );
};