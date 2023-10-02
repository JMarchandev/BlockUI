import { BUIColorsList } from "../constants";

export function getColorBrightness(color: string): number {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  // Calculate the luminosity according to the W3C formula
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

export function getColorValueByName(colorName: string): string | undefined {
  const colorDefinition = BUIColorsList.find((def) => def.name === colorName);
  return colorDefinition?.value.slice(1);
}

export function determineTextColor(bgColor: string) {
  const backgroundColor = getColorValueByName(bgColor);

  const backgroundBrightness = getColorBrightness(backgroundColor || "#FFFFFF");
  return backgroundBrightness > 0.5 ? "primary" : "bright";
}
