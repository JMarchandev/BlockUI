import { Button } from "react-bootstrap";

interface Props {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "normal" | "full" | "outlined";
}

export const BUIButton = ({
  label,
  onClick,
  className,
  disabled,
  size = "sm",
  variant = "normal",
}: Props) => {
  return (
    <Button
      disabled={disabled}
      className={`font-size-16 custom-btn ${className} ${size} ${variant}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default BUIButton;
