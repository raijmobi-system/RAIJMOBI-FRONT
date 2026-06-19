import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const headingRecipe = cva({
  base: {
    margin: 0,
    letterSpacing: 'tight', 
  },
  variants: {
    // 1. Mudamos os nomes das chaves para tamanhos abstratos (visuais)
    size: {
      '4xl': { fontSize: '4xl', lineHeight: 'tight' },
      '3xl': { fontSize: '3xl', lineHeight: 'tight' },
      '2xl': { fontSize: '2xl', lineHeight: 'snug' },
      xl: { fontSize: 'xl', lineHeight: 'snug' },
    },
    weight: {
      semibold: { fontWeight: 'semibold' },
      bold: { fontWeight: 'bold' },
      extrabold: { fontWeight: 'extrabold' },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
    },
    color: {
      green: {color: 'rgb(84, 120, 18)'},
      black: {color: 'black'},
    }
  },
  defaultVariants: {
    size: '3xl', // Definimos um tamanho visual padrão
    weight: 'bold',
    align: 'left',
    color: 'black',
  }
});

// Continuamos usando 'h2' aqui apenas como o fallback semântico padrão.
export const Heading = styled('h2', headingRecipe);