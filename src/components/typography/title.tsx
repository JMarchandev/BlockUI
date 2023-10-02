import { BUIColors } from "../../types/theme";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string | JSX.Element | JSX.Element[];
  color?: BUIColors;
  className?: string;
  style?: React.CSSProperties;
}

export const BUITitle = ({
  as = "h1",
  children,
  color = "primary",
  className,
  style,
}: Props) => {
  const TitleComponent = as;

  return (
    <TitleComponent className={`text-${color} ${className}`} style={style}>
      {children}
    </TitleComponent>
  );
};

export default BUITitle;
