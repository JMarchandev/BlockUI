import { Form } from "react-bootstrap";
import { useState } from "react";

interface Props {
  id?: string;
  label: string;
  type?: "radio" | "checkbox";
  disabled?: boolean;
  checked?: boolean;
}

export const BUIRadioCheckbox = ({
  type = "checkbox",
  label,
  id,
  disabled = false,
  checked,
}: Props) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Form.Group className="d-flex align-items-center">
        <Form.Check
          disabled={disabled}
          type={type}
          id={id}
          defaultChecked={checked}
          checked={isChecked}
          className={`mt-0 ${type === "checkbox" ? "custom-checkbox" : ""}`}
          onChange={handleCheckboxChange}
        />
        <Form.Label className="text-secondary font-size-16 font-weight-500 mb-0">
          {label}
        </Form.Label>
      </Form.Group>
    </>
  );
};

export default BUIRadioCheckbox;
