import { keyframes, style } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { transform: "rotate(270deg)" },
  "51%": { transform: "rotate(270deg)" },
  "100%": { transform: "rotate(0deg)"}
});

export const spinClass = style({
  animationName: rotate,
  animationDuration: "6s",
  animationIterationCount: "infinite"
});
