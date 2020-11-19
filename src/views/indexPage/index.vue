<template>
    <div>

        <!-- 轮播 -->
        <div class="carousel">
            <div class="book-guide">
                <h4>物品</h4>
                <ul class="book-class">
                    <li><a href="#article" title="article">图书 / 文具 / 课件</a></li>
                    <li><a href="#">手机 / 电脑 / 平板</a></li>
                    <li><a href="#">水杯 / 茶具 / 勺子</a></li>					
                    <li><a href="#">篮球 / 足球 / 品乓球</a></li>						
                </ul>
            </div><!-- book-guide -->
            <div class="slider">
                <div class="slider-img">
                    <ul class="slider-img-ul">
                        <li><img src="../../assets/images/carousel/5.jpg"></li>
                        <li><img src="../../assets/images/carousel/1.jpg"></li>
                        <li><img src="../../assets/images/carousel/2.jpg"></li>
                        <li><img src="../../assets/images/carousel/3.jpg"></li>
                        <li><img src="../../assets/images/carousel/4.jpg"></li>
                        <li><img src="../../assets/images/carousel/5.jpg"></li>
                    </ul>
                </div>
            </div><!-- 	slider -->
        </div><!-- carousel -->

        <!-- 图书分类 -->
        <div id="container">
            <div class="book-part" id="article">
                <h3 class="book-title"><a href="#">| 图书 / 文具 / 课件</a></h3>
                <ul class="book-lists">
                    <li class="book-list" v-for="item in 5" :key="item">
                        <a href="#" class="book-pic">
                            <img src="../../assets/images/book-list/article/1.jpg">
                        </a>
                        <a href="#" class="book-info">
                            <h5 class="book-name">白夜行</h5>
                            <span class="book-detail">东野圭吾 著 / 南海出版公司 / 2008-09 / 平装</span>
                        </a>
                        <span class="book-price">￥12.9
                            <a @click="loadDetail" class="book-buy" style="cursor: pointer">查看详情</a>
                        </span>
                    </li>
			
                </ul><!--  book-list end -->
            </div><!--  book-part end -->

            <div class="book-part" id="technology">
                <h3 class="book-title"><a href="#">| 工程科技</a></h3>
                <!-- <a class="more" href="#"> > > 更多</a> -->
                <ul class="book-lists">
                    <li class="book-list" v-for="item in 6" :key="item">
                        <a href="#" class="book-pic">
                            <img src="../../assets/images/book-list/article/1.jpg">
                        </a>
                        <a href="#" class="book-info">
                            <h5 class="book-name">白夜行</h5>
                            <span class="book-detail">东野圭吾 著 / 南海出版公司 / 2008-09 / 平装</span>
                        </a>
                        <span class="book-price">￥12.9
                            <a @click="loadDetail" class="book-buy" style="cursor: pointer">查看详情</a>
                        </span>
                    </li>
                </ul><!--  book-list end -->
            </div><!--  book-part end -->		
        </div> <!-- container end-->
        <footer>
            <a href="#">2020-2021 二手物品交易</a>
            <!-- <a href="#">意见反馈&nbsp;&nbsp;&nbsp;联系我们&nbsp;&nbsp;&nbsp;隐私权声明&nbsp;&nbsp;&nbsp;使用条款</a> -->
        </footer>
    </div>
</template>

<script>
    export default {
        methods: {
            loadDetail() {
                this.$router.push({
                    name: "detail",
                    params: {id: 2}
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
</style>