<template>
  <a-layout-content>
    <div class="box">
      <img
        src="@/assets/loading.svg"
        width="100">
      <loading-circle
        size="100"
        lineWidth="10"
        strokeStyle="#359dda"></loading-circle>
    </div>
  </a-layout-content>
</template>

<script setup>

</script>

<style lang="less" scoped>
.ant-layout-content {
  background: var(--color-background);
}

.box {
  display: flex;

  &>* {
    margin: 10px;
  }
}
</style>
