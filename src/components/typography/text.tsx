import { BUIColors } from "../../types/theme";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  style?: React.CSSProperties;
  color?: BUIColors;
}

export const BUIText = ({
  children,
  className,
  style,
  color = "primary",
}: Props) => {
  return (
    <p className={`text-${color} ${className} m-0 p-0`} style={style}>
      {children}
    </p>
  );
};

export default BUIText;
