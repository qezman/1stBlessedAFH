import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  return (
    <div className={`max-w-3xl mb-12 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant={light ? 'gold' : 'gold'}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg ${
            light ? 'text-brand-pale' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
