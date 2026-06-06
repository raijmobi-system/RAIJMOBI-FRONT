"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";

interface SearchBarWithFiltersProps {
  onSearch: (query: string) => void;
  onOpenFilters: () => void;
  onAISearch: (query: string) => void;
}

export const SearchBarWithFilters = ({ onSearch, onOpenFilters, onAISearch }: SearchBarWithFiltersProps) => {
  const [query, setQuery] = useState("");

  const handleAIClick = () => {
    onAISearch(query);
  };

  return (
    <div className={css({ bg: "white", rounded: "full", p: "2", display: "flex", alignItems: "center", gap: "2", shadow: "2xl", h: "12", md: { h: "14" }, maxW: "2xl" })}>
      <div className={css({ flex: 1, display: "flex", alignItems: "center", gap: "2", pl: "3", md: { pl: "4" } })}>
        <Icon name="search" size={20} className={css({ color: "onSurface" })} />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Aonde está indo?" className={css({ bg: "transparent", border: "none", p: "0", _focus: { ring: "none" } })} />
        <button onClick={handleAIClick} className={css({ bg: "brand.green", p: "2", rounded: "full", color: "white" })}><Icon name="auto_awesome" size={18} /></button>
      </div>
      <Button onClick={onOpenFilters} className={css({ px: "4", py: "2", rounded: "full", display: "flex", alignItems: "center", gap: "2", h: "full" })}>
        <Icon name="tune" size={16} /> <span className={css({ display: { base: "none", sm: "inline" } })}>Filtros</span>
      </Button>
    </div>
  );
};