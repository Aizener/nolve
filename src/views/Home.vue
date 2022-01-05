<template>
  <div class="home w-100 h-100 px-15 py-20">
    <div class="home-search flex flex-col-center px-10 py-8">
      <var-icon namespace="icon" name="search" color="#ccc" />
      <span class="fs-12 color-999 ml-5">输入作者或书名</span>
    </div>

    <TitleRow
      class="mt-15"
      title="排行榜"
      subtitle="根据你的喜好推荐的榜单书籍"
      right-title="查看更多"
      right-icon="chevron-right"
      @click="handleClick"
    ></TitleRow>

    <div>
      <var-button
        :color="
          active === idx ?
            'linear-gradient(to right, #FF8C00	, #F4A460	)' : '#fff'
        "
        :text-color="
          active === idx ?
            '#fff' : '#666'
        "
        size="small"
        class="br-round mr-10 mt-10"
        v-for="(item, idx) in categories"
        :key="idx"
        @click="active = idx"
      >{{ item.title }}</var-button>
    </div>

    <div class="flex flex-wrap flex-row-between">
      <BookRow
        class="flex-1 mt-15"
        v-for="(item, idx) in books"
        :key="idx"
        :book="item"
      ></BookRow>
    </div>

    <div class="book-category">
      <TitleRow
        class="mt-15"
        title="为你推荐"
        subtitle="根据你的阅读历史推荐"
        right-title="换一换"
        @click="handleClick"
      >
        <template #right-icon>
          <var-icon namespace="icon" color="#999" name="huanyihuan" size="20" />
        </template>
      </TitleRow>

      <div class="books flex mt-15">
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
      </div>
    </div>

    <div class="book-category">
      <TitleRow
        class="mt-15"
        title="为你推荐"
        right-title="查看更多"
        right-icon="chevron-right"
        @click="handleClick"
      ></TitleRow>

      <div class="books flex mt-15">
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
      </div>
    </div>

    <div class="book-category">
      <TitleRow
        class="mt-15"
        title="为你推荐"
        right-title="查看更多"
        right-icon="chevron-right"
        @click="handleClick"
      ></TitleRow>

      <div class="books flex mt-15">
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
      </div>
    </div>

    <div class="book-category">
      <TitleRow
        class="mt-15"
        title="为你推荐"
        right-title="查看更多"
        right-icon="chevron-right"
        @click="handleClick"
      ></TitleRow>

      <div class="books flex mt-15">
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
        <div class="book flex flex-col">
          <var-image class="book-cover" lazy src="https://www.qb5.tw/files/article/image/79/79575/79575s.jpg" />
          <p class="book-title mt-5 fs-12">我的冰山美女老婆</p>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BookRow from '@/components/BookRow.vue'
import TitleRow from '@/components/TitleRow.vue'

const active = ref(0)
const categories = ref<Array<Category>>([
  { title: '为你推荐' },
  { title: '人气热榜' },
  { title: '玄幻小说' },
  { title: '仙侠修真' },
  { title: '穿越文' }
])
const books = ref<Array<Book>>([
  { cover: 'https://www.qb5.tw/files/article/image/79/79575/79575s.jpg', title: '完美世界', read: 11000, order: 1 },
  { cover: 'https://www.qb5.tw/files/article/image/44/44997/44997s.jpg', title: '星空彼岸', read: 7400, order: 2 },
  { cover: 'https://www.qb5.tw/files/article/image/45/45014/45014s.jpg', title: '万相之王', read: 5400, order: 3 },
  { cover: 'https://www.qb5.tw/files/article/image/114/114945/114945s.jpg', title: '牧龙师', read: 3400, order: 4 },
  { cover: 'https://www.qb5.tw/files/article/image/114/114655/114655s.jpg', title: '我的帝国无双', read: 1400, order: 5 },
  // { cover: 'https://www.qb5.tw/files/article/image/79/79575/79575s.jpg', title: '完美世界', read: 910, order: 6 }
])

const handleClick =() => {
  alert('clicked.')
}

</script>

<style lang="scss">
.home {
  &-search {
    border-radius: 50px;
    background-color: #eee;
  }
  .br-round {
    border-radius: 20px;
  }
  .books {
    .book {
      width: 80px;
      margin-right: 12px;
      &-cover {
        box-shadow: 0 2px 3px #666;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>