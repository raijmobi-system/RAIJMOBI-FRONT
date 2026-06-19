import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const inputRecipe = cva({
  base: {
    width: '100%',
    height: '11',
    paddingX: '3',
    fontSize: 'sm',
    backgroundColor: 'white',
    borderWidth: '1px',
    borderColor: 'transparent',
    borderRadius: 'md',
    color: 'gray.900',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    
    // Placeholder cinza claro
    _placeholder: {
      color: 'gray.400',
    },
    
    // Estado de Foco (clicado)
    _focus: {
      borderColor: 'blue.500',
      boxShadow: '0 0 0 1px token(colors.blue.500)', // Usa a função token do Panda para o outline sutil
    },
    
    // Estado Desabilitado
    _disabled: {
      backgroundColor: 'gray.50',
      borderColor: 'gray.200',
      color: 'gray.400',
      cursor: 'not-allowed',
    },
    
    // Estado de Erro / Inválido
    _invalid: {
      borderColor: 'red.500',
      _focus: {
        borderColor: 'red.500',
        boxShadow: '0 0 0 1px token(colors.red.500)',
      }
    }
  },
});

export const Input = styled('input', inputRecipe);