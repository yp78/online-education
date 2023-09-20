<script setup lang="ts">
import type { groupType } from '@/types/detailsType'

defineProps<{
  item: groupType
}>()
</script>

<template>
  <div class="group-page">
    <p>{{ item.title }}</p>
    <div
      class="left"
      v-for="(itn, ind) in item.list"
      :key="ind"
      @click="$router.push(`/pages/course/course-details?id=${item.id}`)"
    >
      <div class="img">
        <img
          :src="
            itn.mainImage.indexOf('http') ? 'http://m.mengxuegu.com' + itn.mainImage : itn.mainImage
          "
          alt=""
          referrerpolicy="no-referrer"
        /><span class="spn">{{ itn.totalTime }}</span>
      </div>
      <div class="min">
        <h5>{{ itn.title }}</h5>
        <div class="bom">
          <p><i class="p iconfont"></i>{{ itn.nickName }}</p>
          <p>
            <span class="iconfont s" style="color: red; margin-right: 20px">{{
              itn.isFree == 1 ? '免费' : itn.priceDiscount
            }}</span>
            <span class="iconfont sp">{{ itn.studyTotal }}人在学习</span>
          </p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <b style="color: red">￥{{ item.groupPrice }}</b
        ><span style="color: #969393; text-decoration: line-through">￥{{ item.totalPrice }}</span>
      </div>
      <span style="color: red">购买套餐</span>
    </div>
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

.group-page {
  width: 95%;
  box-shadow: 0 0 3px 3px #ccc;
  margin: 10px auto;
  border-radius: 5px;
  padding: 10px;
  .bottom {
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
</style>
