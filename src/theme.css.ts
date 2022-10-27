import { createGlobalTheme } from "@vanilla-extract/css";
import { m } from "framer-motion";

export const vars = createGlobalTheme(":root", {
  space: {
    small: "1em",
    medium: "2em"
  }
})

