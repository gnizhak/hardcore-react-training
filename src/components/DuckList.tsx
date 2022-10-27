import { ascend, descend, prop, sortWith } from "ramda"
import { FC, memo } from "react"
import { DuckType } from "../services/duck"
import Duck from "./Duck"
import { duckClass } from "./Duck.css"

type Props = {
  ducks: DuckType[]
  showConfidentialInformation?: boolean
  fireDuck: (id: string) => void
}

const duckSorter = sortWith<DuckType>([
  descend(prop("lastName")),
  ascend(prop("firstName"))
])


const DuckList: FC<Props> = ({
  ducks,
  showConfidentialInformation = false,
  fireDuck
}) => {
  if(!ducks.length) {
    return <div>Ei ankkoja...</div>
  }
  const sortedDucks = duckSorter(ducks)

  const averageAge = ducks.reduce((acc, d) => acc + d.age, 0) / ducks.length

  return (
  <div>
    {showConfidentialInformation && (
      <p>Ankkoja listalla {ducks.length} kpl, keski-ikä: {averageAge} </p>
    )}

    <ul>
      {sortedDucks.map((duck) => <li key={duck.id}><Duck duck={duck} fireDuck={fireDuck} showConfidentialInformation={showConfidentialInformation}/></li>)}
    </ul>
  </div>
  )
}

export default memo(DuckList)
