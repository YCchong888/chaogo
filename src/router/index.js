import Vue from 'vue'
import Router from 'vue-router'

const home =() => import('../views/home/home')
const fenlei =() => import('../views/fenlei/fenlei')
const goods =() => import('../views/goods/goods')
const wode =() => import('../views/wode/wode')
const detail =() => import('../views/detail/detail')
Vue.use(Router)

export default new Router({
  mode:'history',

  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/wode',
      component:wode
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/fenlei',
      component:fenlei
    },
    {
      path:'/detail/:iid',
      component:detail
    }



  ]
})
