import FootballClient from './FootballApi'

require('dotenv').config({
  path: '/.env'
})

export const GetLeagues = async () => {
  // try {
  const res = await FootballClient.get(
    `https://v3.football.api-sports.io/leagues`
  )
  return res.data
  // } catch (error) {
  //   throw error
  // }
}

export const GetLeaguesByCountryCode = async code => {
  // try {
  const res = await FootballClient.get(
    `https://v3.football.api-sports.io/leagues?code=${code}&&season=2021`
  )
  console.log(res)
  return res
  // } catch (error) {
  //   throw error
  // }
}
