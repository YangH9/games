<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <div class="container">
        <Breadcrumb />
        <a-card
          title="网盘资源"
          :hoverable="true">
          <a-descriptions :column="1">
            <template
              v-for="(item, index) of resoutcesList"
              :key="index">
              <a-descriptions-item
                :label="item.title">
                <a-button
                  type="link"
                  size="small"
                  :target="item.target"
                  :href="item.href">
                  {{ item.href }}
                </a-button>
                提取码：{{ item.code }}
              </a-descriptions-item>
            </template>
          </a-descriptions>
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue"

import { reactive } from "vue"

const resoutcesList = reactive([
  { title: "Adobe全家桶Win 2021版", href: "https://pan.baidu.com/s/1kL9FEAzlg-pXlfHdThxfaQ", code: "qld2", target: "_self" },
  { title: "Adobe全家桶Mac 2021 m1版", href: "https://pan.baidu.com/s/13rmigC2zRhzVFSScFMO5mg", code: "ls50", target: "_self" },
  { title: "Adobe全家桶Mac 2021 x86版", href: "https://pan.baidu.com/s/1OLXfsxt4bSoiuncxb-PmXw", code: "1o9w", target: "_self" },
  { title: "Adobe全家桶Win 2020版", href: "https://pan.baidu.com/s/19RIuuHLGVK4rOxVVJ3zvYQ", code: "rieh", target: "_self" },
  { title: "Adobe全家桶Mac 2020版", href: "https://pan.baidu.com/s/1PloT2fjuB0ZnzcTGKL0tig", code: "36jy", target: "_self" },
  { title: "Adobe全家桶Win 2019版", href: "https://pan.baidu.com/s/1Gj8FOUXRVjYL9N9qnU-W7w", code: "nmnp", target: "_self" },
  { title: "Adobe全家桶Mac 2019版", href: "https://pan.baidu.com/s/1gom5WfacfeQzjxTTVdVZqg", code: "gvtm", target: "_self" },
  { title: "码农常用", href: "https://pan.baidu.com/s/1C3vKO71jesOYnZUwWclVdg", code: "2jus", target: "_self" },
  { title: "娱乐软件", href: "https://pan.baidu.com/s/13MRZcJXQHdvUripe6kA18A", code: "ufms", target: "_self" },
  { title: "办公软件", href: "https://pan.baidu.com/s/157xdfx70rxioWPDaGBk64A", code: "ve8n", target: "_self" },
  { title: "电子书", href: "https://pan.baidu.com/s/1p_WeaOR5JTd5JkFiQuk61g", code: "upsq", target: "_self" },
  { title: "其他软件", href: "https://pan.baidu.com/s/1HlN_-UyeaCWoiMKBYaRixw", code: "cyh9", target: "_self" },
  { title: "各种安装包", href: "https://pan.baidu.com/s/1X5vPznPtS_N2nxQ8ja8auA", code: "f6ud", target: "_self" }
])

</script>

<style lang="less" scoped>

</style>
