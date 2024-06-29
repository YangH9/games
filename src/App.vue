<template>
  <mainDom></mainDom>
</template>

<script setup lang="jsx">
import Loading from '@/components/Loading.vue'
import { inject, watch } from 'vue'
import { useRoute } from 'vue-router'
import antZhCN from 'ant-design-vue/es/locale/zh_CN'
import { theme } from 'ant-design-vue'
import { usePreferredColorScheme } from '@vueuse/core'

const route = useRoute()
const GetEnv = inject('GetEnv')

console.log(process.env.npm_package_version)

const title = GetEnv.VITE_APP_TITLE

const themeColor = usePreferredColorScheme()

watch(
  () => themeColor.value,
  val => {
    console.log(val)
    val === 'dark'
      ? document.querySelector('html').classList.add('dark')
      : document.querySelector('html').classList.remove('dark')
  }
)

document.querySelector('#app').style.backgroundImage = `url('${GetEnv.VITE_BASE_URL}src/assets/skyblue.jpg')`

const mainDom = () => (
  <a-config-provider
    locale={antZhCN}
    theme={{
      algorithm: themeColor.value === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
    }}
  >
    <a-watermark content={`${route.meta.title}-${title}-木昜`} zIndex={100} gap={[200, 200]} offset={[50, 50]}>
      <Loading />
      <RouterView />
    </a-watermark>
  </a-config-provider>
)
</script>

<style scoped lang="scss"></style>
