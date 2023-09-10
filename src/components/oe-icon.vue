<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg aria-hidden="true" class="oe-icon">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
.oe-icon {
  width: 1em;
  height: 1em;
}
</style>
