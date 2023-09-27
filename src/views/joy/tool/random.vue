<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="随机数生成器" :hoverable="true">
      <a-form :model="option">
        <a-collapse v-model:activeKey="activeKey" class="mb_2">
          <a-collapse-panel key="1">
            <template #header>
              <span class="mr_2">{{ option.quantity }}个</span>
              <span class="mr_2">{{ option.unique ? '唯一' : '不唯一' }}</span>
              <span class="mr_2">{{ option.type === 'int' ? '整数' : '浮点数' }}</span>
              <span class="mr_2">（{{ option.min }}，{{ option.max }}）</span>
              <span class="mr_2">{{ option.sort === 'asc' ? '升序' : option.sort === 'desc' ? '降序' : '' }}</span>
            </template>
            <template #extra><a-button type="primary" @click.stop="generate">生成</a-button></template>
            <a-row :gutter="24">
              <a-col :span="24" :md="12">
                <a-form-item label="数字类型">
                  <a-radio-group v-model:value="option.type">
                    <a-radio value="integer">整数</a-radio>
                    <a-radio value="float">浮点数</a-radio>
                  </a-radio-group>
                  <a-input-number v-if="option.type === 'float'" v-model:value="option.float" :min="1" :max="10" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="12">
                <a-form-item label="数字唯一性">
                  <a-radio-group v-model:value="option.unique">
                    <a-radio :value="true">唯一</a-radio>
                    <a-radio :value="false">不唯一</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="8">
                <a-form-item label="生成数量">
                  <a-input-number v-model:value="option.quantity" :min="0" :max="10000" class="w100" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="8">
                <a-form-item label="随机数最小值">
                  <a-input-number v-model:value="option.min" :min="0" :max="10000" class="w100" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="8">
                <a-form-item label="随机数最大值">
                  <a-input-number v-model:value="option.max" :min="0" :max="10000" class="w100" />
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="12">
                <a-form-item label="排序">
                  <a-radio-group v-model:value="option.sort">
                    <a-radio value="">无序</a-radio>
                    <a-radio value="asc">升序</a-radio>
                    <a-radio value="desc">降序</a-radio>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="24" :md="12">
                <a-form-item label="结果分隔符">
                  <a-input v-model:value="option.split" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-collapse-panel>
        </a-collapse>
        <a-col :span="24">
          <a-form-item label="生成结果">
            <a-textarea v-model:value="data" placeholder="生成结果" :auto-size="{ minRows: 6 }" />
          </a-form-item>
        </a-col>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, ref } from 'vue'

const option = reactive({
  type: 'integer',
  float: 1,
  unique: true,
  quantity: 10,
  min: 0,
  max: 100,
  sort: '',
  split: ''
})

const data = ref('')

const generate = () => {
  const { type, unique, quantity, min, max, sort, split, float } = option
  let numbers = []
  // 生成整数或浮点数
  if (type === 'integer') {
    for (let i = 0; i < quantity; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
      if (unique && numbers.includes(randomNumber)) {
        i--
        continue
      }
      numbers.push(randomNumber)
    }
  } else if (type === 'float') {
    for (let i = 0; i < quantity; i++) {
      let randomNumber = Math.random() * (max - min) + min
      if (unique && numbers.includes(randomNumber)) {
        i--
        continue
      }
      numbers.push(randomNumber.toFixed(float)) // 可根据需要设置小数点位数
    }
  }

  // 排序
  if (sort === 'asc') {
    numbers.sort((a, b) => a - b)
  } else if (sort === 'desc') {
    numbers.sort((a, b) => b - a)
  }

  console.log(numbers)
  data.value = numbers.join(split || ' ')
}
</script>

<style lang="less" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
.ant-collapse :deep(.ant-collapse-header) {
  align-items: center;
}
</style>
