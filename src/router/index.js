import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import store from "../store";
import { Message } from "element-ui";

Vue.use(VueRouter)


  let routes = [
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: "/",
      redirect: "/indexPage",
      component: () => import("@/views/layout/common.vue"),
      children: [
        {
          path: "/indexPage",
          name: 'indexPage',
          component: () => import("@/views/indexPage/index.vue")
        },
        {
          path: "/askSomething",
          name: 'askSomething',
          component: () => import("@/views/askSomething/index.vue")
        },
        {
          path: "/myServer",
          name: 'myServer',
          component: () => import("@/views/myServer/index.vue")
        },
      ]
    },
    
    
    {

      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/index.vue")
    },

    {
      path: "/myselfPage",
      name: "myselfPage",
      component: () => import("@/views/myselfPage/index.vue")
    },

    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("@/views/detail/index.vue")
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
  if(store.state.user.isLogin) {
    if(to.name == "Login") {
      NProgress.done(); 
      next(from.path);
      
    }else {
      NProgress.done(); 
      next();
    }
  }else {
    if(to.name == "Login") {
      NProgress.done(); 
      next();
    }else {
      NProgress.done(); 
      Message.error("请进行登陆");
      next("/login");
      
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done(); 
})


// 避免重复路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};


export default router
