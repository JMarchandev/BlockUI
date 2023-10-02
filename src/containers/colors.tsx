import { BUISolidCard as Card } from "../components/cards/solidCard";
import { BUITitle as Title } from "../components/typography/title";
import { BUIText as Text } from "../components/typography/text";
import { BUIColorsList } from "../constants";
import { determineTextColor } from "../utils/colorsFns";
import { Col, Row } from "react-bootstrap";

export const Colors = () => {
  return (
    <div className="mb-5">
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O2.&nbsp;</span>
        <span>Colors</span>
      </Title>

      <Row className="" style={{  }}>
        {BUIColorsList.map((color) => (
          <Col xs={6} sm={4} md={3} lg={2} className="m-4 mt-0">
            <Card
              width="11rem"
              bgColor={color.name.toLowerCase()}
              className="d-flex justify-content-end p-3"
            >
              <div className="">
                <Text
                  className="font-size-15 line-height-20"
                  color={determineTextColor(color.name)}
                >
                  {color.name}
                </Text>
                <Text
                  className="font-size-30 line-height-35"
                  color={determineTextColor(color.name)}
                >
                  {color.value.slice(1).toUpperCase()}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Colors;
