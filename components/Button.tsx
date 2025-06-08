
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string; // If the button acts as a link
  arrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  arrow = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-custom-cyan text-white hover:bg-cyan-600 focus:ring-custom-cyan',
    secondary: 'bg-custom-blue-dark text-white hover:bg-gray-700 focus:ring-custom-blue-dark',
    outline: 'border border-custom-blue-dark text-custom-blue-dark hover:bg-custom-blue-dark hover:text-white focus:ring-custom-blue-dark',
    ghost: 'text-custom-cyan hover:bg-custom-cyan/10 focus:ring-custom-cyan',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0L13.5 19.5M21 12H3" />
        </svg>
      )}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={combinedClassName} role="button">
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {content}
    </button>
  );
};
