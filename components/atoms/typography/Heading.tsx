import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const headingRecipe = cva({
  base: {
    margin: 0,
    letterSpacing: 'tight', // Títulos geralmente ficam melhores com as letras levemente mais juntas
  },
  variants: {
    size: {
      h1: { fontSize: '4xl', lineHeight: 'tight' },
      h2: { fontSize: '3xl', lineHeight: 'tight' },
      h3: { fontSize: '2xl', lineHeight: 'snug' },
      h4: { fontSize: 'xl', lineHeight: 'snug' },
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
      green: {color: 'green.700'},
      black: {color: 'black'},
    }
  },
  defaultVariants: {
    size: 'h2',
    weight: 'bold',
    align: 'left',
    color: 'black',
  }
});

// Usamos h2 como padrão, pois h1 só deve haver um por página (SEO)
export const Heading = styled('h2', headingRecipe);