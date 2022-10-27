import React, { ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef, FC, forwardRef, ForwardRefRenderFunction, ReactNode } from "react"
import { buttonClass } from "./Duck.css"

type Props = ComponentPropsWithRef<"button">

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = ({ children, ...rest }) => {
  const classes="custom"
  return (<button {...rest} className={buttonClass}>{children}</button>)
}

export default forwardRef(Button)
