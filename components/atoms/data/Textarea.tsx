import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const textareaRecipe = cva({
  // O Panda permite estender receitas ou apenas repetir a base. 
  // Para manter os componentes independentes e "burros", repetimos a base visual ajustando o necessário.
  base: {
    width: '100%',
    minHeight: '24', // Altura inicial maior que o input
    padding: '3',
    fontFamily: 'sans',
    fontSize: 'sm',
    backgroundColor: 'white',
    borderWidth: '1px',
    borderColor: 'gray.300',
    borderRadius: 'md',
    color: 'gray.900',
    outline: 'none',
    resize: 'vertical', // Permite o usuário aumentar apenas para baixo, sem quebrar o layout lateral
    transition: 'all 0.2s',
    
    _placeholder: { color: 'gray.400' },
    _focus: {
      borderColor: 'blue.500',
      boxShadow: '0 0 0 1px token(colors.blue.500)',
    },
    _disabled: {
      backgroundColor: 'gray.50',
      borderColor: 'gray.200',
      color: 'gray.400',
      cursor: 'not-allowed',
    },
    _invalid: {
      borderColor: 'red.500',
      _focus: { borderColor: 'red.500', boxShadow: '0 0 0 1px token(colors.red.500)' }
    }
  }
});

export const Textarea = styled('textarea', textareaRecipe);