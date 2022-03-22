<template>
  <div class="personal">
    <div class="personal-top">
      <img class="personal-top--avatar" src="https://img0.baidu.com/it/u=1721391133,702358773&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=625" alt="">
      <div class="personal-top--info">
        <p>可乐爱宅着</p>
      </div>
    </div>
    <div class="personal-list">
      <div class="personal-list--item">
        <var-icon namespace="icon" color="#999" name="yuedu" size="18" />
        <span>最近阅读</span>
      </div>
      <div class="personal-list--item">
        <var-icon namespace="icon" color="#999" name="shoucang" size="18" />
        <span>我的收藏</span>
      </div>
      <div class="personal-list--item">
        <var-icon namespace="icon" color="#999" name="xieyi" size="18" />
        <span>使用协议</span>
      </div>
      <div class="personal-list--item">
        <var-icon namespace="icon" color="#999" name="guanyu" size="18" />
        <span>关于本站</span>
      </div>
    </div>
    <p class="personal-version"><span>v</span>0.0.1</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.personal {
  &-top {
    width: 100%;
    height: 160px;
    padding: 40px 30px 20px 30px;
    background: linear-gradient(120deg, aliceblue, aliceblue);
    box-shadow: 0 5px 5px aliceblue;
    display: flex;
    align-items: center;
    &--avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      padding: 3px;
      border: 1px solid #fff;
    }
    &--info {
      margin-left: 15px;
      p {
        font-size: 18px;
      }
    }
  }

  &-list {
    padding: 0 15px;
    margin-top: 15px;
    &--item {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 15px;
      color: #333;
      border-bottom: 1px solid #ddd;
      span {
        margin-left: 8px;
      }
    }
  }

  &-version {
    color: #ccc;
    font-size: 13px;
    margin-top: 15px;
    text-align: center;
    span {
      font-size: 12px;
      margin-right: 3px;
      position: relative;
      bottom: 0.5px;
    }
  }
}
</style>