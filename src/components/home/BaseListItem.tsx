interface BaseListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'default' | 'compact';
  }
  
  const BaseListItem = ({
    children,
    variant = 'default',
    className = '',
    ...props
  }: BaseListItemProps) => {
    const baseClasses = `
      flex items-center justify-between 
      py-4 px-8 
      hover:bg-gray-100 
      transition-colors duration-200 
      w-full
      ${variant === 'compact' ? 'py-3' : 'py-4'}
      ${className}
    `;
  
    return (
      <div className={baseClasses} {...props}>
        {children}
      </div>
    );
  };
  
  export default BaseListItem;