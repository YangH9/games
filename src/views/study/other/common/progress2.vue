<template>
  <div class="cylinder" :style="{ '--width': `${width}px` }">
    <div class="cylinder-shade" :style="{ height: `${props.value}%` }"></div>
  </div>
</template>

<script setup lang="jsx">
const props = defineProps({
  width: { type: Number, default: 100 },
  value: { type: Number, default: 0 },
  strokeWidth: { type: Number, default: 10 }
})
</script>

<style scoped lang="scss">
.cylinder {
  position: relative;
  width: var(--width);
  height: calc(var(--width) * 2);
  background-color: transparent;
  background-color: rgba(0, 199, 159, 0.2);
}
.cylinder-shade {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-image: linear-gradient(to top, rgb(0, 255, 204), rgb(0, 199, 159));
  text-align: center;
}
.cylinder::before,
.cylinder::after,
.cylinder-shade::before,
.cylinder-shade::after {
  position: absolute;
  content: '';
  display: block;
  width: 100%;
  height: 20px;
  border-radius: 50%;
}
.cylinder::before,
.cylinder-shade::before {
  top: -10.5px;
  z-index: 2;
  background-color: rgb(101 221 197);
}

.cylinder::after,
.cylinder-shade::after {
  height: 15px;
  bottom: -10px;
  background-color: rgb(0, 255, 204);
}
.cylinder-shade::before {
  z-index: 1;
  background-color: rgb(0, 199, 159);
}
.cylinder-shade::after {
  background-color: white;
}
</style>
