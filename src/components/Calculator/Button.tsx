import React from 'react';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  variant?: 'default' | 'operator' | 'action';
  className?: string;
}

export function Button({ value, onClick, variant = 'default', className = '' }: ButtonProps) {
  const baseStyles = "h-16 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95";
  const variantStyles = {
    default: "bg-white/80 hover:bg-white/90 text-gray-800",
    operator: "bg-pink-100/80 hover:bg-pink-100/90 text-pink-600",
    action: "bg-pink-500/90 hover:bg-pink-500 text-white"
  };

  return (
    <button
      onClick={() => onClick(value)}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {value}
    </button>
  );
}