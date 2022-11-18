<template>
  <div
    v-if="visible"
    class="preloader">
    <div class="spinner clearfix">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
      <div class="rect6"></div>
    </div>
  </div>
</template>

<script setup>
import { routerLoading } from "@/stores"
import { computed } from "vue"

const visible = computed(() => routerLoading().visible)
</script>

<style lang="less" scoped>
.preloader {
  background: var(--color-background);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8888;

  .spinner {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      height: 100%;
      width: 1rem;
      background-color: #00acc3;
      margin-right: 6%;
      animation-duration: 1.2s;
      animation-name: stretchdelay;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    & > div:last-child {
      margin-right: 0;
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

    .rect6 {
      animation-delay: -0.7s;
    }
  }
}
@media (prefers-color-scheme: dark) {
  .preloader .spinner > div {
    background-color: #007180;
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
