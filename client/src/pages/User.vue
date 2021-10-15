<template>
  <v-container fluid class="d-flex flex-row flex-wrap justify-space-around">
    <!-- <PlayerCard
      v-for="player in players"
      :key="player.player.id"
      :player="player"
      @selectPlayer="selectPlayer"
      @favoritePlayer="favoritePlayer"
    /> -->
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import { RemovePlayerFromUser } from '../services/PlayerServices'
// import { RemoveTeamFromUser } from '../services/TeamServices'
// import FavoritePlayerCard from '../components/FavoritePlayerCard.vue'
// import FavoriteTeamCard from '../components/FavoriteTeamCard.vue'

export default {
  name: 'User',
  data: () => ({
    players: null
  }),
  components: {
    // FavoritePlayerCard,
    // FavoriteTeamCard
  },
  computed: {
    ...mapState({
      user: state => state.user,
      authenticated: state => state.authenticated,
      userFavoriteTeams: state => state.userFavoriteTeams,
      userFavoritePlayers: state => state.userFavoritePlayers,
    })
  },
  methods: {
    //...mapActions(['removeTeamFromUserFavorites','removePlayerFromUserFavorites']),
    selectTeam(teamId) {
      console.log(teamId)
      //this.$router.push(`/player/${playerId}`)
    },
    selectPlayer(playerId) {
      console.log(playerId)
      //this.$router.push(`/player/${playerId}`)
    },
    // async removeFavoritePlayer(player) {
    //   const data = {
    //     "name": player.name,
    //     "image": `https://media.api-sports.io/football/players/${player.id}.png`,
    //     "api_id": player.id,
    //     "user_id": this.user.id
    //   }
    //   const res = await RemovePlayerFromUser(data)
    //   this.removePlayerFromUserFavorites(res)
    // }
  },
  async mounted() {
  }

}
</script>