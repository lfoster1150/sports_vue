import Axios from 'axios'

export const BASE_URL = 'http://localhost:5000/api'

const Client = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${window.location.origin}`
      : 'http://localhost:5000/api'
})

export default Client
