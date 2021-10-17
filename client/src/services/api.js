import Axios from 'axios'

// export const BASE_URL = 'http://localhost:5000/api'

const Client = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_URL
      : 'http://localhost:5000/api'
})

export default Client
