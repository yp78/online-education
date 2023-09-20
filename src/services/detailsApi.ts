import type { commentRes, courseRes, groupType, sectionRes } from '@/types/detailsType'
import request from '@/utils/request'

export const isbuyApi = () => {
  return request<{ isBuy: boolean }>('/course/course/is-buy/null', 'GET')
}

export const courseApi = () => {
  return request<courseRes>('/course/api/course/null', 'GET')
}

export const sectionApi = () => {
  return request<sectionRes[]>('/course/api/chapter/section/list/null', 'GET')
}

export const commentApi = () => {
  return request<commentRes[]>('/course/api/comment/list/null', 'GET')
}

export const groupApi = () => {
  return request<groupType[]>('/course/api/group/list/null', 'GET')
}
