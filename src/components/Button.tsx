import {
  ComponentPropsWithRef, forwardRef,
  ForwardRefRenderFunction
} from "react"
import { buttonClass } from "./Button.css"

type Props = ComponentPropsWithRef<"button">

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, ...rest },
  ref
) => {
  const classes = "custom"
  return (
    <button {...rest} ref={ref} className={buttonClass}>
      {children}
    </button>
  )
}

export default forwardRef(Button)
