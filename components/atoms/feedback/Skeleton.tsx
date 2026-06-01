import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const skeletonRecipe = cva({
  base: {
    backgroundColor: 'gray.200',
    borderRadius: 'md',
    // Animação de pulso (opacidade variando) típica do Panda CSS/Tailwind
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', 
  },
  variants: {
    variant: {
      text: { height: '4', width: '100%', borderRadius: 'sm' }, // Fino para imitar linhas de texto
      circular: { borderRadius: 'full' }, // Para imitar avatares
      rectangular: { width: '100%', height: '100%' }, // Para imagens ou cards
    }
  },
  defaultVariants: {
    variant: 'text',
  }
});

export const Skeleton = styled('div', skeletonRecipe);