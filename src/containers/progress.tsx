import BUIProgresseBar from "../components/progressBar";
import BUISpinner from "../components/spinner";
import { BUITitle as Title } from "../components/typography/title";

export const Progress = () => {
  return (
    <div className="mb-5">
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O7.&nbsp;</span>
        <span>Progress</span>
      </Title>
      <div className="mb-5">
        {["accent", "warning", "success", "danger"].map((color, i) => (
          <div>
            <BUIProgresseBar
              variant={color}
              value={(i + 1) * 25}
              className="mb-4"
            />
          </div>
        ))}
      </div>
      <div className="d-flex">
        {["accent", "warning", "success", "danger"].map((color, i) => (
          <div className="me-3">
            <BUISpinner variant={color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
