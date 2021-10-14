<template>
    <v-sheet
      class="mx-auto my-2"
      max-width="100"
      @click="selectLeague(league.id)"
    >
      <v-img
        aspect-ratio="1"
        class="grey lighten-2 rounded-circle"
        :src="`https://media.api-sports.io/football/leagues/${league.id}.png`"
        width="100"
      >
      </v-img>
          <v-card-title 
          fluid
          class="text-p mx-auto text--primary"
          v-text="league.name"></v-card-title>
    </v-sheet>
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