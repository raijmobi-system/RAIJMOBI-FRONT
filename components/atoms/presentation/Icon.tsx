import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';


const iconRecipe = cva({
  base: {
    display: 'inline-block',
    flexShrink: 0,
    // Garante que o SVG herde a cor definida no componente Icon
    '& svg': { 
      width: '100%', 
      height: '100%', 
      color: 'inherit' 
    }
  },
  variants: {
    size: {
      sm: { width: '4', height: '4' },
      md: { width: '5', height: '5' },
      lg: { width: '6', height: '6' },
      xl: { width: '8', height: '8' },
    },
    color: {
      default: { color: 'currentcolor' }, // Herda a cor do texto onde estiver inserido
      primary: { color: 'blue.600' },
      muted: { color: 'gray.400' },
      danger: { color: 'red.500' },
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  }
});

// Envolvemos o SVG repassado como children
export const Icon = styled('span', iconRecipe);