<template>
  <v-card
  fluid
    color="#191919"
    dark
    width="150px"
    class="ma-2 pa-1"
  >
    <div class="d-flex flex-column align-center ">
      <div>
        <v-card-subtitle
          v-text="player.player.name"
          class="text-truncate"
        ></v-card-subtitle>
      </div>
      <v-avatar
        class="ma-.5"
        size="100"
        tile
      >
        <v-img
          class="rounded-circle"
          contain 
          :src="`https://media.api-sports.io/football/players/${player.player.id}.png`"
          
        ></v-img>
      </v-avatar> 
      <v-row class="ma-2 d-flex  space-between">
        <v-btn 
        color="primary"
        icon
        @click="selectPlayer(player.player.id)"
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn 
        icon
        color="primary"
        v-if="authenticated && user"
        @click="favoritePlayer(player.player)"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PlayerCard',
  props: ["player", "teamLogo"],
  methods: {
    selectPlayer(playerId) {
      this.$emit('selectPlayer', playerId)
    },
    favoritePlayer(player) {
      this.$emit('favoritePlayer', player)
    }
    },
  computed: {
    ...mapState({
      user: state => state.user,
      authenticated: state => state.authenticated,
    })
  },
}
</script>

<style scoped>
  .rounded-circle{
    border: 3px solid #04B88B;
  }
</style>