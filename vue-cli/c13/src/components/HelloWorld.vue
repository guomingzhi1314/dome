<template>
  <div class="hello">
	  <img src="../../../../img/2.png">
	<h1>欢迎来到适宜家具</h1>
    <ul>
	  <li>
			<!-- 记得加#号 -->
	    <a href="#/login" target="_blank">
	      登录页面
	    </a>
	  </li>
	  <li>
	    <a href="#/main" target="_blank">
	      主页面
	    </a>
	  </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到我的主场'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
	text-align: center;
}
</style>
