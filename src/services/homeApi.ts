import request from '@/utils/request'
import type { ListType } from '@/types/homeType'

export const getHomelist = (params: {
  current: number
  size: number
  sort?: string
  isFree?: number
}) => {
  return request<ListType>('/course/api/course/search', 'POST', params)
}
