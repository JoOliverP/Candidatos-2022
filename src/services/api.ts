import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://eleicoes-2022-api.herokuapp.com/candidates/',
})
