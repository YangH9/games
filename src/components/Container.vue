<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.container{
  width: 100%;
  // max-width: 1080px;
  position: relative;
  margin: 0 auto;
  padding: 0 50px;
  &::after{
    content: "";
    display: block;
    clear: both;
  }
}

@media (min-width: 1080px) {
  .container {
    width: 1080px;
  }
}
</style>
