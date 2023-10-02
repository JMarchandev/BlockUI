import { BUIButton as Button } from "../components/fields/button";
import { BUITitle as Title } from "../components/typography/title";

export const Buttons = () => {
  return (
    <>
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O5.&nbsp;</span>
        <span>Buttons</span>
      </Title>
      <div className="mb-5">
        <div>
          <Button
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
          />
          <Button
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
          />
          <Button
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
          />
        </div>
        <div>
          <Button
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />
          <Button
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />
          <Button
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />
        </div>
        <div>
          <Button
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />
          <Button
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />
          <Button
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />
        </div>
      </div>
      <div className="mb-5">
        <div>
          <Button
            size="md"
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
          />
          <Button
            size="md"
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
          />
          <Button
            size="md"
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
          />
        </div>
        <div>
          <Button
            size="md"
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />
          <Button
            size="md"
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />
          <Button
            size="md"
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />
        </div>
        <div>
          <Button
            size="md"
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />
          <Button
            size="md"
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />
          <Button
            size="md"
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="">
          <Button
            size="lg"
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
          />

          <Button
            size="lg"
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
          />

          <Button
            size="lg"
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
          />
        </div>
        <div>
          <Button
            size="lg"
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />

          <Button
            size="lg"
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />

          <Button
            size="lg"
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="full"
          />
        </div>
        <div>
          <Button
            size="lg"
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />

          <Button
            size="lg"
            className="me-3 mb-3 focus"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />

          <Button
            size="lg"
            disabled
            className="me-3 mb-3"
            label="Button"
            onClick={() => console.log("click")}
            variant="outlined"
          />
        </div>
      </div>
    </>
  );
};
