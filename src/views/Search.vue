<template>
  <div class="search">
    <div class="search-wrapper" :class="className">
      <var-input
        placeholder="请输入书名或者作者名"
        clearable
        v-model="value"
      />
    </div>
    <div class="search-list">
      <BookList :list="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import BookList  from '@/components/BookList.vue'
const value = ref('')

const list = ref([
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
  { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
])

const className = ref('')

onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop
    console.log(scrollTop)
    if (scrollTop > 0) {
      className.value = 'shadow'
    } else {
      className.value = ''
    }
  })
})
</script>

<style lang="scss" scoped>
.search {
  padding-top: 50px;
  padding-bottom: 10px;
  &-wrapper {
    left: 0; top: 0;
    background-color: #fff;
    padding: 0 10px;
    width: 100%;
    position: fixed;
    padding-bottom: 7px;
    &.shadow {
      box-shadow: 0 2px 3px #ccc;
    }
  }
  &-list {
    padding: 0 10px;
  }
  & :v-deep(.var-input) {
    margin-top: 5px;
  }
}
</style>