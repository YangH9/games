<template>
  <a-card title="腾讯旗下游戏链接" class="card_button_list" :hoverable="true">
    <a-button
      v-for="(item, key, index) in dataList"
      :key="index"
      :href="`//${key}`"
      :title="item.title"
      size="large"
      target="_blank"
    >
      <template #icon>
        <img
          v-lazy="`//${key}/favicon.ico`"
          class="icon"
          referrer="no-referrer"
          @error="e => e.target.classList.add('hidden')"
        />
      </template>
      {{ key }}
    </a-button>
  </a-card>
</template>

<script setup>
import { ref, inject } from 'vue'

// 腾讯各类域名
// https://ossweb-img.qq.com/images/js/milo_config_server/milo_monitor_alldomain.js

const Jsonp = inject('Jsonp')

const dataList = ref([])

Jsonp('https://ossweb-img.qq.com/images/js/milo_config_server/milo_monitor_alldomain.js', () => {
  dataList.value = window.Milo_Monitor_All_Domain
})
</script>

<style scoped lang="scss"></style>
