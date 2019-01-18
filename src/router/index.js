import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: resolve => require(['../pages/index.vue'], resolve),
        children: [{
            path: '/',
            component: resolve => require(['../pages/chats/chats.vue'], resolve)
        }, {
            path: '/contacts',
            component: resolve => require(['../pages/contacts/contacts.vue'], resolve)
        }, {
            path: '/news',
            component: resolve => require(['../pages/news/news.vue'], resolve)
        }, {
            path: '/discover',
            component: resolve => require(['../pages/discover/discover.vue'], resolve)
        }, {
            path: '/me',
            component: resolve => require(['../pages/me/me.vue'], resolve)
        }]
    }, {
        path: '/login',
        component: resolve => require(['../pages/login.vue'], resolve)
    }]
})

export default router