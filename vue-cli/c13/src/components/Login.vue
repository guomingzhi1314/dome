<template>
	<!--编写HTML代码 只能被一个总dom包含-->
		<div class="login">
			<img src="../../../../img/2.png" class="img1">
			<form action="" method="post">
				<table border="1" width="25%">
					<caption>{{msg}}</caption>
					<tr>
						<th>用户名:</th>
						<td><input type="text" v-model="uName"></td>
					</tr>
					<tr>
						<th>密码:</th>
						<td><input type="password" v-model="uPwd"></td>
					</tr>
					<tr>
						<th colspan="2">
							<button type="button" @click="login">登录</button>
							<!-- <span>{{$store.state.Login.uName}}</span> -->
						</th>
					</tr>
				</table>
			</form>
		</div>
</template>

<script>
	//安装axios  npm intall axios --save
	//引入axios对象
	const axios = require('axios');
export default {
	name: 'Login',
	data () {
	    return {
			msg: '适宜家具',
			uName:'',
			uPwd:''
	    }
	},
	methods:{
		//登录验证
		login (){
			//1.参数1 指定文件位置（跨越访问-从别人网赚） 被访问的json文件位置 不能随意放置 只能放置在static中
			axios.get('../static/login.json').then((response) =>{
				for(let item of response.data.login){
					//json中的数组
					//console.log(response.data.login);
					console.log(item.name +"--"+item.pwd);
					if(item.name == this.uName && this.uPwd == item.pwd){
						this.$store.state.Login.uName = this.uName;
						this.$router.push({name:'Main'});
						return;
					}
				}
				if(this.uName == "" && this.uPwd == ""){
					alert("你还没有输入账号和密码");
					return;
				}
				alert("账户或密码输入错误");
				//异常走catch
			}).catch(function(err){
				console.log(err);
			})
			/* console.log(this.uName + '--' + this.uPwd);
			if(this.uName == "admin" && this.uPwd == "123456"){
				//赋值用户名
				this.$store.state.Login.uName = this.uName;
				alert("登录成功");
				//js实现跳转
				this.$router.push({name:'Main'});
			}else if(this.uName == "" && this.uPwd == ""){
				alert("你还没有输入账号和密码");
			}else{
				alert("您输入的账号密码有误！");
			} */
		}
	}
}
</script>

<style>
	.login{
		margin-left: 700px;
	}
	.img1{
		margin-right: 820px;
	}
</style>
