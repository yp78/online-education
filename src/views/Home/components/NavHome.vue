<script setup lang="ts"></script>

<template>
  <van-grid :column-num="4" :gutter="10">
    <van-grid-item text="Java" />
    <van-grid-item text="前端" />
    <van-grid-item text="云计算" />
    <van-grid-item text="运维" />
    <van-grid-item text="测试" />
    <van-grid-item text="UI设计" />
    <van-grid-item text="人工智能" />
    <van-grid-item text="全部分类" />
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
