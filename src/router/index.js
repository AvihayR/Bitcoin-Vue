import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import Stats from '../pages/Stats.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/contact/:_id',
      name: 'contact details',
      component: ContactDetails
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    }
  ]
})

export default router
