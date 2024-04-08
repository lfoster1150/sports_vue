// import { Vue } from 'vue'
// import App from './App.vue'
// import {vuetify} from './plugins/vuetify'
// import router from './router'
// import store from './store/index'

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')