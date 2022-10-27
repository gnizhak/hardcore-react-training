import { FC, memo } from "react"
import { DuckType } from "../services/duck"
import { buttonClass, duckClass, femaleClass, maleClass } from "./Duck.css"
import cx from "clsx"
import { Link } from "react-router-dom"

type Props = {
  duck: DuckType
  showConfidentialInformation: boolean
  fireDuck: (id: string) => void
}

const Duck: FC<Props> = (
  { duck,
    showConfidentialInformation = false,
    fireDuck
  }) => {
  const classes = cx(duckClass, {
    [maleClass]: duck.gender === 0,
    [femaleClass]: duck.gender === 1
  })

  return (
  <div className={classes}>
    <Link to={`/duck/${duck.id}`}><strong>{duck.lastName}</strong>, {duck.firstName}{showConfidentialInformation ? ` (${duck.age.toFixed(2)})` : ""}</Link>
    <button
      className={buttonClass}
      disabled={duck.isBeingFired}
      onClick={() => {
        fireDuck(duck.id)
      }}>Vapauta</button>
  </div>)
}

export default memo(Duck)
