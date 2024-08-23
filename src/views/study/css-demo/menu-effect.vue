<template>
  <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="菜单特效">
    <div class="menu menu1">
      <ul class="floor1">
        <li>
          <a href="javascript:;">
            <span>{{ menuData.title }}</span>
          </a>
          <template v-if="menuData.children">
            <ul class="floor2">
              <li v-for="(item1, index1) in menuData.children" :key="index1">
                <a
                  href="javascript:;"
                  :style="{
                    background: `hsl(0, 0%, ${90 - index1 * 7}%)`,
                    transform: `rotate(${index1 * (90 / menuData.children.length)}deg)`
                  }"
                >
                  <span>{{ item1.title }}</span>
                </a>
                <template v-if="item1.children">
                  <ul class="floor3">
                    <li v-for="(item2, index2) in item1.children" :key="index2">
                      <a
                        href="javascript:;"
                        :style="{
                          background: `hsl(0, 0%, ${80 - index2 * 7}%)`,
                          transform: `rotate(${index2 * (90 / item1.children.length)}deg)`
                        }"
                      >
                        <span>{{ item2.title }}</span>
                      </a>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
    <div class="menu menu2">
      <ul class="menu_item">
        <li><a href="javascript:;">★</a></li>
        <li><a href="javascript:;">✉</a></li>
        <li><a href="javascript:;">⚙</a></li>
        <li><a href="javascript:;">✎</a></li>
        <li><a href="javascript:;">♫</a></li>
        <li><a href="javascript:;">✆</a></li>
      </ul>
      <a href="javascript:;" class="menu_target">菜单</a>
    </div>
    <main class="menu menu3">
      <div class="wrap">
        <input id="checking" type="checkbox" style="display: none" />
        <button class="blob">★</button>
        <button class="blob">✉</button>
        <button class="blob">⚙</button>
        <button class="blob">❤</button>
        <button class="blob">✌</button>
        <button class="blob">✎</button>
        <button class="blob">♫</button>
        <button class="blob">✆</button>
        <label class="blob" for="checking">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </label>
      </div>
    </main>
    <svg style="display: none">
      <defs>
        <filter id="filt">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="filt"
          ></feColorMatrix>
          <feBlend in2="filt" in="SourceGraphic" result="mix"></feBlend>
        </filter>
      </defs>
    </svg>
  </a-card>
</template>

<script setup lang="jsx">
const menuData = {
  title: '菜单',
  children: [
    {
      title: '菜单项1',
      children: [{ title: '菜单项1-1' }, { title: '菜单项1-2' }]
    },
    {
      title: '菜单项2',
      children: [{ title: '菜单项2-1' }, { title: '菜单项2-2' }, { title: '菜单项2-3' }]
    },
    {
      title: '菜单项3',
      children: [{ title: '菜单项3-1' }, { title: '菜单项3-2' }, { title: '菜单项3-3' }, { title: '菜单项3-4' }]
    },
    {
      title: '菜单项4',
      children: [
        { title: '菜单项4-1' },
        { title: '菜单项4-2' },
        { title: '菜单项4-3' },
        { title: '菜单项4-4' },
        { title: '菜单项4-5' }
      ]
    },
    {
      title: '菜单项5',
      children: [
        { title: '菜单项5-1' },
        { title: '菜单项5-2' },
        { title: '菜单项5-3' },
        { title: '菜单项5-4' },
        { title: '菜单项5-5' },
        { title: '菜单项5-6' }
      ]
    },
    {
      title: '菜单项6',
      children: [
        { title: '菜单项6-1' },
        { title: '菜单项6-2' },
        { title: '菜单项6-3' },
        { title: '菜单项6-4' },
        { title: '菜单项6-5' },
        { title: '菜单项6-6' },
        { title: '菜单项6-7' }
      ]
    }
  ]
}
</script>

<style scoped lang="scss">
.ant-card :deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}

.menu {
  float: left;
}

