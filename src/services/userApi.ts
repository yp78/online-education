import request from '@/utils/request'
import type { User } from '@/types/userType'

//登录
export const getUserApi = (data: { code: string; mobile: string }) => {
  return request<User>('/auth/login', 'POST', data)
}
