//详情页
export type courseRes = {
  detailUrls: string[]
  goodRate: string
  id: number
  isFree: number
  mainImage: string
  nickName: string
  priceDiscount: number
  priceOriginal: number
  studyTotal: number
  title: string
  totalTime: string
  userId: number
  userImage: number
}

export type sectionRes = {
  id: number
  name: string
  sectionList: sectionList[]
}
export type sectionList = {
  id: number
  name: string
  isFree: number
  videoUrl: string
}
