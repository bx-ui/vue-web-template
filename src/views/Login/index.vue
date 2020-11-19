<template>
    <div class="container">
        <div class="login-container">
            <!-- 校园二手物品交易平台 -->
            <h3>校园二手物品交易平台</h3>
            <div>
                <input type="text" name="userName" class="userName" v-model="LoginForm.username" placeholder="学号"><br/>
                <input type="password" name="password" class="password" v-model="LoginForm.password" placeholder="密码"><br/>
                <button class="loginBtn">
                    <div @click="submit">登录</div>
                </button><br/>
            </div>
        </div>
    </div>
</template>

<script>
import { loginIn } from "@/api/user.js"
import axios from "axios"
export default {
    data() {
        return {
            LoginForm: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
        submit() {
            const { username, password } = this.LoginForm;
            this.$store.dispatch("user/userLogin", {username, password}).then(res => {
                this.$router.push({name: "indexPage"})
            }).catch(() => {
                this.$message.error("账号或密码错误");
            })
            // loginIn().then(res => {})
            // axios.get("/api/info")
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    background-image: url(../../assets/images/login2.jpg);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-container{
        width: 450px;
        height: 280px;
        background-color: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
        position: relative;
        box-sizing: border-box;
        h3 {
            font-family: sans-serif;
            font-weight: 600;
            color: #0a7eb3;
            order: 0;
            margin-top: 30px;
            margin-bottom: 6px;
            margin-left: 30%;
            /*align-self: 50%;*/
            /*flex-basis: 60%;*/
            flex-flow: 1;
        }
        .userName{
            height: 40px;
            width: 280px;
            border-radius: 5px;
            border: 1px solid #ccc;
            text-indent: 10px;
            font-size: 15px;
            flex-flow: 1;
            margin-top: 5px;
            margin-left: 19%;
            /*flex-basis: 50%;*/
            /*align-self: 50%;*/
        }
        .password{
            height: 40px;
            width: 280px;
            border-radius: 5px;
            border: 1px solid #ccc;
            text-indent: 10px;	
            margin-top: 20px;
            margin-left: 19%;
            flex-flow: 1;
            /*flex-basis: 50%;*/
        }
        .forgetPass{
            text-decoration: none;
            color:#0a7eb3;
            font-size: 12px;
            position: absolute;
            right: 80px;

        }

        .loginBtn{
            position: relative;
            height: 40px;
            width: 279px;
            border-radius: 5px;
            border: none;
            text-indent: -10px;		
            background-color: #0a7eb3;
            color: white;
            font-size: 16px;
            margin-top: 20px;
            margin-left: 19%;
            cursor: pointer;
            /*flex-basis: 50%;*/
            div {
                color: white;
	            text-decoration: none;
            }
            .loading {
                margin-top: -5px;
                position: absolute;
                right: 10px;
            }
        }
    }
}

</style>