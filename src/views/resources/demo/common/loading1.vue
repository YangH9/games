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

<script setup></script>

<style lang="less" scoped>
.preloader {
  .spinner {
    font-size: 10px;
    height: 100%;
    text-align: center;
    width: 100%;
    transform: translateZ(0);
  }

  .spinner {
    & > div {
      background-color: #00acc3;
      height: 100%;
      width: 10px;
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
