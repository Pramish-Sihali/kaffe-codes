interface BaseOrderItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }
  
  const BaseOrderItem = ({ children, className = '', ...props }: BaseOrderItemProps) => {
    return (
      <div 
        className={`
          py-4
          hover:bg-gray-50
          border-t border-gray-200 first:border-t-0
          transition-colors duration-200
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default BaseOrderItem;