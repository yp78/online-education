<script setup lang="ts">
import type { commentRes } from '@/types/detailsType'

defineProps<{
  item: commentRes
}>()
</script>

<template>
  <div class="comment-page">
    <div class="top">
      <img :src="item.userImage" alt="" />
      <div class="main">
        <b>{{ item.nickName }}</b>
        <p>{{ item.createDate }}</p>
      </div>
      <span :class="item.isGood == 1 ? 'a' : ''"><i class="iconfont">&#xe62c;</i></span>
    </div>
    <p>{{ item.content }}</p>
    <p class="p" v-show="item.children">讲师回复:{{ item.children?.content }}</p>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont'; /* Project id 3616046 */
  src:
    url('//at.alicdn.com/t/c/font_3616046_okopxbrrv0a.woff2?t=1695211301741') format('woff2'),
    url('//at.alicdn.com/t/c/font_3616046_okopxbrrv0a.woff?t=1695211301741') format('woff'),
    url('//at.alicdn.com/t/c/font_3616046_okopxbrrv0a.ttf?t=1695211301741') format('truetype');
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.comment-page {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .top {
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    .a {
      color: red;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 10px;
    }
    span {
      width: 40px;
      height: 40px;
    }
    .main {
      flex: 1;
      height: 40px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .p {
    width: 100%;
    background-color: #f8f9fb;
    color: #949292;
    border-radius: 5px;
    padding: 10px;
    margin-top: 5px;
  }
}
</style>
