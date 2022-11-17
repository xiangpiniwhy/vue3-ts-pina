// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config/config'
import { localCache } from '@/units/cache'
import { TOKEN } from '@/global/constant'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      const token = localCache.getCache(TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default hyRequest
