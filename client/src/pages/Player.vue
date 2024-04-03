<template>
  <v-container  v-if="data" fluid >
    <v-row class="d-flex justify-center align-center" elevation="10">
      <v-card
        color="primary"
        dark
        width="80%"
        min-width="450"
      >
        <div 
          class="d-flex flex-no-wrap justify-space-between align-center mx-5"
          >
          <div>
            <v-card-title
              class="text-h5 text-truncate"
              v-text="data.player.name"
            ></v-card-title>
            <v-card-subtitle v-text="data.statistics[0].team.name"></v-card-subtitle>
          </div>
          <v-spacer></v-spacer>
          <v-avatar
            class="ma-3"
            size="100"
            tile
          >
            <v-img
            class="rounded-circle" 
            contain 
            :src="data.player.photo"
            elevation="10"
            ></v-img>
          </v-avatar>
        </div>
        <PlayerData :player="data.player"/>
      </v-card>
    </v-row>
  </v-container>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mapCacheActions } from 'vuex-cache';
// import { AddPlayerToUser } from '../services/PlayerServices'
import PlayerData from '../components/PlayerData.vue'
// import Form from '../components/Form.vue'
// import GoalsChart from '../charts/GoalsChart'

export default {
  name: 'Player',
  data: () => ({
    isFavorite: false,
    data: null,
    // goalRadarData: {
    //   labels: [],
    //   goalDataTeam: [],
    //   goalDataOpp: [],
    // },
    // tableData: {
    //   tableItems: [],
    //   tableHeaders: [],
    // },
    // loadCharts: false
  }),
    components: {
      PlayerData
  //   Form,
  //   GoalsChart,
  //   PlayerStatsStats
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
    ...mapCacheActions(['FETCH_QUERY_BY_PLAYER_ID']),
    async getPlayerStats(teamId) {
      let results = await this.FETCH_QUERY_BY_PLAYER_ID(teamId)
      this.data = results
      // this.setGoalsChartData()
      this.isFavorite = await this.checkFavorites()
    },
    
    // setGoalsChartData() {
    //   let formattedLabels = Object.keys(this.data.goals.for.minute)
    //   this.goalRadarData.labels = formattedLabels.map(label => label +=" Minutes")
    //   for (const time in this.data.goals.for.minute) {
    //     const total = this.data.goals.for.minute[time].total
    //     if (!total) {
    //       this.goalRadarData.goalDataOpp.push(0)
    //     } else {
    //       this.goalRadarData.goalDataTeam.push(total)
    //     }
    //   }
    //   for (const time in this.data.goals.against.minute) {
    //     const total = this.data.goals.against.minute[time].total
    //     if (!total) {
    //       this.goalRadarData.goalDataOpp.push(0)
    //     } else {
    //       this.goalRadarData.goalDataOpp.push(total)
    //     }
    //   }
    //   this.loadCharts = true
    // },

    // async favoritePlayer(player) {
    //   const data = {
    //     "name": player.name,
    //     "image": `https://media.api-sports.io/football/players/${player.id}.png`,
    //     "api_id": player.id,
    //     "user_id": this.user.id
    //   }
    //   const res = await AddPlayerToUser(data)
    //   this.addPlayerToUserFavorites(res.data.payload)
    //   this.favorites.push[res.data.payload]
    // },

    // favArray(){
    //   let newArray = []
    //   if (this.userFavoritePlayers.length > 0 && this.players) {
    //     this.userFavoritePlayers.forEach(obj => {
    //       this.players.forEach(obj2 =>{
    //         if(parseFloat(obj.api_id) === obj2.player.id) {
    //           newArray.push(obj2.player.id)
    //         }
    //       })
    //     })
    //   }
    //   return newArray
    // },
    checkFavorites() {
      if (this.userFavoritePlayers.length > 0) {
        for (let i = 0; i < this.userFavoritePlayers.length; i++) {
          if(parseFloat(this.userFavoritePlayers[i].api_id) === this.data.player.id) {
            return true
          }
        }
        }
      return false
    }
  },
  watch: {
    userFavoritePlayers: async function () {
      this.isFavorite = await this.checkFavorites()
    }
  },
  async mounted() {
    this.getPlayerStats(this.$route.params.player_id)
  }
}

</script>

<style scoped>
  .rounded-circle{
    border: 3px solid rgb(80, 80, 80);
  }
</style>CC