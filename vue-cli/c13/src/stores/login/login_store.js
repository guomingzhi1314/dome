import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default ({
	state:{
		uPwd:'',
		count:0,
		show:true
	},
	//mutations 修改状态的方法
	//1.同名mutations操作 只要commit提交，全部触发
	//2.mutations里得操作 必须事同步的 可以是异步的
	//3.
	mutations:{
		AddCount:function(state){
			state.count++;
		},
		AddCountAsync(state){
			//周期调用
			setInterval( () => {
				console.log('AddCountAsync');
			}, 1000);
		}
	},
	actions:{
		increment(context){
			context.commit('AddCount');
			context.commit('AddCountAsync');
		},
		incrementAsync(context){
			setInterval( () => {
				context.commit('AddCount');
				console.log('incrementAsync');
			}, 1000);
		}
	},
	getters:{
		not_show(state){
			return !state.show;
		}
	}
});