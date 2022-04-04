import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  params: {
    apikey: '46fe214d510f93391c1e2955f185d76b'
  }
})
