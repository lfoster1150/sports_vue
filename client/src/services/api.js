import axios from 'axios'

export const BASE_URL = 'http://localhost:5000'

const Client = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${window.location.origin}`
      : 'http://localhost:5000'
})

const FootballClient = Axios.create({
  baseURL: 'https://v3.football.api-sports.io/teams?id=33',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY
  }
})

export default { Client, FootballClient }
