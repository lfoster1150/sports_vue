<template>
  <v-card
  fluid
    color="#1E1E1E"
    dark
    width="220px"
    class="ma-2"
  >
    <div class="d-flex flex-column align-center">
      <div>
        <v-card-title
          class="text-h6"
          v-text="player.name"
        ></v-card-title>
      </div>
      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img
          class="rounded-circle"
          contain 
          :src="`https://media.api-sports.io/football/players/${player.id}.png`"
          
        ></v-img>
      </v-avatar> 
      <v-row class="ma-2 d-flex  space-between">
        <v-btn 
        color="primary"
        icon
        @click="selectPlayer(player.id)"
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn 
        icon
        color="primary"
        v-if="authenticated && user"
        @click="favoritePlayer(Player)"
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
  props: {
    player: {}
  },
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

</style>