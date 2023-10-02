import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { ChevronLeftIcon } from "../icons";
import { BUIText as Text } from "../typography/text";

interface Props {
  label?: string;
  title: string;
  show?: boolean;
  disabled?: boolean;
}

interface DropdownItemProps {
  title: string;
}

export const BUIDropdown = ({ label, title, show, disabled }: Props) => {
  const [isOpen, setIsOpen] = useState(show || false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {label && (
        <Text className="text-secondary font-size-16 font-weight-500 line-height-normal mb-2">
          {label}
        </Text>
      )}
      <Dropdown show={isOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle
          className={`${
            disabled ? "disabled" : ""
          } w-100 text-start d-flex align-items-center justify-content-between`}
          variant="light"
        >
          <Text className="bold-400 font-size-16 text-bui-primary">
            {title}
          </Text>
          <ChevronLeftIcon
            className={`text-accent chevron-icon ${isOpen ? "open" : "closed"}`}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <DropdownItem title="Item" />
          <DropdownItem title="Item" />
          <DropdownItem title="Item" />
          <DropdownItem title="Item" />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const DropdownItem = ({ title }: DropdownItemProps) => {
  return (
    <Dropdown.Item className="d-flex align-items-center font-size-16 font-style-normal font-weight-400 text-secondary">
      {title}
    </Dropdown.Item>
  );
};

export default BUIDropdown;
