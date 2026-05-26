import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import { cva, cx, type RecipeVariantProps } from '@/styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'semibold',
    cursor: 'pointer',
    transition: 'background-color 0.2s, color 0.2s',
    _disabled: { opacity: 0.6, cursor: 'not-allowed' },
  },
  variants: { /* ... */ },
  defaultVariants: { /* ... */ }
});

type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;

// 1. O Pulo do Gato no TypeScript: Um tipo Genérico <T>
// Por padrão, T é um 'button', mas pode ser 'a' ou um componente (como o Link do Next)
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T> & ButtonVariants; 
// ComponentPropsWithoutRef extrai as props corretas (href para 'a', onClick para 'button')

// 2. O Componente React
export const Button = <T extends ElementType = 'button'>({ 
  as, 
  variant, 
  size, 
  className, 
  children, 
  ...props 
}: ButtonProps<T>) => {
  
  // Se não passar o 'as', ele assume que é uma tag <button>
  const Component = as || 'button';

  return (
    <Component 
      className={cx(buttonRecipe({ variant, size }), className)} 
      {...props}
    >
      {children}
    </Component>
  );
};