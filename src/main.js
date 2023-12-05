import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '../src/assets/js/index.js'

import NavigationApp from './components/NavigationApp.vue'
import HeaderApp from './components/HeaderApp.vue'
import TechnologiesApp from './components/TechnologiesApp.vue'
import AplicationApp from './components/AplicationApp.vue'
import TeamApp from './components/TeamApp.vue'
import WhyApp from './components/WhyApp.vue'
import ChatApp from './components/ChatApp.vue'
import FooterApp from './components/FooterApp.vue'

import HomeView from './views/HomeView.vue'
import TechnologiesView from './views/TechnologiesView.vue'
import AplicationView from './views/AplicationView.vue'
import TeamView from './views/TeamView.vue'
import WhyView from './views/WhyView.vue'
import ChatView from './views/ChatView'

const app = createApp(App)

const router = createRouter({
    routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: TechnologiesView,
    },
    {
      path: '/aplication',
      name: 'aplication',
      component: AplicationView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/why',
      name: 'why',
      component: WhyView,
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    }],
    history: createWebHistory()
})

app.component('navigation-app', NavigationApp)
app.component('header-app', HeaderApp)
app.component('technologies-app', TechnologiesApp)
app.component('aplication-app', AplicationApp)
app.component('why-app', WhyApp)
app.component('team-app', TeamApp)
app.component('chat-app', ChatApp)
app.component('footer-app', FooterApp)

app.use(router)
app.mount('#app')