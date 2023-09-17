<script setup lang="ts">
import { ref, reactive } from 'vue'
import { getSearchApi, getArticleApi, getgorylist, getQuestionApi } from '@/services/categoryApi'
import type { Records, cateType, searchType } from '@/types/categoryType'

const props = defineProps<{
  title?: string
  text: string
}>()

const menuRef = ref(null)
const itemRef = ref(null)
const value2 = ref('a')

const relist = ref<Records[]>([])
const ResSearch = reactive<searchType>({
  categoryId: '',
  content: props.text,
  current: 1,
  isFree: '',
  labelId: '',
  size: 10,
  sort: ''
})

const loading = ref(false)
const finished = ref(false)
const onLoad = async () => {
  if (ResSearch.current == 1) {
    relist.value = []
  }
  ResSearch.current++
  const res =
    props.title == '课程'
      ? await getSearchApi(ResSearch)
      : props.title == '文章'
      ? await getArticleApi(ResSearch)
      : await getQuestionApi(ResSearch)
  if (value2.value == 'a') {
    relist.value.push(...res.data.records)
  } else if (value2.value == 'b') {
    const copylist = res.data.records.filter((item) => item.isFree != 1)
    relist.value.push(...copylist)
  } else {
    const copylist = res.data.records.filter((item) => item.isFree == 1)
    relist.value.push(...copylist)
  }

  loading.value = false
  if (relist.value.length >= res.data.total) {
    finished.value = true
  }
}

const list = ref<cateType[]>([])

const getlist = async () => {
  const reslist = await getgorylist()
  list.value = reslist.data
}
getlist()
const active = ref(0)
// 导航

const option1 = [
  { text: '综合排序', value: '' },
  { text: '最新排序', value: 'new' },
  { text: '热门排序', value: 'hot' }
]
const option2 = [
  { text: '全部课程', value: 'a' },
  { text: '付费课程', value: 'b' },
  { text: '免费课程', value: 'c' }
]

const onclicknav = () => {
  console.log(ResSearch.sort)
  ResSearch.current = 1
  onLoad()
}
const screen = (id: number) => {
  ResSearch.labelId = id
  ResSearch.current = 1
  onLoad()
}
</script>

<template>
  <div class="nav-page">
    <van-sticky :offset-top="50">
      <van-dropdown-menu ref="menuRef">
        <van-dropdown-item v-model="ResSearch.sort" :options="option1" @change="onclicknav" />
        <van-dropdown-item
          v-if="title == '课程'"
          v-model="value2"
          :options="option2"
          @change="onclicknav"
        />
        <van-dropdown-item title="筛选" ref="itemRef">
          <div class="navrig">
            <van-sidebar v-model="active">
              <van-sidebar-item title="全部" />
              <van-sidebar-item v-for="(item, index) in list" :key="index" :title="item.name" />
            </van-sidebar>
            <div class="right">
              <div class="rig">
                <van-button
                  v-for="(item, index) in list[active - 1]?.labelList"
                  :key="index"
                  round
                  type="default"
                  @click="screen(item.id)"
                  >{{ item.name }}</van-button
                >
              </div>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="left" v-show="title == '课程'" v-for="(item, index) in relist" :key="index">
        <div class="img">
          <img
            :src="
              item.mainImage?.indexOf('http')
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
      <div class="main" v-show="title == '文章'" v-for="(item, index) in relist" :key="index">
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
        <!-- <div class="img"></div> -->
      </div>
      <div class="question" v-show="title == '问答'" v-for="(item, index) in relist" :key="index">
        <h3>{{ item.title }}</h3>
        <p class="p-question">
          <span>{{ item.reply }}回答·{{ item.viewCount }}浏览</span
          ><span>{{ item.nickName }}·{{ item.updateDate }}</span>
        </p>
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
.navrig {
  display: flex;
  height: 200px;
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
    }
  }
  .van-sidebar-item {
    height: 80px;
    line-height: 40px;
  }
  .van-button {
    width: 33%;
    height: 40px;
    margin-top: 10px;
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
.question {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  .p-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.9px;
    color: var(--cp-text3);
  }
}
</style>
