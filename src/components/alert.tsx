import { Alert } from "react-bootstrap";
import { CrossIcon } from "./icons";

interface Props {
  content: string;
  className?: string;
  color?: "bright" | "primary" | "accent" | "warning" | "success" | "danger";
  onClose?: () => void;
}

export const BUIAlert = ({
  content,
  className,
  color = "bright",
  onClose,
}: Props) => {
  return (
    <>
      <Alert
        className={`custom-alert ${color} ${className} d-flex justify-content-between align-items-center font-size-18`}
      >
        <div>{content}</div>
        <CrossIcon onClick={onClose} />
      </Alert>
    </>
  );
};

export default BUIAlert;
