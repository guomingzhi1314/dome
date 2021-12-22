<template>
	<div class="main">
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
<!-- 		<h1>您的用户名为</h1>
		<h1>{{$store.state.Login.uName}}</h1> -->
		<div id="container">
			<div id="list" style="left: -1200px;">
				<img src="../../../../images/5.jpg" class="listimg" alt="">
				<img src="../../../../images/1.jpg" class="listimg"alt="">
				<img src="../../../../images/2.jpg" class="listimg"alt="">
				<img src="../../../../images/3.jpg" class="listimg"alt="">
				<img src="../../../../images/4.jpg" class="listimg"alt="">
				<img src="../../../../images/5.jpg" class="listimg"alt="">
				<img src="../../../../images/1.jpg" class="listimg"alt="">
			</div>
			<div id="buttons">
				<span index="1" class="on"></span>
				<span index="2"></span>
				<span index="3"></span>
				<span index="4"></span>
				<span index="5"></span>
			</div>
			<a href="javascript:;" class="arrow" id="prev">&lt;</a>
			<a href="javascript:;" class="arrow" id="next">&gt;</a>
		</div>
		<div class="wrap">
			<div class="card active" style="background-image: url(../../static/11.jpg);">
				<h3>hill</h3>
			</div>
			<div class="card" style="background-image: url(../../static/12.jpg);">
				<h3>town</h3>
			</div>
			<div class="card" style="background-image: url(../../static/13.jpg);">
				<h3>lemon</h3>
			</div>
			<div class="card" style="background-image: url(../../static/14.jpg);">
				<h3>stuonia</h3>
			</div>
			<div class="card" style="background-image: url(../../static/15.jpg);">
				<h3>island</h3>
			</div>
		</div>
		<div class="botton">
			<p id="p1">QQ邮箱:1782521445@qq.com</p>
		</div>
	</div>
	<!-- <input type="button" value="点击"> -->
</template>

<script>
export default {
	name: 'Main',
	data () {
	    return {
			
	    }
	}
}
	window.onload = function(){
		var container = document.getElementById("container");
		var list = document.getElementById("list");
		var buttons = document.getElementById("buttons").getElementsByTagName('span');
		var prev = document.getElementById("prev");
		var next = document.getElementById("next");
		var index = 1;
		var animated = false;
		var timer;
		
		function showButton(){
			for(var i = 0;i <buttons.length;i++){
				if(buttons[i].className == 'on'){
					buttons[i].className = '';
					break;
				}
			}
			buttons[index - 1].className = 'on';
		}
		
		function animate(offset){
			animated = true;
			var newLeft = parseInt(list.style.left) + offset;
			var time = 300;//位移总时间
			var interval = 10;//位移间隔时间
			var speed = offset/(time/interval);//每次位移量
			
			function go(){
				if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
					list.style.left = parseInt(list.style.left) + speed + 'px';
					setTimeout(go, interval);
				}else{
					animated = false;
					list.style.left = newLeft +'px';
					if(newLeft > -1200){
						list.style.left = -6000 + 'px';
					}
					if(newLeft < -6000){
						list.style.left = -1200 + 'px';
					}
				}
			}
		go();
		}
		function play(){
			timer = setInterval(function(){
				next.onclick();
			},3000);
		}
		function stop(){
			clearInterval(timer);
		}
		next.onclick = function () {
			if(index == 5){
				index = 1;
			}else{
				index +=1;
			}
			showButton();
			if(!animated){
				animate(-1200);
			}
		}
		prev.onclick = function () {
			if(index == 1){
				index = 5;
			}else{
				index -=1;
			}
			showButton();
			if(!animated){
				animate(1200);
			}
		}
		for(var i = 0;i<buttons.length;i++){
			buttons[i].onclick = function(){
				if(this.className == 'on'){
					return;
				}
				var myIndex = parseInt(this.getAttribute('index'));
				var offset = -1200 * (myIndex - index);
				index = myIndex;
				showButton();
				if(!animated){
					animate(offset);
				}
			}
		}
		container.onmouseover = stop;
		container.onmouseout = play;
		
		play();

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

<style type="text/css">
.botton{
	/* width: 1899px; */
	height: 100px;
	background-color: #ececec;
	text-align: center;
}
#p1{
	margin-top: 10px;
}
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
	/* box-sizing: border-box; */
}
/* 手风琴 */
.wrap{
	display: flex;
	width: 90vw;
	margin-left: 100px;
}
.card{
	border: 1px solid black;
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
/* 轮播图 */
.listimg{
	width: 1200px;
	height: 600px;
}
body{
	/* padding: 20px; */
	display: flex;
	align-items: center;
	/* justify-content: center; */
	background-color: #B6B4B4;
}
#container{margin-left: 350px; margin-top: 100px;}
#container{width:1200px;height: 600px;border: 3px solid #333;overflow: hidden;position: relative;}
#list{width: 8400px;height: 400px;position: absolute;z-index: 1;}
#list img{float: left;}
#buttons{position: absolute;height: 20px;width: 200px;z-index: 2;bottom: 20px;left: 530px;}
#buttons span{cursor: pointer;float: left;border: 1px solid #fff;width: 20px;height: 20px;border-radius: 50%;background: #333;margin-right: 5px;}
#buttons .on{background: orangered;}
.arrow{cursor: pointer;display: none;line-height: 39px;text-align: center;font-size: 36px;font-weight: bold;width: 40px;height: 40px;position: absolute;z-index: 2;top: 180px;background-color: RGBA(0,0,0,.3);color: #fff;}
.arrow:hover{background-color: RGBA(0,0,0,.7);}
#container:hover .arrow{display: block;}
#prev{left: 20px;}
#next{right: 20px;}

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
