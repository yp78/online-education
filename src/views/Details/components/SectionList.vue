<script setup lang="ts">
import type { sectionRes } from '@/types/detailsType'
defineProps<{
  item: sectionRes
  index: number
}>()
</script>

<template>
  <div class="section-page">
    <h3>{{ '第' + (index + 1) + '章' + ' ' + item.name }}</h3>
    <div class="p" v-for="(itn, ind) in item.sectionList" :key="ind">
      <div class="left">
        <van-icon class="icon" name="arrow" />
        <span style="margin: 0 10px">{{ index + 1 + '-' + (ind + 1) + ' ' + itn.name }}</span>
      </div>
      <span v-show="itn.isFree == 1" style="color: #345dc2">试看</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-page {
  padding: 10px;
}
.p {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
  }
}
.icon {
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 20px;
}
</style>
