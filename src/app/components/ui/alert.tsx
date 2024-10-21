// components/ui/alert.tsx
import React from 'react';

interface AlertProps {
  variant?: 'destructive';
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ variant, children }) => {
  const variantStyles = variant === 'destructive' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-blue-100 border-blue-500 text-blue-700';
  
  return (
    <div className={`border-l-4 p-4 ${variantStyles} rounded-md`} role="alert">
      {children}
    </div>
  );
};

export const AlertTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-medium">{children}</strong>
);

export const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="block">{children}</span>
);