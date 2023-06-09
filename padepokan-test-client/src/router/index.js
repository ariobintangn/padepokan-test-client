import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TransactionView from '../views/TransactionView.vue'
import PointView from '../views/PointView.vue'
import TimedTransactionView from '../views/TimedTransactionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: TransactionView
    },
    {
      path: '/timed-transaction',
      name: 'timed-transaction',
      component: TimedTransactionView
    },
    {
      path: '/point',
      name: 'point',
      component: PointView
    }
  ]
})

export default router
