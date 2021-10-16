<template>
  <v-container fluid class="d-flex flex-row flex-wrap justify-space-around">
    <PlayerCard
      v-for="player in players"
      :key="player.player.id"
      :player="player"
      @selectPlayer="selectPlayer"
      @favoritePlayer="favoritePlayer"
    />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mapCacheActions } from 'vuex-cache';
import { AddPlayerToUser } from '../services/PlayerServices'
import PlayerCard from '../components/PlayerCard.vue'

export default {
  name: 'Team',
  data: () => ({
    players: null,
    team: null,
    data: null
  }),
  components: {
    PlayerCard
  },
  computed: {
    ...mapState({
      user: state => state.user,
      authenticated: state => state.authenticated,
      userFavoritePlayers: state => state.userFavoritePlayers,
    })
  },
  methods: {
    ...mapActions(['addPlayerToUserFavorites']),
    ...mapCacheActions(['FETCH_QUERY_BY_TEAM_ID']),
    async getTeamPlayers(teamId) {
      let results = await this.FETCH_QUERY_BY_TEAM_ID(teamId)
      this.players = results
    },
    async getTeamData(teamId) {
      let results = await this.FETCH_QUERY_BY_TEAM_ID(teamId)
      this.players = results
    },
    selectPlayer(playerId) {
      console.log(playerId)
      //this.$router.push(`/player/${playerId}`)
    },
    async favoritePlayer(player) {
      const data = {
        "name": player.name,
        "image": `https://media.api-sports.io/football/players/${player.id}.png`,
        "api_id": player.id,
        "user_id": this.user.id
      }
      const res = await AddPlayerToUser(data)
      this.addPlayerToUserFavorites(res)
    }
  },
  async mounted() {

    this.getTeamPlayers(this.$route.params.team_id)
  }

}
</script>