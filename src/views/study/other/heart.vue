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
          let a = j * 0.05 - 1.5
          let b = -(i * 0.1) + 1.5
          let c = a * a + b * b - 1
          return c * c * c - a * a * b * b * b <= 0 ? '*' : ' '
        })}
      </p>
    ))}
  </pre>
)
</script>

<style lang="scss" scoped>
.pre {
  line-height: 1em;
  overflow: unset;
}
</style>
