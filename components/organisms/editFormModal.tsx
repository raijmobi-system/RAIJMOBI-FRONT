// components/organisms/editFormModal.tsx
"use client";

import { useState, useEffect } from "react";
import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import { InputField } from "../molecules/inputField";

export interface FieldConfig {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "date" | "time" | "number";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // para selects
}

interface EditFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: FieldConfig[];
  initialData: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
}

export const EditFormModal = ({ isOpen, onClose, title, fields, initialData, onSubmit }: EditFormModalProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Preenche o formulário sempre que o modal abrir ou os dados iniciais mudarem
  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (id: string, value: any) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    // Validação simples de campos obrigatórios
    const missing = fields.filter(f => f.required && !formData[f.id]);
    if (missing.length) {
      alert(`Preencha o(s) campo(s): ${missing.map(f => f.label).join(", ")}`);
      return;
    }
    onSubmit(formData);
    onClose();
  };

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "460px", maxH: "85vh", overflowY: "auto", animation: "modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" })} onClick={(e) => e.stopPropagation()}>
        <div className={css({ p: "5", borderBottom: "1px solid", borderColor: "gray.200", display: "flex", justifyContent: "space-between", alignItems: "center" })}>
          <h3 className={css({ fontSize: "headlineMdMobile", color: "onSurface" })}>{title}</h3>
          <Button variant="ghost" onClick={onClose} className={css({ p: "2", rounded: "full" })}><Icon name="close" /></Button>
        </div>
        <div className={css({ p: "5", spaceY: "4" })}>
          {fields.map(field => (
            <div key={field.id}>
              {field.type === "select" ? (
                <>
                  <label className={css({ fontSize: "labelLg", fontWeight: "semibold", mb: "1", display: "block" })}>{field.label}{field.required && " *"}</label>
                  <select
                    value={formData[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className={css({ w: "full", p: "2.5", rounded: "xl", bg: "surfaceContainerLow", border: "none" })}
                  >
                    {field.options?.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </>
              ) : (
                <InputField
                  label={field.label}
                  id={field.id}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                />
              )}
            </div>
          ))}
          <Button onClick={handleSubmit} className={css({ w: "full" })}>Salvar</Button>
        </div>
      </div>
    </div>
  );
};