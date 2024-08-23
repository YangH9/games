<template>
  <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="写轮眼">
    <div class="head">
      <!-- 佐助 -->
      <div class="skewLeft"></div>
      <div class="eye left">
        <div class="rotate">
          <div class="eyeball"></div>
          <!-- 勾玉 -->
          <div class="eyering"></div>
          <div class="eye1"></div>
          <div class="eye2"></div>
          <div class="eye3"></div>
          <!-- 万花筒 佐助 -->
          <div class="eye_wanhua">
            <div class="eyek1"></div>
            <div class="eyek2"></div>
            <div class="eyek3"></div>
            <div class="eyek1_shading"></div>
            <div class="eyek2_shading"></div>
            <div class="eyek3_shading"></div>
          </div>
          <!-- 永恒万花筒 佐助 -->
          <div class="eye_yongheng">
            <div class="eyeyh1"></div>
            <div class="eyeyh2"></div>
            <div class="eyeyh3"></div>
          </div>
          <!-- 轮回眼 -->
          <div class="eyelh"></div>
        </div>
        <div class="eye_shading"></div>
      </div>
      <!-- 斑 -->
      <div class="skewRight"></div>
      <div class="eye_ban right">
        <div class="rotate">
          <div class="eyeball_ban"></div>
          <!-- 勾玉 -->
          <div class="eyering"></div>
          <div class="eye1"></div>
          <div class="eye2"></div>
          <div class="eye3"></div>
          <!-- 万花筒 斑 -->
          <div class="eye_wanhua">
            <div class="eyek1_ban"></div>
            <div class="eyek2_ban"></div>
            <div class="eyek3_ban"></div>
          </div>
          <!-- 永恒万花筒 斑 -->
          <div class="eye_yongheng">
            <div class="eyeyh1_ban"></div>
            <div class="eyeyh2_ban"></div>
            <div class="eyeyh3_ban"></div>
          </div>
          <!-- 轮回眼 -->
          <div class="eyelh"></div>
        </div>
        <div class="eye_shading"></div>
      </div>
    </div>
  </a-card>
</template>

<!--
佐助写轮眼进化史：
单勾玉
右双勾玉左单勾玉
双勾玉
三勾玉
万花筒
永恒万花筒
左轮回眼
  -->
<script setup lang="jsx"></script>

