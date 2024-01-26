<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="各种心形" class="mb_2" :hoverable="true">
      <Heart1 />
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'

const Heart1 = () => (
  <pre class="pre">
    {Array.from({ length: 3 * 10 }, (_, i) => (
      <p>
        {Array.from({ length: 3 * 20 }, (_, j) => {
          const a = j * 0.05 - 1.5
          const b = -i * 0.1 + 1.5
          const c = a ** 2 + b ** 2 - 1
          return c ** 3 - a ** 2 * b ** 3 <= 0 ? '*' : ' '
        })}
      </p>
    ))}
  </pre>
)
</script>

<style scoped lang="scss">
.pre {
  display: inline-block;
  line-height: 1em;
  overflow: unset;
  margin-bottom: 0;
}
</style>
