import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'blue';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold', className }) => {
  const variantStyles = {
    gold: 'bg-gold-50 text-gold-600 border border-gold-500/30',
    navy: 'bg-navy-800 text-white',
    blue: 'bg-brand-light text-navy-800 border border-brand-pale',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase',
          variantStyles[variant],
          className
        )
      )}
    >
      {children}
    </span>
  );
};