.menu1 {
  position: relative;
  width: 310px;
  height: 310px;
  overflow: hidden;
  transition: 0s 0.6s;
  z-index: 1;
  margin: 30px 0 0 30px;

  .floor1 {
    li {
      position: absolute;
      top: 0;
      left: 0;
      list-style: none;

      a {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0 0 100% 0;
        text-align: center;
        background: #fcc;
        color: #000;
        text-decoration: none;
        transform-origin: 0 0;
        line-height: 40px;
        box-shadow: -5px 5px 5px rgb(0 0 0 / 40%);
      }

      .floor2 {
        z-index: -1;
        transform: rotate(90deg);
        transition: transform 0.6s;
        transform-origin: 0 0;

        li {
          a {
            width: 200px;
            height: 200px;
            padding-left: 100px;

            span {
              transform: rotate(5deg);
              display: block;
            }
          }

          .floor3 {
            z-index: -1;
            transform: rotate(90deg);
            transition: transform 0.6s;
            transform-origin: 0 0;

            li {
              a {
                width: 300px;
                height: 300px;
                padding-left: 200px;
              }

              &:hover > a {
                background: #f99 !important;
              }
            }
          }

          &:hover {
            & > a {
              background: #faa !important;
            }

            & > ul {
              transform: rotate(0deg);
            }
          }
        }
      }

      &:hover {
        & > a {
          background: #fbb !important;
        }

        & > ul {
          transform: rotate(0deg);
        }
      }
    }
  }

  &:hover {
    transition: 0s 0s;
  }
}

.menu2 {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 120px;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Lato', Helvetica, sans-serif;
  }

  a {
    width: 80px;
    height: 80px;
    margin: 10px;
    border-radius: 50%;
    border: 2px solid #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    background: pink;
  }

  .menu_target {
    position: absolute;
  }

  .menu_item li {
    position: absolute;
    transform: translate(0, 0);
    opacity: 0;
    font-size: 30px;
    animation-fill-mode: both;
    animation-duration: 0.6s;
    animation-timing-function: linear;
    transition: opacity 0.6s;
  }

  &:hover {
    .menu_item li {
      opacity: 1;
      animation-duration: 1s;
      transition: opacity 1s;

      &:nth-child(1) {
        animation-name: moveout_1;
      }

      &:nth-child(2) {
        animation-name: moveout_2;
      }

      &:nth-child(3) {
        animation-name: moveout_3;
      }

      &:nth-child(4) {
        animation-name: moveout_4;
      }

      &:nth-child(5) {
        animation-name: moveout_5;
      }

      &:nth-child(6) {
        animation-name: moveout_6;
      }

      @keyframes moveout_1 {
        20% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }

        100% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }
      }

      @keyframes moveout_2 {
        20% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }

        100% {
          transform: rotate(-60deg) translate(0, 100%) rotate(60deg);
        }
      }

      @keyframes moveout_3 {
        20% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }

        60% {
          transform: rotate(-60deg) translate(0, 100%) rotate(60deg);
        }

        100% {
          transform: rotate(-120deg) translate(0, 100%) rotate(120deg);
        }
      }

      @keyframes moveout_4 {
        20% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }

        46% {
          transform: rotate(-60deg) translate(0, 100%) rotate(60deg);
        }

        72% {
          transform: rotate(-120deg) translate(0, 100%) rotate(120deg);
        }

        100% {
          transform: rotate(-180deg) translate(0, 100%) rotate(180deg);
        }
      }

      @keyframes moveout_5 {
        20% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }

        40% {
          transform: rotate(-60deg) translate(0, 100%) rotate(60deg);
        }

        60% {
          transform: rotate(-120deg) translate(0, 100%) rotate(120deg);
        }

        80% {
          transform: rotate(-180deg) translate(0, 100%) rotate(180deg);
        }

        100% {
          transform: rotate(-240deg) translate(0, 100%) rotate(240deg);
        }
      }

      @keyframes moveout_6 {
        20% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }

        36% {
          transform: rotate(-60deg) translate(0, 100%) rotate(60deg);
        }

        52% {
          transform: rotate(-120deg) translate(0, 100%) rotate(120deg);
        }

        68% {
          transform: rotate(-180deg) translate(0, 100%) rotate(180deg);
        }

        84% {
          transform: rotate(-240deg) translate(0, 100%) rotate(240deg);
        }

        100% {
          transform: rotate(-300deg) translate(0, 100%) rotate(300deg);
        }
      }
    }
  }

  &:not(:hover) {
    .menu_item li {
      &:nth-child(1) {
        animation-name: movein_1;
      }

      &:nth-child(2) {
        animation-name: movein_2;
      }

      &:nth-child(3) {
        animation-name: movein_3;
      }

      &:nth-child(4) {
        animation-name: movein_4;
      }

      &:nth-child(5) {
        animation-name: movein_5;
      }

      &:nth-child(6) {
        animation-name: movein_6;
      }

      @keyframes movein_1 {
        0% {
          transform: rotate(0) translate(0, 100%) rotate(0);
        }
      }

      @keyframes movein_2 {
        0% {
          transform: rotate(-60deg) translate(0, 100%) rotate(60deg);
        }
      }

      @keyframes movein_3 {
        0% {
          transform: rotate(-120deg) translate(0, 100%) rotate(120deg);
        }
      }

      @keyframes movein_4 {
        0% {
          transform: rotate(-180deg) translate(0, 100%) rotate(180deg);
        }
      }

      @keyframes movein_5 {
        0% {
          transform: rotate(-240deg) translate(0, 100%) rotate(240deg);
        }
      }

      @keyframes movein_6 {
        0% {
          transform: rotate(-300deg) translate(0, 100%) rotate(300deg);
        }
      }
    }
  }
}

