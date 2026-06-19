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
      fx: { width: '46px', height: '46px', fontSize: 'md' },
      lg: { width: '16', height: '16', fontSize: 'lg' },
      xl: { width: '24', height: '24', fontSize: '2xl' },
    },
    // 1. Adicionamos a nova variante de borda aqui
    hasBorder: {
      true: {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'blue.500', // Altere para a cor desejada do seu design system
      }
    }
  },
  defaultVariants: {
    size: 'md',
    // Não precisamos definir hasBorder aqui, por padrão ele será undefined (falso)
  }
});

const avatarImageRecipe = cva({
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
  }
});

// 2. Adicionamos a propriedade opcional na Interface
interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fx';
  hasBorder?: boolean; // Propriedade opcional para a borda
}

export const AvatarRoot = styled('div', avatarRecipe);
export const AvatarImage = styled('img', avatarImageRecipe);

// 3. Recebemos e repassamos a prop no componente React
export function Avatar({ src, alt, initials, size = 'md', hasBorder }: AvatarProps) {
  return (
    // Repassamos a prop hasBorder para o AvatarRoot
    <AvatarRoot size={size} hasBorder={hasBorder}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <span>{initials}</span>
      )}
    </AvatarRoot>
  );
}