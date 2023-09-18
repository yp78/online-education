<script setup lang="ts">
import navbar from './components/NavHome.vue'
import Lists from './components/ListHome.vue'
import { ref } from 'vue'
const bgColor = ref<string>('#006c00')
const pagenum = ref(0)
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
      <div class="inp" @click="$router.push('/pages/search/search')">
        <van-icon class="icon" name="search" />
        <span>搜索你想要的内容</span>
      </div>
    </div>
    <div class="header">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item><img class="img" src="@/assets/home/banner1.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img class="img" src="@/assets/home/banner2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img class="img" src="@/assets/home/banner3.jpg" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <navbar></navbar>
    <Lists
      :current="1"
      :title="'热门推荐'"
      :tag="'HOT'"
      :size="8"
      :sort="'hot'"
      class="list"
    ></Lists>
    <Lists :current="1" :title="'近期上新'" :tag="'NEW'" :size="8" :isFree="1" class="list"></Lists>
    <Lists
      :current="1"
      :title="'免费精选'"
      :tag="'FREE'"
      :size="8"
      :sort="'new'"
      class="list"
    ></Lists>
    <Lists
      :current="pagenum"
      :title="'付费精品'"
      :tag="'NICE'"
      :size="8"
      :isFree="1"
      class="list"
      @addnum="pagenum++"
    ></Lists>
  </div>
</template>

<style lang="scss" scoped>
::deep() {
  .van-swipe-item {
    width: 100%;
  }
}
.home-page {
  min-height: calc(100vh - 50px);
  padding-bottom: 100px;
  .search {
    position: fixed;
    z-index: 5;
    top: 0;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    background-color: v-bind(bgColor);
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
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .list {
    padding: 15px 10px;
  }
}
</style>
