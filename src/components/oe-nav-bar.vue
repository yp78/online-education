<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const emit = defineEmits<{ (e: 'click-right'): void }>()
const onClickLeft = () => {
  router.back()
}
const onClickRight = () => {
  emit('click-right')
}
defineProps<{
  title?: string
  rightText?: string
  rightIcon?: string
  back?: () => void
  flag?: boolean
}>()
</script>

<template>
  <van-nav-bar
    :title="title"
    :left-arrow="flag"
    fixed
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>{{ rightText }}<van-icon :name="rightIcon" size="18" /> </template
  ></van-nav-bar>
</template>

<style lang="scss" scoped>
::v-deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }

    &__text {
      font-size: 15px;
    }
  }
}
</style>
