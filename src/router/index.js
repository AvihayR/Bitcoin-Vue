import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import Stats from '../pages/Stats.vue'
import Signup from '../pages/Signup.vue'

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
      name: 'Contact Details',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:_id?',
      name: 'Contact Edit',
      component: ContactEdit
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})

export default router
