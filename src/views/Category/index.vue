<script setup lang="ts">
import { ref } from 'vue'
import { getgorylist } from '@/services/categoryApi'
import type { cateType } from '@/types/categoryType'

const list = ref<cateType[]>([])

const getlist = async () => {
  const reslist = await getgorylist()
  console.log('reslist', reslist)
  list.value = reslist.data
}
getlist()

const active = ref(0)
</script>

<template>
  <div class="cate-gory-page">
    <oe-nav-bar
      title="分类"
      :flag="false"
      rightIcon="search"
      @click-right="$router.push('/pages/search/search')"
    ></oe-nav-bar>
    <van-sidebar v-model="active">
      <van-sidebar-item v-for="(item, index) in list" :key="index" :title="item.name" />
    </van-sidebar>
    <div class="right">
      <div class="rig">
        <van-button
          v-for="(item, index) in list[active]?.labelList"
          :key="index"
          round
          type="default"
          @click="$router.push(`/pages/search/search?txt=${item.name}`)"
          >{{ item.name }}</van-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .van-icon,
  .van-nav-bar__title {
    color: var(--cp-bg);
  }
}
.van-nav-bar--fixed {
  background-color: var(--cp-main);
}

.cate-gory-page {
  padding: 46px 0 50px;
  height: calc(100vh - 96px);
  display: flex;
  .van-sidebar {
    width: 100px;
    height: 100%;
    background-color: var(--cp-bg);
  }
  .right {
    flex: 1;
    padding: 5px;
    .rig {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .van-button {
        width: 33%;
        height: 40px;
        margin-top: 10px;
      }
    }
  }
  .van-sidebar-item {
    height: 80px;
    line-height: 40px;
  }
}
</style>
