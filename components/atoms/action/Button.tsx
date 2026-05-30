import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2', // Espaço entre um ícone e o texto, se houver
    fontWeight: 'semibold',
    borderRadius: 'md',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    // Estilo para quando o botão recebe a prop 'disabled'
    _disabled: { 
      opacity: 0.6, 
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
  variants: {
    variant: {
      solid: { 
        backgroundColor: 'blue.600', 
        color: 'white', 
        _hover: { backgroundColor: 'blue.700' } 
      },
      outline: { 
        backgroundColor: 'transparent',
        borderWidth: '1px', 
        borderColor: 'blue.600', 
        color: 'blue.600', 
        _hover: { backgroundColor: 'blue.50' } 
      },
      ghost: { 
        backgroundColor: 'transparent',
        color: 'blue.600', 
        _hover: { backgroundColor: 'blue.50' } 
      },
    },
    size: {
      sm: { height: '8', paddingX: '3', fontSize: 'sm' },
      md: { height: '10', paddingX: '4', fontSize: 'md' },
      lg: { height: '12', paddingX: '6', fontSize: 'lg' },
    }
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  }
});

export const Button = styled('button', buttonRecipe);