<template>
  <a-layout-content>
    <div>
      <div class="doraemon">
        <div class="face">
          <div class="head_light"></div>
          <div class="eyes">
            <div class="eye eye_left"></div>
            <div class="black_eye black_left"></div>
            <div class="eye eye_right"></div>
            <div class="black_eye black_right"></div>
          </div>
          <div class="base">
            <div class="base_white"></div>
            <div class="nose">
              <div class="nose_light"></div>
            </div>
            <div class="nose_line"></div>
            <div class="mouth"></div>
            <div class="mouth_rewrite"></div>
            <div class="firefox_mouth"></div>
            <div class="whiskers whi_right_top rotate160"></div>
            <div class="whiskers whi_right"></div>
            <div class="whiskers whi_right_bottom rotate20"></div>
            <div class="whiskers whi_left_top rotate20"></div>
            <div class="whiskers whi_left"></div>
            <div class="whiskers whi_left_bottom rotate160"></div>
          </div>
        </div>
        <div class="choker">
          <div class="belt"></div>
          <div class="bell">
            <div class="bell_line"></div>
            <div class="bell_circle"></div>
            <div class="bell_under"></div>
            <div class="bell_light"></div>
          </div>
        </div>
        <div class="body">
          <div class="doutai"></div>
          <div class="base_white2 doutai_center"></div>
          <div class="pocket">
            <div class="circle"></div>
            <div class="circle_rewrite"></div>
          </div>
        </div>
        <div class="hand hand_right">
          <div class="arm_right"></div>
          <div class="hand_circle hand_right"></div>
          <div class="arm_rewrite_right"></div>
        </div>
        <div class="hand hand_left">
          <div class="arm_left"></div>
          <div class="hand_circle hand_left"></div>
          <div class="arm_rewrite_left"></div>
        </div>
        <div class="foot">
          <div class="foot_left"></div>
          <div class="foot_right"></div>
          <div class="foot_rewrite"></div>
        </div>
        <div class="shadow_doutai_arm"></div>
        <div class="shadow_doutai_left"></div>
        <div class="shadow_doutai_right"></div>
        <div class="shadow_belt"></div>
      </div>
    </div>
  </a-layout-content>
</template>

<script setup></script>

<style lang="less" scoped>
.ant-layout-content {
  background: var(--color-background-mute);
  color: var(--color-heading);
  z-index: 1;

  * {
    box-sizing: content-box;
  }
}

