import BUIAlert from "../components/alert";
import { BUITitle as Title } from "../components/typography/title";

const colors: {
  name: "bright" | "primary" | "accent" | "warning" | "success" | "danger";
  text: string;
}[] = [
  {
    name: "bright",
    text: "A bright alert flash for dark backgrounds, which never lose the contrast.",
  },
  {
    name: "primary",
    text: "A dark alert flash for bright backgrounds, which never lose the contrast.",
  },
  {
    name: "accent",
    text: "A primary alert flash that looks pretty nice.",
  },
  {
    name: "warning",
    text: "A warning alert flash that never sucks.",
  },
  {
    name: "success",
    text: "A success alert flash, which never lose the contrast.",
  },
  {
    name: "danger",
    text: "An error alert flash that nobody loves.",
  },
];

export const Alerts = () => {
  return (
    <div className="mb-5">
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O6.&nbsp;</span>
        <span>Alerts</span>
      </Title>
      {colors.map((color) => (
        <BUIAlert color={color.name} content={color.text}></BUIAlert>
      ))}
    </div>
  );
};
export default Alerts;
