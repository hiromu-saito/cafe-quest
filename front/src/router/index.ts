import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../components/template/HomePage.vue'
import CqTimeLine from '../components/orgasms/CqTimeLine.vue'
import CqMap from '../components/orgasms/CqMap.vue'
import CqRank from '../components/orgasms/CqRank.vue'
import CqMyPage from '../components/orgasms/CqMyPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage,
    children: [
      {
        path: '',
        component: CqTimeLine
      },
      {
        path: 'map',
        component: CqMap
      },
      {
        path: 'mypage',
        component: CqMyPage
      },
      {
        path: 'rank',
        component: CqRank
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
