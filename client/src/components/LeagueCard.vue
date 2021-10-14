<template>
  <v-container >
      <v-row  class="d-flex justify-center">
        <v-col cols="10" class="d-flex justify-center">
          <v-card
            color="primary"
            dark
            width="450px"
            min-width="425"
          >
            <div 
              class="d-flex flex-no-wrap justify-space-between"
              
              >
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="league.name"
                ></v-card-title>
                <v-card-subtitle v-text="league.location"></v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="selectLeague(league.id)"
                  >
                    SEE MORE
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img 
                contain 
                :src="`https://media.api-sports.io/football/leagues/${league.id}.png`"
                elevation="10"
                @click="selectLeague(league.id)"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


</template>

<script>
export default {
  name: 'Home',
  props: {
    league: {}
  },
  methods: {
    selectLeague(leagueId) {
      this.$emit('selectLeague', leagueId)
    }
}
}
</script>

<style scoped>
  .v-avatar:hover {
    cursor: pointer;
  }

</style>