export default {
    namespaced: true,
    state: {
        isLogin: false,
    },
    mutations: {
        CHANGE_STATE(state, stus) {
            state.isLogin = stus;
        }
    },
    actions: {
        userLogin({ commit }, { username, password }) {
            console.log(username)
            // 调用接口
            return new Promise((resolve, reject) => {
                if(username == "张三" && password == "123456") {
                    commit("CHANGE_STATE", true);
                    resolve();
                }else{
                    reject();
                }
            })
        },
        userLogout({ commit }) {
            return new Promise(resolve => {
                commit("CHANGE_STATE", false);
                resolve();
            })
        }
    }
}