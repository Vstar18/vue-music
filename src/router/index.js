import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/Recommend/recommend'
import Rank from 'components/Rank/rank'
import Singer from 'components/Singer/singer'
import Search from 'components/Search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
