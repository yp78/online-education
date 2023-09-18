<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const navClick = (text: string) => {
  router.push(`/pages/search/search?txt=${text}`)
}
</script>

<template>
  <van-grid :column-num="4" :gutter="10">
    <van-grid-item @click="navClick('Java')" text="Java" />
    <van-grid-item @click="navClick('前端')" text="前端" />
    <van-grid-item @click="navClick('云计算')" text="云计算" />
    <van-grid-item @click="navClick('运维')" text="运维" />
    <van-grid-item @click="navClick('测试')" text="测试" />
    <van-grid-item @click="navClick('UI设计')" text="UI设计" />
    <van-grid-item @click="navClick('人工智能')" text="人工智能" />
    <van-grid-item @click="navClick('')" text="全部分类" />
  </van-grid>
</template>

<style lang="scss" scoped>
::v-deep() {
  .van-grid-item__content {
    height: 30px;
    background-color: var(--cp-line);
    border-radius: 5px;
    color: var(--cp-text2);
  }
}
</style>
