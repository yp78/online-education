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
