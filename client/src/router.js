import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/register', component: Register, name: 'Register' }
]

Vue.use(VueRouter)

export default new VueRouter({ routes, mode: 'history' })
