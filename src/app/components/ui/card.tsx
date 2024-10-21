// components/ui/card.tsx
import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode; // Aquí agregamos children
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 border-b border-gray-200">{children}</div>
);

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children }) => (
  <div className="p-4 border-t border-gray-200">{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm text-gray-600">{children}</p>
);