import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '@/units/cache'
import { TOKEN } from '@/global/constant'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/:patchMatch(.*)',
      component: () => import('@/views/notFound/not_found.vue')
    }
  ]
})

export default router

router.beforeEach((to) => {
  const token = localCache.getCache(TOKEN)
  if (!token && to.path == '/main') {
    return 'login'
  }
})
