import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
// Add all icons to the library dynamically
const iconList = Object.keys(solidIcons)
  .filter((key) => key.startsWith('fa')) // Only include FontAwesome icons
  .map((key) => solidIcons[key])
library.add(...iconList)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
