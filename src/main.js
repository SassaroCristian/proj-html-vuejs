import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faMagnifyingGlass,
    faBagShopping,
    faBars,
    faCheck,
    faXmark,
    faClock,
    faPhone,
    // faTwitter,
    // faSquareFacebook,
    // faInstagram,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faMagnifyingGlass,
    faBagShopping,
    faBars,
    faCheck,
    faXmark,
    faClock,
    faPhone,
    // faTwitter,
    // faSquareFacebook,
    // faInstagram,
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


