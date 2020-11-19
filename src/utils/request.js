import axios from "axios";
import NProgress from "nprogress";
import store from "@/store";
import { Message } from "element-ui";
import router from "@/router";

NProgress.configure({ showSpinner: false });

const request = axios.create({
  // http://192.168.5.7:8080
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 12000,
  header: {
    "content-type": "application/json"
  }
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    NProgress.start();
    console.log(config);
    return config;
    // config.headers["token"] = store.state.token;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    console.log(response);
    const { code, msg } = response.data;
    NProgress.done();
    if (code != 0) {
      Message({
        type: "success",
        duration: 5 * 1000,
        message: msg
      });
      return response.data;
    }
    return response.data;
  },
  error => {
    console.log(error.response);
    switch (error.response.status) {
      case 400:
        Message({
          type: "error",
          duration: 5 * 1000,
          message: "参数错误！！！"
        });
        // console.log((store.state.user.isLogin = false));
        // store.state.user.isLogin = false;
        // store._actions["user/logout"]();
        break;
      case 500:
        Message({
          type: "error",
          duration: 5 * 1000,
          message: "服务器错误"
        });
        break;
      case 401:
        Message({
          type: "error",
          duration: 5 * 1000,
          message: "登录失效，请重新登录"
        });
        store.state.user.isLogin = false;
        router.push("/login");
        break;
      case 404:
        Message({
          type: "error",
          duration: 5 * 1000,
          message: "资源不存在"
        });
        break;
      case 503:
        Message({
          type: "error",
          duration: 5 * 1000,
          message: "服务器重启中，请稍候"
        });
        break;
    }
    NProgress.done();
    return Promise.reject(error);
  }
);

export default request;
