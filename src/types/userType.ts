//用户信息类型
export type User = {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in?: number
  scope?: string
  userInfo?: UserInfo
  jti: string
}

export type UserInfo = {
  uid: string
  username: string
  mobile: string | number
  sex: number
  nickName: string
  imageUrl: string
}
