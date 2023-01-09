<template>
  <div class="circleProgress_wrapper">
    <div class="wrapper right">
      <div class="circleProgress rightcircle"></div>
    </div>
    <div class="wrapper left">
      <div class="circleProgress leftcircle"></div>
    </div>
    CSS进度条
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.circleProgress_wrapper {
  text-align: center;
  line-height: 190px;
  width: 200px;
  height: 200px;
  position: relative;
}

.wrapper {
  width: 100px;
  height: 200px;
  position: absolute;
  top: 0;
  overflow: hidden;
}

.right {
  right: 0;
}

.left {
  left: 0;
}

.circleProgress {
  width: 200px;
  height: 200px;
  border: 20px solid rgb(81, 197, 81);
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: rotate(45deg);
}

.rightcircle {
  right: 0;
  animation: circleProgressLoad_right 10s linear infinite;
}

.leftcircle {
  left: 0;
  animation: circleProgressLoad_left 10s linear infinite;
}

@keyframes circleProgressLoad_right {
  0% {
    border-left-color: green;
    border-bottom-color: green;
    transform: rotate(45deg);
  }

  50% {
    border-left-color: green;
    border-bottom-color: green;
    transform: rotate(225deg);
  }

  100% {
    border-left-color: green;
    border-bottom-color: green;
    transform: rotate(225deg);
  }
}

@keyframes circleProgressLoad_left {
  0% {
    transform: rotate(45deg);
  }

  50% {
    border-top-color: green;
    border-right-color: green;
    transform: rotate(45deg);
  }

  100% {
    border-top-color: green;
    border-right-color: green;
    transform: rotate(225deg);
  }
}
</style>
