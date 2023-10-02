import { Badge, Stack } from "react-bootstrap";
import { BUIColors } from "../types/theme";
import { determineTextColor } from "../utils/colorsFns";
import { CrossIcon } from "./icons";

interface Props {
  color: BUIColors;
  text: string;
  className?: string
}

export const BUITag = ({ color, text, className }: Props) => {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge
        pill
        bg={color.toLowerCase()}
        text={determineTextColor(color) === "bright" ? "light" : "dark"}
        className={`d-flex justify-content-between mb-1 ${className} font-size-14`}
      >
        <div className="me-2">{text}</div>
        <CrossIcon />
      </Badge>
    </Stack>
  );
};

export default BUITag;
