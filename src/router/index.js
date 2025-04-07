import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Join from '../views/Join.vue'
import SignIn from '../views/SignIn.vue'
import Team from '../views/Team.vue'
import Profile from '../views/Profile.vue'

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
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    }
  ],
})

export default router
