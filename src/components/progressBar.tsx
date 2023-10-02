import { ProgressBar } from "react-bootstrap";

interface Props {
  value: number;
  animated?: boolean;
  className?: string;
  variant?: "accent" | "warning" | "success" | "danger" | string;
}

export const BUIProgresseBar = ({
  value,
  animated = false,
  className,
  variant = "accent",
}: Props) => {
  return (
    <ProgressBar
      striped={false}
      animated={animated}
      now={value}
      variant={variant}
      className={`custom-progress-bar ${className}`}
    />
  );
};

export default BUIProgresseBar;
