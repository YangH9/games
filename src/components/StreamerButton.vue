<template>
  <div class="square_box">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.square_box {
  position: relative;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: 0.6s;
  background: transparent;
  padding: 4px 10px;
  &:hover {
    color: #0af;
    border-color: #0af;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    box-sizing: border-box;
    pointer-events: none;
    /* border: 2px solid transparent; */
  }
  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: border-color 0s ease-in 0.8s, width 0.2s ease-in 0.6s, height 0.2s ease-in 0.4s;
  }
  &::after {
    right: 0;
    bottom: 0;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.2s, height 0.2s ease-in;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    border-color: #0af;
  }
  &:hover::before {
    transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
  }
  &:hover::after {
    transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s, height 0.2s ease-out 0.6s;
  }
}
</style>
