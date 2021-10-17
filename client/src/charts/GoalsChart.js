// CommitChart.js
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  props: ['data'],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.data.labels,
        datasets: [
          {
            label: 'Team Goals',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: this.data.goalDataTeam
          },
          {
            label: 'Opponent Goals',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: this.data.goalDataOpp
          }
        ]
      },
      this.options
    )
  }
}
