import axios from "axios"
import { getBaseUrl } from "./instance"

export type DuckType = {
  id: string
  firstName: string
  lastName: string
  age: number
}

export const getDucks = async (): Promise<DuckType[]> => {
  const url = getBaseUrl()

  const response = await axios.get<DuckType[]>(`${url}/duck`)
  return response.data
}
