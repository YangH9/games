<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="搜索" :hoverable="true">
      <div class="flex">
        <a-select
          v-model:value="selectOption1.value"
          :options="selectOption1.options"
          :field-names="selectOption1.fieldNames"
          allowClear
          mode="multiple"
          class="grow"
        ></a-select>
      </div>
      <div>options数据：{{ selectOption1.options.map((i) => i.label).join('，') }}</div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

// 随机一个大小写字母
// String.fromCharCode((Math.random() >= 0.5 ? 65 : 97) + ~~(Math.random() * 25))
// (~~(Math.random() * 25) + 10).toString(36)[Math.random() >= 0.5 ? 'toLowerCase' : 'toUpperCase']()

const selectOption1 = reactive({
  fieldNames: { label: 'label', value: 'value', options: 'children' },
  options: Array.from({ length: 20 }, (_, i) => ({
    label: Array.from({ length: 8 }, (_) =>
      String.fromCharCode((Math.random() >= 0.5 ? 65 : 97) + ~~(Math.random() * 25))
    ).join(''),
    value: `value${i}`
  })),
  value: []
})
</script>

<style lang="scss" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
