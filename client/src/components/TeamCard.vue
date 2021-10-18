<template>
<v-hover>
  <template v-slot:default="{ hover }">
  <v-card
  fluid
    color="#1E1E1E"
    dark
    :elevation="hover ? 24 : 6"
    width="200px"
    class="ma-2 rounded-xl"
    
  >
    <div class="d-flex flex-column align-center div-pointer" @click="selectTeam(team.id)">
      <div>
        <v-card-title
          class="text-h6 text-truncate "
          v-text="team.name"
        ></v-card-title>
      </div>
      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img 
          contain 
          :src="`https://media.api-sports.io/football/teams/${team.id}.png`"
          
        ></v-img>
      </v-avatar>
    </div>
    <div class="d-flex flex-column align-center">
      <v-card-actions>
        <v-row class="ma-2 d-flex  space-between">
          <v-btn 
          color="primary"
          icon
          @click="selectTeam(team.id)"
          >
            <v-icon>mdi-information</v-icon>
          </v-btn>
          <v-btn 
          icon
          color="primary"
          v-if="authenticated && user"
          @click="favoriteTeam(team)"
          z-indes="10"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-row>
      </v-card-actions>
    </div>
  </v-card>
  </template>
</v-hover>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TeamCard',
  props: {
    team: {}
  },
  methods: {
    selectTeam(teamId) {
      this.$emit('selectTeam', teamId)
    },
    favoriteTeam(team) {
      this.$emit('favoriteTeam', team)
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
  .div-pointer {
    cursor: pointer;
  }
</style>