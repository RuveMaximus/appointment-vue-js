import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AppointView from '@/views/Appointment/AppointView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AppointConfirmView from '@/views/Appointment/ConfirmView.vue'
import InfoView from '@/views/Appointment/InfoView.vue'
import ChatView from '@/views/Appointment/ChatView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/profile', component: ProfileView },
    { path: '/appoint', component: AppointView },
    { path: '/appoint/:id', component: AppointConfirmView },
    { path: '/appoint/:id/info', component: InfoView },
    { path: '/appoint/:id/chat', component: ChatView },
  ]
})

export default router
