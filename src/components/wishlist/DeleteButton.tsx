import React from "react";
import { Trash } from "lucide-react";

interface DeleteButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 p-2 hover:bg-gray-50 rounded-full transition-colors ${className}`}
    >
      <Trash className="w-5 h-5" />
      {children}
    </button>
  );
};

export default DeleteButton;