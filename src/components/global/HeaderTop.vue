<template>
    <header class="navbar">
        <div class="nav-info">
            <a href="#" class="username">chieminchan</a>
            <a @click="jumpSelf">||&nbsp;&nbsp;&nbsp;我的书架</a>
            <a  class="logout" @click="logout">[ 退 出 ]</a>
        </div> <!-- nav-info -->
        <form class="nav-search">
            <span style="font-size: 30px; font-weight: 800">二手平台交易系统</span>
            <!-- <a href="index.html"><img class="logo" src="../../assets/images/logo2.png"></a> -->
            <!-- <div class="search-form">
                <input type="search" class="searchIn" placeholder="搜图书...">
                <button class="searchBtn">搜索</button>
            </div> -->
        </form>
        <ul class="menu">
            <li><div :class="{active:currentIndex == 1}" @click="changeIndex(1)">首页</div></li>
            <li><div :class="{active:currentIndex == 2}" @click="changeIndex(2)">求购区</div></li>
            <li><div :class="{active:currentIndex == 3}" @click="changeIndex(3)">服务区</div></li>
        </ul>			
    </header>
</template>

<script>
    export default {
        name: "HeaderTop",
        data() {
            return {
                currentIndex: 1
            }
        },
        methods: {
            changeIndex(num) {
                console.log(this.currentIndex)
                this.currentIndex = num;
                
                if(num == 1) {
                    this.$router.push({name: "indexPage"})
                }else if(num == 2) {
                    this.$router.push({name: "askSomething"})
                }else if(num == 3) {
                    this.$router.push({name: "myServer"})
                }
            },
            jumpSelf() {
                this.$router.push({name: "myselfPage"})
            },
            logout() {
                this.$confirm('此操作将退出系统, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch("user/userLogout").then(() => {
                        this.$router.push({name: "Login"})
                    })
                }).catch(() => {})
                
            }
        },
        created() {
           this.currentIndex =  this.$route.path == "/indexPage" ? 1 : this.$route.path == "/askSomething" ? 2 : 3
        }
    }
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
</style>