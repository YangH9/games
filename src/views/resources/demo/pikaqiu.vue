<template>
  <a-layout-content>
    <!--皮卡丘-->
    <div id="pikaqiu">
      <!--尾巴-->
      <div id="tail">
        <div class="tail3"></div>
        <div class="tail2"></div>
        <div class="tail1"></div>
        <div class="tail_shading"></div>
      </div>
      <!--尾巴结束-->
      <!--耳朵-->
      <div id="ear">
        <div id="ear_left">
          <div class="ear_left"></div>
          <div class="ear_shading_left"></div>
        </div>
        <div id="ear_right">
          <div class="ear_right"></div>
          <div class="ear_shading_right"></div>
        </div>
      </div>
      <!--耳朵结束-->
      <!--腿-->
      <div id="leg">
        <div class="leg_left"></div>
        <div class="leg_right"></div>
      </div>
      <!--腿结束-->
      <!--身体-->
      <div id="body">
        <div class="arm_left"></div>
        <div class="arm_right"></div>
      </div>
      <!--身体结束-->
      <!--头-->
      <div id="head">
        <!--脸蛋-->
        <div class="face_left"></div>
        <div class="face_right"></div>
        <!--眼睛-->
        <div class="eye_left">
          <!--眼白-->
          <div class="eye_shading_left"></div>
        </div>
        <div class="eye_right">
          <!--眼白-->
          <div class="eye_shading_right"></div>
        </div>
        <!--眼睛结束-->
        <!--嘴巴-->
        <div class="mouth_left"></div>
        <div class="mouth_right"></div>
        <!--舌头-->
        <div class="tongue"></div>
        <!--鼻子-->
        <div class="nose"></div>
      </div>
    <!--头结束-->
    </div>
  <!--皮卡丘结束-->
  </a-layout-content>
</template>

<script setup>

</script>