<style scoped lang="scss">
div.ant-card:deep(.ant-card-body) {
  overflow: hidden;
  background-color: #000;
}
.head {
  width: 800px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  *::after,
  *::before {
    box-sizing: content-box;
  }
}
/*左右眼白、宽高、背景色、定位*/
.skewLeft,
.skewRight {
  width: 200px;
  height: 140px;
  background: #fff;
  position: absolute;
  top: 76px;
  overflow: hidden;
}
/*左眼定位、倾斜、边框倒角*/
.skewLeft {
  left: 50px;
  -webkit-transform: skewX(15deg);
  -moz-transform: skewX(15deg);
  -ms-transform: skewX(15deg);
  -o-transform: skewX(15deg);
  transform: skewX(15deg);
  -webkit-border-radius: 0 70px 0 50px;
  -moz-border-radius: 0 70px 0 50px;
  border-radius: 0 70px 0 50px;
}
/*右眼定位、倾斜、边框倒角*/
.skewRight {
  right: 50px;
  -webkit-transform: skewX(-15deg);
  -moz-transform: skewX(-15deg);
  -ms-transform: skewX(-15deg);
  -o-transform: skewX(-15deg);
  transform: skewX(-15deg);
  -webkit-border-radius: 70px 0 50px 0;
  -moz-border-radius: 70px 0 50px 0;
  border-radius: 70px 0 50px 0;
}
/* 左眼球定位 */
.left {
  top: 0;
  left: 0;
}
/* 右眼球定位 */
.right {
  top: 0;
  right: 0;
}
/* 眼球 大小、阴影、边框倒角、背景渐变、定位*/
.eye,
.eye_ban {
  width: 100px;
  height: 100px;
  -webkit-box-shadow: 0px 0px 16px 0;
  -moz-box-shadow: 0px 0px 16px 0;
  box-shadow: 0px 0px 16px 0;
  margin: 100px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: radial-gradient(#000 0, #c00 20%, #a00 70%, #f00 100%);
  position: absolute;
  float: left;
  overflow: hidden;
}
/*眼珠 大小、边框倒角、定位、*/
.eyeball,
.eyeball_ban {
  width: 30px;
  height: 30px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 35px;
  left: 35px;
  z-index: 10;
}
/*勾玉环*/
.eyering {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 6px solid #000;
  position: absolute;
  box-sizing: border-box;
  top: 15px;
  left: 15px;
  z-index: 8;
}
/*勾玉眼*/
.eye1,
.eye2,
.eye3 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #000;
  position: absolute;
  top: 42px;
  left: 42px;
  transform-origin: 8px -22px;
  transform: translateY(30px) rotate(0deg);
}
.eye1:after,
.eye2:after,
.eye3:after {
  content: '';
  width: 16px;
  height: 16px;
  border-top: 0 solid transparent;
  border-left: 0 solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 8px solid #000;
  position: absolute;
  top: 0;
  left: -6px;
  z-index: 8;
  border-radius: 0 0 0 70%;
  transform: rotate(-75deg);
}
/*勾玉2*/
.eye2 {
  transform: translateY(30px) rotate(120deg);
}
/*勾玉3*/
.eye3 {
  transform: translateY(30px) rotate(240deg);
}
/*眼球光斑*/
.eye_shading {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(#fff 1%, transparent 80%);
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 10;
}
/*万花筒 佐助*/
.eye_wanhua,
.eye_yongheng {
  position: absolute;
  top: 50px;
  left: 50px;
}
.eyek1,
.eyek2,
.eyek3,
.eyek1_shading,
.eyek2_shading,
.eyek3_shading {
  width: 72px;
  height: 72px;
  background-color: #c00;
  position: absolute;
  top: -36px;
  left: -36px;
  border-radius: 0 100px 0 100px;
  /* border:1px solid transparent; */
  box-sizing: border-box;
  transform: rotate(45deg);
  z-index: 4;
}
.eyek2,
.eyek2_shading {
  transform: rotate(165deg);
}
.eyek3,
.eyek3_shading {
  transform: rotate(285deg);
}
.eyek1_shading,
.eyek2_shading,
.eyek3_shading {
  background-color: transparent;
  border: 1px solid #000;
  box-sizing: border-box;
  z-index: 5;
}
/*永恒万花筒 佐助*/
.eyeyh1,
.eyeyh2,
.eyeyh3 {
  width: 0;
  height: 0;
  border-top: 38px solid #000;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  position: absolute;
  top: 0px;
  left: -8px;
  transform-origin: 8px -4px;
  transform: translateY(4px) rotate(60deg);
  z-index: 6;
}
.eyeyh2 {
  transform: translateY(4px) rotate(180deg);
}
.eyeyh3 {
  transform: translateY(4px) rotate(300deg);
}
/*万花筒 斑*/
.eyek1_ban,
.eyek2_ban,
.eyek3_ban {
  width: 20px;
  height: 20px;
  background-color: transparent;
  position: absolute;
  top: -10px;
  left: -10px;
  border-radius: 50%;
  border: 2px solid #000;
  box-sizing: border-box;
  transform-origin: 10px -20px;
  transform: translateY(30px) rotate(40deg);
  z-index: 4;
}
.eyek1_ban:after,
.eyek2_ban:after,
.eyek3_ban:after {
  content: '';
  width: 38px;
  height: 20px;
  border-top: 0 solid transparent;
  border-left: 0 solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 14px solid #000;
  position: absolute;
  top: -26px;
  left: -32px;
  border-radius: 0 0 0 100%;
  transform: rotate(20deg);
}
.eyek2_ban {
  transform: translateY(30px) rotate(160deg);
}
.eyek3_ban {
  transform: translateY(30px) rotate(280deg);
}
/*永恒万花筒 斑*/
.eyeyh1_ban,
.eyeyh2_ban,
.eyeyh3_ban {
  width: 16px;
  height: 20px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: -8px;
  transform-origin: 8px -30px;
  transform: translateY(30px) rotate(800deg);
}
.eyeyh2_ban {
  transform: translateY(30px) rotate(200deg);
}
.eyeyh3_ban {
  transform: translateY(30px) rotate(320deg);
}
/*轮回眼*/
.eyelh {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: repeating-radial-gradient(30px at center center, #d8bbe7 50%, #0b090a 100%);
}
/*旋转*/
.rotate {
  width: 100px;
  height: 100px;
  /*animation:rotate 5s linear infinite;*/
  animation-name: rotate_move;
  /*规定需要绑定到选择器的 keyframe 名称。。*/
  animation-duration: 5s;
  /*规定完成动画所花费的时间，以秒或毫秒计。*/
  animation-timing-function: linear;
  /*规定动画的速度曲线。*/
  animation-delay: 0;
  /*规定在动画开始之前的延迟。*/
  animation-iteration-count: infinite;
  /*规定动画应该播放的次数。*/
  animation-direction: normal;
  /*规定是否应该轮流反向播放动画。*/
}
/*旋转动画*/
@keyframes rotate_move {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* 14 、 28 、 42 、 56 、 70 、 84 、 98 */
/* 16 、 32 、 48 、 64 、 80 、 96 */
/*眼球颜色动画*/
.eye {
  animation: eye_move 35s linear infinite;
}
@keyframes eye_move {
  0% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  13% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  14% {
    background: #000;
    opacity: 0;
    transform: scale(1);
  }
  15% {
    background: radial-gradient(#000 0, #c00 20%, #a00 70%, #f00 100%);
    opacity: 1;
    transform: scale(1);
  }
  56% {
    background: radial-gradient(#000 0, #c00 20%, #a00 70%, #f00 100%);
    opacity: 1;
    transform: scale(1);
  }
  57% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  98% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  99% {
    background: #000;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
}
.eye_ban {
  animation: eye_ban_move 35s linear infinite;
}
@keyframes eye_ban_move {
  0% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  13% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  14% {
    background: #000;
    opacity: 0;
    transform: scale(1);
  }
  15% {
    background: radial-gradient(#000 0, #c00 20%, #a00 70%, #f00 100%);
    opacity: 1;
    transform: scale(1);
  }
  84% {
    background: radial-gradient(#000 0, #c00 20%, #a00 70%, #f00 100%);
    opacity: 1;
    transform: scale(1);
  }
  85% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  98% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
  99% {
    background: #000;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    background: #000;
    opacity: 1;
    transform: scale(1);
  }
}
/*眼珠颜色动画*/
.eyeball {
  animation: eyeball_move 35s linear infinite;
}
@keyframes eyeball_move {
  0% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
  56% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
  57% {
    background: radial-gradient(#000 40%, transparent 41%);
    opacity: 1;
    transform: scale(1);
  }
  69% {
    background: radial-gradient(#000 40%, transparent 41%);
    opacity: 1;
    transform: scale(1);
  }
  70% {
    background: radial-gradient(#000 40%, transparent 41%);
    opacity: 0;
    transform: scale(0);
  }
  71% {
    background: radial-gradient(#c00 40%, transparent 41%);
    opacity: 1;
    transform: scale(1);
  }
  84% {
    background: radial-gradient(#c00 40%, transparent 41%);
    opacity: 1;
    transform: scale(1);
  }
  85% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
}
.eyeball_ban {
  animation: eyeball_ban_move 35s linear infinite;
}
@keyframes eyeball_ban_move {
  0% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
  56% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
  57% {
    background: radial-gradient(#000 50%, transparent 51%);
    opacity: 1;
    transform: scale(1);
  }
  84% {
    background: radial-gradient(#000 50%, transparent 51%);
    opacity: 1;
    transform: scale(1);
  }
  85% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    background: transparent;
    opacity: 0;
    transform: scale(0);
  }
}
/*勾玉环动画*/
.eyering {
  animation: eyering_move 35s linear infinite;
}
@keyframes eyering_move {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  14% {
    opacity: 0;
    transform: scale(0);
  }
  15% {
    opacity: 1;
    transform: scale(1);
  }
  56% {
    opacity: 1;
    transform: scale(1);
  }
  57% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
/*单勾玉眼动画*/
.eye1 {
  animation: eye1_move 35s linear infinite;
}
@keyframes eye1_move {
  0% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
  14% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
  15% {
    opacity: 1;
    transform: translateY(30px) rotate(0deg) scale(1);
  }
  56% {
    opacity: 1;
    transform: translateY(30px) rotate(0deg) scale(1);
  }
  57% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
}
/*双勾玉眼动画*/
.eye2 {
  animation: eye2_move 35s linear infinite;
}
@keyframes eye2_move {
  0% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
  28% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
  29% {
    opacity: 1;
    transform: translateY(30px) rotate(180deg) scale(1);
  }
  42% {
    opacity: 1;
    transform: translateY(30px) rotate(180deg) scale(1);
  }
  43% {
    opacity: 1;
    transform: translateY(30px) rotate(240deg) scale(1);
  }
  56% {
    opacity: 1;
    transform: translateY(30px) rotate(240deg) scale(1);
  }
  57% {
    opacity: 0;
    transform: translateY(30px) rotate(240deg) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
}
/*三勾玉眼动画*/
.eye3 {
  animation: eye3_move 35s linear infinite;
}
@keyframes eye3_move {
  0% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
  42% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
  43% {
    opacity: 1;
    transform: translateY(30px) rotate(120deg) scale(1);
  }
  56% {
    opacity: 1;
    transform: translateY(30px) rotate(120deg) scale(1);
  }
  57% {
    opacity: 0;
    transform: translateY(30px) rotate(120deg) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translateY(30px) rotate(0deg) scale(0);
  }
}
/*万花筒眼动画*/
.eye_wanhua {
  animation: eye_wanhua_move 35s linear infinite;
}
@keyframes eye_wanhua_move {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  56% {
    opacity: 0;
    transform: scale(0);
  }
  57% {
    opacity: 1;
    transform: scale(1);
  }
  84% {
    opacity: 1;
    transform: scale(1);
  }
  85% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
/*永恒万花筒眼动画*/
.eye_yongheng {
  animation: eye_yongheng_move 35s linear infinite;
}
@keyframes eye_yongheng_move {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  70% {
    opacity: 0;
    transform: scale(0);
  }
  71% {
    opacity: 1;
    transform: scale(1);
  }
  84% {
    opacity: 1;
    transform: scale(1);
  }
  85% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
/*轮回眼动画*/
.eyelh {
  animation: eyelh_move 35s linear infinite;
}
@keyframes eyelh_move {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  84% {
    opacity: 0;
    transform: scale(0);
  }
  85% {
    opacity: 1;
    transform: scale(1);
  }
  98% {
    opacity: 1;
    transform: scale(1);
  }
  99% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
