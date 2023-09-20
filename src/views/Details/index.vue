<script setup lang="ts">
import { ref } from 'vue'
import { courseApi } from '@/services/detailsApi'
import type { courseRes } from '@/types/detailsType'

const course = ref<courseRes>()
const getCourse = async () => {
  const resCourse = await courseApi()
  console.log('resCourse=>', resCourse)

  course.value = resCourse.data
}
getCourse()
</script>

<template>
  <div class="-page"></div>
</template>

<style lang="scss" scoped></style>