.doraemon {
  position: relative;
  margin: 50px auto;
  width: 310px;

  .face {
    position: relative;
    width: 310px;
    height: 300px;
    border-radius: 146px;
    background: #07beea;
    background: linear-gradient(225deg, #fff, #07beea 20%, #10a6ce 73%, #000 95%, #000 155%);
    border: #333 2px solid;
    top: -15px;
    box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.45);

    .head_light {
      width: 50px;
      height: 50px;
      transform: rotate(20deg);
      box-shadow: 80px 20px 50px #fff;
      border-radius: 45px;
      position: absolute;
      top: -20px;
      left: 170px;
      opacity: 0.5;
    }

    .eyes {
      position: relative;
      top: -5px;

      .eye {
        position: absolute;
        border-radius: 35px 35px;
        border: 2px solid #000;
        width: 72px;
        height: 83px;
        z-index: 20;
        background: #fff;
      }

      .black_eye {
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 10px;
        background: #333;
        z-index: 21;
        animation-name: cate;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: 200;
      }

      .black_left {
        top: 100px;
        left: 130px;
      }

      .black_right {
        top: 100px;
        left: 170px;
      }

      .eye_left {
        top: 45px;
        left: 82px;
      }

      .eye_right {
        top: 45px;
        left: 156px;
      }
    }

    .base {
      position: relative;
      top: -5px;

      .base_white {
        position: absolute;
        border: #000 2px solid;
        width: 264px;
        height: 196px;
        border-radius: 150px 150px;
        background: #fff;
        background: linear-gradient(225deg, #fff, #fff 75%, #eee 83%, #999 90%, #444 95%, #000);
        z-index: 1;
        top: 85px;
        left: 22px;
      }

      .nose {
        width: 32px;
        height: 32px;
        border: 2px solid #000;
        border-radius: 50px;
        background: #c93e00;
        position: absolute;
        top: 117px;
        left: 139px;
        z-index: 30;

        .nose_light {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          box-shadow: 19px 8px 5px #fff;
          position: relative;
          top: 0px;
          left: 0px;
        }
      }

      .nose_line {
        background: #333;
        width: 3px;
        height: 100px;
        top: 140px;
        left: 155px;
        position: absolute;
        z-index: 20;
      }

      .mouth {
        width: 240px;
        height: 500px;
        border-bottom: 3px solid #333;
        border-radius: 120px;
        position: absolute;
        top: -263px;
        left: 36px;
        z-index: 10;
      }

      .mouth_rewrite {
        background: #fff;
        width: 240px;
        height: 90px;
        position: relative;
        top: 115px;
        left: 35px;
        z-index: 12;
        border-radius: 45px;
      }

      .firefox_mouth,
      x:-moz-broken,
      x:last-of-type,
      x:indeterminate {
        position: relative;
        width: 170px;
        height: 150px;
        border-radius: 85px;
        border: 3px solid #000;
        background: #fff;
        z-index: 11;
        top: -3px;
        left: 70px;
      }

      .whiskers {
        background: #333;
        height: 2px;
        width: 60px;
        position: absolute;
        z-index: 20;

        &.whi_right {
          top: 165px;
          left: 210px;
        }

        &.whi_right_top {
          top: 145px;
          left: 210px;
        }

        &.whi_right_bottom {
          top: 185px;
          left: 210px;
        }

        &.whi_left {
          top: 165px;
          left: 50px;
        }

        &.whi_left_top {
          top: 145px;
          left: 50px;
        }

        &.whi_left_bottom {
          top: 185px;
          left: 50px;
        }

        &.rotate20 {
          transform: rotate(20deg);
        }

        &.rotate160 {
          transform: rotate(160deg);
        }
      }
    }
  }

  .choker {
    position: relative;
    top: -55px;
    left: 35px;
    z-index: 100;

    .belt {
      width: 230px;
      height: 20px;
      border: #000 solid 2px;
      background: #ca4100;
      background: linear-gradient(180deg, #ca4100, #800400);
      border-radius: 10px;
      position: relative;
      left: 5px;
    }

    .bell {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      border: 2px solid #000;
      background: #f9f12a;
      background: linear-gradient(180deg, #f9f12a, #e9e11a 75%, #a9a100);
      box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.25);
      position: relative;
      top: -15px;
      left: 100px;

      .bell_line {
        width: 36px;
        height: 2px;
        background: #f9f12a;
        border: #333 solid 2px;
        position: relative;
        top: 10px;
      }

      .bell_circle {
        width: 12px;
        height: 10px;
        border-radius: 5px;
        background: #000;
        position: relative;
        top: 14px;
        left: 14px;
      }

      .bell_under {
        width: 3px;
        height: 15px;
        background: #000;
        position: relative;
        top: 10px;
        left: 18px;
      }

      .bell_light {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        box-shadow: 19px 8px 5px #fff;
        position: relative;
        opacity: 0.7;
        top: -35px;
        left: 5px;
      }
    }
  }

  .body {
    position: unset;

    .doutai {
      position: absolute;
      width: 220px;
      height: 165px;
      background: #07beea;
      background: linear-gradient(270deg, #07beea, #0073b3 50%, #0096be 75%, #00b0e0, #0096be 100%, #333 114%);
      border: #333 2px solid;
      top: 262px;
      left: 46px;
    }

    .base_white2 {
      position: absolute;
      width: 170px;
      height: 170px;
      border-radius: 85px;
      border: 2px solid #000;
      background: #fff;
      background: linear-gradient(225deg, #fff, #fff 75%, #eee 83%, #999 90%, #444 95%, #000);

      &.doutai_center {
        top: 230px;
        left: 72px;
      }
    }

    .pocket {
      .circle {
        position: relative;
        width: 130px;
        height: 130px;
        border-radius: 65px;
        background: #fff;
        background: linear-gradient(225deg, #fff, #fff 70%, #f8f8f8 75%, #eee 80%, #ddd 88%, #fff);
        border: 2px solid #000;
        top: -120px;
        left: 92px;
      }

      .circle_rewrite {
        position: relative;
        width: 134px;
        height: 60px;
        background: #fff;
        border-bottom: 2px solid #000;
        top: -250px;
        left: 92px;
      }
    }
  }

  .hand {
    position: relative;

    &.hand_right {
      position: absolute;
      top: 272px;
      left: 248px;
      width: 100px;
      height: 100px;

      .arm_right {
        position: relative;
        width: 80px;
        height: 50px;
        background: #07beea;
        background: linear-gradient(180deg, #07beea, #07beea 85%, #555);
        border: solid 1px #000;
        z-index: -1;
        top: 17px;
        transform: rotate(35deg);
        box-shadow: -10px 7px 10px rgba(0, 0, 0, 0.35);
      }

      .hand_right {
        top: 32px;
        left: 40px;
      }

      .arm_rewrite_right {
        position: relative;
        width: 4px;
        height: 45px;
        background: #07beea;
        top: -51px;
        left: 18px;
      }
    }

    &.hand_left {
      position: absolute;
      top: 272px;
      left: -46px;
      width: 100px;
      height: 100px;

      .arm_left {
        position: relative;
        width: 80px;
        height: 50px;
        background: #0096be;
        border: solid 1px #000;
        z-index: -1;
        top: 17px;
        left: 36px;
        transform: rotate(145deg);
        box-shadow: 5px -7px 10px rgba(0, 0, 0, 0.25);
      }

      .hand_left {
        top: 34px;
        left: 10px;
      }

      .arm_rewrite_left {
        position: relative;
        width: 4px;
        height: 50px;
        background: #0096be;
        top: -52px;
        left: 92px;
      }
    }

    .hand_circle {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      border: 2px solid #000;
      background: #fff;
      background: linear-gradient(225deg, #fff, #fff 50%, #eee 70%, #ddd 80%, #999);
    }
  }

  .foot {
    position: relative;
    width: 280px;
    height: 40px;
    top: -141px;
    left: 20px;

    .foot_left {
      width: 125px;
      height: 30px;
      background: #fff;
      background: linear-gradient(225deg, #fff, #fff 75%, #eee 85%, #999);
      border: solid 2px #333;
      border-top-left-radius: 80px;
      border-bottom-left-radius: 40px;
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
      position: relative;
      left: 8px;
      top: 2px;
      box-shadow: -6px 0px 10px rgba(0, 0, 0, 0.35);
      z-index: -1;
    }

    .foot_right {
      position: relative;
      width: 125px;
      height: 30px;
      background: #fff;
      background: linear-gradient(225deg, #fff, #fff 75%, #eee 85%, #999);
      border: solid 2px #333;
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
      border-top-right-radius: 80px;
      border-bottom-right-radius: 40px;
      top: -32px;
      left: 141px;
      box-shadow: -6px 0px 10px rgba(0, 0, 0, 0.35);
      z-index: -1;
    }

    .foot_rewrite {
      position: relative;
      width: 20px;
      height: 10px;
      background: #fff;
      background: linear-gradient(225deg, #666, var(--color-background-mute) 83%, var(--color-background-mute));
      top: -76px;
      left: 127px;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      border-left: 2px solid #000;
      border-top-right-radius: 40px;
      border-top-left-radius: 40px;
    }
  }

  .shadow_doutai_left {
    width: 30px;
    height: 200px;
    box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 250px;
    left: 46px;
    z-index: -10;
  }

  .shadow_doutai_right {
    width: 30px;
    height: 200px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.35);
    position: absolute;
    top: 240px;
    left: 230px;
    z-index: -10;
  }

  .shadow_doutai_arm {
    width: 85px;
    height: 165px;
    box-shadow: -100px 10px 15px rgba(0, 0, 0, 0);
    position: absolute;
    top: 230px;
    left: 113px;
    z-index: 10;
    opacity: 0.5;
    transform: rotate(-20deg);
    border-bottom-left-radius: 40px;
    border-top-left-radius: 20px;
  }

  .shadow_belt {
    width: 40px;
    height: 30px;
    box-shadow: -100px 10px 15px rgba(0, 0, 0, 0);
    position: absolute;
    top: 240px;
    left: 130px;
    border-bottom-left-radius: 40px;
    z-index: 300;
  }
}

@keyframes cate {
  0% {
    margin: 0 0 0 0;
  }

  80% {
    margin: 0px 0 0 0;
  }

  85% {
    margin: -20px 0 0 0;
  }

  90% {
    margin: 0 0 0 0;
  }

  93% {
    margin: 0 0 0 7px;
  }

  96% {
    margin: 0 0 0 0;
  }

  100% {
    margin: 0 0 0 0;
  }
}
</style>
