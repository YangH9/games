<template>
  <a-card v-calcHeight="{ height: 12, dom: '.ant-card-body' }" title="边框特效">
    <div class="box">
      <div class="div solid transparent radius">内容</div>
      <div class="div dashed transparent radius">内容</div>
      <div class="div dotted transparent radius">内容</div>
      <div class="div double transparent radius">内容</div>
      <div class="div solid radius">内容</div>
      <div class="div dashed radius">内容</div>
      <div class="div dotted radius">内容</div>
      <div class="div double radius">内容</div>
      <div class="div solid">内容</div>
      <div class="div dashed">内容</div>
      <div class="div dotted">内容</div>
      <div class="div double">内容</div>
    </div>
  </a-card>
</template>

<script setup></script>

<style lang="less" scoped>
.box {
  max-width: 600px;
}

.div {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  margin: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  position: relative;
}

.div::after {
  content: '';
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-width: 50px;
  border-color: rgba(0, 0, 0, 0.6);
  transition: border-width 0.6s, border-color 2s;
}

.solid::after {
  border-style: solid;
}

.dashed::after {
  border-style: dashed;
}

.dotted::after {
  border-style: dotted;
}

.double::after {
  border-style: double;
}

.transparent::after {
  border-color: rgba(0, 0, 0, 0);
}

.radius,
.radius::after {
  border-radius: 100%;
}

.div:hover::after {
  border-width: 1px;
  border-color: rgb(0, 0, 0);
}
</style>
