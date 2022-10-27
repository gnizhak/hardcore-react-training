import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export
const buttonClass = style({
  borderRadius: "8px",
  padding: vars.space.small,
  cursor: "pointer",
  ":hover": {
    color: "wheat"
  }
})
