import { useEffect, useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { DashIcon, PlusIcon } from "../icons";

interface Props {
  id?: string;
  name?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const BUINumberInput = ({ onChange, id, name, value, disabled }: Props) => {
  const [quantity, setQuantity] = useState(value || 0);

  useEffect(() => {
    if (onChange) onChange(quantity);
  }, [onChange, quantity]);

  return (
    <InputGroup
      id={id}
      className={`number-input ${disabled ? "disabled" : ""}`}
    >
      <InputGroup.Text
        as={!disabled ? Button : undefined}
        onClick={!disabled ? () => setQuantity(quantity - 1) : undefined}
        className="d-flex align-items-center color-accent font-size-25 number-input-btn minus"
      >
        <DashIcon />
      </InputGroup.Text>
      <FormControl
        name={name}
        type="number"
        value={!disabled ? quantity : 0}
        className="number-input-value text-center font-size-16 p-3"
        onChange={
          !disabled ? (e) => setQuantity(Number(e.target.value)) : undefined
        }
      />
      <InputGroup.Text
        as={!disabled ? Button : undefined}
        onClick={!disabled ? () => setQuantity(quantity + 1) : undefined}
        className="d-flex align-items-center color-accent font-size-25 number-input-btn plus"
      >
        <PlusIcon />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default BUINumberInput;
