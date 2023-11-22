<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="随机数据生成器" :hoverable="true">
      <a-form :model="formData">
        <a-collapse accordion class="mb_2">
          <a-collapse-panel key="1">
            <template #header>
              <span class="mr_2">{{ formData.quantity }}个</span>
              <span class="mr_2">{{ optionData.unique.find((i) => i.value === formData.unique).label }}</span>
              <span class="mr_2">{{ optionData.type.find((i) => i.value === formData.type).label }}</span>
              <span class="mr_2">（{{ formData.min }}，{{ formData.max }}）</span>
              <span class="mr_2">{{ optionData.sort.find((i) => i.value === formData.sort).label }}</span>
            </template>
            <template #extra><a-button type="primary" @click.stop="generate">生成</a-button></template>
            <a-row :gutter="24">
              <a-col :md="24">
                <a-form-item label="数据类型">
                  <a-radio-group v-model:value="formData.type" :options="optionData.type" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="8">
                <a-form-item label="数字唯一性">
                  <a-radio-group v-model:value="formData.unique" :options="optionData.unique" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="8">
                <a-form-item label="排序">
                  <a-radio-group v-model:value="formData.sort" :options="optionData.sort" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="8">
                <a-form-item label="生成数量">
                  <a-input-number v-model:value="formData.quantity" :min="0" :max="10000" class="grow" />
                </a-form-item>
              </a-col>
              <a-col v-if="['integer', 'float'].includes(formData.type)" :span="24" :md="8">
                <a-form-item label="随机数最小值">
                  <a-input-number v-model:value="formData.min" :min="0" :max="10000" class="grow" />
                </a-form-item>
              </a-col>
              <a-col v-if="['integer', 'float'].includes(formData.type)" :span="24" :md="8">
                <a-form-item label="随机数最大值">
                  <a-input-number v-model:value="formData.max" :min="0" :max="10000" class="grow" />
                </a-form-item>
              </a-col>
              <a-col v-if="['float'].includes(formData.type)" :span="24" :md="8">
                <a-form-item label="小数位数">
                  <a-input-number v-model:value="formData.float" :min="1" :max="10" class="grow" />
                </a-form-item>
              </a-col>
              <a-col v-if="['lowercase', 'uppercase', 'upperAndLower'].includes(formData.type)" :span="24" :md="8">
                <a-form-item label="字符位数">
                  <a-input-number v-model:value="formData.caseNum" :min="1" :max="50" class="grow" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="8">
                <a-form-item label="结果分隔符">
                  <a-input v-model:value="formData.split" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-collapse-panel>
        </a-collapse>
        <a-col :span="24">
          <a-form-item label="生成结果">
            <a-textarea v-model:value="data" placeholder="生成结果" :auto-size="{ minRows: 6 }" spellcheck="false" />
          </a-form-item>
        </a-col>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, ref } from 'vue'

const formData = reactive({
  type: 'integer',
  float: 2,
  unique: true,
  quantity: 10,
  min: 0,
  max: 100,
  sort: '',
  caseNum: 4,
  split: ' '
})

const optionData = reactive({
  type: [
    { label: '整数', value: 'integer' },
    { label: '浮点数', value: 'float' },
    { label: '小写字母', value: 'lowercase' },
    { label: '大写字母', value: 'uppercase' },
    { label: '大小写字母', value: 'upperAndLower' }
  ],
  unique: [
    { label: '唯一', value: true },
    { label: '不唯一', value: false }
  ],
  sort: [
    { label: '无序', value: '' },
    { label: '升序', value: 'asc' },
    { label: '降序', value: 'desc' }
  ]
})

const data = ref('')

const generate = () => {
  const { type, unique, quantity, min, max, sort, split, float, caseNum } = formData
  const array = []
  // 生成整数或浮点数
  switch (type) {
    case 'integer':
      for (let i = 0; i < quantity; i++) {
        const randomItem = Math.floor(Math.random() * (max - min + 1)) + min
        if (unique && array.includes(randomItem)) {
          i--
          continue
        }
        array.push(randomItem)
      }
      break
    case 'float':
      for (let i = 0; i < quantity; i++) {
        const randomItem = Math.random() * (max - min) + min
        if (unique && array.includes(randomItem)) {
          i--
          continue
        }
        array.push(randomItem.toFixed(float))
      }
      break
    case 'lowercase':
      for (let i = 0; i < quantity; i++) {
        const randomItem = new Array(caseNum)
          .fill(1)
          .map((_) => String.fromCharCode(~~(Math.random() * 25) + 97))
          .join('')
        if (unique && array.includes(randomItem)) {
          i--
          continue
        }
        array.push(randomItem)
      }
      break
    case 'uppercase':
      for (let i = 0; i < quantity; i++) {
        const randomItem = new Array(caseNum)
          .fill(1)
          .map((_) => String.fromCharCode(~~(Math.random() * 25) + 65))
          .join('')
        if (unique && array.includes(randomItem)) {
          i--
          continue
        }
        array.push(randomItem)
      }
      break
    case 'upperAndLower':
      for (let i = 0; i < quantity; i++) {
        const randomItem = new Array(caseNum)
          .fill(1)
          .map((_) => String.fromCharCode(~~(Math.random() * 25) + (Math.random() >= 0.5 ? 65 : 97)))
          .join('')
        if (unique && array.includes(randomItem)) {
          i--
          continue
        }
        array.push(randomItem)
      }
      break
  }

  // 排序
  if (sort === 'asc') {
    array.sort((a, b) => a - b)
  } else if (sort === 'desc') {
    array.sort((a, b) => b - a)
  }

  console.log(array)
  data.value = array.join(split || ' ')
}
</script>

<style lang="scss" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
.ant-collapse :deep(.ant-collapse-header) {
  align-items: center;
}
:deep(.ant-form-item-control-input-content) {
  display: flex;
  align-items: center;
  .ant-input-number-handler-wrap {
    z-index: 1;
  }
}
</style>
