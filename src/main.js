import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faArrowLeft, faPerson, faMobileScreen, faAt, faMagnifyingGlass, faTrash, faFloppyDisk, faPen } from '@fortawesome/free-solid-svg-icons'
import store from '../store'

library.add(faArrowRight, faArrowLeft, faPerson, faMobileScreen, faAt, faMagnifyingGlass, faTrash, faFloppyDisk, faPen)


const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
