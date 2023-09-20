<script setup lang="ts">
import { ref } from 'vue'
import { commentApi, courseApi, groupApi, isbuyApi, sectionApi } from '@/services/detailsApi'
import type { commentRes, courseRes, groupType, sectionRes } from '@/types/detailsType'

import SectionList from './components/SectionList.vue'
import ComMent from './components/ComMent.vue'
import GroupList from './components/GroupList.vue'

const Buy = ref<{ isBuy: boolean }>()
const course = ref<courseRes>()
const section = ref<sectionRes[]>([])
const comment = ref<commentRes[]>([])
const group = ref<groupType[]>([])
const getCourse = async () => {
  const resisBuy = await isbuyApi()
  const resCourse = await courseApi()
  const resSection = await sectionApi()
  const resComment = await commentApi()
  const resGroup = await groupApi()
  console.log('resCourse=>', resCourse)
  console.log('resSection=>', resSection)
  console.log('resComment=>', resComment)
  console.log('resGroup=>', resGroup)

  Buy.value = resisBuy.data
  course.value = resCourse.data
  section.value = resSection.data
  comment.value = resComment.data
  group.value = resGroup.data
}
getCourse()

const active = ref(0)

const onbuy = () => {
  // if (Buy.value?.isBuy == true) {
  // }
}
</script>

<template>
  <div class="details-page">
    <div class="img">
      <img
        class="details-imgTop"
        :src="
          course?.mainImage.indexOf('http')
            ? 'http://m.mengxuegu.com' + course?.mainImage
            : course?.mainImage
        "
        alt=""
        referrerpolicy="no-referrer"
      />
      <van-icon class="img-icon" @click="$router.back" name="arrow-left" />
    </div>

    <div class="details-top">
      <p>
        <b style="color: red; font-size: 1.4em">￥{{ course?.priceDiscount }}</b>
        <span style="color: #adacac; text-decoration: line-through"
          >￥{{ course?.priceOriginal }}</span
        >
        <van-tag plain type="danger">优惠价</van-tag>
      </p>
      <h3>{{ course?.title }}</h3>
      <p style="margin-bottom: 10px">
        <span><i class="iconfont">&#xe62c;</i>{{ course?.goodRate }}好评</span
        ><span><i class="iconfont">&#xe75d;</i>{{ course?.studyTotal }}人在学</span>
      </p>
    </div>
    <van-tabs v-model:active="active">
      <van-tab title="详情"
        ><img style="width: 100%" :src="course?.detailUrls[0]" alt=""
      /></van-tab>
      <van-tab title="章节"
        ><SectionList
          v-for="(item, index) in section"
          :key="index"
          :item="item"
          :index="index"
        ></SectionList
      ></van-tab>
      <van-tab title="评论">
        <ComMent v-for="(item, index) in comment" :key="index" :item="item"></ComMent>
      </van-tab>
      <van-tab title="套餐"
        ><GroupList v-for="(item, index) in group" :key="index" :item="item"></GroupList
      ></van-tab>
    </van-tabs>
    <div class="bottom">
      <van-button class="btn" round color="#345dc2" @click="onbuy">{{
        Buy?.isBuy == true ? '立即观看' : '立即购买'
      }}</van-button>
    </div>
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
.details-page {
  padding-bottom: 60px;
  .img {
    position: relative;
    .img-icon {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      background-color: rgba($color: #000000, $alpha: 0.3);
      color: #fff;
    }
  }
  .details {
    &-imgTop {
      width: 100%;
    }
    &-top {
      width: 100%;
      h3 {
        padding: 0 10px;
      }
      p {
        width: 100%;
        padding: 5px 10px;
      }
      &::after {
        content: '';
        height: 15px;
        width: 100%;
        background-color: var(--cp-bg);
        display: block;
      }
    }
  }
}
.bottom {
  position: fixed;
  background-color: #fff;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 10px;
  .btn {
    width: 100%;
  }
}
</style>
