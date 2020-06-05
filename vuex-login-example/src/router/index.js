import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [
        
        {
            path: '/home',
            name: 'home',
            component: () => import('../components/HomeWorld.vue'),
        },

        {
            path: '/',
            name: 'login',
            component: () => import('../components/LoginWorld.vue'),
        }

    ]
})


