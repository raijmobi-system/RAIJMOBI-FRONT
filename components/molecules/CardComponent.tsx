import React from "react";
import { flex } from '../../styled-system/patterns'; // Certifique-se de que o import está em minúsculo se for o pattern do Panda

interface CardComponentProps {
  Image?: React.ReactNode;
  content?: React.ReactNode;
  extraContent?: React.ReactNode;
  // Novas propriedades:
  direction?: 'row' | 'column' | 'row-wrap';
  animate?: boolean; // Define se terá animação ou não
}

export default function CardComponent({ 
  Image, 
  content, 
  extraContent,
  direction = 'column', // Valor padrão caso o usuário não passe nada
  animate = false 
}: CardComponentProps) {

  // Mapeia a string amigável para as propriedades reais do Flexbox
  const flexStyles = {
    direction: direction === 'row-wrap' ? 'row' : direction,
    wrap: direction === 'row-wrap' ? 'wrap' : 'nowrap'
  };

  return (
    <div 
      className={flex({
        direction: flexStyles.direction,
        wrap: flexStyles.wrap,
        gap: '4', // Espaçamento interno padrão entre os itens do card
        borderRadius: '10px', // Seu arredondamento de 10px fixo
        overflow: 'hidden', // Garante que a imagem respeite o arredondamento
        // Aplica a animação condicionalmente (exemplo usando transição sutil ou pulse)
        transition: 'all 0.3s ease',
        _hover: animate ? { transform: 'translateY(-4px)', boxShadow: 'md' } : {},
        width: '100%', // Define a largura como 100% para o card
        justifyContent: 'space-between'
      })}
    >
      {Image}
      {content}
      {extraContent}
    </div>
  );
}