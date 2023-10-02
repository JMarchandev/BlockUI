import { Form, InputGroup } from 'react-bootstrap';
import { BUIText as Text } from '../typography/text';

interface Props {
  id?: string;
  label: string;
  type?: 'email' | 'text' | 'url' | 'search';
  placeholder: string;
  value?: string;
  isValid?: boolean;
  validationMessage?: string;
  disabled?: boolean;
  icon?: JSX.Element | null;
  iconPosition?: 'left' | 'right';
}

export const BUITextInput = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  isValid,
  validationMessage = '',
  disabled,
  icon,
  iconPosition = 'right',
}: Props) => {
  const Icon = icon;

  return (
    <Form.Group className="mb-3">
      <Form.Label className="text-secondary font-size-16 font-weight-500 line-height-normal">
        {label}
      </Form.Label>
      <InputGroup>
        {Icon && iconPosition === 'left' && (
          <InputGroup.Text className={`with-icon-left`}>{Icon}</InputGroup.Text>
        )}

        <Form.Control
          id={id}
          className={`font-size-16 font-weight-400 line-height-normal border-${
            iconPosition === 'right' ? 'end' : 'start'
          }-0 ${Icon ? `with-icon-${iconPosition}` : ''}`}
          type={type}
          value={value}
          placeholder={placeholder}
          isInvalid={isValid}
          disabled={disabled}
        />
        {Icon && iconPosition === 'right' && (
          <InputGroup.Text className={`with-icon-right ${disabled ? "disabled" : ""}`}>{Icon}</InputGroup.Text>
        )}
      </InputGroup>

      {isValid !== undefined && validationMessage && (
        <Text
          className="font-size-14 font-weight-400 mt-2"
          color={isValid ? 'success' : 'danger'}
        >
          {validationMessage}
        </Text>
      )}
    </Form.Group>
  );
};

export default BUITextInput;
