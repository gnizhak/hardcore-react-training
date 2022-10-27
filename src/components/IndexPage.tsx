import { FC, useMemo } from "react"
import { hireDuck, fireDuck, DuckType } from "../services/duck"
import useDuckStore from "../services/state"
import DuckList from "./DuckList"
import HireDuckForm from "./HireDuckForm"

const isGoodDuck = (duck: DuckType) => {
  return (
    duck.relatedToCEO ||
    (!duck.isCannibal && !(duck.age > 10 && duck.migratesForWinters === true))
  )
}

const IndexPage: FC = () => {
  const hireDuck = useDuckStore((state) => state.hireDuck)
  const fireDuck = useDuckStore((state) => state.fireDuck)
  const ducks = useDuckStore((state) => Object.values(state.ducks))

  const goodDucks = useMemo(() => ducks.filter(isGoodDuck), [ducks])
  const badDucks = useMemo(() => ducks.filter((d) => !isGoodDuck(d)), [ducks])

  return (
    <div>
      <HireDuckForm hireDuck={hireDuck} />

      <h2>Pahat ankat</h2>
      <DuckList ducks={badDucks} fireDuck={fireDuck} />

      <h2>Hyvät ankat</h2>
      <DuckList
        ducks={goodDucks}
        fireDuck={fireDuck}
        showConfidentialInformation={true}
      />
    </div>
  )
}

export default IndexPage
