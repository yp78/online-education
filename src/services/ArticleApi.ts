import type { ReviewType, articleType, questReview, questionType } from '@/types/ArticleType'
import request from '@/utils/request'

//获取文章信息
export const ArticleDetail = (id: number) => {
  return request<articleType>(`/article/api/article/${id}`, 'GET')
}
//获取言论信息
export const ReviewDetail = (id: number) => {
  return request<ReviewType[]>(`/article/api/comment/list/${id}`, 'GET')
}

//获取问答信息
export const QuestionDetail = (id: number) => {
  return request<questionType>(`/question/api/question/${id}`, 'GET')
}

//获取问答言论信息
export const QusetionReview = (id: number) => {
  return request<questReview[]>(`/question/api/reply/list/${id}`, 'GET')
}

//回答问题
export const replyApi = (data: { htmlContent: string; mdContent: string; questionId: string }) => {
  return request('/question/reply', 'POST', data)
}
