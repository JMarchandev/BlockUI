import { Color } from "react-bootstrap/esm/types";

export type CustomColor =
  | "primary"
  | "secondary"
  | "accent"
  | "warning"
  | "success"
  | "danger"
  | "bui-muted"
  | "shade"
  | "tint"
  | "bright"
  | string;

export type BUIColors = CustomColor | Color;
