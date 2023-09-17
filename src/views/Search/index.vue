<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavSearch from './components/NavSearch.vue'
import { useSearchStore } from '@/stores/search'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useSearchStore()
onMounted(() => {
  if (route.query.txt) {
    onSearch(route.query.txt)
  }
})

const flag = ref<boolean>(true)
const sstxt = ['Java', 'Python', 'Vue.js', 'React', 'SpringBoot', 'SpringCloud']
const value = ref('')
const text = ref('')
const onSearch = (val: any) => {
  flag.value = false
  store.addSearch(val)
  text.value = val
  value.value = text.value
}
const onCancel = () => {
  text.value = ''
}
const active = ref(0)
</script>

<template>
  <div class="search-page">
    <form class="from-search" action="/">
      <van-icon @click="$router.back" name="arrow-left" />
      <van-search
        v-model="text"
        shape="round"
        show-action
        placeholder="搜索你想要的内容"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="sstxt" v-if="flag">
      <h4>热门搜索</h4>
      <p class="hot">
        <van-button
          class="btn"
          v-for="(item, index) in sstxt"
          :key="index"
          size="mini"
          type="default"
          @click="onSearch(item)"
          >{{ item }}</van-button
        >
      </p>
      <p class="histoty">
        <b>历史搜索</b>
        <span @click="store.clearSearch()">清空</span>
      </p>
      <p class="hot">
        <van-button
          class="btn"
          v-for="(item, index) in store.setSearch"
          :key="index"
          size="mini"
          type="default"
          @click="onSearch(item)"
          >{{ item }}</van-button
        >
      </p>
    </div>

    <div class="main" v-else>
      <van-tabs v-model:active="active" title-active-color="#20a0f1">
        <van-tab title="课程"><NavSearch title="课程" :text="value"></NavSearch></van-tab>
        <van-tab title="文章"><NavSearch title="文章" :text="value"></NavSearch></van-tab>
        <van-tab title="问答"><NavSearch title="问答" :text="value"></NavSearch></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.from-search {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  .van-search {
    width: 97%;
  }
}

.search-page {
  padding: 54px 0;
  box-sizing: border-box;
  .sstxt {
    padding: 0 10px;
  }
  .hot {
    width: 90%;
    margin: 15px 0;
    .btn {
      color: var(--cp-text3);
      margin: 5px;
    }
  }
  .histoty {
    display: flex;
    justify-content: space-between;
    span {
      color: var(--cp-text3);
    }
  }
}
</style>
