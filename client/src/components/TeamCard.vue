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
          @click="selectTeam(team.id)"
        ></v-img>
      </v-avatar>
      <v-row class="ma-2 d-flex  space-between">
        <v-btn 
        color="primary"
        icon
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn 
        icon
        color="primary"
        v-if="authenticated && user"
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
  name: 'TeamCard',
  props: {
    team: {}
  },
  methods: {
    selectTeam(teamId) {
      this.$emit('selectTeam', teamId)
    },
    favoriteTeam(teamId) {
      this.$emit('favoriteTeam', teamId)
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