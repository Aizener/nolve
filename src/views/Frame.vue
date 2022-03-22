<template>
  <div class="frame w-100 vh-100 flex flex-col">
    <div class="frame__container flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" v-if="$route.meta.keepAlive">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </router-view>
    </div>
    <div class="frame__tabbar w-100">
      <TabBar></TabBar>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabBar from '../components/TabBar.vue'

</script>

<style lang="scss">
.frame {
  &__container {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
.fade-enter-from {
  transform: translateX(-100%);
}
.fade-leave-to {
  position: absolute;
  height: calc(100vh - 50px);
  transform: translateX(100%);
}
.fade-enter-active, .fade-leave-active {
  transition: transform .3s;
}
</style>