import Form from "react-bootstrap/Form";

export const BUISwitch = () => {
  return (
    <Form>
      <Form.Check // prettier-ignore
        disabled={false}
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
        className="custom-switch"
      />
    </Form>
  );
};

export default BUISwitch;
