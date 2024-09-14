import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  const baseClasses = 'px-4 py-2 rounded text-white';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-700'
      : 'bg-gray-500 hover:bg-gray-700';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
