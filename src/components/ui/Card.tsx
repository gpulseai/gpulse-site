import { cn } from '../../lib/utils';
import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  highlighted?: boolean;
}

export function Card({ className, highlighted = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-surface p-8 transition-all duration-300',
        highlighted
          ? 'border-cyan/40 shadow-[0_0_30px_-5px_var(--color-cyan-glow)]'
          : 'border-border hover:border-cyan/30 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
