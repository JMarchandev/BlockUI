import { Card } from "react-bootstrap";
import { BUIColors } from "../../types/theme";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  bgColor?: BUIColors;
  width?: string;
  height?: string;
  color?: BUIColors;
  className?: string;
  style?: React.CSSProperties;
}

export const BUISolidCard = ({
  children,
  bgColor = "primary",
  className,
  style,
  width,
  height = width,
}: Props) => {
  return (
    <Card
      className={`solid bg-${bgColor} ${className}`}
      style={{
        ...style,
        width,
        height,
        
      }}
    >
      {children}
    </Card>
  );
};

export default BUISolidCard;
