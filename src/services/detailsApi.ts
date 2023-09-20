import type { courseRes, sectionRes } from '@/types/detailsType'
import request from '@/utils/request'

export const courseApi = () => {
  return request<courseRes>('/course/api/course/null', 'GET')
}

export const sectionApi = () => {
  return request<sectionRes[]>('/course/api/chapter/section/list/null', 'GET')
}
