<template>
  <div class="preloader">
    <div class="spinner clearfix">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.preloader {
  background: #ffffff;
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  .spinner {
    font-size: 10px;
    height: 60px;
    left: 50%;
    margin: -30px 0 0 -25px;
    position: fixed;
    text-align: center;
    top: 50%;
    width: 57px;
    transform: translateZ(0);
  }

  .spinner {
    &>div {
      background-color: #00acc3;
      height: 100%;
      width: 6px;
      float: left;
      margin-right: 3px;
      animation-name: stretchdelay;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-duration: 1.2s;
    }

    .rect1 {
      animation-delay: -1.2s;
    }

    .rect2 {
      animation-delay: -1.1s;
    }

    .rect3 {
      animation-delay: -1s;
    }

    .rect4 {
      animation-delay: -0.9s;
    }

    .rect5 {
      animation-delay: -0.8s;
    }
  }
}

@keyframes stretchdelay {

  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }

  20% {
    transform: scaleY(1);
  }
}
</style>
