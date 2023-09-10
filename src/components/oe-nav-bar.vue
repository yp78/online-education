<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const emit = defineEmits(['click-right'])
const onClickLeft = () => {
  router.back()
}
const onClickRight = () => {
  emit('click-right')
}
defineProps<{
  title?: string
  rightText?: string
  back?: () => void
}>()
</script>

<template>
  <van-nav-bar
    :title="title"
    :right-text="rightText"
    left-arrow
    fixed
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
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
