// components/ui/label.tsx
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label className="block text-sm font-medium text-gray-700" {...props}>
      {children}
    </label>
  );
};