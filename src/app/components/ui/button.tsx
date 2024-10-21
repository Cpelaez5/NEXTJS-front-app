// components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', className, ...props }) => {
  const baseStyles = 'py-2 px-4 font-semibold rounded-lg transition-colors duration-200';
  const variantStyles = variant === 'destructive' ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-500 text-white hover:bg-blue-600';

  return <button className={`${baseStyles} ${variantStyles} ${className}`} {...props} />;
};