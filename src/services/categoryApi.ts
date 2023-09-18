import request from '@/utils/request'
import type { cateType, searchType, resSearchType } from '@/types/categoryType'

//分类页左侧数据
export const getgorylist = () => {
  return request<cateType[]>('/article/api/category/label/list', 'GET')
}

//搜索数据
export const getSearchApi = (data: searchType) => {
  return request<resSearchType>('/course/api/course/search', 'POST', data)
}

//文章搜索数据
export const getArticleApi = (data: searchType) => {
  return request<resSearchType>('/article/api/article/search', 'POST', data)
}

//问答搜索数据
export const getQuestionApi = (data: searchType) => {
  return request<resSearchType>('/question/api/question/search', 'POST', data)
}

//问答页面数据
export const QuestionApi = (id: string, data: searchType) => {
  return request<resSearchType>(`/question/api/question/${id}`, 'POST', data)
}
