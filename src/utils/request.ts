import axios, { type Method } from 'axios'
import type { Data } from '@/types/requsetType'
import { useUserStore } from '@/stores/user.d'
import { showToast } from 'vant'
import router from '@/router'

const instance = axios.create({
  baseURL: 'http://m.mengxuegu.com',
  timeout: 10000
})
instance.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    if (store.user?.access_token) {
      config.headers.Authorization = store.user?.token_type + '' + store.user?.access_token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (res) => {
    if (res.data.code !== 20000) {
      showToast(res.data.message)
    }
    return res.data
  },
  (err) => {
    if (err.response.status == 401) {
      const store = useUserStore()
      store.delUser()
      router.push(`/login?returnUrl=${router.currentRoute.value.fullPath}`)
    }
    return Promise.reject(err)
  }
)
const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
export default request
