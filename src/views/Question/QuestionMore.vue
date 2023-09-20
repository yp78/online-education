<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { QuestionDetail, QusetionReview, replyApi } from '@/services/ArticleApi'
import type { questReview, questionType } from '@/types/ArticleType'

const show = ref(false)
const showToal = ref(false)
const message = ref('')
const route = useRoute()
const details = ref<questionType>()
const reviewDetails = ref<questReview[]>([])
const getArticle = async () => {
  if (route.query.id) {
    const res = await QuestionDetail(Number(route.query.id))
    const review = await QusetionReview(Number(route.query.id))
    console.log('res=>', res)
    details.value = res.data
    reviewDetails.value = review.data
  }
}
getArticle()

const attention = () => {
  console.log(1)

  if (details.value) {
    if (details?.value.star == 0) {
      details.value.star = 1
    } else {
      details.value.star = 0
    }
    console.log(details.value.star)
  }
}

const reply = async (value: string, id: string) => {
  if (value) {
    await replyApi({
      htmlContent: value,
      mdContent: value,
      questionId: id
    })
    show.value = false
    showToal.value = true
    setTimeout(() => {
      showToal.value = false
    }, 3000)
    message.value = ''
  }
}
</script>

<template>
  <div class="read-more-page">
    <oe-nav-bar :flag="true"></oe-nav-bar>
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
      <p class="top"><span></span>{{ reviewDetails.length }}个回答</p>
      <div class="con" v-for="(item, index) in reviewDetails" :key="index">
        <img :src="item.userImage" alt="" />
        <div class="rig">
          <p class="rig-top">
            <span>{{ item.nickName }}</span> <span>{{ item.createDate }}</span>
          </p>
          <p>{{ item.mdContent }}</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <button @click="attention" :class="details?.star == 0 ? 'bottom-btn' : 'btn'">
        <i v-show="details?.star == 0" class="iconfont">&#xe6aa;</i>
        {{ details?.star == 0 ? '关注问题' : '已关注问题' }}
      </button>
      <button class="bottom-btn" @click="show = true">
        <i class="iconfont">&#xe62e;</i>回答问题
      </button>
    </div>
  </div>
  <van-popup v-model:show="show" round position="bottom" :style="{ height: '30%' }">
    <div class="popup-top">
      <van-icon name="cross" />
      <b>回答问题</b>
      <van-button type="primary" size="small" @click="reply(message, details?.id!)"
        >提交</van-button
      >
    </div>
    <van-cell-group inset>
      <van-field
        v-model="message"
        rows="6"
        autosize
        type="textarea"
        placeholder="有何高见，展开讲讲……"
        show-word-limit
      />
    </van-cell-group>
  </van-popup>
  <!-- 消息提示 -->
  <div class="toal" v-if="showToal">
    <van-icon name="success" />
    <p>提交成功</p>
  </div>
</template>

<style lang="scss" scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont'; /* Project id 3605228 */
  src:
    url('//at.alicdn.com/t/c/font_3605228_272lg8uagtvh.woff2?t=1695191302422') format('woff2'),
    url('//at.alicdn.com/t/c/font_3605228_272lg8uagtvh.woff?t=1695191302422') format('woff'),
    url('//at.alicdn.com/t/c/font_3605228_272lg8uagtvh.ttf?t=1695191302422') format('truetype');
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
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
    height: 45px;
    border-top: 1px solid #ccc;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    &-btn {
      flex: 1;
      height: 100%;
      border: 0;
      color: #66afff;
      &:first-child {
        border-right: 1px solid #ccc;
      }
    }
    .btn {
      flex: 1;
      height: 100%;
      border: 0;
      color: #ccc;
      &:first-child {
        border-right: 1px solid #ccc;
      }
    }
  }
}
.popup-top {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
}
:deep() {
  .van-field {
    padding: 0;
    background-color: var(--cp-bg);
  }
}
.toal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba($color: #000000b9, $alpha: 0.6);
  width: 100px;
  height: 100px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .van-icon {
    font-size: 2.3em;
  }
}
</style>
