import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';


const dividerRecipe = cva({
  base: {
    borderColor: 'gray.200',
  },
  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        marginHeight: '4', // Dá um respiro em cima e embaixo
      },
      vertical: {
        height: '100%',
        minHeight: '4', // Altura mínima para não sumir
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        marginX: '4', // Respiro nas laterais
      }
    }
  },
  defaultVariants: {
    orientation: 'horizontal',
  }
});

// Semanticamente, a tag <hr> (Horizontal Rule) é a mais correta para acessibilidade
export const Divider = styled('hr', dividerRecipe);