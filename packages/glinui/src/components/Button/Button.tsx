import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';  // Added variant prop
  disabled?: boolean;                 // Added disabled prop
  onClick?: () => void;               // Made onClick optional
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', disabled = false, onClick }) => {
  // Define base classes for the button
  const baseClasses = 'px-4 py-2 rounded text-white';
  
  // Apply variant-specific styles
  const variantClasses = variant === 'primary' 
    ? 'bg-blue-500 hover:bg-blue-700' 
    : 'bg-gray-500 hover:bg-gray-700';
  
  // Apply disabled-specific styles
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${disabledClasses}`}  // Combine all styles
      disabled={disabled}  // Apply disabled attribute if true
      onClick={onClick}  // Trigger onClick if provided
    >
      {label}
    </button>
  );
};

export default Button;
