// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//1.引入状态管理插件
import vuex from 'vuex'

//引入数据源store
import store from './store'

Vue.config.productionTip = false
//2.使用vuex
Vue.use(vuex);
/* let store = new vuex.Store({
	state:{
		show:false
	}
}) */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
 //3.调用store
  store:store
})
