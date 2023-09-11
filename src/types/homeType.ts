//Home数据--响应
export type ListType = {
  total: number
  records: listHome[]
}

export type listHome = {
  id: number
  userId: number
  nickName: string
  userImage: string
  title: string
  totalTime: string
  studyTotal: number
  commTotal: number
  mainImage: string
  isFree: number
  priceOriginal: number
  priceDiscount: string
}
