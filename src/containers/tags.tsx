import { BUITag as Tag } from "../components/tag";
import { BUITagColorsList } from "../constants";
import { BUITitle as Title } from "../components/typography/title";

export const Tags = () => {
  return (
    <div>
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O4.&nbsp;</span>
        <span>Tags</span>
      </Title>
      <div className="mb-5 d-flex flex-wrap">
        {BUITagColorsList.map((color) => (
          <Tag className="me-2" color={color.name} text={"Label"} />
        ))}
      </div>
    </div>
  );
};
