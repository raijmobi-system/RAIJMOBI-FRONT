import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const switchRecipe = cva({
  base: {
    appearance: 'none',
    width: '10', // Formato de pílula alargada
    height: '6',
    backgroundColor: 'gray.200',
    borderRadius: 'full',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background-color 0.2s',
    outline: 'none',

    // A bolinha interna do Switch
    _before: {
      content: '""',
      position: 'absolute',
      top: '1px',
      left: '1px',
      width: '5',
      height: '5',
      backgroundColor: 'white',
      borderRadius: 'full',
      boxShadow: 'sm',
      transition: 'transform 0.2s ease-in-out',
    },

    // Quando ativado, muda a cor do fundo e move a bolinha para a direita
    _checked: {
      backgroundColor: 'blue.600',
      _before: {
        transform: 'translateX(16px)', // Empurra a bolinha para o fim da pílula
      }
    },

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    }
  }
});

export const Switch = styled('input', {
  ...switchRecipe,
  defaultProps: { type: 'checkbox' }
});