import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Message from '@/components/Message'
import Product from '@/components/Product'
import About from '@/components/About'
import News from '@/components/News'
import Ma from '@/components/Ma'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
	  //跳转新创建得页面
	  path: '/login',
	  name: 'Login',
	  component: Login
	},{
	  path: '/main',
	  name: 'Main',
	  component: Main
	},{
	  path: '/message',
	  name: 'Message',
	  component: Message
	},{
	  path: '/product',
	  name: 'Product',
	  component: Product
	},{
	  path: '/about',
	  name: 'About',
	  component: About
	},{
	  path: '/news',
	  name: 'News',
	  component: News
	},{
	  path: '/ma',
	  name: 'Ma',
	  component: Ma
	}
  ]
})
