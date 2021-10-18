import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        // primary: '#04B88B',
        primary: '#038564',
        secondary: '#6B0D1D',
        error: '#D13404'
      },
      light: {
        primary: '#016B4F',
        secondary: '#04B88B',
        error: '#D13404'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
