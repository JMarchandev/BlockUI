// import { Form } from "react-bootstrap";

// export const BUIRange = () => {
//   return (
//     <>
//       <Form.Range />
//     </>
//   );
// };

// export default BUIRange;

interface Props {
  value?: any;
  onChange?: any;
}

const BUIRange = ({ value, onChange }: Props) => {
  return (
    <div className="custom-range-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="custom-range"
      />
    </div>
  );
};

export default BUIRange;
