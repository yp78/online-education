<script setup lang="ts">
import { useUserStore } from '@/stores/user.d'
const store = useUserStore()
console.log('store', store)
</script>

<template>
  <div class="my-page">
    <div class="header"></div>
    <div
      class="min"
      @click="$router.push(store.user?.userInfo == undefined ? '/login' : '/pages/my/user')"
    >
      <img
        v-if="store.user?.userInfo == undefined"
        src="http://m.mengxuegu.com/static/logo.png"
        alt=""
      />
      <img v-else :src="store.user?.userInfo?.imageUrl" alt="" />
      <van-cell is-link class="dl">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div>
            <p class="name">
              {{ store.user?.userInfo == undefined ? '请登录' : store.user?.userInfo?.nickName }}
            </p>
            <p v-if="store.user?.userInfo != undefined">
              用户名:{{ store.user?.userInfo?.username }}
            </p>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="p"></div>
    <van-cell is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <oe-icon name="My-order"></oe-icon>
        <span class="custom-title">我的订单</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <oe-icon name="My-feedback"></oe-icon>
        <span class="custom-title">我的余额</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <oe-icon name="My-study"></oe-icon>
        <span class="custom-title">我的学习</span>
      </template>
    </van-cell>
    <div class="p"></div>
    <van-cell is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <oe-icon name="My-set"></oe-icon>
        <span class="custom-title">设置</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <oe-icon name="My-order"></oe-icon>
        <span class="custom-feedback">意见反馈</span>
      </template>
    </van-cell>
    <div class="p"></div>
    <van-cell is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <oe-icon name="My-about"></oe-icon>
        <span class="custom-title">关于我们</span>
      </template>
    </van-cell>
  </div>
</template>

<style lang="scss" scoped>
.my-page {
  .header {
    height: 90px;
    background-color: var(--cp-main);
  }
  .min {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 120px;
    background-color: #fff;
    margin-top: -40px;
    border-radius: 20px 20px 0 0;
    position: relative;
    .dl {
      display: flex;
      align-items: center;
      p {
        margin: 0;
      }
      .name {
        font-weight: bold;
        font-size: 1.3em;
      }
    }
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
  }
  :deep() {
    .van-cell__title {
      display: flex;
      align-items: center;
    }
  }

  .oe-icon {
    font-size: 1.6em;
    margin-right: 10px;
  }
  .p {
    height: 12px;
    background-color: var(--cp-bg);
    width: 100%;
  }
}
</style>
