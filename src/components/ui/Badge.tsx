import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import type { HTMLAttributes } from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-surface border border-border text-muted',
        cyan: 'bg-cyan/10 border border-cyan/20 text-cyan',
        green: 'bg-green/10 border border-green/20 text-green',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}

export { badgeVariants };
