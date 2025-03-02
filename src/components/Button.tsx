import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C7B0CC]';
  
  const variantClasses = {
    primary: 'bg-[#2D3647] text-white hover:bg-gradient-to-r hover:from-[#C7B0CC] hover:via-[#FFB3CD] hover:to-[#E5DEFF] hover:text-[#2D3647]',
    secondary: 'bg-gradient-to-r from-[#C7B0CC] via-[#FFB3CD] to-[#E5DEFF] text-[#2D3647]',
    outline: 'border-2 border-[#2D3647] text-[#2D3647] hover:bg-gradient-to-r hover:from-[#C7B0CC] hover:via-[#FFB3CD] hover:to-[#E5DEFF] hover:border-transparent'
  };
  
  const sizeClasses = {
    small: 'text-sm px-4 py-2',
    medium: 'text-base px-6 py-3',
    large: 'text-lg px-8 py-4'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const hoverEffect = 'hover:transform hover:scale-105';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${hoverEffect} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;