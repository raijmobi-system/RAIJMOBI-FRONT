import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';


const spinnerRecipe = cva({
  base: {
    display: 'inline-block',
    borderColor: 'currentcolor', // Herda a cor do texto/elemento pai
    borderStyle: 'solid',
    borderRadius: 'full',
    borderBottomColor: 'transparent', // Um dos lados fica transparente para criar o efeito visual de giro
    borderLeftColor: 'transparent',
    animation: 'spin 1s linear infinite', // Animação de giro contínuo
  },
  variants: {
    size: {
      sm: { width: '4', height: '4', borderWidth: '2px' },
      md: { width: '6', height: '6', borderWidth: '2px' },
      lg: { width: '8', height: '8', borderWidth: '3px' },
      xl: { width: '12', height: '12', borderWidth: '4px' },
    },
    color: {
      primary: { color: 'blue.600' },
      white: { color: 'white' },
      muted: { color: 'gray.400' },
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  }
});

// A tag div é suficiente, mas adicionamos aria-label via props depois para acessibilidade
export const Spinner = styled('div', spinnerRecipe);