import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Register from './pages/Register'
// import store from './store/index'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/register', component: Register, name: 'Register' }
]

Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })

// router.beforeEach((to, from, next) => {
//   if (
//     (to.name !== 'Login' || to.name !== 'Register') &&
//     !store.getters.isAuthenticated
//   )
//     next({ name: 'Home' })
//   else next()
// })

export default router
