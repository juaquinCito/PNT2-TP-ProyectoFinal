import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'
import Dialog from 'primevue/dialog';

//import './style.css'
//import 'bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';


createApp(App)
    .component('Dialog', Dialog)
    .use(createPinia())
    .use(router)
    .mount('#app')
