<template>
  <div class="list flex w-100 vh-100">
    <var-tabs
      class="vertical-tabs"
      elevation
      layout-direction="vertical"
      active-color="orange"
      inactive-color="#999"
      v-model:active="active"
    >
      <var-tab>男生人气</var-tab>
      <var-tab>女生人气</var-tab>
      <var-tab>玄幻新榜</var-tab>
      <var-tab>玄幻新榜</var-tab>
      <var-tab>玄幻新榜</var-tab>
      <var-tab>玄幻新榜</var-tab>
      <var-tab>玄幻新榜</var-tab>
      <var-tab>玄幻新榜</var-tab>
      <var-tab>玄幻新榜</var-tab>
    </var-tabs>
    <div class="list-content flex-1 px-15 pb-10">
      <var-list
        :finished="finished"
        v-model:loading="loading"
        @load="load"
      >
        <div class="book flex mt-15" v-for="(item, idx) in list" :key="idx">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
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
      </var-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
const finished = ref(false)
const loading = ref(false)

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
const load = () => {
  setTimeout(() => {
    list.value = [...list.value, ...[
      { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
      { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' },
      { title: '都市极品神医', desc: '这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电这儿离是胜多负少的范水电费水电费这儿离是胜多负少的范水电', author: '分那个会笑', date: '21年12月' }
    ]]
    loading.value = false
    if (list.value.length > 20) {
      finished.value = true
    }
  }, 1e3)
  console.log('load')
}
</script>

<style lang="scss" scoped>
.vertical-tabs {
  width: 80px;
  min-width: 80px;
  height: 100%;
  background-color: rgb(247, 247, 247);
  .var-tab {
    flex-grow: 0;
    height: 40px;
    &--active {
      background-color: #fff;
    }
  }
}

.list-content {
  height: 100%;
  overflow-y: auto;
}

.book {
  &-cover {
    width: 60px;
    min-width: 60px;
    height: 80px;
  }
}
</style>