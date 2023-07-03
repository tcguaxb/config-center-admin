import Layout from '@/pages/layout/Layout'

const chartsRouter = {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'Charts',
    meta: {
        title: 'charts',
        icon: 'chart'
    },
    children: [{
            path: 'keyboard',
            component: () =>
                import ('@/pages/application/index'),
            name: 'KeyboardChart',
            meta: { title: 'keyboardChart', noCache: true }
        },
        {
            path: 'line',
            // component: () =>
            //     import ('@/views/charts/line'),
            name: 'LineChart',
            meta: { title: 'lineChart', noCache: true }
        },
        {
            path: 'mixchart',
            // component: () =>
            //     import ('@/views/charts/mixChart'),
            name: 'MixChart',
            meta: { title: 'mixChart', noCache: true }
        }
    ]
}

export default chartsRouter