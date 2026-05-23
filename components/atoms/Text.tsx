import { styled } from '../../styled-system/jsx';

/**
 * Componente Text padroniza a tipografia.
 * O padrão é um <p>, mas use 'as="h1"' etc, para SEO.
 */
export const Text = styled('p', {
  base: {
    // Aqui você pode definir a cor de texto padrão da sua aplicação
    color: 'gray.800',
    
    // Se quiser que o texto não quebre de forma feia
    textWrap: 'pretty',
  },
});