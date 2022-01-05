<template>
  <div class="book-row flex">
    <var-image class="cover" lazy :src="book.cover" />
    <div class="flex flex-col flex-row-between ml-10">
      <p class="fs-12 color-333">{{ book.title }}</p>
      <div class="flex flex-col">
        <span class="fs-10 color-ccc">{{ getReadTitle }}人在读</span>
        <span class="fs-10 mt-5 top-text">
          Top<span class="fs-16 num ml-5 fw-bold">{{ book.order }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  book: {
    type: Object as PropType<Book>,
    default: {}
  }
})
const getReadTitle = computed(() => {
  const read = props.book.read
  return read < 10000 ? read : (read / 10000).toFixed(1) + 'w'
})
</script>

<style lang="scss" scoped>
.cover {
  width: 80px;
  height: 100px;
  object-fit: cover;
}
.top-text {
  color: red;
  .num {
    color: red;
  }
}
</style>