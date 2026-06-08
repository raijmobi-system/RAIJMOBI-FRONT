"use client";

import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { StarRating } from "../atoms/starRating";

interface PassengerRequest {
  name: string;
  photo: string;
  rating: number;
  requestDate: string;
}

interface RequestsModalProps {
  isOpen: boolean;
  onClose: () => void;
  requests: PassengerRequest[];
  onAccept: (index: number) => void;
  onReject: (index: number) => void;
}

export const RequestsModal = ({ isOpen, onClose, requests, onAccept, onReject }: RequestsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "460px", maxH: "85vh", overflowY: "auto", animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" })} onClick={(e) => e.stopPropagation()}>
        <div className={css({ p: "5", borderBottom: "1px solid", borderColor: "gray.200", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, bg: "white" })}>
          <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>Solicitações de Carona</h3>
          <Button variant="ghost" onClick={onClose} className={css({ p: "2", rounded: "full" })}><Icon name="close" /></Button>
        </div>
        <div className={css({ p: "5", spaceY: "3" })}>
          {requests.length === 0 ? (
            <div className={css({ textAlign: "center", py: "6" })}>
              <Icon name="group_off" size={48} className={css({ color: "outlineVariant/120", mb: "3" })} />
              <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant" })}>Nenhuma solicitação pendente.</p>
            </div>
          ) : (
            requests.map((req, idx) => (
              <div key={idx} className={css({ bg: "surfaceContainerLow/50", rounded: "2xl", p: "4" })}>
                <div className={css({ display: "flex", alignItems: "center", gap: "3" })}>
                  <img src={req.photo} alt={req.name} className={css({ w: "12", h: "12", rounded: "full", objectFit: "cover", border: "2px solid", borderColor: "outlineVariant", flexShrink: 0 })} />
                  <div className={css({ flex: 1, minW: 0 })}>
                    <p className={css({ fontSize: "bodyLg", fontWeight: "semibold", color: "onSurface", truncate: true })}>{req.name}</p>
                    <div className={css({ display: "flex", alignItems: "center", gap: "2", fontSize: "xs", color: "secondary", mt: "0.5" })}>
                      <StarRating rating={req.rating} showValue />
                      <span>•</span>
                      <span>Solicitado em {req.requestDate}</span>
                    </div>
                  </div>
                </div>
                <div className={css({ display: "flex", gap: "2", mt: "4", justifyContent: "flex-end" })}>
                  <Button variant="outline" onClick={() => onReject(idx)} className={css({ bg: "red.50", color: "red.600", _hover: { bg: "red.100" } })}><Icon name="close" size={16} /> Recusar</Button>
                  <Button onClick={() => onAccept(idx)}><Icon name="check" size={16} /> Aceitar</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};