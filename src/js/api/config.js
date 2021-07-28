import axios from "axios"
import { API_URL } from "../constants"
const defaultConfig = {
  baseURL: API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
}

export default axios.create(defaultConfig)
