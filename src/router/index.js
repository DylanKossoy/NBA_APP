import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Join from '../views/Join.vue'
import SignIn from '../views/SignIn.vue'
import Hub from '../views/Hub.vue'
import Profile from '../views/Profile.vue'
import Betting from '../views/Betting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/hub',
      name: 'hub',
      component: Hub,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/betting',
      name: 'betting',
      component: Betting,
    },
  ],
})

export default router
