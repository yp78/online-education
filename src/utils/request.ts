import axios, { type Method } from 'axios'
import type { Data } from '@/types/requsetType'

const instance = axios.create({
  baseURL: 'http://m.mengxuegu.com/',
  timeout: 10000
})
instance.interceptors.request.use(
  (config) => {
    // const store = useCounterStore
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
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
