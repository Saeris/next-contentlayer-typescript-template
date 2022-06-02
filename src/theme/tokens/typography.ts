import "@fontsource/noto-sans";

export const fonts = {
  body: [`Noto Sans`, `-apple-system`, `Helvetica`, `Arial`, `sans-serif`]
} as const;

export const sizes = {
  9: `0.9rem`,
  10: `1rem`,
  11: `1.1rem`,
  12: `1.2rem`,
  13: `1.3rem`,
  14: `1.4rem`,
  18: `1.8rem`,
  24: `2.4rem`,
  36: `3.6rem`,
  48: `4.8rem`
} as const;

export const weights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
} as const;
