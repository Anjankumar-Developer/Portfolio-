import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${className} ${icon ? 'with-icon' : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;