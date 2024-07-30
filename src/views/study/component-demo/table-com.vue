<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <SetColumn :colList="tableOption.column" @submit="val => (tableOption.column = val)"></SetColumn>
      <el-divider>表格--数据为Mockjs生成的随机数据</el-divider>
      <div v-loading="tableOption.loading">
        <MyTable :data="tableOption.data" :columns="tableOption.column.filter(i => i.active)"></MyTable>
      </div>
      <el-divider>列数据</el-divider>
      <div style="background: var(--el-bg-color)">{{ tableOption.column }}</div>
      <el-divider>表数据</el-divider>
      <div style="background: var(--el-bg-color)">{{ tableOption.data }}</div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { reactive, ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import MyTable from '@/components/MyTable.vue'
import Mock from 'mockjs'
import SetColumn from '@/components/SetColumn.vue'
import dayjs from 'dayjs'

const tableOption = reactive({
  data: [],
  column: [
    { type: 'index', disabled: true },
    {
      label: '头像',
      prop: 'avatar',
      default: true,
      render: ({ row }) => <el-avatar shape="square" size={50} icon="EUserFilled" style={{ background: row.avatar }} />
    },
    { label: '名称', prop: 'name', default: true, minWidth: 120 },
    { label: '中文名称', prop: 'cname', default: true, minWidth: 100 },
    { label: '年龄', prop: 'age' },
    {
      label: '性别',
      prop: 'sex',
      default: true,
      minWidth: 100,
      render: ({ row }) =>
        row.sex ? (
          <el-button text icon="AManOutlined">
            男
          </el-button>
        ) : (
          <el-button text icon="AWomanOutlined">
            女
          </el-button>
        )
    },
    { label: '邮箱', prop: 'email', default: true, minWidth: 200 },
    {
      label: '状态',
      prop: 'status',
      default: true,
      render: ({ row }) => <el-tag type={row.status ? 'success' : 'danger'}>{row.status ? '启用' : '禁用'}</el-tag>
    },
    { label: '备注', prop: 'remark', minWidth: 200 },
    { label: 'IP', prop: 'ip', default: true, minWidth: 130 },
    { label: '日期', prop: 'date', default: true, minWidth: 120 },
    {
      label: '时间戳',
      prop: 'timeStamp',
      default: true,
      minWidth: 220,
      render: ({ row }) => dayjs(row.timeStamp).format("YYYY-MM-DD HH:mm:ss'SSS A")
    },
    { label: '城市', prop: 'city', minWidth: 100 },
    { label: '地址', prop: 'address', minWidth: 200 },
    { label: '邮编', prop: 'zip' }
  ].map(i => ({
    ...i,
    active: i.active ?? i.default ?? i.disabled ?? false,
    default: i.default ?? i.disabled ?? false
  })),
  loading: false
})

const getData = () => {
  tableOption.loading = true
  setTimeout(() => {
    tableOption.data = Mock.mock({
      'data|10': [
        {
          timeStamp: '@integer(631123200000, 1735660800000)',
          date: '@date',
          avatar: '@color',
          name: '@name',
          cname: '@cname',
          address: '@county(true)',
          age: '@integer(10, 50)',
          email: '@email',
          ip: '@ip',
          guid: '@guid',
          status: '@boolean',
          remark: '@csentence(10, 20)',
          sex: '@boolean',
          city: '@city',
          zip: '@zip'
        }
      ]
    }).data
    tableOption.loading = false
  }, 1000)
}
getData()
</script>

<style scoped lang="scss">
.ant-layout-content {
  text-align: center;
}
</style>
