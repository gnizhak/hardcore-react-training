import { style } from "@vanilla-extract/css"
import { vars } from "../theme.css"

export const duckClass = style({
  border: "4px solid black",
  padding: vars.space.small,
  borderRadius: "8px"
})

export const maleClass = style({
  backgroundColor: "darkgreen",
  color: "white"
})

export const femaleClass = style({
  backgroundColor: "rgb(106, 71, 31)",
  color: "white"
})

export const buttonClass = style({
  marginLeft: vars.space.small
})
