<template>
  <v-container>
    <template>
      <v-data-table
        dense
        hide-default-footer 
        :headers="headers"
        :items="items"
        item-key="name"
        class="elevation-1"
      ></v-data-table>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "TeamTable",
  props: ['headers','items'],
  data: () => ({
      items: this.items,
      headers: this.headers
    }),
  }
</script>

<style scoped>
  .v-data-table {
    border: 3px solid #04B88B;
  }
</style>