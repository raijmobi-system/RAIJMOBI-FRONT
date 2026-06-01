import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const linkRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 'medium',
    transition: 'color 0.2s',
    _hover: { 
      textDecoration: 'underline',
      textUnderlineOffset: '4px', // Deixa o sublinhado um pouco mais afastado do texto (fica mais elegante)
    }
  },
  variants: {
    color: {
      primary: { color: 'blue.600', _hover: { color: 'blue.700' } },
      muted: { color: 'gray.500', _hover: { color: 'gray.700' } },
    }
  },
  defaultVariants: {
    color: 'primary',
  }
});

export const Link = styled('a', linkRecipe);