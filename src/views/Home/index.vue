<script setup lang="ts">
import navbar from './components/NavHome.vue'
import { ref } from 'vue'
const bgColor = ref<string>('#006c00')
const onChange = (index: number) => {
  if (index == 1) {
    bgColor.value = '#45328c'
  } else if (index == 2) {
    bgColor.value = '#0072b7'
  } else {
    bgColor.value = '#006c00'
  }
}
</script>

<template>
  <div class="home-page">
    <div class="search">
      <div class="inp">
        <van-icon class="icon" name="search" />
        <span>搜索你想要的内容</span>
      </div>
    </div>
    <div class="header">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item><img src="@/assets/home/banner1.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/home/banner2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/home/banner3.jpg" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <navbar></navbar>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  min-height: calc(100vh - 50px);
  padding-bottom: 100px;
  .search {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    .inp {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--cp-text3);
      .icon {
        margin-right: 10px;
        font-size: 1.2em;
      }
    }
  }
  .header {
    height: 240px;
    background: linear-gradient(v-bind(bgColor), v-bind(bgColor), #fff);
    padding-top: 60px;
    box-sizing: border-box;
    .my-swipe {
      width: 95%;
      height: 170px;
      margin: auto;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
