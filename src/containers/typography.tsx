import { Col, Row } from "react-bootstrap";
import { BUISolidCard as Card } from "../components/cards/solidCard";
import { BUIText as Text } from "../components/typography/text";
import { BUITitle as Title } from "../components/typography/title";

export const Typography = () => {
  return (
    <div className="mb-5">
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O1.&nbsp;</span>
        <span>Typeface</span>
      </Title>

      <Row className="d-flex align-items-center">
        <Col sm={12} md={5} lg={4} className="mb-3">
          <Card width={'320px'} className="m-auto m-sm-0">
            <Text className="font-size-200 d-flex m-auto" color="bright">
              Aa
            </Text>
          </Card>
        </Col>
        <Col sm={12} md={7} lg={8} className="px-md-5">
          <div className="mb-3">
            <Text className="bold-600 font-size-20 text-bui-muted line-height-28">
              Open Source
            </Text>
            <Text className="bold-600 font-size-34 text-bui-primary line-height-44">
              IBM Plex Sans
            </Text>
          </div>

          <div className="mb-3">
            <Text className="bold-400 font-size-20 text-bui-primary">
              Regular
            </Text>
            <Text className="bold-400 font-size-20 text-bui-primary">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </Text>
          </div>

          <div className="mb-3">
            <Text className="bold-600 font-size-20 text-bui-primary">
              Semi-bold
            </Text>
            <Text className="bold-800 font-size-20 text-bui-primary">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Typography;
