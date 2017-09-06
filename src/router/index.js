import Vue from 'vue'
import Router from 'vue-router'
const layout = r => { return require.ensure([], () => r(require('@/pages/layout')), 'layout') }
const home = r => { return require.ensure([], () => r(require('@/pages/home')), 'home') }
const fantasy = r => { return require.ensure([], () => r(require('@/pages/fantasy')), 'fantasy') }
const xiuzhen = r => { return require.ensure([], () => r(require('@/pages/xiuzhen')), 'xiuzhen') }
const urban = r => { return require.ensure([], () => r(require('@/pages/urban')), 'urban') }
const history = r => { return require.ensure([], () => r(require('@/pages/history')), 'history') }
const other = r => { return require.ensure([], () => r(require('@/pages/other')), 'other') }
const book = r => { return require.ensure([], () => r(require('@/pages/book')), 'book') }
Vue.use(Router)


let router = new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        name: 'Layout',
        component: layout,
        children: [{
                path: '',
                name: 'Home',
                component: home,
                meta: {
                    title: '首页',
                    login: false
                }
            },
            {
                path: '/fantasy',
                name: 'Fantasy',
                component: fantasy,
                meta: {
                    title: '玄幻',
                    login: false
                }
            },
            {
                path: '/xiuzhen',
                name: 'Xiuzhen',
                component: xiuzhen,
                meta: {
                    title: '修真',
                    login: false
                }
            },
            {
                path: '/urban',
                name: 'Urban',
                component: urban,
                meta: {
                    title: '都市',
                    login: false
                }
            },
            {
                path: '/history',
                name: 'History',
                component: history,
                meta: {
                    title: '历史',
                    login: false
                }
            },
            {
                path: '/other',
                name: 'Other',
                component: other,
                meta: {
                    title: '其他',
                    login: true
                }
            }, {
                path: '/:id',
                name: "Book",
                component: book
            }
        ]
    }]
})
router.beforeEach((to, from, next) => {
    let bl = to.matched.some((item) => {
        return item.meta.login
    })
    next()
})
router.afterEach((to, from, next) => {
    to.meta.title ? document.title = to.meta.title : document.title = to.query.title
})
export default router