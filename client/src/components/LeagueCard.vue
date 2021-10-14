<template>
    <v-card
      class="mx-auto my-2"
      max-width="344"
      @click="selectCountry(country.code)"
    >
      <v-img
      class="rounded-circle"
        :src="`https://media.api-sports.io/flags/${country.code}.svg`"
        height="200px"
      >
      </v-img>
          <v-card-title 
          class="text-h4 text--primary"
          v-text="country.name"></v-card-title>
    </v-card>
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