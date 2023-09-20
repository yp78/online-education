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

export type commentRes = {
  id: number
  parentId: string
  userId: number
  nickName: string
  userImage: string
  isGood: number
  content: string
  createDate: string
  children: childType
}
export type childType = {
  id: number
  userId: number
  nickName: string
  userImage: string
  content: string
  createDate: string
}

export type groupType = {
  id: number
  title: string
  groupPrice: number
  totalPrice: number
  list: listType[]
}
export type listType = {
  id: number
  userId: number
  nickName: string
  userImage: string
  title: string
  totalTime: string
  studyTotal: number
  commtotal: number
  mainImage: string
  isFree: number
  priceDiscount: number
  priceOriginal: number
}
