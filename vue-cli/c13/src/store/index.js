//数据源
import Vue from 'vue'
import vuex from 'vuex'

import login_store from '../stores/login/login_store.js'
import main_store from '../stores/main/main_store.js'

Vue.use(vuex);

export default new vuex.Store({
	state:{
		msg:'我是主页面的index'
	},
	modules:{
		Login:login_store,
		Main:main_store
	}
});
