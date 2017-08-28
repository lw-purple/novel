import Vue from 'vue'
import Router from 'vue-router'
const layout = r => { return require.ensure([], () => r(require('@/pages/layout')), 'layout') }
const home = r => { return require.ensure([], () => r(require('@/pages/home')), 'home') }
const fantasy = r => { return require.ensure([], () => r(require('@/pages/fantasy')), 'fantasy') }
const xiuzhen = r => { return require.ensure([], () => r(require('@/pages/xiuzhen')), 'xiuzhen') }
const urban = r => { return require.ensure([], () => r(require('@/pages/urban')), 'urban') }
const history = r => { return require.ensure([], () => r(require('@/pages/history')), 'history') }
const other = r => { return require.ensure([], () => r(require('@/pages/other')), 'other') }
Vue.use(Router)


let router = new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        name: 'Layout',
        component: layout,
        children: [{
                path: '/home',
                name: 'Home',
                component: home,
                meta: {
                    login: false
                }
            },
            {
                path: '/fantasy',
                name: 'Fantasy',
                component: fantasy,
                meta: {
                    login: false
                }
            },
            {
                path: '/xiuzhen',
                name: 'Xiuzhen',
                component: xiuzhen,
                meta: {
                    login: false
                }
            },
            {
                path: '/urban',
                name: 'Urban',
                component: urban,
                meta: {
                    login: false
                }
            },
            {
                path: '/history',
                name: 'History',
                component: history,
                meta: {
                    login: false
                }
            },
            {
                path: '/other',
                name: 'Other',
                component: other,
                meta: {
                    login: true
                }
            },
        ]
    }]
})
router.beforeEach((to, from, next) => {
    let bl = to.matched.some((item) => {
        return item.meta.login
    })
    console.log(bl)
    next()
})

export default router