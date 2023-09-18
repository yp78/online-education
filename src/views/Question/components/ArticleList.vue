<script setup lang="ts">
import type { Records } from '@/types/categoryType'
defineProps<{
  list: Records[]
}>()
</script>

<template>
  <div class="question" v-for="(item, index) in list" :key="index">
    <h3>{{ item.title }}</h3>
    <p class="p-question">
      <span>{{ item.reply }}回答·{{ item.viewCount }}浏览</span
      ><span>{{ item.nickName }}·{{ item.updateDate }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.question {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  .p-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.9px;
    color: var(--cp-text3);
  }
}
</style>
