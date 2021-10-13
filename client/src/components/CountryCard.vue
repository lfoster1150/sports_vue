<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="344"
      @click="selectCountry(country.code)"
    >
      <v-img
        :src="`https://media.api-sports.io/flags/${country.code}.svg`"
        height="200px"
      >
        <v-card-title v-text="country.name"></v-card-title>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: {
    country: {}
  },
  methods: {
    selectCountry(countryId) {
      this.$emit('selectCountry', countryId)
    }
}
}
</script>