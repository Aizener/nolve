<template>
  <div class="book">
    <div class="book-top">
      <p class="book-top--time">阅读时长<span>192</span>小时</p>
    </div>
    <div class="book-list">
      <div class="book-list--item" v-for="(item, idx) in books" :key="idx">
        <div class="book-list--cover"></div>
        <p class="book-list--title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const books = ref([{
  title: '武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤'
}, {
  title: '氨基酸发了拘'
}, {
  title: '武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤'
}, {
  title: '氨基酸发了拘'
}, {
  title: '武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤'
}, {
  title: '氨基酸发了拘'
}, {
  title: '武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤'
}, {
  title: '氨基酸发了拘'
}, {
  title: '氨基酸发了拘'
}, {
  title: '武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤武动乾坤'
}, {
  title: '氨基酸发了拘'
}])
</script>

<style lang="scss" scoped>
.book {
  min-height: calc(100vh - 50px);
  overflow: hidden;
  background-color: rgb(245, 245, 245);
  padding-top: 40px;
  &-top {
    width: 100%;
    height: 45px;
    background-color: #fff;
    position: fixed;
    left: 0; top: 0;
    box-shadow: 0 2px 3px #ccc;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &--time {
      font-size: 12px;
      span {
        font-size: 16px;
      }
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    &--item {
      width: 33%;
      padding: 10px;
    }
    &--cover {
      height: 140px;
      background-color: orange;
    }
    &--title {
      font-size: 13px;
      margin-top: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
