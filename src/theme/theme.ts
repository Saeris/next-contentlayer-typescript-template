import { colors } from "./tokens/colors";
import { corners, spacing } from "./tokens/spacing";
import { fonts, sizes, weights } from "./tokens/typography";

export const theme = {
  colors,
  corners,
  fonts,
  sizes,
  spacing,
  weights
};

export type Theme = typeof theme;
