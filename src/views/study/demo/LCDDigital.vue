<template>
  <a-card v-calcHeight="{ height: 12, dom: '.ant-card-body' }" title="CSS液晶数字字体">
    <div class="clock">
      <div class="digits">
        <div v-for="i of 19" :key="i" :class="numList[Dayjs(time).format('YYYY/MM/DD HH:mm:ss')[i - 1]]">
          <template v-if="![':', '/', ' '].includes(i)">
            <span v-for="j of 7" :key="j" :class="`stroke${j}`"></span>
          </template>
        </div>
      </div>
    </div>
    <div class="digits">
      <div v-for="i of numList" :key="i" :class="i">
        <span v-for="j of 7" :key="j" :class="`stroke${j}`"></span>
      </div>
    </div>
  </a-card>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted, onBeforeUnmount } from 'vue'

const { Dayjs } = getCurrentInstance().proxy

const numList = {
  ':': 'colon',
  '/': 'slash',
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}

const time = ref(new Date())

let timer = null
onMounted(() => {
  timer = setInterval(() => {
    time.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  timer = null
})
</script>

<style lang="less" scoped>
:deep(.ant-card-body) {
  --bgcolor: #272e38;
}

.digits {
  & > div {
    display: inline-block;
    position: relative;
    width: 28px;
    height: 54px;
    margin: 0 4px;

    span {
      position: absolute;
      opacity: 0;
      transition: opacity 0.25s;
      border-color: var(--bgcolor);
      background-color: var(--bgcolor);

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 5px solid transparent;
      }

      &.stroke1 {
        height: 5px;
        width: 16px;
        top: 0;
        left: 6px;

        &:before {
          border-width: 0 5px 5px 0;
          border-right-color: inherit;
          left: -5px;
        }

        &:after {
          border-width: 0 0 5px 5px;
          border-left-color: inherit;
          right: -5px;
        }
      }

      &.stroke2 {
        height: 5px;
        width: 16px;
        top: 24px;
        left: 6px;

        &:before {
          border-width: 3px 4px 2px;
          border-right-color: inherit;
          left: -8px;
        }

        &:after {
          border-width: 3px 4px 2px;
          border-left-color: inherit;
          right: -8px;
        }
      }

      &.stroke3 {
        height: 5px;
        width: 16px;
        top: 48px;
        left: 6px;

        &:before {
          border-width: 5px 5px 0 0;
          border-right-color: inherit;
          left: -5px;
        }

        &:after {
          border-width: 5px 0 0 5px;
          border-left-color: inherit;
          right: -5px;
        }
      }

      &.stroke4 {
        width: 5px;
        height: 14px;
        top: 7px;
        left: 0;

        &:before {
          border-width: 0 5px 5px 0;
          border-bottom-color: inherit;
          top: -5px;
        }

        &:after {
          border-width: 0 0 5px 5px;
          border-left-color: inherit;
          bottom: -5px;
        }
      }

      &.stroke5 {
        width: 5px;
        height: 14px;
        top: 7px;
        right: 0;

        &:before {
          border-width: 0 0 5px 5px;
          border-bottom-color: inherit;
          top: -5px;
        }

        &:after {
          border-width: 5px 0 0 5px;
          border-top-color: inherit;
          bottom: -5px;
        }
      }

      &.stroke6 {
        width: 5px;
        height: 14px;
        top: 32px;
        left: 0;

        &:before {
          border-width: 0 5px 5px 0;
          border-bottom-color: inherit;
          top: -5px;
        }

        &:after {
          border-width: 0 0 5px 5px;
          border-left-color: inherit;
          bottom: -5px;
        }
      }

      &.stroke7 {
        width: 5px;
        height: 14px;
        top: 32px;
        right: 0;

        &:before {
          border-width: 0 0 5px 5px;
          border-bottom-color: inherit;
          top: -5px;
        }

        &:after {
          border-width: 5px 0 0 5px;
          border-top-color: inherit;
          bottom: -5px;
        }
      }
    }

    //  1
    &.one {
      .stroke5,
      .stroke7 {
        opacity: 1;
      }
    }

    //  2
    &.two {
      .stroke1,
      .stroke5,
      .stroke2,
      .stroke6,
      .stroke3 {
        opacity: 1;
      }
    }

    //  3
    &.three {
      .stroke1,
      .stroke5,
      .stroke2,
      .stroke7,
      .stroke3 {
        opacity: 1;
      }
    }

    //  4
    &.four {
      .stroke5,
      .stroke2,
      .stroke4,
      .stroke7 {
        opacity: 1;
      }
    }

    //  5
    &.five {
      .stroke1,
      .stroke2,
      .stroke4,
      .stroke3,
      .stroke7 {
        opacity: 1;
      }
    }

    //  6
    &.six {
      .stroke1,
      .stroke2,
      .stroke4,
      .stroke3,
      .stroke6,
      .stroke7 {
        opacity: 1;
      }
    }

    //  7
    &.seven {
      .stroke1,
      .stroke5,
      .stroke7 {
        opacity: 1;
      }
    }

    //  8
    &.eight {
      .stroke1,
      .stroke2,
      .stroke3,
      .stroke4,
      .stroke5,
      .stroke6,
      .stroke7 {
        opacity: 1;
      }
    }

    //  9
    &.nine {
      .stroke1,
      .stroke2,
      .stroke3,
      .stroke4,
      .stroke5,
      .stroke7 {
        opacity: 1;
      }
    }

    //  0
    &.zero {
      .stroke1,
      .stroke3,
      .stroke4,
      .stroke5,
      .stroke6,
      .stroke7 {
        opacity: 1;
      }
    }

    &.colon {
      width: 5px;

      &:before,
      &:after {
        width: 5px;
        height: 5px;
        content: '';
        position: absolute;
        left: 0;
        top: 14px;
        background-color: var(--bgcolor);
      }

      &:after {
        top: 34px;
      }
    }

    &.slash {
      width: 5px;
      height: 46px;
      background-color: var(--bgcolor);
      transform: translateY(-4px) skew(-16deg);
      margin: 0 10px;
    }
  }
}

.clock {
  margin-bottom: 20px;
}
</style>
