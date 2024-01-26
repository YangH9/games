<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="scroll_auto">
      <RouterViewBox url="/resources">
        <div class="container">
          <Breadcrumb />
          <a-card title="网盘资源" class="mb_2" :hoverable="true">
            <a-descriptions :column="1">
              <a-descriptions-item v-for="(item, index) in resoutcesList" :key="index" :label="item.title">
                <a-button :href="item.href" :title="item.title" size="small" type="link" target="_blank">
                  {{ item.href }}
                </a-button>
                提取码：{{ item.code }}
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </div>
      </RouterViewBox>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import RouterViewBox from '@/components/RouterViewBox.vue'

const resoutcesList = [
  { title: 'Adobe全家桶Win 2023版', href: 'https://pan.baidu.com/s/1l_bidfWwpfeJeS7VtplgIw ', code: 'uqe1' },
  { title: 'Adobe全家桶Win 2021版', href: 'https://pan.baidu.com/s/1kL9FEAzlg-pXlfHdThxfaQ', code: 'qld2' },
  { title: 'Adobe全家桶Mac 2021 m1版', href: 'https://pan.baidu.com/s/13rmigC2zRhzVFSScFMO5mg', code: 'ls50' },
  { title: 'Adobe全家桶Mac 2021 x86版', href: 'https://pan.baidu.com/s/1OLXfsxt4bSoiuncxb-PmXw', code: '1o9w' },
  { title: 'Adobe全家桶Win 2020版', href: 'https://pan.baidu.com/s/19RIuuHLGVK4rOxVVJ3zvYQ', code: 'rieh' },
  { title: 'Adobe全家桶Mac 2020版', href: 'https://pan.baidu.com/s/1PloT2fjuB0ZnzcTGKL0tig', code: '36jy' },
  { title: 'Adobe全家桶Win 2019版', href: 'https://pan.baidu.com/s/1Gj8FOUXRVjYL9N9qnU-W7w', code: 'nmnp' },
  { title: 'Adobe全家桶Mac 2019版', href: 'https://pan.baidu.com/s/1gom5WfacfeQzjxTTVdVZqg', code: 'gvtm' },
  { title: '码农常用', href: 'https://pan.baidu.com/s/1C3vKO71jesOYnZUwWclVdg', code: '2jus' },
  { title: '娱乐软件', href: 'https://pan.baidu.com/s/13MRZcJXQHdvUripe6kA18A', code: 'ufms' },
  { title: '办公软件', href: 'https://pan.baidu.com/s/157xdfx70rxioWPDaGBk64A', code: 've8n' },
  { title: '电子书', href: 'https://pan.baidu.com/s/1p_WeaOR5JTd5JkFiQuk61g', code: 'upsq' },
  { title: '其他软件', href: 'https://pan.baidu.com/s/1HlN_-UyeaCWoiMKBYaRixw', code: 'cyh9' },
  { title: '各种安装包', href: 'https://pan.baidu.com/s/1X5vPznPtS_N2nxQ8ja8auA', code: 'f6ud' }
]
</script>

<style scoped lang="scss"></style>
