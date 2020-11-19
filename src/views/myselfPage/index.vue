<template>
    <div>
        <!-- 导航条 -->
	<nav class="navbar">
		<div class="nav-menu">
			<ul class="menu">
				<li><div class="active" style="color: #fff; cursor: pointer" @click="back">返回首页</div></li>
			</ul>				
		</div><!-- nav-menu -->

		<form class="nav-search">
			
		</form>

		<div class="nav-info">
			<a href="#" class="username">chieminchan</a>
			<a class="bookshelf">||&nbsp;&nbsp;&nbsp;我的书架</a>
			<a class="logout" @click="logout">[ 退 出 ]</a>
		</div>
	</nav>

	<!-- 个人信息 -->
	<div class="person-info">
		<p>
			<a href="#" class="name">chieminchan</a>
		</p>
		<p>
			<a href="#" class="sex">女</a><img src="../../assets/images/girl.png" id="sex-pic">
		</p>
		<p class="set">
			<a class="edit" @click="faBu">发布闲置</a>
			<a class="edit">编辑个人主页</a>
			<img class="set-icon" src="../../assets/images/setting.png">
		</p>
		<div class="contact">
			<p>
				<span class="call-icon"></span>
				联&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系：
				<a href="#" class="num">13222221111</a></p>
			<p>
				<span class="address-icon"></span>
				住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<a href="#"  class="address">22栋B区777</a>
			</p>
			<p>
				<span class="major-icon"></span>
				年级专业：<a  href="#" class="major">15级信息管理与信息系统</a>
			</p>
		</div>
	</div><!-- person-info-end -->

	<!-- 书摊和求书选项卡 -->
	<div class="card-btn">
		<span title="sell-book" id="sell-btn" class="active">我的书摊</span>
		<span title="ask-book" id="ask-btn">我的求书</span>
		<p class="upload-icon"></p>
	</div>

	<!-- 我的书摊 -->
	<div id="container">
		<div id="sell-book">
			<ul class="book-ul">
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/1.jpg">
					</p>
					<h5 class="book-name">白夜行</h5>
					<form>
						<input type="text" name="book-id" class="book-id" value="2">
					</form>
					<span class="delete-btn"></span>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="original-price">￥52.0</span></p>
						<p>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="book-price">￥12.9</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
						<p>商品描述：<span class="book-desc">有点水印,但并不影响阅读</span></p>
					</div>
				</li>
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/1.jpg">
					</p>
					<h5 class="book-name">白夜行</h5>
					<form>
						<input type="text" name="book-id" class="book-id" value="3">
					</form>
					<span class="delete-btn"></span>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="original-price">￥52.0</span></p>
						<p>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="book-price">￥12.9</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
						<p>商品描述：<span class="book-desc">有点水印,但并不影响阅读</span></p>
					</div>
				</li>

				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/1.jpg">
					</p>
					<h5 class="book-name">白夜行</h5>
					<form>
						<input type="text" name="book-id" class="book-id" value="4">
					</form>
					<span class="delete-btn"></span>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="original-price">￥52.0</span></p>
						<p>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="book-price">￥12.9</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
						<p>商品描述：<span class="book-desc">有点水印,但并不影响阅读</span></p>
					</div>
				</li>

				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/1.jpg">
					</p>
					<h5 class="book-name">白夜行</h5>
					<form>
						<input type="text" name="book-id" class="book-id" value="5">
					</form>
					<span class="delete-btn"></span>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="original-price">￥52.0</span></p>
						<p>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="book-price">￥12.9</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
						<p>商品描述：<span class="book-desc">有点水印,但并不影响阅读</span></p>
					</div>
				</li>
				
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/1.jpg">
					</p>
					<h5 class="book-name">白夜行</h5>
					<form>
						<input type="text" name="book-id" class="book-id" value="1">
					</form>
					<span class="delete-btn"></span>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="original-price">￥52.0</span></p>
						<p>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span class="book-price">￥12.9</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
						<p>商品描述：<span class="book-desc">有点水印,但并不影响阅读</span></p>
					</div>
				</li>
			</ul>
		</div> <!-- sell-book-end -->

		<!-- 我的求书 -->
		<div id="ask-book">
			<ul class="book-ul">
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/2.jpg">
					</p>
					<h5 class="book-name">简爱</h5>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：<span class="book-author">夏洛特·勃朗特</span></p>
						<p>出&nbsp; 版&nbsp;社：<span class="book-press">世界图书出版公司</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
					</div>
				</li>
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/2.jpg">
					</p>
					<h5 class="book-name">简爱</h5>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：<span class="book-author">夏洛特·勃朗特</span></p>
						<p>出&nbsp; 版&nbsp;社：<span class="book-press">世界图书出版公司</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
					</div>
				</li>
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/2.jpg">
					</p>
					<h5 class="book-name">简爱</h5>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：<span class="book-author">夏洛特·勃朗特</span></p>
						<p>出&nbsp; 版&nbsp;社：<span class="book-press">世界图书出版公司</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
					</div>
				</li>
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/2.jpg">
					</p>
					<h5 class="book-name">简爱</h5>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：<span class="book-author">夏洛特·勃朗特</span></p>
						<p>出&nbsp; 版&nbsp;社：<span class="book-press">世界图书出版公司</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
					</div>
				</li>
				<li class="book-list">
					<p class="book-pic">
						<img src="img/book-list/article/2.jpg">
					</p>
					<h5 class="book-name">简爱</h5>
					<span class="edit-btn"></span>
					<div class="book-detail">
						<p>作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者：<span class="book-author">夏洛特·勃朗特</span></p>
						<p>出&nbsp; 版&nbsp;社：<span class="book-press">世界图书出版公司</span></p>
						<p>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相：<span class="book-condition">八五品</span></p>
					</div>
				</li>												
			</ul>
		</div><!-- ask-book-end-->		
	</div> <!-- container-end -->

	<footer>
		<a href="#">©2018-2019 二手书交易</a>
		<a href="#">意见反馈&nbsp;&nbsp;&nbsp;联系我们&nbsp;&nbsp;&nbsp;隐私权声明&nbsp;&nbsp;&nbsp;使用条款</a>
	</footer>
    </div>
</template>

<script>
    export default {
        methods: {
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
			},
			back() {
				this.$router.push({path: "/"})
			},
			faBu() {

			}
        },
    }
</script>

<style lang="scss" scoped>
@import "@/styles/myself.scss";
</style>