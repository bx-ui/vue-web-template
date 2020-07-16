import axios from 'axios'
import store from '@/store'
import NProgress from 'nprogress'
import { Message } from 'element-ui';

NProgress.configure({showSpinner: false});

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 12000,
    headers: {
        'context-type': 'application/json',
        'Accept': 'application/json'
    }
})

// 请求拦截器
request.interceptors.request.use(
    config => {
        NProgress.start();
        config.headers['token'] = store.state.token;
        return config;
    },
    error => {
       
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        NProgress.done();
        return response;
    },
    error => {
        // Message.error(error);
        NProgress.done();
        return Promise.reject(error)
    }
)

export default request;