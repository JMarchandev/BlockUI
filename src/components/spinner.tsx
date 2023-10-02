import { Spinner } from "react-bootstrap";

interface Props {
  className?: string;
  variant?: "accent" | "warning" | "success" | "danger" | string;
}

export const BUISpinner = ({ className, variant = "accent" }: Props) => {
  return (
    <Spinner
      variant={variant}
      className={`${className}`}
      animation="border"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default BUISpinner;
