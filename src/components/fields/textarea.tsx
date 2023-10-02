import { Form } from "react-bootstrap";
import { BUIText as Text } from '../typography/text';

interface Props {
  id?: string;
  label: string;
  placeholder: string;
  value?: string;
  isValid?: boolean;
  validationMessage?: string;
  disabled?: boolean;
}

export const BUITextArea = ({
  id,
  label,
  placeholder,
  value,
  isValid,
  validationMessage = "",
  disabled,
}: Props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="text-secondary font-size-16 font-weight-500 line-height-normal">
        {label}
      </Form.Label>

      <Form.Control
        id={id}
        className={`bui-textarea font-size-16 font-weight-400 line-height-normal `}
        as="textarea"
        rows={3}
        value={value}
        placeholder={placeholder}
        isInvalid={isValid}
        disabled={disabled}
      />

      {isValid !== undefined && validationMessage && (
        <Text
          className="font-size-14 font-weight-400 mt-2"
          color={isValid ? "success" : "danger"}
        >
          {validationMessage}
        </Text>
      )}
    </Form.Group>
  );
};

export default BUITextArea;