.menu3 {
  margin: 40px 0 0 40px;

  * {
    color: #fff;
    font-family: 'Lato', Helvetica, sans-serif;
  }

  .wrap {
    position: relative;
    top: 20px;
    left: 20px;
    margin: auto;
    width: 300px;
    height: 300px;
    filter: url('#filt');

    .blob {
      display: block;
      cursor: pointer;
      border: none;
      outline: none;
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      padding: 0;
      z-index: 10;
      background-color: #f44336;
      box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.3) inset;

      &[for='checking'] {
        z-index: 30;
        font-size: 60px;
        text-align: center;
        color: #fff;
        transition: transform 0.5s ease-in-out 0.2s;
      }

      &:not([for='checking']) {
        width: 50px;
        height: 50px;
        top: 15px;
        left: 15px;
        font-size: 30px;
        transition: all 0.5s ease-in-out;
      }

      &:not([for='checking']):hover {
        color: #f44336;
        animation: harlem 0.5s linear forwards;
      }

      .bar {
        display: block;
        width: 40px;
        height: 5px;
        margin: 5px auto;
        background-color: #fff;
        border-radius: 2px;
        transition: all 0.4s linear 0.1s;

        &:first-child {
          margin-top: 27px;
        }
      }
    }

    & > #checking:checked ~ .blob {
      &:not([for='checking']) {
        background-color: #666;
      }

      &:nth-child(2) {
        margin-left: 85px;
        margin-top: 10px;
      }

      &:nth-child(3) {
        margin-top: 145px;
        margin-left: 65px;
      }

      &:nth-child(4) {
        margin-top: 160px;
        margin-left: 10px;
      }

      &:nth-child(5) {
        margin-top: 85px;
        margin-left: 10px;
      }

      &:nth-child(6) {
        margin-top: 63px;
        margin-left: 63px;
      }

      &:nth-child(7) {
        margin-top: 65px;
        margin-left: 145px;
      }

      &:nth-child(8) {
        margin-top: 112px;
        margin-left: 112px;
      }

      &:nth-child(9) {
        margin-top: 10px;
        margin-left: 160px;
      }

      &[for='checking'] > .bar {
        &:nth-child(1) {
          transform: rotate(45deg);
          margin-top: 37px;
        }

        &:nth-child(2) {
          opacity: 0;
          margin-top: -10px;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
          margin-top: -10px;
        }
      }
    }
  }

  @keyframes harlem {
    0% {
      transform: translate(0);
    }

    25% {
      transform: translate(5px, 5px);
    }

    50% {
      transform: translate(-5px, -5px);
    }

    75% {
      transform: translate(2px, 2px);
    }

    100% {
      transform: translate(0);
    }
  }
}
</style>
