import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const badgeRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase', // Letras maiúsculas ajudam na leitura de labels pequenos
    letterSpacing: 'wider',
    borderRadius: 'full', // Formato de pílula
    paddingX: '2.5',
    paddingY: '0.5',
    fontSize: 'xs',
    whiteSpace: 'nowrap',
  },
  variants: {
    status: {
      info: { backgroundColor: 'blue.100', color: 'blue.800' },
      success: { backgroundColor: 'green.100', color: 'green.800' },
      warning: { backgroundColor: 'yellow.100', color: 'yellow.800' },
      danger: { backgroundColor: 'red.100', color: 'red.800' },
      neutral: { backgroundColor: 'gray.100', color: 'gray.800' },
    }
  },
  defaultVariants: {
    status: 'neutral',
  }
});

export const Badge = styled('span', badgeRecipe);