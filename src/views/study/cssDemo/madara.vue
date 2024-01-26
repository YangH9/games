<template>
  <a-layout-content>
    <div class="mao_box">
      <div class="mao">
        <div class="mao_head">
          <div class="huawen">
            <div></div>
          </div>
        </div>
        <div class="erduo">
          <div></div>
          <div></div>
        </div>
        <div class="yanjing">
          <div>
            <div class="yanquan">
              <div></div>
            </div>
            <div class="yanquan_hedding"></div>
            <div class="hong"></div>
          </div>
          <div class="yan_right">
            <div class="yanquan">
              <div></div>
            </div>
            <div class="yanquan_hedding"></div>
            <div class="hong"></div>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="face_huawen">
          <div class="face_huawen_huawen huawen_left">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="face_huawen_huawen huawen_right">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="bizi">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="zuiba_box">
          <div class="zuiba">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
</template>

<script setup></script>

<style scoped lang="scss">
.ant-layout-content {
  background: var(--color-background-mute);
  color: var(--color-heading);
  z-index: 1;

  * {
    box-sizing: content-box;
  }
}

.mao_box {
  position: relative;
  top: 200px;
}

.mao {
  margin: 0 auto;
  width: 400px;

  .mao_head {
    margin: 0 auto;
    width: 400px;
    height: 340px;
    background: #f6f7f2;
    position: relative;
    border-radius: 50% 50% 35% 35%;
    border: solid 2px #2e2e2e;
    overflow: hidden;
    z-index: 10;

    .huawen {
      position: absolute;
      height: 160px;
      width: 180px;
      background: #8d8d8d;
      left: 110px;
      border-radius: 0% 0% 50% 50%;
      overflow: hidden;

      div {
        height: 160px;
        width: 90px;
        background: #f0ac6b;
      }
    }
  }

  // 耳朵
  .erduo {
    width: 374px;
    height: 120px;
    position: absolute;
    top: -6px;
    left: 50%;
    margin-left: -187px;
    border-radius: 0% 0% 0% 0%;

    // 左耳
    div:first-child {
      height: 200px;
      width: 160px;
      border: 2px solid #2e2e2e;
      background: #f3f3f3;
      transform: rotate(-15deg);
      border-radius: 4% 80% 0% 50%;
      position: absolute;
      left: -20px;
      top: 0px;
      transition:
        transform 1s,
        left 1s;
    }

    // 右耳
    div:last-child {
      height: 180px;
      width: 160px;
      border: 2px solid #2e2e2e;
      background: #f3f3f3;
      transform: rotate(15deg);
      border-radius: 80% 4% 50% 0%;
      position: absolute;
      right: -20px;
      top: 0px;
      transition:
        transform 1s,
        right 1s;
    }
  }

  // 眼睛
  .yanjing {
    height: 60px;
    width: 300px;
    position: absolute;
    top: 200px;
    z-index: 20;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;

    // 左眼
    .yanquan {
      height: 100px;
      width: 100px;
      border: 2px solid #2e2e2e;
      border-radius: 50% 50% 50% 50%;
      overflow: hidden;
      position: absolute;
      // 眼珠子 左
      div:first-child {
        height: 100px;
        width: 30px;
        background-color: #2e2e2e;
        margin-left: 35px;
        transition: all 1s;
      }
    }

    .yanquan_hedding {
      height: 100px;
      width: 180px;
      border-top: 2px solid #2e2e2e;
      border-radius: 50% 50% 50% 50%;
      background: #f6f7f2;
      margin-top: 50px;
      margin-left: -40px;
      position: absolute;
      transition: margin-top 1s;
    }

    .hong {
      position: absolute;
      height: 28px;
      width: 70px;
      background: red;
      top: 34px;
      left: 18px;
      border-radius: 50% 50% 50% 50%;
      background-image: radial-gradient(
        50% 50%,
        rgba(253, 214, 240, 0.8) 0%,
        rgba(253, 224, 244, 0.8) 66%,
        rgba(253, 234, 247, 0.8) 100%
      );
      opacity: 0;
    }

    .yan_right {
      left: 196px;
      top: 0px;
      background: red;
      position: absolute;
    }
  }

  // 脸部花纹
  // 左边花纹
  .face_huawen {
    height: 80px;
    width: 380px;
    position: absolute;
    top: 190px;
    z-index: 20;
    left: 50%;
    margin-left: -190px;

    .face_huawen_huawen {
      div:first-child {
        width: 30px;
        height: 10px;
        border-top: 6px #e53941 solid;
        border-radius: 30% 80% 20% 50%;
        transform: rotate(25deg);
        margin-left: 20px;
      }

      div:nth-child(2) {
        width: 20px;
        height: 6px;
        background-color: #e53941;
        border-radius: 50% 50% 50% 50%;
        transform: rotate(25deg);
        margin-left: 20px;
      }

      div:nth-child(3) {
        width: 32px;
        height: 10px;
        border-bottom: 4px #e53941 solid;
        border-radius: 30% 0% 90% 30%;
        transform: rotate(25deg);
        margin-left: 8px;
      }

      div:nth-child(4) {
        margin-top: 20px;
        width: 26px;
        height: 20px;
        border-bottom: 4px #e53941 solid;
        border-radius: 30% 0% 90% 30%;
        transform: rotate(30deg);
        margin-left: 28px;
      }

      div:last-child {
        width: 22px;
        height: 10px;
        border-bottom: 3px #e53941 solid;
        border-radius: 0% 0% 50% 50%;
        transform: rotate(-15deg);
        margin-left: 40px;
        margin-top: -8px;
      }
    }

    // 右边花纹
    .huawen_right {
      float: right;
      transform: rotateY(180deg);
      margin-top: -85px;
    }
  }

  // 鼻子
  .bizi {
    width: 30px;
    height: 36px;
    position: absolute;
    left: 50%;
    margin-left: -15px;
    top: 260px;
    z-index: 30;
    div:first-child {
      width: 30px;
      height: 10px;
      border-bottom: 8px solid #2e2e2e;
      border-radius: 0% 0% 50% 50%;
      margin-top: -10px;
    }
  }

  .zuiba_box {
    width: 200px;
    height: 36px;
    position: absolute;
    overflow: hidden;
    left: 50%;
    margin-left: -100px;
    top: 260px;
    z-index: 30;
    .zuiba {
      margin-left: 85px;
      margin-top: 6px;
      div:first-child {
        width: 4px;
        height: 8px;
        background: #2e2e2e;
        margin-left: 13px;
      }

      // 右半边嘴巴
      div:nth-child(2) {
        width: 50px;
        height: 40px;
        border-bottom: 4px solid #2e2e2e;
        border-left: 4px solid #2e2e2e;
        border-radius: 40% 0% 20% 50%;
        margin-left: 13px;
        margin-top: -26px;
        position: absolute;
        transition: border-radius 1s;
      }

      // 左半边嘴巴
      div:nth-child(3) {
        width: 50px;
        height: 40px;
        border-bottom: 4px solid #2e2e2e;
        border-right: 4px solid #2e2e2e;
        border-radius: 0% 40% 50% 20%;
        margin-left: -38px;
        margin-top: -26px;
        position: absolute;
        transition: border-radius 1s;
      }
    }
  }

  // 鼠标移入样式
  &:hover {
    .erduo {
      // 鼠标浮动耳朵样式
      // 左耳
      div:first-child {
        left: -10px;
        transform: rotate(0deg);
        border-radius: 4% 80% 0% 60%;
      }

      // 右耳
      div:last-child {
        right: -10px;
        transform: rotate(0deg);
        border-radius: 80% 4% 60% 0%;
      }
    }
    .yanquan > div:first-child {
      width: 40px;
      margin-left: 30px;
    }
    // 眼睛浮动属性
    .yanquan_hedding {
      margin-top: 30px;
    }

    .hong {
      opacity: 0.8;
      transition: opacity 0.5s ease-in 0.2s;
    }

    .zuiba {
      div:nth-child(2) {
        border-radius: 50% 50% 50% 50%;
        width: 40px;
      }

      div:nth-child(3) {
        width: 40px;
        margin-left: -30px;
        border-radius: 50% 50% 50% 50%;
      }
    }
  }
}
</style>
