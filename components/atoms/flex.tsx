import { styled } from '../../styled-system/jsx';

/**
 * Flex já nasce sendo um Box com display="flex".
 * Ideal para alinhar itens em linha ou coluna.
 */
export const Flex = styled('div', {
  base: {
    display: 'flex',
  },
});