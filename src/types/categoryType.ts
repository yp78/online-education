export type cateType = {
  id: number
  name: string
  labelList: labList[]
}
export type labList = {
  id: number
  name: string
}

//搜索数据 -- 请求
export type searchType = {
  categoryId?: string
  content: string
  current: number
  isFree?: string
  labelId?: string | number
  size: number
  sort?: string
}

//搜索数据 -- 响应
export type resSearchType = {
  records: Records[]
  total: number
}
export type Records = {
  id?: number
  userId?: number
  nickName?: string
  userImage?: string
  title?: string
  totalTime?: string
  studyTotal?: number
  commTotal?: number
  mainImage?: string
  isFree?: number
  priceOriginal?: number
  priceDiscount?: number
  summary?: string
  imageUrl?: string
  viewCount?: number
  thumhup?: number
  updateDate?: string
  reply?: number
  status?: number
  createData?: string
}
