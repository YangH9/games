<template>
  <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="CSS动画时钟">
    <h2>当前时间（js初始化时间）：</h2>
    <div class="time">
      <span class="hour" :style="{ '--dh': h + m / 60 + s / 3600 }"></span>
      <a class="split">:</a>
      <span class="minitus" :style="{ '--dm': m + s / 60 }"></span>
      <a class="split">:</a>
      <span class="seconds" :style="{ '--ds': s }"></span>
      <a class="split">'</a>
      <span class="milliseconds" :style="{ '--dms': ms % 10 }"></span>
    </div>
    <h2>加载时间：</h2>
    <div class="time">
      <span class="hour"></span>
      <a class="split">:</a>
      <span class="minitus"></span>
      <a class="split">:</a>
      <span class="seconds"></span>
      <a class="split">'</a>
      <span class="milliseconds"></span>
    </div>
  </a-card>
</template>

<script setup>
const d = new Date()
const h = d.getHours()
const m = d.getMinutes()
const s = d.getSeconds()
const ms = d.getSeconds()
</script>

<style lang="scss" scoped>
.time {
  display: flex;
  align-items: center;
  justify-content: center;
  --step: 60s;
  font-family: Consolas, Monaco, monospace;
  font-size: 60px;

  .split {
    animation: shark 1s step-end infinite;
  }

  .hour::after {
    counter-reset: hour var(--h);
    content: counter(hour, decimal-leading-zero);
    animation: hour calc(var(--step) * 60 * 24) infinite steps(24);
    animation-delay: calc(-1 * var(--step) * var(--dh) * 60);
  }

  .minitus::after {
    counter-reset: minitus var(--m);
    content: counter(minitus, decimal-leading-zero);
    animation: minitus calc(var(--step) * 60) infinite steps(60);
    animation-delay: calc(-1 * var(--step) * var(--dm));
  }

  .seconds::after {
    counter-reset: seconds var(--s);
    content: counter(seconds, decimal-leading-zero);
    animation: seconds var(--step) infinite steps(60);
    animation-delay: calc(-1 * var(--step) * var(--ds) / 60);
  }

  .milliseconds::after {
    counter-reset: milliseconds var(--ms);
    content: counter(milliseconds, decimal-leading-zero);
    animation: milliseconds calc(var(--step) / 100) infinite steps(99);
    animation-delay: calc(-1 * var(--step) * var(--dms) / 60);
  }

  @property --h {
    syntax: '<integer>';
    inherits: false;
    initial-value: 0;
  }

  @property --m {
    syntax: '<integer>';
    inherits: false;
    initial-value: 0;
  }

  @property --s {
    syntax: '<integer>';
    inherits: false;
    initial-value: 0;
  }

  @property --ms {
    syntax: '<integer>';
    inherits: false;
    initial-value: 10;
  }

  @keyframes hour {
    to {
      --h: 24;
    }
  }

  @keyframes minitus {
    to {
      --m: 60;
    }
  }

  @keyframes seconds {
    to {
      --s: 60;
    }
  }

  @keyframes milliseconds {
    to {
      --ms: 99;
    }
  }

  @keyframes shark {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }
}
</style>
