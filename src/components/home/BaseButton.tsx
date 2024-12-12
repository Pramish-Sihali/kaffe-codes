import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'list' | 'text';
  children: React.ReactNode;
}

const BaseButton = ({
  variant = 'default',
  className = '',
  children,
  ...props
}: BaseButtonProps) => {
  const baseClasses = `
    bg-green-600 hover:bg-green-700 
    text-white 
    px-8 py-3.5 
    rounded 
    transition-all duration-300 ease-out
    flex items-center justify-center
    group
    relative overflow-hidden
    ${className}
  `;

  return (
    <button
      {...props}
      className={baseClasses}
    >
      <div className="relative z-10 flex items-center gap-2">
        {children}
      </div>

      {/* Hover overlay effects */}
      <>
        <div 
          className="
            absolute inset-0 
            bg-white/20
            transform transition-transform duration-300 ease-out 
            -translate-x-full group-hover:translate-x-0
          " 
        />
        <div 
          className="
            absolute inset-0 -z-10
            bg-green-600
            transform transition-opacity duration-300 ease-out 
            opacity-0 group-hover:opacity-100
          " 
        />
      </>
    </button>
  );
};

export default BaseButton;