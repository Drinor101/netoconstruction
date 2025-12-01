import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50/50',
    dark: 'bg-slate-900 text-white',
  };

  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 xl:py-28 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
