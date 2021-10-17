<template>
  <v-container>

  <template>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header>Fixture Stats</v-expansion-panel-header>
          <v-expansion-panel-content v-if="data">
            <TeamTable 
              :items="fixturesData"
              :headers="fixturesHeaders"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </template>



  </v-container>
</template>

<script>
import TeamTable from '../components/TeamTable.vue'
export default {
  name: 'TeamStats',
  props: ['data'],
  components:{
    TeamTable
  },
  data: () => ({
    fixturesData: [],
    fixturesHeaders: []
  }),
  methods: {
    setData() {
      this.fixturesData = [
        {
        name: 'Played',
        home: parseFloat(this.data.fixtures.played.home),
        away: parseFloat(this.data.fixtures.played.away),
        total: parseFloat(this.data.fixtures.played.total)
        },
        {
        name: 'Wins',
        home: parseFloat(this.data.fixtures.wins.home),
        away: parseFloat(this.data.fixtures.wins.away),
        total: parseFloat(this.data.fixtures.wins.total)
        },
        {
        name: 'Draws',
        home: parseFloat(this.data.fixtures.draws.home),
        away: parseFloat(this.data.fixtures.draws.away),
        total: parseFloat(this.data.fixtures.draws.total)
        },
        {
        name: 'Losses',
        home: parseFloat(this.data.fixtures.loses.home),
        away: parseFloat(this.data.fixtures.loses.away),
        total: parseFloat(this.data.fixtures.loses.total)
        },
      ]
      this.fixturesHeaders = [
        {
          text: 'Fixtures',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Home', value: 'home', sortable: false },
        { text: 'Away', value: 'away', sortable: false },
        { text: 'Total', value: 'total', sortable: false }
      ]
    }
  },
  mounted() {
    this.setData()
  }
}
</script>