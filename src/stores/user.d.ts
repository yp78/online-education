import { defineStore } from 'pinia'
import type { User } from '@/types/userType'
import { ref } from 'vue'
export const useUserStore = defineStore('mt-user', () => {
  //登录响应token信息
  const user = ref<User>()
  //设置用户登录后使用
  const setUser = (u: User) => {
    user.value = u
  }
  //清空用户，退出登录使用
  const delUser = () => {
    user.value = undefined
  }
  return {
    user,
    setUser,
    delUser
  }
})
