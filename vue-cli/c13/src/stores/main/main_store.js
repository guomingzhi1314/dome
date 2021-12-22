import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
	state:{
		content:'我是主页面'
	},
	mutations:{
		AddCount:function(state){
			console.log('main_store.js');
		}
	}
});