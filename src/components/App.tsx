import { FC, useEffect, useState } from "react"
import { DuckType, getDucks } from "../services/duck"
import CleanseButton from "./debug/CleanseButton"

type Props = {}

const App: FC<Props> = props => {
  const [ducks, setDucks] = useState<DuckType[]>([])
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0)

  useEffect(() => {
    console.log('Rendering ducks')
  })

  useEffect(() => {
    getDucks().then(setDucks)
  }, [])

  useEffect(() => {
    const i = setInterval(() => {
      setSecondsElapsed(last => secondsElapsed+1)
    }, 1000)

    return () => {
      clearInterval(i)
    }
  }, [])

  return (<>
  <main>
    <h1>Sarastia 180 Agile Business Enterprise Resource Planner</h1>

    <p>Sovellusta on käytetty <strong>{secondsElapsed}</strong> sekuntia</p>

    {ducks.map((duck) => <div key={duck.id}>{duck.lastName}</div>
    )}

  </main>

  <footer>
    <CleanseButton />
  </footer></>)
}

export default App
