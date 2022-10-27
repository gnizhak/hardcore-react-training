import { globalStyle } from "@vanilla-extract/css";
import { none } from "ramda";
import { vars } from "../theme.css";

globalStyle("html", {
  fontFamily: "'Comic Sans MS'",
  background: "linear-gradient(skyblue, lightblue 20%, wheat)"
})

globalStyle("body", {
  padding: vars.space.medium
})

globalStyle("ul", {
  listStyleType: "none",
  margin: 0,
  padding: 0
})

globalStyle("ul li", {
  margin: `${vars.space.small} 0`
})
