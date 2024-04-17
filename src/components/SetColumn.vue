<template>
  <mainDom></mainDom>
</template>

<script setup lang="jsx">
import { ElMessageBox } from 'element-plus'
import { computed, ref, watch } from 'vue'

const props = defineProps({ colList: Array })
const emit = defineEmits(['submit'])

const activeList = ref(null)
const defaultList = ref(null)
const disabledList = ref(null)

watch(
  () => props.colList,
  value => {
    activeList.value = value.filter(i => i.active).map(i => i.prop)
    defaultList.value = value.filter(i => i.default).map(i => i.prop)
    disabledList.value = value.filter(i => i.disabled).map(i => i.prop)
  },
  { immediate: true }
)

const checkAll = ref(activeList.value.length === props.colList.length)
const indeterminate = computed(() => activeList.value.length > 0 && activeList.value.length < props.colList.length)

// 显示弹窗
const showDialog = () => {
  ElMessageBox({
    title: '修改展示列',
    message: () => (
      <div>
        <div class="flex content_between">
          <el-checkbox
            v-model={checkAll.value}
            indeterminate={indeterminate.value}
            onChange={val =>
              val ? (activeList.value = props.colList.map(i => i.prop)) : (activeList.value = disabledList.value)
            }
          >
            全选
          </el-checkbox>
          <el-button type="warning" plain onClick={() => (activeList.value = defaultList.value)}>
            重置
          </el-button>
        </div>
        <el-divider class="my_2"></el-divider>
        <el-checkbox-group
          v-model={activeList.value}
          onChange={() => (checkAll.value = activeList.value.length === props.colList.length)}
        >
          {props.colList.map(item => (
            <el-checkbox label={item.prop} disabled={item.disabled}>
              {item.label}
            </el-checkbox>
          ))}
        </el-checkbox-group>
      </div>
    ),
    customStyle: { width: '50%', maxWidth: 'unset' },
    closeOnClickModal: true,
    showCancelButton: true
  }).then(res => {
    emit(
      'submit',
      props.colList.map(i => ({ ...i, active: activeList.value.includes(i.prop) }))
    )
  })
}

const mainDom = () => (
  <el-button icon="ESetting" onClick={showDialog}>
    设置表格列
  </el-button>
)
</script>
