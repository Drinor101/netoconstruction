import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-medium overflow-hidden ${
        hover 
          ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-large hover:-translate-y-1' 
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
