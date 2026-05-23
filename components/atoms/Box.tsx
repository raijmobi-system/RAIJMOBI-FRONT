import { styled } from '../../styled-system/jsx';

/**
 * Box é o contêiner genérico base.
 * Ele aceita qualquer token do seu tema (bg, p, m, etc) 
 * e pode se transformar em qualquer tag HTML usando a prop 'as'.
 */
export const Box = styled('div');