export default [
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "about" */ '@/views/user/userInfo.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('@/views/layout/common.vue'),
        children: [
            {
                path: '/orderList',
                name: 'orderList',
                component: () => import('@/views/order/orderList.vue'),
            }
        ]
    }
]