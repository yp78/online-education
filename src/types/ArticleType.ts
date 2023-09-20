//阅读详情
export type articleType = {
  id: string
  userId: string
  nickName: string
  userImage: string
  title: string
  summary: string
  viewCount: number
  thumhup: number
  createDate: string
  updateDate: string
  ispublic: number
  labelIds: number[]
  labelList: LabelList[]
  imageUrl: string
  mdContent: string
  htmlContent: string
}
export type LabelList = {
  id: number
  name: string
}

//评论内容
export type ReviewType = Pick<
  articleType,
  'id' | 'userId' | 'nickName' | 'userImage' | 'createDate'
> & { parentId: string; articleId: string; content: string }

//问答评论内容
export type questReview = Omit<ReviewType, 'content' | 'articleId'> & {
  questionId: string
  mdContent: string
}
//问答详情
export type questionType = Omit<articleType, 'summary' | 'thumhup' | 'imageUrl' | 'ispublic'> & {
  reply: number
  star: number
  status: number
}
