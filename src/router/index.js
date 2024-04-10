import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'titles.home'
        }
    },
    {
        path: '/imprint',
        name: 'Imprint',
        meta: {
            title: 'titles.imprint'
        },
        // route level code-splitting
        // this generates a separate chunk (imprint.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
    },
    {
        path: '/privacy_policy',
        name: 'PrivacyPolicy',
        meta: {
            title: 'titles.privacy_policy'
        },
        // route level code-splitting
        // this generates a separate chunk (imprint.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "imprint" */ '../views/PrivacyPolicy.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // Set Title
    document.title = i18n.t(to.meta?.title)

    next()
})

export default router
