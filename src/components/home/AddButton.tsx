import { ShoppingBag } from 'lucide-react';
import BaseButton from './BaseButton';

interface AddButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  icon?: boolean;
  variant?: 'default' | 'list';
}

const AddButton = ({
  text,
  onClick,
  className = "",
  disabled = false,
  icon = true,
  variant = 'default'
}: AddButtonProps) => {
  return (
    <BaseButton 
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      className={className}
    >
      {icon && <ShoppingBag className="w-5 h-5" />}
      <span className="text-sm font-medium uppercase">{text}</span>
    </BaseButton>
  );
};

export default AddButton;