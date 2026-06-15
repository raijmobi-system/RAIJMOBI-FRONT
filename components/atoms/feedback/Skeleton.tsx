import { ElementType, ComponentProps } from 'react';
import { styled } from '../../../styled-system/jsx';
import { cva } from '../../../styled-system/css';

const skeletonRecipe = cva({
  base: {
    backgroundColor: 'gray.200',
    borderRadius: 'md',
  },
  variants: {
    variant: {
      text: { height: '4', width: '100%', borderRadius: 'sm' },
      circular: { borderRadius: 'full' },
      rectangular: { width: '100%', height: '100%' },
    }
  },
  defaultVariants: {
    variant: 'text',
  }
});

const StyledSkeleton = styled('div', skeletonRecipe);

// Extraímos as props automáticas que o Panda gerou para a div estilizada
export interface SkeletonProps extends ComponentProps<typeof StyledSkeleton> {
  as?: ElementType;
}

export const Skeleton = StyledSkeleton as React.ComponentType<SkeletonProps>;