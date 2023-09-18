<script setup lang="ts">
import { ref, reactive } from 'vue'
import { QuestionApi } from '@/services/categoryApi'
import type { searchType, Records } from '@/types/categoryType'
import ArticleList from './components/ArticleList.vue'

const active = ref(0)
const response = reactive<searchType>({
  current: 1,
  size: 10
})
const id = ref('hot')
const list = ref<Records[]>([])
const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  if (response.current == 1) {
    list.value = []
  }
  const res = await QuestionApi(id.value, response)
  list.value.push(...res.data.records)
  response.current++
  loading.value = false
  if (list.value.length >= res.data.total) {
    finished.value = true
  }
}

const onClickTab = ({ name }: any) => {
  response.current = 1
  id.value = name
  onLoad()
}
</script>

<template>
  <div class="article-page">
    <div class="search">
      <div class="inp" @click="$router.push('/pages/search/search')">
        <van-icon class="icon" name="search" />
        <span>搜索你想要的内容</span>
      </div>
    </div>
    <!-- <van-sticky :offset-top="50"> -->
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-tabs
        v-model:active="active"
        title-active-color="#20a0f1"
        @click-tab="onClickTab"
        sticky
        offset-top="50"
      >
        <van-tab title="热门回答" name="hot"><ArticleList :list="list"></ArticleList></van-tab>
        <van-tab title="最新问题" name="new"><ArticleList :list="list"></ArticleList></van-tab>
        <van-tab title="等待回答" name="wait"><ArticleList :list="list"></ArticleList></van-tab>
      </van-tabs>
    </van-list>
    <!-- </van-sticky> -->
  </div>
</template>

<style lang="scss" scoped>
.article-page {
  padding: 50px 0 50px;
}
.search {
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #345dc2;
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
</style>
