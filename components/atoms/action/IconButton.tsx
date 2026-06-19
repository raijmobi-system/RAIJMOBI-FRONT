import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';


const iconButtonRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    _disabled: { opacity: 0.6, cursor: 'not-allowed' },
    
    
  },
  variants: {
    // Reutilizamos as mesmas lógicas de cores do botão principal
    variant: {
      solid: { backgroundColor: 'gray.800', color: 'white', _hover: { backgroundColor: 'gray.900' } },
      ghost: { backgroundColor: 'transparent', color: 'gray.600', _hover: { backgroundColor: 'gray.100' } },
      detail: { backgroundColor: '#262626', color: 'white', },
    },
    size: {
      // O truque aqui é usar width (w) e height (h) iguais
      sm: { width: '8', height: '8', fontSize: '1.25rem' },
      md: { width: '10', height: '10', fontSize: '1.5rem' },
      lg: { width: '12', height: '12', fontSize: '1.75rem' },
      full: {width:'280px',height: '40px',fontSize: '1.75rem'}
    },
    isRound: {
      true: { borderRadius: 'full' } // Se for true, vira um círculo
    }
  },
  defaultVariants: {
    variant: 'ghost',
    size: 'md',
  }
});

export const IconButton = styled('button', iconButtonRecipe);