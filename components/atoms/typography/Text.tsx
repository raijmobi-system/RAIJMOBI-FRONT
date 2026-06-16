import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const textRecipe = cva({
  base: {
    margin: 0,
  },
  variants: {
    size: {
      xs: { fontSize: 'xs', lineHeight: 'tight' },
      sm: { fontSize: 'sm', lineHeight: 'tight' },
      md: { fontSize: 'md', lineHeight: 'normal' },
      lg: { fontSize: 'lg', lineHeight: 'relaxed' },
    },
    weight: {
      normal: { fontWeight: 'normal' },
      medium: { fontWeight: 'medium' },
      bold: { fontWeight: 'bold' },
    },
    color: {
      primary: { color: 'gray.900' },
      white: { color: 'white' },
      muted: { color: 'gray.500' },
      danger: { color: 'red.500' },
      success: { color: 'green.600' },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    }
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
    color: 'primary',
    align: 'left',
  }
});


export const Text = styled('p', textRecipe);