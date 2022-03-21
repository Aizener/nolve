<template>
  <div class="book flex mt-15" v-for="(item, idx) in props.list" :key="idx">
    <var-image
      class="book-cover"
      lazy
      src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg"
    />
    <div class="book-info flex flex-col flex-row-between ml-15">
      <p class="fs-14 fw-bold">{{ idx + 1 }}.{{ item.title }}</p>
      <div>
        <p class="fs-12 color-999 line-2">{{ item.desc }}</p>
        <p class="flex flex-row-between color-666 fs-12 mt-5">
          <span>{{ item.author }}</span>
          <span>{{ item.date }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

interface Book {
  title: string,
  desc: string,
  author: string,
  date: string
}

const props = defineProps({
  list: {
    type: Array as PropType<Array<Book>>,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
</style>
