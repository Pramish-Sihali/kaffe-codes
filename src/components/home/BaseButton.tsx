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
      relative overflow-hidden
      text-white
      px-8 py-3.5
      flex items-center justify-center gap-2
      transition-all duration-300 ease-out
      group
      disabled:opacity-50
      disabled:cursor-not-allowed
      ${variant === 'list' ? 'rounded-full' : variant === 'text' ? 'bg-green-600 hover:bg-green-700 rounded font-medium' : 'rounded-none bg-green-700'}
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
  
        {variant !== 'text' && (
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
        )}
      </button>
    );
  };
  
  export default BaseButton;