import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const avatarRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full', // Círculo perfeito
    backgroundColor: 'gray.200',
    color: 'gray.700',
    fontWeight: 'bold',
    overflow: 'hidden', // Garante que a imagem não vaze do círculo
    flexShrink: 0, // Impede que o avatar seja esmagado em layouts Flexbox
  },
  variants: {
    size: {
      sm: { width: '8', height: '8', fontSize: 'xs' },
      md: { width: '10', height: '10', fontSize: 'sm' },
      lg: { width: '16', height: '16', fontSize: 'lg' },
      xl: { width: '24', height: '24', fontSize: '2xl' },
    }
  },
  defaultVariants: {
    size: 'md',
  }
});

// A imagem que vai dentro do contêiner
const avatarImageRecipe = cva({
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Faz a imagem preencher o espaço sem distorcer
  }
});

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Restringimos para os tamanhos exatos da sua recipe
}

// Criamos os dois elementos
export const AvatarRoot = styled('div', avatarRecipe);
export const AvatarImage = styled('img', avatarImageRecipe);

// Componente React simples para juntar os dois de forma amigável
export function Avatar({ src, alt, initials, size = 'md' }: AvatarProps) {
  return (
    <AvatarRoot size={size}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <span>{initials}</span>
      )}
    </AvatarRoot>
  );
}