import Vue from 'vue'
import Router from 'vue-router'

/**
 * webpack 模板懒加载
 */
// import HelloWorld from '@/components/HelloWorld'
const helloWorld = resolve => require.ensure([], () => resolve(require('@/components/HelloWorld')), 'helloWorld');
const login = resolve => require.ensure([], () => resolve(require('@/pages/Login')), 'login');
const home = resolve => require.ensure([], () => resolve(require('@/pages/Home')), 'Home');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: helloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    }
  ]
})
