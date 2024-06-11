import { createWebHistory, createRouter } from 'vue-router'

import ComplaintsSection from './components/ComplaintsSection.vue'
import Questions from './components/Questions.vue'
import Solutions from './components/Solutions.vue'
import SubComplaints from './components/SubComplaints.vue'

const routes = [
    { path: '/', name: "ComplaintsSection", component: ComplaintsSection },
    { path: '/sub-complainst', name: "SubComplains", component: SubComplaints, props: route => ({ subComplaintsParam: route.query.subComplaintsParam }) },
    { path: '/questions/:id', name: "Questions", component: Questions },
    { path: '/solutions', name: "Solutions", component: Solutions, props: route => ({ solutionInformation: route.query.solutionInformation }) },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
