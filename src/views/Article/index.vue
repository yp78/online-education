<script setup lang="ts">
import { ref, reactive } from 'vue'
import { getgorylist, getArticleApi } from '@/services/categoryApi'
import type { cateType, searchType, Records } from '@/types/categoryType'

const active = ref(0)
const list = ref<cateType[]>([])
const response = reactive<searchType>({
  categoryId: '',
  current: 1,
  size: 10
})
const relist = ref<Records[]>([])
const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  const res = await getArticleApi(response)
  relist.value.push(...res.data.records)
  response.current++
  loading.value = false
  if (relist.value.length >= res.data.total) {
    finished.value = true
  }
}

const getlist = async () => {
  const reslist = await getgorylist()
  console.log('reslist=>', reslist)

  list.value = reslist.data
}
getlist()

const onClickTab = ({ name }: any) => {
  response.categoryId = name
  response.current = 1
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
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-tabs v-model:active="active" sticky offset-top="50px" @click-tab="onClickTab">
        <van-tab v-for="(item, index) in list" :key="index" :title="item.name" :name="item.id">
          <div class="main" v-for="(item, index) in relist" :key="index">
            <div class="lf">
              <h3>{{ item.title }}</h3>
              <p class="pm">{{ item.summary }}</p>
              <p>
                <span class="spa">{{ item.nickName }} ·</span><span>{{ item.updateDate }}</span>
              </p>
            </div>
            <img
              v-show="item.imageUrl != null"
              :src="
                item.mainImage?.indexOf('http')
                  ? 'http://m.mengxuegu.com' + item.imageUrl
                  : item.imageUrl
              "
              alt=""
            />
          </div>
        </van-tab>
      </van-tabs>
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
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
// ::deep() {
// }
.article-page {
  padding: 50px 0 60px;
}
.main {
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 10px;
  img {
    width: 120px;
    display: inline-block;
    border-radius: 10px;
  }
  .lf {
    flex: 1;
    height: 100%;
    .pm {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
