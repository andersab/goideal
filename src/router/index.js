import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import MindmapView from '@/components/MindmapView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mindmap',
      name: 'mindmap',
      component: MindmapView
    }
  ]
})
