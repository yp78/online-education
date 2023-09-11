<script setup lang="ts">
import { getHomelist } from '@/services/homeApi'
import { ref } from 'vue'

const props = defineProps<{
  size: number
  sort?: string
  isFree?: number
  title: string
  tag: string
}>()

const current = ref(1)
const getList = async () => {
  const res = await getHomelist({
    current: current.value,
    size: props.size,
    sort: props.sort,
    isFree: props.isFree
  })
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
    <van-swipe-cell>
      <div class="left">
        <img src="" alt="" />
        <div class="min">
          <h3>火土而花离</h3>
          <p>噩梦老师</p>
          <p><span>免费</span> <span>222人在学习</span></p>
        </div>
      </div>
      <template #right>
        <div class="left">
          <img src="" alt="" />
          <div class="min">
            <h3>火土而花离</h3>
            <p>噩梦老师</p>
            <p><span>免费</span> <span>222人在学习</span></p>
          </div>
        </div>
      </template>
    </van-swipe-cell>
  </div>
</template>

<style lang="scss" scoped>
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
}
.left {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  img {
    width: 40%;
    height: 100%;
  }
  .min {
    flex: 1;
  }
}
</style>
