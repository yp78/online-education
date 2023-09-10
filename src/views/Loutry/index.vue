<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const active = ref()

watch(
  route,
  () => {
    if (route.path == '/') {
      active.value = 0
    } else if (route.path == '/pages/category/category') {
      active.value = 1
    } else if (route.path == '/pages/article/article') {
      active.value = 2
    } else if (route.path == '/pages/question/question') {
      active.value = 3
    } else if (route.path == '/pages/my/my') {
      active.value = 4
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="loutry-page">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon>
          <img v-if="active != 0" src="http://m.mengxuegu.com/static/tab/index.png" />
          <img v-if="active == 0" src="http://m.mengxuegu.com/static/tab/index-active.png" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/pages/category/category">
        <span>分类</span>
        <template #icon>
          <img v-if="active != 1" src="http://m.mengxuegu.com/static/tab/category.png" />
          <img v-if="active == 1" src="http://m.mengxuegu.com/static/tab/category-active.png" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/pages/article/article">
        <span>阅读</span>
        <template #icon>
          <img v-if="active != 2" src="http://m.mengxuegu.com/static/tab/article.png" />
          <img v-if="active == 2" src="http://m.mengxuegu.com/static/tab/article-active.png" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/pages/question/question">
        <span>问答</span>
        <template #icon>
          <img v-if="active != 3" src="http://m.mengxuegu.com/static/tab/question.png" />
          <img v-if="active == 3" src="http://m.mengxuegu.com/static/tab/question-active.png" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/pages/my/my">
        <span>我的</span>
        <template #icon>
          <img v-if="active != 4" src="http://m.mengxuegu.com/static/tab/my.png" />
          <img v-if="active == 4" src="http://m.mengxuegu.com/static/tab/my-active.png" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.van-tabbar-item__icon {
  img {
    width: 30px;
    height: 30px;
  }
}
.van-tabbar-item--active {
  color: black;
}
</style>
