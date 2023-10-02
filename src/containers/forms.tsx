import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ChevronLeftIcon, SearchIcon, WarningIcon } from "../components/icons";

import { BUITextInput as TextInput } from "../components/fields/textInput";
import { BUITitle as Title } from "../components/typography/title";
import { BUIDropdown as Dropdown } from "../components/fields/dropdown";
import { BUITextArea as TextArea } from "../components/fields/textarea";
import { BUINumberInput as NumberInput } from "../components/fields/numberInput";
import { BUIRadioCheckbox as RadioCheckbox } from "../components/fields/radioCheckbox";
// import { BUISwitch as Switch } from "../components/fields/switch";
// import BUIRange from "../components/fields/range";

export const Forms = () => {
  useEffect(() => {
    const inputElement = document.getElementById("input-focussed");
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div className="mb-5">
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O3.&nbsp;</span>
        <span>Inputs</span>
      </Title>

      <Row className="mb-3">
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextInput
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation error message"}
            isValid={false}
          />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextInput
            value="Value"
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation success message"}
            isValid={true}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextInput
            id="input-focussed"
            value="Value"
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation error message"}
            isValid={false}
          />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextInput
            value="Value"
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation error message"}
            isValid={false}
            disabled={true}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextInput
            id="input-focussed"
            value={undefined}
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation error message"}
            icon={<SearchIcon />}
          />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextInput
            value="Value"
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation success message"}
            isValid={true}
            icon={<ChevronLeftIcon />}
          />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextInput
            value="Value"
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation error message"}
            isValid={false}
            icon={<WarningIcon />}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={10} sm={6} md={4} lg={4}>
          <Dropdown label="Label" title="Dropdown" />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4} className="mb-3">
          <Dropdown label="Label" title="Dropdown" show />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4} className="mb-3">
          <Dropdown label="Label" title="Dropdown" disabled />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextArea
            label="Label"
            placeholder="Placeholder"
            validationMessage={"Validation error message"}
            isValid={false}
          />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextArea
            label="Label"
            placeholder="Placeholder"
            value="Value"
            validationMessage={"Validation success message"}
            isValid={true}
          />
        </Col>
        <Col xs={10} sm={6} md={4} lg={4}>
          <TextArea
            label="Label"
            placeholder="Placeholder"
            value="Value"
            disabled
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={10} sm={6} md={4} lg={3} className="mb-4">
          <NumberInput />
        </Col>
        <Col xs={10} sm={6} md={4} lg={3} className="mb-4">
          <NumberInput id="number-input-focus-minus" value={2} />
        </Col>
        <Col xs={10} sm={6} md={4} lg={3} className="mb-4">
          <NumberInput id="number-input-focus-plus" value={2} />
        </Col>
        <Col xs={10} sm={6} md={4} lg={3} className="mb-4">
          <NumberInput disabled />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox label="Label" />
        </Col>
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox checked label="Label" />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox disabled label="Label" />
        </Col>
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox disabled checked label="Label" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox type="radio" label="Label" />
        </Col>
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox type="radio" checked label="Label" />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox type="radio" disabled label="Label" />
        </Col>
        <Col xs={6} sm={3} lg={2}>
          <RadioCheckbox type="radio" disabled checked label="Label" />
        </Col>
      </Row>

      {/* <Row className="mb-5">
        <Col>
          <BUIRange />
        </Col>
        <Col>
          <BUIRange />
        </Col>
      </Row> */}
    </div>
  );
};

export default Forms;
