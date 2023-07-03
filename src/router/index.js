import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/pages/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/pages/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () =>
            import ('@/pages/error-page/401'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/application',
        children: [{
            path: 'application',
            component: () =>
                import ('@/pages/application/index'),
            name: 'application',
            meta: { title: 'application', icon: 'dashboard', affix: true }
        }]
    }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    /** when your routing map is too long, you can split it into small modules **/
    // componentsRouter,
    // chartsRouter,
    // nestedRouter,
    // tableRouter,
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router