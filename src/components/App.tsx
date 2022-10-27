import { FC, useEffect, useState } from "react"
import { Outlet } from "react-router"
import useDuckStore from "../services/state"
import "./App.css"
import { spinnerClass } from "./App.css"
import CleanseButton from "./debug/CleanseButton"
import Spinner from "./debug/Spinner"
import IndexPage from "./IndexPage"

type Props = {}

const App: FC<Props> = props => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0)
  const getDucks = useDuckStore(state => state.getDucks)
  const isSpinningLikeTheWind = useDuckStore(state => state.spinLikeTheWind) > 0

  useEffect(() => {
    console.log('Rendering ducks')
  })

  useEffect(() => {
    getDucks()
  }, [])

  useEffect(() => {
    const i = setInterval(() => {
      setSecondsElapsed(last => last+1)
    }, 1000)

    return () => {
      clearInterval(i)
    }
  }, [])

  return (<>
  <main>
    <div className={spinnerClass}>{isSpinningLikeTheWind && <Spinner />}</div>
    <h1>Sarastia 180 Agile Business Enterprise Resource Planner</h1>
    <p>Sovellusta on käytetty <strong>{secondsElapsed}</strong> sekuntia</p>
    <Outlet />
  </main>

  <footer>
    <CleanseButton />
  </footer></>)
}

export default App
