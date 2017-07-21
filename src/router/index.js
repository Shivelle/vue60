import Vue from 'vue'
import vueResource from 'vue-resource'
import Router from 'vue-router'
import App from '../App'
import test from '@/components/test'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: test
    }
  ]
})
