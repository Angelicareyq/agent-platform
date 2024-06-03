import { createWebHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'
import Questions from './components/Questions.vue'
import Solutions from './components/Solutions.vue'

const routes = [
    { path: '/', name: "ComplaintsSection", component: ComplaintsSection },
    { path: '/questions/:id', name: "Questions", component: Questions },
    { path: '/solutions', name: "Solutions", component: Solutions, props: route => ({ solutionInformation: route.query.solutionInformation }) },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
