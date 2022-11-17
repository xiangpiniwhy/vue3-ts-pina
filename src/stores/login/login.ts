import { defineStore } from 'pinia'
import {
  accountLogin,
  getUserInfoById,
  getUserMenusByRoleId
} from '@/sevrices/login/login'
import { localCache } from '@/units/cache'
import { ROLE_MENU, TOKEN, USER_INFO } from '@/global/constant'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(TOKEN) ?? '',
    userInfo: localCache.getCache(USER_INFO) ?? '',
    roleMenus: localCache.getCache(ROLE_MENU) ?? ''
  }),
  actions: {
    async loginAccessAction(account: { name: string; password: string }) {
      const loginResult = await accountLogin(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      const name = loginResult.data.name
      localCache.setCache(TOKEN, this.token)

      // 获取用户信息
      const userInfo = await getUserInfoById(id)
      this.userInfo = userInfo.data
      localCache.setCache(USER_INFO, userInfo.data)

      // 角色的菜单页面
      const roleMenu = await getUserMenusByRoleId(id)
      console.log(roleMenu)
      this.roleMenus = roleMenu.data
      localCache.setCache(ROLE_MENU, roleMenu.data)

      router.push('/main')
    }
  }
})

export default useLoginStore
