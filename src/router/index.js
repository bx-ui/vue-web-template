import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)


  let routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ];

  const requireContent = require.context(
    './',
    true,
    /\.js$/
  )

  requireContent.keys().forEach(filename => {
    console.log(filename);
    if(filename == './index.js') return;
    const routerModule = requireContent(filename);
    routes = [...routes, ...routerModule.default || routerModule];
    console.log(routes, "qqq")
  })





const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})

router.afterEach((to, from) => {
  NProgress.done(); 
})

export default router
