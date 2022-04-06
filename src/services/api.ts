import axios from 'axios'

const apikey = import.meta.env.VITE_MARVEL_KEY

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  params: {
    apikey
  }
})
