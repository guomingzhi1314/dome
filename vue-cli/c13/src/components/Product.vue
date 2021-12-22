<template>
	<div class="product">
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
					<li><a href="#/Login">登录</a></li>
					<span>用户名：{{$store.state.Login.uName}}&nbsp;</span>
				</ul>
			</div>
		</div>
		<div class="wrap">
			<div class="card active" style="background-image: url(../../static/21.jpg);">
				<h3>hill</h3>
			</div>
			<div class="card" style="background-image: url(../../static/22.jpg);">
				<h3>town</h3>
			</div>
			<div class="card" style="background-image: url(../../static/23.jpg);">
				<h3>lemon</h3>
			</div>
			<div class="card" style="background-image: url(../../static/24.jpg);">
				<h3>stuonia</h3>
			</div>
			<div class="card" style="background-image: url(../../static/25.jpg);">
				<h3>island</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product',
	data () {
		   return {
			
		   }
	}
}
	window.onload = function(){
		var wrap = document.getElementsByClassName("wrap")[0];
		var cards = wrap.getElementsByClassName("card");
		
		for(var i = 0;i<cards.length;i++){
			cards[i].addEventListener("mouseover",function(){
				removeActive();
				this.className = "card active";
			})
		}
		function removeActive(){
			for(var i = 0;i<cards.length;i++){
				cards[i].className = "card";
			}
		}
	}
</script>

<style>
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
.wrap{
	display: flex;
	width: 90vw;
	margin-left: 100px;
	margin-top: 80px;
}
.card{
	background-size: auto 100%;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50px;
	color: #fff;
	flex: 0.5;
	cursor: pointer;
	height: 80vh;
	position: relative;
	margin: 10px;
	transition: flex 0.7s cubic-bezier(0.05,0.6,0.4,0.9);
}
.card h3{
	font-size: 20px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	margin: 0;
	transition: opacity 0s ease-in 0s;
}
.card.active{
	/* 通过弹性布局方式 改变每个盒子的收缩 */
	flex: 5;
}
.card.active h3{
	opacity: 1;
	transition: opacity 0.3s ease-in 0.4s;
}
@media (max-width:500px) {
	.wrap{
		width: 100vw;
	}
	.card:nth-child(4){
		display: none;
	}
	.card:nth-child(5){
		display: none;
	}
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
