import { FC, useCallback, useEffect, useState, useMemo } from "react"
import type { DuckType, DuckProspectType } from "../services/duck"
import CleanseButton from "./debug/CleanseButton"
import DuckList from "./DuckList"
import * as duckService from "../services/duck"
import "./App.css"
import HireDuckForm from "./HireDuckForm"

type Props = {}

const isGoodDuck = (duck: DuckType) => {
  return duck.relatedToCEO || !duck.isCannibal && !(duck.age > 10 && duck.migratesForWinters === true)
}


const App: FC<Props> = props => {
  const [ducks, setDucks] = useState<DuckType[]>([])
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0)

  const fireDuck = useCallback(async (id: string) => {
    await duckService.fireDuck(id)
    setDucks(ducks => {
      return ducks.filter(d => d.id !== id)
    })
  }, [setDucks])

  const hireDuck = useCallback(async (prospect: DuckProspectType) => {
    const hiredDuck = await duckService.hireDuck(prospect)
    setDucks(ducks => {
      return [...ducks, hiredDuck]
    })
  }, [setDucks])

  useEffect(() => {
    console.log('Rendering ducks')
  })

  useEffect(() => {
    duckService.getDucks().then(setDucks)
  }, [])

  useEffect(() => {
    const i = setInterval(() => {
      setSecondsElapsed(last => secondsElapsed+1)
    }, 1000)

    return () => {
      clearInterval(i)
    }
  }, [])

  const goodDucks = useMemo(() => ducks.filter(isGoodDuck), [ducks])
  const badDucks = useMemo(() => ducks.filter(d => !isGoodDuck(d)), [ducks])

  return (<>
  <main>
    <h1>Sarastia 180 Agile Business Enterprise Resource Planner</h1>

    <p>Sovellusta on käytetty <strong>{secondsElapsed}</strong> sekuntia</p>

    <HireDuckForm hireDuck={hireDuck} />

    <h2>Pahat ankat</h2>
    <DuckList ducks={badDucks} fireDuck={fireDuck} />

    <h2>Hyvät ankat</h2>
    <DuckList ducks={goodDucks} fireDuck={fireDuck} showConfidentialInformation={true} />
  </main>

  <footer>
    <CleanseButton />
  </footer></>)
}

export default App
