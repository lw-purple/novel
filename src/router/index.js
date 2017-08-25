import Vue from 'vue'
import Router from 'vue-router'
const header = r => { return require.ensure([], () => r(require('@/components/header')), 'header') }
const home = r => { return require.ensure([], () => r(require('@/pages/home')), 'home') }
const fantasy = r => { return require.ensure([], () => r(require('@/pages/fantasy')), 'fantasy') }
const xiuzhen = r => { return require.ensure([], () => r(require('@/pages/xiuzhen')), 'xiuzhen') }
const urban = r => { return require.ensure([], () => r(require('@/pages/urban')), 'urban') }
const history = r => { return require.ensure([], () => r(require('@/pages/history')), 'history') }
const other = r => { return require.ensure([], () => r(require('@/pages/other')), 'other') }
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            components: {
                header: header,
                default: home
            }
        },
        {
            path: '/fantasy',
            name: 'Fantasy',
            components: {
                header: header,
                default: fantasy
            }
        },
        {
            path: '/xiuzhen',
            name: 'Xiuzhen',
            components: {
                header: header,
                default: xiuzhen
            }
        },
        {
            path: '/urban',
            name: 'Urban',
            components: {
                header: header,
                default: urban
            }
        },
        {
            path: '/history',
            name: 'History',
            components: {
                header: header,
                default: history
            }
        },
        {
            path: '/other',
            name: 'Other',
            components: {
                header: header,
                default: other
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})