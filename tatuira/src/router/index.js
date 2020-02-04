import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/detalhes',
        name: 'detalhes',
        component: () =>
            import ('../views/Details.vue'),
        children: [

        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () =>
            import ('../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router