import { BUIColors } from "./types/theme";

export type BUIColorListType = { name: BUIColors; value: string }

export const BUIColorsList: BUIColorListType[] = [
  { name: "Primary", value: "#2c2738" },
  { name: "Secondary", value: "#756f86" },
  { name: "Accent", value: "#0880ae" },
  { name: "Warning", value: "#f2ac57" },
  { name: "Success", value: "#14a38b" },
  { name: "Danger", value: "#ff7171" },
  { name: "Bui-muted", value: "#7c9cbf" },
  { name: "Bright", value: "#ffffff" },
  { name: "Shade", value: "#dbe2ea" },
  { name: "Tint", value: "#ebf4f8" },
];

export const BUITagColorsList: BUIColorListType[] = [
  { name: "Bright", value: "#ffffff" },
  { name: "Primary", value: "#2c2738" },
  { name: "Accent", value: "#0880ae" },
  { name: "Warning", value: "#f2ac57" },
  { name: "Success", value: "#14a38b" },
  { name: "Danger", value: "#ff7171" },
];