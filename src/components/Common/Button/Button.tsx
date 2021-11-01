import { ButtonContainer } from "./buttonStyles";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style,
  type,
  className,
}) => {
  return (
    <ButtonContainer
      style={style}
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
