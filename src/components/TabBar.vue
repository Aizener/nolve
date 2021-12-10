<template>
  <div class="tabbar flex">
    <div
      class="tabbar-item flex-1 flex-center flex-col"
      :class="{ 'color-0ff': active === idx }"
      v-for="(tab, idx) in tabs"
      :key="idx"
      @click="handleTouchTab(tab, idx)"
    >
      <var-icon :name="tab.iconName" />
      <span
        class="fs-10 color-333"
        :class="{ 'color-0ff': active === idx }"
      >{{ tab.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

type TabItem = {
  iconName: string,
  title: string,
  name: string
}

const router = useRouter()

const tabs = ref([
  { iconName: 'fire', title: '精选', name: 'Home' },
  { iconName: 'notebook', title: '书架', name: 'Book' },
  { iconName: 'account-circle-outline', title: '我的', name: 'Personal' }
])
const active = ref(0)

const handleTouchTab = (tab: TabItem,idx: number) => {
  active.value = idx
  router.push({ name: tab.name })
}
</script>

<style lang="scss">
.tabbar {
  height: 50px;
  border-top: 1px solid #eee;
}
</style>