import Vue from 'vue'
import Router from 'vue-router'
const header = r => { return require.ensure([], () => r(require('@/components/header')), 'header') }
const home = r => { return require.ensure([], () => r(require('@/pages/home')), 'home') }
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            components: {
                header: header,
                default: home

            }

        },
        {
            path: '*',
            redirect: { name: 'Home' }
        }
    ]
})