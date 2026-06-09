"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
  title: string;
  subtitle?: string;
}

export const RatingModal = ({ isOpen, onClose, onSubmit, title, subtitle }: RatingModalProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (rating === 0) return;
    onSubmit(rating, comment);
    setRating(0);
    setComment("");
    onClose();
  };

  return (
    <div className={css({ position: "fixed", inset: 0, bg: "black/60", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 })} onClick={onClose}>
      <div className={css({ bg: "white", rounded: "2xl", w: "90%", maxW: "400px", p: "5", animation: "modalSlideUp 0.3s ease" })} onClick={(e) => e.stopPropagation()}>
        <h3 className={css({ fontSize: "headlineMdMobile", textAlign: "center", mb: "2" })}>{title}</h3>
        {subtitle && <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant", textAlign: "center", mb: "4" })}>{subtitle}</p>}

        <div className={css({ display: "flex", justifyContent: "center", gap: "2", mb: "4" })}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className={css({ background: "none", border: "none", cursor: "pointer", p: "1" })}
            >
              <Icon
                name="star"
                fill={(hover || rating) >= star}
                size={36}
                className={css({
                  color: (hover || rating) >= star ? "yellow.500" : "gray.300",
                  transition: "color 200ms",
                })}
              />
            </button>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Deixe um comentário (opcional)"
          className={css({
            w: "full",
            p: "3",
            rounded: "xl",
            bg: "surfaceContainerLow",
            border: "none",
            resize: "none",
            h: "20",
            fontSize: "bodyMd",
            mb: "4",
            _focus: { ring: "2px solid", ringColor: "brand.green/30", outline: "none" },
          })}
        />

        <div className={css({ display: "flex", gap: "2", justifyContent: "flex-end" })}>
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit} disabled={rating === 0}>Enviar avaliação</Button>
        </div>
      </div>
    </div>
  );
};