<template>
  <div class="title-row flex flex-col">
    <div class="title-row__top flex flex-row-between">
      <p class="fs-18 color-333">{{ title }}</p>
      <p class="flex flex-col-center" @click="handleClick">
        <span class="fs-13 color-999">{{ rightTitle }}</span>
        <slot name="right-icon">
          <var-icon color="#999" :name="rightIcon" size="20" />
        </slot>
      </p>
    </div>
    <p class="fs-13 color-999">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  rightTitle: { type: String, default: '' },
  rightIcon: { type: String, default: '' }
})
const emit = defineEmits(['confirm'])

const handleClick = () => emit('confirm')
</script>

<style lang="scss" scoped>

</style>