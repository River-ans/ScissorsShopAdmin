import { Loader } from './Loader';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  radius?: 'rounded-none' | 'rounded-lg' | 'rounded-full';
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  className,
  radius = 'rounded-lg',
  onClick,
  children,
}) => {
  const baseStyle = `btn ${variant} ${size} ${radius} ${
    fullWidth ? 'w-full' : 'w-fit'
  } ${className}`;

  return (
    <button
      type={type}
      className={baseStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
