import { FC, useState } from "react"
import { DuckType } from "../services/duck"

type Props = {}

const App: FC<Props> = props => {
  const [ducks, setDucks] = useState<DuckType[]>([])

  return <main>
    <h1>Sarastia 180 Agile Business Enterprise Resource Planner</h1>
  </main>
}

export default App
