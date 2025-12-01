import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg focus:ring-amber-500 active:bg-amber-800',
    secondary: 'bg-slate-800 hover:bg-slate-900 text-white shadow-md hover:shadow-lg focus:ring-slate-500 active:bg-slate-950',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white focus:ring-amber-500 active:bg-amber-700 active:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
