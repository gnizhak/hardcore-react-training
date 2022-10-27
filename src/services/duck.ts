import axios from "axios"
import { getBaseUrl } from "./instance"

export type DuckType = {
  id: string
  birthDay: string
  wingedness: "r" | "l"
  salary: number
  isAdmin: boolean
  email: string
  firstName: string
  lastName: string
  age: number
  gender: 0 | 1 | 2
  migratesForWinters: boolean
  isCannibal: boolean
  relatedToCEO: boolean
  isBeingFired?: boolean
}

export type DuckProspectType = Omit<DuckType, "age">
const url = getBaseUrl()

export const getDucks = async (): Promise<DuckType[]> => {
  const response = await axios.get<DuckType[]>(`${url}/duck`)
  return response.data
}

export const fireDuck = async (id: string): Promise<DuckType> => {
  const response = await axios.delete<DuckType>(`${url}/duck/${id}`)
  return response.data
}

export const hireDuck = async (prospect: DuckProspectType): Promise<DuckType> => {
  const response = await axios.post<DuckType>(`${url}/duck`, prospect)
  return response.data
}
