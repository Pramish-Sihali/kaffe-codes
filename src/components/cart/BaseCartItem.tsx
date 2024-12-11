interface BaseCartItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }
  
  const BaseCartItem = ({ children, className = '', ...props }: BaseCartItemProps) => {
    return (
      <div 
        className={`
          flex items-center justify-between
          py-4 px-8
          hover:bg-gray-50
          border-b border-gray-200 last:border-b-0
          transition-colors duration-200
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export const CartQuantityButton = ({
    children,
    onClick,
    disabled,
    className = ''
  }: {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        h-8 w-8
        flex items-center justify-center
        text-base text-gray-600
        hover:bg-gray-50
        disabled:opacity-50
        disabled:cursor-not-allowed
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
  
  export default BaseCartItem;