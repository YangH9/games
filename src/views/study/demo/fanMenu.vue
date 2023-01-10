<template>
  <a-layout-content>
    <div class="menu">
      <ul class="s1">
        <li>
          <a href="javascript:;">
            <span>{{ menuData.title }}</span>
          </a>
          <template v-if="menuData.children">
            <ul class="s2">
              <li v-for="(item1, index1) of menuData.children" :key="index1">
                <a
                  href="javascript:;"
                  :style="{ background: `hsl(0, 0%, ${90 - index1 * 7}%)`, transform: `rotate(${index1 * (90 / menuData.children.length)}deg)` }"
                >
                  <span>{{ item1.title }}</span>
                </a>
                <template v-if="item1.children">
                  <ul class="s3">
                    <li v-for="(item2, index2) of item1.children" :key="index2">
                      <a
                        href="javascript:;"
                        :style="{ background: `hsl(0, 0%, ${80 - index2 * 7}%)`, transform: `rotate(${index2 * (90 / item1.children.length)}deg)` }"
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
  </a-layout-content>
</template>

<script setup>
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
      children: [{ title: '菜单项4-1' }, { title: '菜单项4-2' }, { title: '菜单项4-3' }, { title: '菜单项4-4' }, { title: '菜单项4-5' }]
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

<style lang="less" scoped>
.ant-layout-content {
  background: var(--color-background-mute);
  color: var(--color-heading);
  z-index: 1;
}

.menu {
  position: relative;
  width: 310px;
  height: 310px;
  overflow: hidden;
  transition: 0s 0.6s;
  z-index: 1;
  top: 100px;
  left: 100px;

  ul {
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

      ul {
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

          ul {
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

          &:hover > a {
            background: #faa !important;
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
</style>
