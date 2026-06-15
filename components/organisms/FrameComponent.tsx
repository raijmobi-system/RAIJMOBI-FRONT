import React from "react";
import { css } from "../../styled-system/css"; 

// Definindo a interface das Props para garantir tipagem forte
interface FrameComponentProps {
  titleElements?: React.ReactNode; // Aceita Icone, Texto ou ambos na ordem que passarem
  actions?: React.ReactNode;       // Quantos botões o usuário quiser
  children: React.ReactNode;       // O conteúdo principal (qualquer elemento HTML)
}

export default function FrameComponent({ titleElements, actions, children }: FrameComponentProps) {
  return (
    <section 
      className={css({ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '400px', // Garante o mínimo de 400px de altura
        height: 'auto',     // Permite expandir conforme o conteúdo cresce
        width: '100%',      // Opcional: Garante que ocupe a largura disponível
      })}
    >
      <div 
        className={css({
          display: 'flex',
          justifyContent: 'space-between', // Separa o título das ações nas extremidades
          alignItems: 'center',            // Alinha verticalmente no centro
          padding: '16px',                 // Ajuste o padding como preferir
        })} 
        aria-label="decorative"
      >
        {/* Div de Title: Mantém a ordem exata do que for passado em titleElements */}
        <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
          {titleElements}
        </div>

        {/* Div de Actions: Renderiza quantos botões forem passados */}
        <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
          {actions}
        </div>
      </div>

      {/* Div de Conteúdo Principal */}
      <div 
        className={css({ 
          flex: '1',          // Faz o conteúdo ocupar o espaço restante se o frame crescer
          padding: '16px'     // Ajuste conforme seu design system
        })} 
        aria-label="main"
      >
        {/* Aceita qualquer elemento HTML/React aqui dentro */}
        {children} 
      </div>
    </section>
  );
}