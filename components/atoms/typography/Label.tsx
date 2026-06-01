import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const labelRecipe = cva({
  base: {
    margin: 0,
    display: 'inline-block', // Permite que margins/paddings funcionem corretamente se injetados pelo pai
    userSelect: 'none', // Impede que o usuário selecione o texto sem querer ao clicar rápido
  },
  variants: {
    size: {
      sm: { fontSize: 'xs' },
      md: { fontSize: 'sm' }, // O label médio geralmente tem o tamanho visual do texto "sm"
    },
    weight: {
      medium: { fontWeight: 'medium' },
      bold: { fontWeight: 'bold' },
    },
    state: {
      default: { color: 'gray.700' },
      disabled: { color: 'gray.400', cursor: 'not-allowed' },
      error: { color: 'red.500' },
    }
  },
  defaultVariants: {
    size: 'md',
    weight: 'medium',
    state: 'default',
  }
});

export const Label = styled('label', labelRecipe);