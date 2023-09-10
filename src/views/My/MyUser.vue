<script setup lang="ts">
import { useUserStore } from '@/stores/user.d'
const store = useUserStore()
</script>

<template>
  <div class="my-user-page">
    <oe-nav-bar title="个人资料"></oe-nav-bar>
    <van-cell class="p" title="头像">
      <template #right-icon>
        <div class="rig">
          <img class="img" :src="store.user?.userInfo?.imageUrl" alt="" />
          <van-icon name="arrow" />
        </div>
      </template>
    </van-cell>
    <van-cell title="用户名" is-link :value="store.user?.userInfo?.username" />
    <van-cell title="手机号" is-link :value="store.user?.userInfo?.mobile" />
    <van-cell class="p" title="昵称" is-link :value="store.user?.userInfo?.nickName" />
    <van-cell title="性别" is-link :value="`${store.user?.userInfo?.sex == 1 ? '男' : '女'}`" />
    <div class="tc p" @click="store.delUser">退出登录</div>
  </div>
</template>

<style lang="scss" scoped>
.my-user-page {
  padding-top: 46px;
  background-color: var(--cp-bg);
  min-height: calc(100vh - 46px);
  .img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }
  :deep() {
    .van-cell__title {
      display: flex;
      align-items: center;
      color: black;
      font-size: 1.2em;
    }
  }
  .rig {
    display: flex;
    align-items: center;
  }
  .p {
    margin-top: 10px !important;
  }
  .tc {
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: black;
    font-size: 1.2em;
    background-color: #fff;
  }
}
</style>
