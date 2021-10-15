<template>
  <v-container fluid class="d-flex flex-row flex-wrap justify-space-around">
    <PlayerCard
      v-for="player in players"
      :key="player.player.id"
      :player="player.player"
      @selectPlayer="selectPlayer"
      @favoritePlayer="favoritPlayer"
    />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { mapCacheActions } from 'vuex-cache';
import {AddTeamToUser} from '../services/TeamServices'
import PlayerCard from '../components/PlayerCard.vue'

export default {
  name: 'Team',
  data: () => ({
    players: null
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
    ...mapCacheActions(['FETCH_QUERY_BY_TEAM_ID']),
    async getTeamPlayers(teamId) {
      let results = await this.FETCH_QUERY_BY_TEAM_ID(teamId)
      this.players = results
    },
    selectPlayer(playerId) {
      console.log(playerId)
      //this.$router.push(`/player/${playerId}`)
    },
    // async favoritePayer(player) {
    //   const data = {
    //     "name": team.name,
    //     "image": `https://media.api-sports.io/football/teams/${team.id}.png`,
    //     "api_id": team.id,
    //     "user_id": this.user.id
    //   }
    //   const res = await AddTeamToUser(data)
      
    //   console.log(res)
    // }
  },
  async mounted() {
    // getPLayers
    this.getTeamPlayers(this.$route.params.team_id)
  }

}
</script>