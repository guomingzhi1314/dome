<template>
	<div class="news">
		<div class="header">
			<div class="nav">
				<ul class="firstul">
					<li><a href="#/main">首页</a></li>
					<li><a href="#/product">产品页</a>
						<ul class="secondul">
							<li><a href="#">学校简介</a></li>
							<li><a href="#">产品</a></li>
						</ul>
					</li>
					<li><a href="#/news">新闻页</a>
						<ul class="secondul">
							<li><a href="#">最新新闻</a></li>
							<li><a href="#">新闻联播</a></li>
						</ul>
					</li>
					<li><a href="#/about">关于我们</a></li>
					<li><a href="#/message">留言</a></li>
					<li><a href="#">招生信息</a>
						<ul class="secondul">
							<li><a href="#">本科专业</a></li>
							<li><a href="#">学校章程</a></li>
						</ul>
					</li>
					<li><a href="#">人才招聘</a></li>
					<li><a href="#">合作办学</a></li>
					<li><a href="#/message">登录</a></li>
				</ul>
			</div>
		</div><div class="header">	
			<div class="nav">
				<ul class="firstul">
					<li><a href="#/main">首页</a></li>
					<li><a href="#/product">产品页</a>
						<ul class="secondul">
							<li><a href="#">学校简介</a></li>
							<li><a href="#">产品</a></li>
						</ul>
					</li>
					<li><a href="#/news">新闻页</a>
						<ul class="secondul">
							<li><a href="#">最新新闻</a></li>
							<li><a href="#">新闻联播</a></li>
						</ul>
					</li>
					<li><a href="#/about">关于我们</a></li>
					<li><a href="#/message">留言</a></li>
					<li><a href="#">招生信息</a>
						<ul class="secondul">
							<li><a href="#">本科专业</a></li>
							<li><a href="#">学校章程</a></li>
						</ul>
					</li>
					<li><a href="#">人才招聘</a></li>
					<li><a href="#">合作办学</a></li>
					<li><a href="#/Login">登录</a></li>
					<span>用户名：{{$store.state.Login.uName}}&nbsp;</span>
				</ul>
			</div>
		</div>
		<div class="ne">
			<h1>待更新</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'News',
	data () {
		   return {
			
		   }
	}
}
</script>

<style>
.ne{
	margin-top: 80px;
	margin-left: 400px;
}
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
	/* box-sizing: border-box; */
}
body{
	/* padding: 20px; */
	display: flex;
	align-items: center;
	/* justify-content: center; */
	background-color: #B6B4B4;
}
/* a{
	font-size: 10px;
} */
/* 导航 */
.a1{
	text-decoration: none;
	text-align: center;
}
.header{
	border-bottom: solid 1px #5098db;
}
.firstul{
	background-color: #00D6B2;
}
.nav{
	position: fixed;
	top: 35px;
	margin-left: 312px;
	z-index: 10;
}
.firstul li{
	display: inline-block;
	list-style: none;
	width: 120px;
	height: 30px;
	line-height: 30px;
	padding: 10px;
	text-align: center;
	transition: background-color 0.5s linear;
}
.firstul li a{
	color: #57579e;
	text-decoration: none;
	transition: color 0.5s ease-in-out;
}
.firstul li:hover{
	background-color: #eed7b9;
}
.firstul li:hover a{
	color: #514e4e;
}
.secondul{
	background-color: #c7e1ea;
	position: absolute;
	width: 180px;
	margin-left: -10px;
	margin-top: 10px;
	opacity: 0;
	transform: translateY(0px);
	transition: transform 0.5s linear,opacity 0.5s ease-in-out;
}
.firstul li:hover .secondul{
	opacity: 1;
	transform: translateY(10px);
}
.secondul li{
	display: block;
	height: 20px;
	line-height: 20px;
	width: 89%;
}
.secondul li:hover{
	background-color: #a0b9c9;
}
.secondul::before{
	content: "";
	border-color: transparent transparent #c7e1ea transparent;
	border-width: 8px;
	position: absolute;
	bottom: 100%;
	left: 20%;
	border-style: solid;
}
</style>