<style lang="less" scoped>
.ant-layout-content {
  background: var(--color-background);
}
// 皮卡丘
#pikaqiu {
  width: 500px;
  height: 500px;
  margin: 100px auto 0px auto;
  position: relative;

  * {
    box-sizing: content-box;
  }

  // 尾巴摇摆
  #tail {
    animation: tail 0.2s ease-in-out infinite;

    // 尾巴上
    .tail1 {
      width: 127px;
      height: 70px;
      transform: skew(-20deg);
      background: #ffe100;
      border: 4px solid #000;
      position: absolute;
      top: 100px;
      left: -8px;
    }

    // 尾巴中
    .tail2 {
      width: 66px;
      height: 149px;
      transform: skew(-20deg);
      background: #ffe100;
      border: 4px solid #000;
      position: absolute;
      top: 134px;
      left: 96px;
    }

    // 尾巴下
    .tail3 {
      width: 42px;
      height: 87px;
      transform: skew(-20deg);
      background: #ffe100;
      border: 4px solid #000;
      position: absolute;
      top: 235px;
      left: 140px;
    }

    // 尾巴阴影
    .tail_shading {
      width: 29px;
      height: 183px;
      transform: skew(16deg);
      background: #ffe100;
      position: absolute;
      top: 113px;
      left: 118px;
    }
  }

  // 耳朵
  #ear {

    // 左耳朵摇摆
    #ear_left {
      animation: ear_left 6s ease-in-out infinite;

      // 左耳朵
      .ear_left {
        width: 100px;
        height: 100px;
        background-color: #ffe100;
        border-radius: 0px 100px;
        border: 4px solid #000;
        position: absolute;
        left: 100px;
      }

      // 左耳朵黑色阴影
      .ear_shading_left {
        width: 38px;
        height: 77px;
        background-color: #000;
        border-radius: 0% 14% 0% 100%;
        position: absolute;
        left: 100px;
        top: 3px;
      }
    }

    // 右耳朵摇摆
    #ear_right {
      animation: ear_right 6s ease-in-out infinite;

      // 右耳朵
      .ear_right {
        width: 100px;
        height: 100px;
        background-color: #ffe100;
        border-radius: 100px 0px;
        border: 4px solid #000;
        position: absolute;
        left: 300px;
      }

      // 右耳朵黑色阴影
      .ear_shading_right {
        width: 38px;
        height: 77px;
        background-color: #000;
        border-radius: 14% 0% 100% 0%;
        position: absolute;
        left: 370px;
        top: 3px;
      }
    }
  }

  // 腿
  #leg {

    // 左腿
    .leg_left {
      position: absolute;
      width: 47px;
      height: 19px;
      border: 4px solid #000;
      background: #ffe100;
      border-radius: 80% 20% 80% 10%;
      top: 356px;
      left: 164px;
    }

    // 右腿
    .leg_right {
      position: absolute;
      width: 47px;
      height: 19px;
      border: 4px solid #000;
      background: #ffe100;
      border-radius: 20% 80% 10% 80%;
      top: 356px;
      left: 293px;
    }
  }

  // 身体
  #body {
    width: 170px;
    height: 185px;
    background: #ffe100;
    position: absolute;
    top: 38%;
    left: 34%;
    border-bottom-left-radius: 45% 43%;
    border-bottom-right-radius: 45% 43%;
    border-top-left-radius: 30% 90%;
    border-top-right-radius: 30% 90%;
    border: 4px solid #000;

    // 左胳膊
    .arm_left {
      width: 50px;
      height: 65px;
      background: #ffe100;
      position: absolute;
      top: 50px;
      left: 20px;
      border-bottom-left-radius: 40% 90%;
      border-bottom-right-radius: 40% 90%;
      border: 4px solid #000;
      border-top-color: #ffe100;
      transform: skew(16deg);
    }

    // 右胳膊
    .arm_right {
      width: 50px;
      height: 65px;
      background: #ffe100;
      position: absolute;
      top: 50px;
      left: 95px;
      border-bottom-left-radius: 40% 90%;
      border-bottom-right-radius: 40% 90%;
      border: 4px solid #000;
      border-top-color: #ffe100;
      transform: skew(-16deg);
    }
  }

  // 头
  #head {
    width: 160px;
    height: 175px;
    margin: auto;
    background: #ffe100;
    position: absolute;
    top: 10%;
    left: 35%;
    border-top-left-radius: 45% 43%;
    border-top-right-radius: 45% 43%;
    border-bottom-left-radius: 50% 35%;
    border-bottom-right-radius: 50% 35%;
    border: 4px solid #000;
    border-bottom-color: #ffe100;

    // 左脸蛋
    .face_left {
      width: 45px;
      height: 45px;
      background-color: #ff2200;
      border-radius: 50%;
      margin-top: 100px;
      float: left;
      overflow: hidden;
      border: 2px solid #000;
    }

    // 右脸蛋
    .face_right {
      width: 45px;
      height: 45px;
      background-color: #ff2200;
      border-radius: 50%;
      margin-top: 100px;
      float: right;
      overflow: hidden;
      border: 2px solid #000;
    }

    // 右眼睛
    .eye_right {
      width: 30px;
      height: 30px;
      background-color: #000;
      border-radius: 50%;
      position: absolute;
      left: 20px;
      top: 60px;
      overflow: hidden;

      // 右眼白
      .eye_shading_right {
        width: 15px;
        height: 15px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: 11px;
      }
    }

    // 左眼睛
    .eye_left {
      width: 30px;
      height: 30px;
      background-color: #000;
      border-radius: 50%;
      position: absolute;
      left: 110px;
      top: 60px;
      overflow: hidden;

      // 左眼白
      .eye_shading_left {
        width: 15px;
        height: 15px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: 5px;
      }
    }

    // 嘴巴右
    .mouth_right {
      width: 35px;
      height: 30px;
      background: transparent;
      position: absolute;
      top: 67px;
      left: 72px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: #000;
    }

    // 嘴巴左
    .mouth_left {
      width: 35px;
      height: 30px;
      background: transparent;
      position: absolute;
      top: 67px;
      left: 47px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: #000;
    }

    // 舌头
    .tongue {
      width: 23px;
      height: 3px;
      background: #ff2200;
      position: absolute;
      top: 102px;
      left: 66px;
      border-bottom-left-radius: 40% 90%;
      border-bottom-right-radius: 40% 90%;
      border: 3px solid #000;
      border-top-color: #ffe100;
      animation: tongue 1s ease-in-out infinite;
    }

    // 鼻子
    .nose {
      width: 15px;
      height: 10px;
      background-color: #000;
      border-radius: 50%;
      left: 73px;
      top: 88px;
      position: absolute;
      overflow: hidden;
    }
  }
}

// 吐舌头
@keyframes tongue {
  0% {
    height: 3px;
  }

  30% {
    width: 20px;
    height: 36px;
  }

  100% {
    height: 3px;
  }
}

// 左耳朵摇摆动画
@keyframes ear_left {
  0% {
    transform-origin: 208px 208px;
    transform: rotateZ(0deg);
  }

  80% {
    transform-origin: 208px 208px;
    transform: rotateZ(0deg);
  }

  85% {
    transform-origin: 208px 208px;
    transform: rotateZ(5deg);
  }

  90% {
    transform-origin: 208px 208px;
    transform: rotateZ(0deg);
  }

  95% {
    transform-origin: 208px 208px;
    transform: rotateZ(5deg);
  }

  100% {
    transform-origin: 208px 208px;
    transform: rotateZ(0deg);
  }
}

// 右耳朵摇摆动画
@keyframes ear_right {
  0% {
    transform-origin: 300px 208px;
    transform: rotateZ(0deg);
  }

  80% {
    transform-origin: 300px 208px;
    transform: rotateZ(0deg);
  }

  85% {
    transform-origin: 300px 208px;
    transform: rotateZ(-5deg);
  }

  90% {
    transform-origin: 300px 208px;
    transform: rotateZ(0deg);
  }

  95% {
    transform-origin: 300px 208px;
    transform: rotateZ(-5deg);
  }

  100% {
    transform-origin: 300px 208px;
    transform: rotateZ(0deg);
  }
}

// 尾巴摇摆动画
@keyframes tail {
  0% {
    transform-origin: 250px 300px;
    transform: rotateZ(0deg);
  }

  60% {
    transform-origin: 250px 300px;
    transform: rotateZ(10deg);
  }

  100% {
    transform-origin: 250px 300px;
    transform: rotateZ(0deg);
  }
}
</style>
