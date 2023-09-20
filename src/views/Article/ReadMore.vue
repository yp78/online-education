<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ArticleDetail, ReviewDetail } from '@/services/ArticleApi'
import type { ReviewType, articleType } from '@/types/ArticleType'

const route = useRoute()
const details = ref<articleType>()
const reviewDetails = ref<ReviewType[]>([])
const getArticle = async () => {
  if (route.query.id) {
    const res = await ArticleDetail(Number(route.query.id))
    const review = await ReviewDetail(Number(route.query.id))
    console.log('res=>', res)
    details.value = res.data
    reviewDetails.value = review.data
  }
}
getArticle()
</script>

<template>
  <div class="read-more-page">
    <oe-nav-bar :title="details?.title" flag="true"></oe-nav-bar>
    <p>
      <van-button
        class="lable-btn"
        plain
        round
        type="primary"
        v-for="(item, index) in details?.labelList"
        :key="index"
        size="mini"
        >{{ item.name }}</van-button
      >
    </p>
    <h3>{{ details?.title }}</h3>
    <p class="user">
      <img :src="details?.userImage" alt="" />
      <b
        >{{ details?.nickName
        }}<span>·{{ details?.updateDate + '·' + details?.viewCount }}人阅读</span></b
      >
    </p>
    <div class="main" v-html="details?.htmlContent"></div>
    <div class="p"></div>
    <div class="comment">
      <p class="top"><span></span>热门评价</p>
      <div class="con" v-for="(item, index) in reviewDetails" :key="index">
        <img :src="item.userImage" alt="" />
        <div class="rig">
          <p class="rig-top">
            <sapn>{{ item.nickName }}</sapn> <sapn>{{ item.createDate }}</sapn>
          </p>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <input class="bottom-inpt" type="text" placeholder="有何高见,展开讲讲……" />
      <button class="bottom-btn">提交</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.read-more-page {
  padding: 50px 0;
  .lable-btn {
    margin-left: 10px;
  }
  h3 {
    margin: 10px;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 10px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span {
      color: #ccc;
      font-size: 0.9em;
    }
  }
  .main {
    width: 100%;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
  }
  .p {
    height: 12px;
    background-color: var(--cp-bg);
    width: 100%;
  }
  .comment {
    padding: 10px;
    .top {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        height: 20px;
        width: 4px;
        background-color: #345dc2;
        margin-right: 15px;
      }
    }
    .con {
      display: flex;
      padding: 10px;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .rig {
        flex: 1;
        height: 100%;
        .rig-top {
          display: flex;
          justify-content: space-between;
          color: #ccc;
          font-size: 0.9em;
        }
      }
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    &-inpt {
      flex: 1;
      margin-right: 10px;
      border: 0;
      background-color: #e7e5e5;
      height: 30px;
      border-radius: 15px;
    }
    &-btn {
      background-color: #e7e5e5;
      color: #a4a4a4;
      border-radius: 10px;
      height: 30px;
      border: 1px solid #737272;
    }
  }
}
</style>
