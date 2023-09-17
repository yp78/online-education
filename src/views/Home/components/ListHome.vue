<script setup lang="ts">
import { getHomelist } from '@/services/homeApi'
import { ref } from 'vue'
import type { listHome } from '@/types/homeType'

const emit = defineEmits(['addnum'])

const loading = ref(false)
const finished = ref(false)

const onLoad = async () => {
  emit('addnum')
  const res = await getHomelist({
    current: props.current,
    size: props.size,
    sort: props.sort,
    isFree: props.isFree
  })
  reslist.value.push(...res.data.records)
  if (reslist.value.length >= res.data.total) {
    finished.value = true
  }
  loading.value = false
}

const props = defineProps<{
  current: number
  size: number
  sort?: string
  isFree?: number
  title: string
  tag: string
}>()
const list = ref<listHome[]>([])
const reslist = ref<listHome[]>([])

const getList = async () => {
  const res = await getHomelist({
    current: props.current,
    size: props.size,
    sort: props.sort,
    isFree: props.isFree
  })
  list.value = res.data.records
  console.log('res', res)
}
getList()
</script>

<template>
  <div class="list-page">
    <van-cell value="全部" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">{{ title }}</span>
        <van-tag type="primary">{{ tag }}</van-tag>
      </template>
    </van-cell>
    <van-swipe-cell v-show="sort">
      <div class="left" v-for="(item, index) in list" :key="index" v-show="index < 5">
        <div class="img">
          <img
            :src="
              item.mainImage.indexOf('http')
                ? 'http://m.mengxuegu.com' + item.mainImage
                : item.mainImage
            "
            alt=""
            referrerpolicy="no-referrer"
          /><span class="spn">{{ item.totalTime }}</span>
        </div>
        <div class="min">
          <h5>{{ item.title }}</h5>
          <div class="bom">
            <p><i class="p iconfont"></i>{{ item.nickName }}</p>
            <p>
              <span class="iconfont s" style="color: red; margin-right: 20px">{{
                item.isFree == 1 ? '免费' : item.priceDiscount
              }}</span>
              <span class="iconfont sp">{{ item.studyTotal }}人在学习</span>
            </p>
          </div>
        </div>
      </div>
      <template #right>
        <div class="left" v-for="(item, index) in list" :key="index" v-show="index >= 5">
          <div class="img">
            <img
              :src="
                item.mainImage.indexOf('http')
                  ? 'http://m.mengxuegu.com' + item.mainImage
                  : item.mainImage
              "
              alt=""
              referrerpolicy="no-referrer"
            /><span class="spn">{{ item.totalTime }}</span>
          </div>
          <div class="min">
            <h5>{{ item.title }}</h5>
            <div class="bom">
              <p><i class="p iconfont"></i>{{ item.nickName }}</p>
              <p>
                <span class="iconfont s" style="color: red; margin-right: 20px">{{
                  item.isFree == 1 ? '免费' : item.priceDiscount
                }}</span>
                <span class="iconfont sp">{{ item.studyTotal }}人在学习</span>
              </p>
            </div>
          </div>
        </div>
      </template>
    </van-swipe-cell>

    <!-- 近期上新 -->
    <div class="body">
      <van-swipe
        width="160"
        class="my-swipe"
        v-show="tag == 'NEW'"
        :show-indicators="false"
        :loop="false"
      >
        <van-swipe-item v-for="(item, index) in list" :key="index">
          <div class="main">
            <div class="img">
              <img
                :src="
                  item.mainImage.indexOf('http')
                    ? 'http://m.mengxuegu.com' + item.mainImage
                    : item.mainImage
                "
                alt=""
                referrerpolicy="no-referrer"
              /><span class="spn">{{ item.totalTime }}</span>
            </div>
            <div class="min">
              <h5>{{ item.title }}</h5>
              <div class="bom">
                <p><i class="p iconfont"></i>{{ item.nickName }}</p>
                <p style="display: flex; font-size: 0.5em; justify-content: space-between">
                  <span class="iconfont s" style="color: red">{{
                    item.isFree == 1 ? '免费' : item.priceDiscount
                  }}</span>
                  <span class="iconfont sp">{{ item.studyTotal }}人在学习</span>
                </p>
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 付费精品 -->
    <van-list
      v-show="tag == 'NICE'"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="left" v-for="(item, index) in reslist" :key="index">
        <div class="img">
          <img
            :src="
              item.mainImage.indexOf('http')
                ? 'http://m.mengxuegu.com' + item.mainImage
                : item.mainImage
            "
            alt=""
            referrerpolicy="no-referrer"
          /><span class="spn">{{ item.totalTime }}</span>
        </div>
        <div class="min">
          <h5>{{ item.title }}</h5>
          <div class="bom">
            <p><i class="p iconfont"></i>{{ item.nickName }}</p>
            <p>
              <span class="iconfont s" style="color: red; margin-right: 20px">{{
                item.isFree == 1 ? '免费' : item.priceDiscount
              }}</span>
              <span class="iconfont sp">{{ item.studyTotal }}人在学习</span>
            </p>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont'; /* Project id 3616046 */
  src:
    url('//at.alicdn.com/t/c/font_3616046_s7ym9euqz4.woff2?t=1694525046121') format('woff2'),
    url('//at.alicdn.com/t/c/font_3616046_s7ym9euqz4.woff?t=1694525046121') format('woff'),
    url('//at.alicdn.com/t/c/font_3616046_s7ym9euqz4.ttf?t=1694525046121') format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 15px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

::v-deep() {
  .van-cell {
    padding: 0;
    .custom-title {
      font-size: 1.3em;
    }
    .van-tag {
      background: linear-gradient(rgb(255, 60, 0), var(--a));
      border-radius: 10px 10px 10px 0;
    }
  }
  .van-swipe-cell__right {
    width: 338px;
  }
  .van-swipe-cell__wrapper {
    width: 95%;
  }
  .van-swipe-item {
    margin-right: 30px;
  }
}
.left {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  .img {
    position: relative;
    width: 40%;
    height: 80px;
    border-radius: 5px;
    margin-right: 10px;
    overflow: hidden;
    .spn {
      position: absolute;
      bottom: 0;
      right: 0;
      display: inline-block;
      padding: 0 10px;
      color: #fff;
      border-radius: 10px;
      background-color: rgba($color: #070707, $alpha: 0.3);
      font-size: 0.8em;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-size: 0.8em;
  }
  .min {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.p {
  &::before {
    content: '\e60f';
  }
}
.s::before {
  content: '\e66f';
  color: red;
  font-size: 1.2em;
}
.sp::before {
  content: '\eb5e';
}
.main {
  width: 170px;
  height: 180px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  margin-right: 20px;
  .img {
    position: relative;
    width: 100%;
    .spn {
      position: absolute;
      bottom: 5px;
      right: 0;
      display: inline-block;
      padding: 0 10px;
      color: #fff;
      border-radius: 10px;
      background-color: rgba($color: #070707, $alpha: 0.3);
      font-size: 0.8em;
    }
    img {
      border-radius: 5px;
      width: 100%;
      height: 100px;
    }
  }
}
</style>
