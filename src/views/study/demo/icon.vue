<template>
  <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="纯CSS3ICON">
    <div class="stage">
      <span><i class="icon-home"></i></span>
      <span><i class="icon-mail"></i></span>
      <span><i class="icon-rss"></i></span>
      <span><i class="icon-hamburger"></i></span>
      <span><i class="icon-plus"></i></span>
      <span><i class="icon-cross"></i></span>
      <span><i class="icon-check"></i></span>
      <span><i class="icon-power"></i></span>
      <span><i class="icon-heart"></i></span>
      <span><i class="icon-flag"></i></span>
      <span><i class="icon-share"></i></span>
      <span><i class="icon-pin"></i></span>
      <span><i class="icon-locationArrow"></i></span>
      <span><i class="icon-asterisk"></i></span>
      <span><i class="icon-image"></i></span>
      <span><i class="icon-video"></i></span>
      <span><i class="icon-music"></i></span>
      <span><i class="icon-document"></i></span>
      <span><i class="icon-file"></i></span>
      <span><i class="icon-folder"></i></span>
      <span><i class="icon-smile"></i></span>
      <span><i class="icon-frown"></i></span>
      <span><i class="icon-meh"></i></span>
      <span><i class="icon-user"></i></span>
      <span><i class="icon-eye"></i></span>
      <span><i class="icon-sliders"></i></span>
      <span><i class="icon-infinity"></i></span>
      <span><i class="icon-sync"></i></span>
      <span><i class="icon-sync spin"></i></span>
      <span><i class="icon-reset"></i></span>
      <span><i class="icon-reset spin"></i></span>
      <span><i class="icon-gear"></i></span>
      <span><i class="icon-gear spin"></i></span>
      <span><i class="icon-signIn"></i></span>
      <span><i class="icon-signOut"></i></span>
      <span><i class="icon-book"></i></span>
      <span><i class="icon-support"></i></span>
      <span><i class="icon-dropper"></i></span>
      <span><i class="icon-chain"></i></span>
      <span><i class="icon-paperClip"></i></span>
      <span><i class="icon-search"></i></span>
      <span><i class="icon-rename"></i></span>
      <span><i class="icon-crop"></i></span>
      <span><i class="icon-trash"></i></span>
      <span><i class="icon-keyboard"></i></span>
      <span><i class="icon-mouse"></i></span>
      <span><i class="icon-headphone"></i></span>
      <span><i class="icon-microphone"></i></span>
      <span><i class="icon-display"></i></span>
      <span><i class="icon-imac"></i></span>
      <span><i class="icon-iphone"></i></span>
      <span><i class="icon-macbook"></i></span>
      <span><i class="icon-imacBold"></i></span>
      <span><i class="icon-iphoneBold"></i></span>
      <span><i class="icon-macbookBold"></i></span>
      <span><i class="icon-nexus"></i></span>
      <span><i class="icon-terminal"></i></span>
      <span><i class="icon-youtube"></i></span>
      <span><i class="icon-market"></i></span>
      <span><i class="icon-clock"></i></span>
      <span><i class="icon-tiles"></i></span>
      <span><i class="icon-list"></i></span>
      <span><i class="icon-forbidden"></i></span>
      <span><i class="icon-plusCircle"></i></span>
      <span><i class="icon-crossCircle"></i></span>
      <span><i class="icon-checkCircle"></i></span>
      <span><i class="icon-exclamationCircle"></i></span>
      <span><i class="icon-exclamation"></i></span>
      <span><i class="icon-textAlignRight"></i></span>
      <span><i class="icon-textAlignCenter"></i></span>
      <span><i class="icon-textAlignLeft"></i></span>
      <span><i class="icon-indent"></i></span>
      <span><i class="icon-outdent"></i></span>
      <span><i class="icon-comment"></i></span>
      <span><i class="icon-commentEmpty"></i></span>
      <span><i class="icon-areaChart"></i></span>
      <span><i class="icon-pieChart"></i></span>
      <span><i class="icon-barChart"></i></span>
      <span><i class="icon-bookmark"></i></span>
      <span><i class="icon-bookmarkEmpty"></i></span>
      <span><i class="icon-filter"></i></span>
      <span><i class="icon-volume"></i></span>
      <span><i class="icon-volumeLow"></i></span>
      <span><i class="icon-volumeMedium"></i></span>
      <span><i class="icon-volumeHigh"></i></span>
      <span><i class="icon-volumeDecrease"></i></span>
      <span><i class="icon-volumeIncrease"></i></span>
      <span><i class="icon-volumeMute"></i></span>
      <span><i class="icon-tag"></i></span>
      <span><i class="icon-calendar"></i></span>
      <span><i class="icon-camera"></i></span>
      <span><i class="icon-piano"></i></span>
      <span><i class="icon-ruler"></i></span>
      <span><i class="icon-cup"></i></span>
      <span><i class="icon-creditCard"></i></span>
      <span><i class="icon-facebook"></i></span>
      <span><i class="icon-twitter"></i></span>
      <span><i class="icon-instagram"></i></span>
      <span><i class="icon-linkedIn"></i></span>
      <span><i class="icon-flickr"></i></span>
      <span><i class="icon-delicious"></i></span>
      <span><i class="icon-codepen"></i></span>
      <span><i class="icon-blogger"></i></span>
    </div>
  </a-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.ant-card :deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}

.stage {
  text-align: left;

  *,
  *::before,
  *::after {
    box-sizing: content-box;
  }

  span {
    padding: 10px;
    display: inline-block;

    [class*='icon-'] {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      font-style: normal;
      color: #333;
      text-align: left;
      text-indent: -9999px;
      direction: ltr;
      opacity: 0.6;
      box-sizing: border-box;

      &::before,
      &::after {
        content: '';
        pointer-events: none;
      }

      &[class*='Circle'] {
        border-radius: 50%;
      }
    }

    &:hover {
      transform: scale(1.2);

      i {
        opacity: 0.8;
      }
    }
  }

  .icon-home {
    width: 22px;
    height: 16px;
    border: 2px solid;
    border-top: none;
    margin: 15px 6px 3px;

    &::before {
      width: 18px;
      height: 18px;
      border: 2px solid;
      transform: rotate(45deg);
      position: absolute;
      left: -2px;
      top: -7px;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    &::after {
      width: 6px;
      height: 10px;
      border: 2px solid;
      bottom: 0;
      position: absolute;
      right: 0;
      left: 0;
      margin-right: auto;
      margin-left: auto;
      border-width: 1px;
      border-bottom: none;
    }
  }

  .icon-mail {
    width: 28px;
    height: 18px;
    overflow: hidden;
    margin: 8px 3px;
    border: 2px solid;

    &::before {
      position: absolute;
      width: 24.61538462px;
      height: 24.61538462px;
      transform: rotate(50deg) skew(-10deg, -20deg);
      top: -20px;
      left: -3px;
      border: 2px solid;
    }
  }

  .icon-rss {
    width: 22px;
    height: 22px;
    overflow: hidden;
    margin: 6px;

    &::before,
    &::after {
      position: absolute;
      border-radius: 50%;
    }

    &::before {
      width: 6px;
      height: 6px;
      box-shadow: 0 0 32px inset;
      left: 0;
      bottom: 0;
    }

    &::after {
      width: 27px;
      height: 27px;
      right: 15%;
      top: 15%;
      border: 4px solid transparent;
      box-shadow: inset 0 0 0 2px, 0 0 0 2px;
    }
  }

  .icon-hamburger {
    width: 20px;
    height: 2px;
    box-shadow: inset 0 0 0 32px, 0 -6px, 0 6px;
    margin: 16px 7px;
  }

  .icon-plus {
    width: 30px;
    height: 30px;
    margin: 2px;

    &::before,
    &::after {
      box-shadow: inset 0 0 0 32px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::before {
      width: 20px;
      height: 2px;
    }

    &::after {
      width: 2px;
      height: 20px;
    }
  }

  .icon-cross {
    width: 30px;
    height: 30px;
    margin: 2px;
    transform: rotate(45deg);

    &::before,
    &::after {
      box-shadow: inset 0 0 0 32px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::before {
      width: 20px;
      height: 2px;
    }

    &::after {
      width: 2px;
      height: 20px;
    }
  }

  .icon-check {
    width: 28px;
    height: 28px;
    margin: 3px 0 3px 6px;
    transform: rotate(-45deg);

    &::before {
      width: 20px;
      height: 2px;
      box-shadow: inset 0 0 0 32px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      position: absolute;
      height: 12px;
      width: 2px;
      left: 4px;
      bottom: 14px;
      box-shadow: inset 0 0 0 32px;
    }
  }

  .icon-power {
    width: 22px;
    height: 22px;
    margin: 6px;
    border-radius: 50%;
    border: 2px solid;
    border-top-color: transparent;

    &::before {
      position: absolute;
      top: -15%;
      left: 8px;
      width: 2px;
      height: 60%;
      box-shadow: inset 0 0 0 32px;
    }
  }

  .icon-heart {
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
    border-radius: 7px 0;
    margin: 9px 7px 5px;

    &::before,
    &::after {
      position: absolute;
    }

    &::before {
      width: 8px;
      height: 14px;
      left: -10px;
      bottom: -2px;
      border: 2px solid;
      border-radius: 20px 0 0 20px;
      border-right-color: transparent;
    }

    &::after {
      width: 14px;
      height: 8px;
      right: -2px;
      top: -10px;
      border: 2px solid;
      border-radius: 20px 20px 0 0;
      border-bottom-color: transparent;
    }
  }

  .icon-flag {
    width: 22px;
    height: 25px;
    border-left: 3px solid;
    margin: 5px 6px 4px;

    &::before,
    &::after {
      position: absolute;
      width: 9px;
      height: 8px;
    }

    &::before {
      left: -2px;
      top: 1px;
      border: 2px solid;
      border-radius: 0 2px 0 0;
      border-right-width: 3px;
    }

    &::after {
      width: 5px;
      left: 9px;
      top: 4px;
      border: 2px solid;
      border-left-width: 3px;
      border-radius: 2px 2px 0 2px;
    }
  }

  .icon-share {
    height: 9px;
    width: 9px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 32px, 22px -11px 0 0, 22px 11px 0 0;
    margin: 12px 24px 13px 1px;

    &::before,
    &::after {
      position: absolute;
      width: 24px;
      height: 2px;
      box-shadow: inset 0 0 0 32px;
      left: 0;
    }

    &::before {
      top: -2px;
      transform: rotate(-25deg);
    }

    &::after {
      top: 9px;
      transform: rotate(25deg);
    }
  }

  .icon-pin {
    width: 26px;
    height: 26px;
    border: 2px solid;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    margin: 1px 4px 7px;

    &::before {
      position: absolute;
      width: 6px;
      height: 6px;
      border: 2px solid;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .icon-locationArrow {
    width: 32px;
    height: 32px;
    margin: 1px;

    &::before,
    &::after {
      position: absolute;
      border-style: solid;
      border-left-color: transparent;
    }

    &::before {
      left: 7px;
      top: 16px;
      border-width: 6px 0 6px 6px;
      transform: rotate(-45deg);
    }

    &::after {
      top: 10px;
      left: 2px;
      border-width: 10px;
      border-bottom-color: transparent;
      transform: skew(-30deg, -30deg);
    }
  }

  .icon-asterisk {
    &,
    &::before,
    &::after {
      width: 4px;
      height: 20px;
      box-shadow: inset 0 0 0 32px;
      border-radius: 1px;
      position: absolute;
      margin: 7px 15px;
      left: 0;
      top: 0;
    }

    &::before,
    &::after {
      margin: 0;
    }

    &::before {
      transform: rotate(-58deg);
    }

    &::after {
      transform: rotate(58deg);
    }
  }

  .icon-image {
    width: 30px;
    height: 26px;
    border: 2px solid;
    border-radius: 3px;
    overflow: hidden;
    margin: 4px 2px;

    &::before {
      position: absolute;
      width: 20px;
      height: 20px;
      left: -2px;
      top: 14px;
      transform: rotate(45deg);
      box-shadow: inset 0 0 0 32px, 10px -6px 0 0;
    }

    &::after {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 32px;
      top: 5px;
      right: 5px;
    }
  }

  .icon-video {
    width: 20px;
    height: 20px;
    margin: 7px 7px;
    border: 2px solid;
    box-sizing: border-box;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
    }

    &::before {
      width: 3px;
      height: 3px;
      left: -8px;
      transform: translateY(-50%);
      box-shadow: inset 0 0 0 32px, 0 -8px 0 0, 0 8px 0 0, 29px 0 0 0, 29px -8px 0 0, 29px 8px 0 0;
    }

    &::after {
      width: 0;
      height: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 4px 0 4px 6px;
      border-style: solid;
      border-top-color: transparent;
      border-bottom-color: transparent;
    }
  }

  .icon-music {
    width: 18px;
    height: 6px;
    transform: skewY(-15deg);
    box-shadow: inset 0 0 0 32px;
    border-radius: 2px 2px 0 0;
    margin: 4px 5px 24px 11px;

    &::before {
      position: absolute;
      width: 2px;
      height: 16px;
      left: 0;
      top: 4px;
      box-shadow: inset 0 0 0 32px, 16px 0 0 0;
    }

    &::after {
      position: absolute;
      width: 10px;
      height: 8px;
      left: -8px;
      top: 17px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 32px, 16px 0 0 0;
    }
  }

  .icon-document {
    width: 26px;
    height: 32px;
    border: 2px solid;
    border-radius: 0 0 0 10px;
    margin: 1px 4px;

    &::before {
      position: absolute;
      width: 0;
      height: 0;
      left: -3px;
      bottom: -3px;
      border-width: 5px;
      border-style: solid;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }

    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 13px;
      height: 2px;
      box-shadow: inset 0 0 0 32px, 0 -5px 0 0, 0 5px 0 0;
    }
  }

  .icon-file {
    width: 26px;
    height: 32px;
    border: 2px solid;
    border-radius: 0 12px 0 0;
    margin: 1px 4px;

    &::before {
      position: absolute;
      top: -2px;
      right: -2px;
      border-style: solid;
      width: 0;
      height: 0;
      border-width: 5px;
      border-top-color: transparent;
      border-right-color: transparent;
    }
  }

  .icon-folder {
    width: 18px;
    height: 22px;
    border: 2px solid;
    border-left-width: 0;
    border-radius: 0 3px 3px 0;
    margin: 8px 2px 4px 14px;

    &::before {
      position: absolute;
      width: 12px;
      height: 20px;
      left: -12px;
      bottom: -2px;
      border-width: 0 0 2px 2px;
      border-style: solid;
      border-radius: 0 0 0 3px;
    }

    &::after {
      position: absolute;
      width: 10px;
      height: 5px;
      left: -12px;
      top: -7px;
      border-width: 2px 2px 0 2px;
      border-style: solid;
      border-radius: 3px 3px 0 0;
    }
  }

  .icon-smile {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 2px;
    border: 2px solid;

    &::before {
      border-radius: 50%;
      box-shadow: 8px 0 0 0, 0 0 0 2px inset;
      height: 4px;
      width: 4px;
      left: 7px;
      position: absolute;
      top: 27%;
    }

    &::after {
      border: 2px solid;
      border-radius: 50%;
      transform: translateX(-50%);
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      height: 16px;
      left: 50%;
      position: absolute;
      top: 6%;
      width: 16px;
    }
  }

  .icon-frown {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 2px;
    border: 2px solid;

    &::before {
      border-radius: 50%;
      box-shadow: 8px 0 0 0, 0 0 0 2px inset;
      height: 4px;
      width: 4px;
      left: 7px;
      position: absolute;
      top: 27%;
    }

    &::after {
      border: 2px solid;
      border-radius: 50%;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      height: 16px;
      left: 50%;
      position: absolute;
      top: 6%;
      width: 16px;
      transform: translateX(-50%) rotate(180deg);
      transform-origin: center 85%;
    }
  }

  .icon-meh {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 2px;
    border: 2px solid;

    &::before {
      border-radius: 50%;
      box-shadow: 8px 0 0 0, 0 0 0 2px inset;
      height: 4px;
      width: 4px;
      left: 7px;
      position: absolute;
      top: 27%;
    }

    &::after {
      border: 2px solid;
      transform: translateX(-50%);
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      height: 16px;
      left: 50%;
      position: absolute;
      top: 0;
      width: 12px;
      border-left-width: 0;
      border-right-width: 0;
      border-radius: 0;
    }
  }

  .icon-user {
    width: 32px;
    height: 14px;
    border-radius: 64px 64px 0 0 / 64px;
    margin: 18px 1px 2px;
    border: 2px solid;

    &::before {
      border: 2px solid;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 12px;
      height: 12px;
      top: -20px;
      border-radius: 50%;
    }
  }

  .icon-eye {
    border: 2px solid;
    border-radius: 80% 20%;
    transform: rotate(45deg);
    border-width: 2px 1px 1px 2px;
    height: 28px;
    width: 28px;
    margin: 3px 3px;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      box-shadow: 0 -3px 0 3px inset;
      height: 11px;
      width: 11px;
    }
  }

  .icon-sliders {
    height: 30px;
    width: 30px;
    margin: 2px;

    &::before,
    &::after {
      transform: translateX(-50%);
      left: 50%;
      position: absolute;
    }

    &::before {
      width: 8px;
      height: 7px;
      border-radius: 2px;
      top: 67%;
      box-shadow: inset 0 0 0 32px, 10px -10px, -10px -14px;
    }

    &::after {
      width: 2px;
      height: 100%;
      box-shadow: inset 0 0 0 32px, 10px 0, -10px 0;
    }
  }

  .icon-infinity {
    width: 32px;
    height: 16px;
    margin: 9px 1px;

    &::before,
    &::after {
      width: 10px;
      height: 10px;
      position: absolute;
      transform: rotate(45deg);
      border: 2px solid;
    }

    &::before {
      left: 0;
      border-radius: 32px 0 32px 32px;
    }

    &::after {
      right: 1px;
      border-radius: 32px 32px 32px 0;
    }
  }

  .icon-sync {
    width: 26px;
    height: 26px;
    border: 2px solid;
    border-radius: 50%;
    border-right-color: transparent;
    border-left-color: transparent;
    margin: 4px;

    &::before,
    &::after {
      position: absolute;
      width: 0;
      height: 0;
      border-width: 6px;
      border-style: solid;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }

    &::before {
      transform: rotate(-45deg);
      right: -7px;
      top: 0;
    }

    &::after {
      transform: rotate(135deg);
      left: -7px;
      bottom: 0;
    }
  }

  .icon-reset {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-left-color: transparent;
    margin: 4px;

    &::before {
      position: absolute;
      width: 0;
      height: 0;
      left: -7px;
      bottom: 0;
      border-width: 6px;
      border-style: solid;
      border-right-color: transparent;
      border-left-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(135deg);
    }
  }

  .icon-gear {
    width: 32px;
    height: 32px;
    border: 3px dotted;
    border-radius: 50%;
    margin: 1px;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      box-shadow: 0 0 0 3px, 0 0 0 2px inset;
      border-radius: 50%;
      border: 6px solid transparent;
      box-sizing: border-box;
    }
  }

  .icon-signIn {
    width: 18px;
    height: 32px;
    border: 2px solid;
    border-left: none;
    border-radius: 0 3px 3px 0;
    margin: 1px 8px;

    &::before {
      position: absolute;
      width: 11px;
      height: 11px;
      left: -10px;
      top: 7px;
      border: 2px solid;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
      border-radius: 0 4px 0 0;
    }
  }

  .icon-signOut {
    width: 18px;
    height: 32px;
    border: 2px solid;
    border-right: none;
    border-radius: 3px 0 0 3px;
    margin: 1px 8px;

    &::before {
      position: absolute;
      width: 11px;
      height: 11px;
      right: -2px;
      top: 7px;
      border: 2px solid;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
      border-radius: 0 4px 0 0;
    }
  }

  .icon-book {
    width: 26px;
    height: 22px;
    margin: 10px 4px 2px;
    border: 2px solid;
    border-radius: 0 0 0 6px;
    border-top: none;

    &::before {
      position: absolute;
      width: 24px;
      height: 7px;
      box-sizing: border-box;
      left: -2px;
      top: -5px;
      border: 2px solid;
      border-top: none;
      border-right: none;
      border-radius: 0 0 0 6px;
    }

    &::after {
      position: absolute;
      width: 24px;
      height: 8px;
      box-sizing: border-box;
      left: -2px;
      top: -8px;
      border: 2px solid;
      border-bottom: none;
      border-radius: 6px 0 0 0;
    }
  }

  .icon-support {
    width: 26px;
    height: 26px;
    border: 5px solid transparent;
    box-shadow: 0 0 0 2px inset, 0 0 0 2px;
    border-radius: 50%;
    margin: 4px;

    &::before {
      position: absolute;
      width: 7px;
      height: 7px;
      top: -3px;
      left: -3px;
      transform: rotate(45deg);
      box-shadow: inset 0 0 0 32px, 21px 0 0 0;
    }

    &::after {
      position: absolute;
      width: 7px;
      height: 7px;
      top: -3px;
      right: -3px;
      transform: rotate(135deg);
      box-shadow: inset 0 0 0 32px, 21px 0 0 0;
    }
  }

  .icon-dropper {
    width: 40px;
    height: 14px;
    border-width: 3px;
    border-style: solid;
    border-right: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    box-shadow: -9px 0 0 2px inset, 0 0 0 2px inset;
    border-radius: 50% 6px 6px 50%;
    transform: rotate(-45deg);
    margin: 12px -2px 8px -4px;

    &::before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 14px;
      right: 10px;
      box-shadow: inset 0 0 0 32px;
    }
  }

  .icon-chain {
    width: 16px;
    height: 2px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    margin: 16px 9px;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 8px;
      border: 2px solid;
      border-radius: 4px;
    }

    &::before {
      right: -10px;
    }

    &::after {
      left: -10px;
    }
  }

  .icon-paperClip {
    width: 24px;
    height: 18px;
    border: 2px solid;
    border-left: none;
    border-radius: 0 16px 16px 0;
    transform: rotate(-45deg);
    margin: 5px 0 11px 10px;

    &::before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 6px;
      right: 2px;
      border: 2px solid;
      border-radius: 0 16px 16px 0;
      border-left: none;
    }

    &::after {
      position: absolute;
      width: 12px;
      height: 10px;
      left: -12px;
      top: -2px;
      border: 2px solid;
      border-right: none;
      border-radius: 16px 0 0 16px;
    }
  }

  .icon-search {
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 50%;
    transform: rotate(45deg);
    margin: 4px 4px 8px 8px;

    &::before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 11px;
      box-shadow: inset 0 0 0 32px;
      top: 19px;
      border-radius: 0 0 1px 1px;
    }
  }

  .icon-rename {
    width: 26px;
    height: 10px;
    box-shadow: 0 0 0 1px, 11px 0 0 0 inset;
    margin: 12px 4px;
    border: 2px solid;
    border-color: transparent;
    border-width: 3px;

    &::before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 18px;
      left: 9px;
      border-width: 2px 4px;
      border-style: solid;
      border-right-color: transparent;
      border-left-color: transparent;
      box-shadow: 0 0 0 1px inset;
    }
  }

  .icon-crop {
    width: 21px;
    height: 21px;
    margin: 9px 9px 4px 4px;
    border: 2px solid;
    border-left: none;
    border-bottom: none;

    &::before {
      position: absolute;
      width: 21px;
      height: 21px;
      top: -7px;
      right: -7px;
      border: 2px solid;
      border-top: none;
      border-right: none;
      box-sizing: border-box;
    }

    &::after {
      width: 27px;
      height: 1px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 12px;
      left: 2px;
      margin: auto;
      box-shadow: inset 0 0 0 32px;
      transform: rotate(-45deg);
    }
  }

  .icon-trash {
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 0 0 3px 3px;
    border-top: none;
    margin: 9px 6px 3px;

    &::before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 2px;
      top: -6px;
      box-shadow: inset 0 0 0 32px, -10px 2px 0 0, -6px 2px 0 0, 0 2px 0 0, 6px 2px 0 0, 10px 2px 0 0;
    }
  }

  .icon-keyboard {
    width: 32px;
    height: 22px;
    border-radius: 3px;
    margin: 6px 1px;
    border: 2px solid;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 2px;
      box-shadow: -2px -4px 0, -6px -4px 0, -10px -4px 0, 2px -4px 0, 6px -4px 0, 8px -4px 0, 10px -4px 0, -4px 0 0, -8px 0 0, -10px 0 0,
        inset 0 0 0 32px, 4px 0 0, 8px 0 0, 10px 0 0, 4px 4px 0, 2px 4px 0, 0 4px 0, -2px 4px 0, -6px 4px 0, -10px 4px 0, 6px 4px 0, 10px 4px 0;
    }
  }

  .icon-mouse {
    width: 23px;
    height: 32px;
    border: 2px solid;
    border-radius: 11px 11px 12px 12px;
    margin: 1px 5px 1px 6px;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      width: 1px;
      height: 6px;
      border: 2px solid;
      border-radius: 2px;
      border-color: transparent;
      border-width: 1px;
      top: 5px;
      box-shadow: 0 0 0 1px, 0 0 0 2px inset;
    }

    &::after {
      width: 1px;
      height: 4px;
      top: 0;
      box-shadow: inset 0 0 0 32px, 0 13px 0 0;
    }
  }

  .icon-headphone {
    width: 30px;
    height: 27px;
    border: 2px solid;
    border-bottom-color: transparent;
    border-radius: 32px / 32px 32px 16px 16px;
    margin: 2px 2px 5px;

    &::before {
      position: absolute;
      width: 4px;
      height: 12px;
      left: 1px;
      bottom: -4px;
      border-radius: 5px;
      box-shadow: inset 0 0 0 32px, 20px 0 0 0;
    }
  }

  .icon-microphone {
    width: 22px;
    height: 15px;
    border: 2px solid;
    border-width: 0 2px 2px;
    border-radius: 20px / 0 0 20px 20px;
    margin: 12px 6px 7px;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      width: 10px;
      height: 18px;
      top: -11px;
      border: 2px solid;
      border-radius: 20px;
    }

    &::after {
      width: 2px;
      height: 2px;
      bottom: -4px;
      box-shadow: inset 0 0 0 32px, 0 2px, 0 4px, -2px 4px, -4px 4px, -6px 4px, 2px 4px, 4px 4px, 6px 4px;
    }
  }

  .icon-display {
    width: 26px;
    height: 22px;
    margin: 4px 4px 8px;
    border: 2px solid;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: inset 0 0 0 32px;
    }

    &::before {
      width: 4px;
      height: 3px;
      bottom: -5px;
    }

    &::after {
      width: 14px;
      height: 2px;
      bottom: -6px;
    }
  }

  .icon-imac {
    width: 28px;
    height: 24px;
    border: 2px solid;
    border-width: 2px 2px 6px;
    border-color: transparent;
    border-radius: 3px;
    box-shadow: 0 0 0 1px, 0 0 0 1px inset;
    margin: 3px 3px 7px;

    &::before {
      position: absolute;
      height: 4px;
      right: -3px;
      left: -3px;
      bottom: -6px;
      box-shadow: inset 0 0 0 32px;
      border-radius: 0 0 3px 3px;
    }

    &::after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 9px;
      height: 7px;
      box-shadow: inset 0 0 0 32px;
      bottom: -12px;
      border-radius: 32px 32px 0 0 / 64px;
    }
  }

  .icon-iphone {
    width: 19px;
    height: 31px;
    border: 2px solid;
    border-radius: 3px;
    border-width: 5px 1px;
    border-color: transparent;
    box-shadow: 0 0 0 1px, 0 0 0 1px inset;
    margin: 2px 8px 1px 7px;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: inset 0 0 0 32px;
    }

    &::before {
      width: 3px;
      height: 1px;
      top: -3px;
    }

    &::after {
      width: 3px;
      height: 3px;
      bottom: -4px;
      border-radius: 50%;
    }
  }

  .icon-macbook {
    width: 32px;
    height: 2px;
    box-shadow: inset 0 0 0 32px;
    border-radius: 0 0 32px 32px / 3px;
    margin: 25px 1px 7px 1px;

    &::before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 14px;
      bottom: 2px;
      border: 2px solid;
      border-width: 3px 1px 1px 1px;
      border-color: transparent;
      border-radius: 3px 3px 0 0;
      box-shadow: 0 0 0 1px, 0 0 0 1px inset;
    }
  }

  .icon-imacBold {
    width: 28px;
    height: 22px;
    border-radius: 4px;
    margin: 4px 3px 8px;
    border: 2px solid;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      width: 9px;
      height: 7px;
      box-shadow: inset 0 0 0 32px;
      bottom: -6px;
      border-radius: 32px 32px 0 0 / 64px;
    }

    &::after {
      width: 24px;
      height: 3px;
      box-shadow: inset 0 0 0 32px;
      bottom: 0;
    }
  }

  .icon-iphoneBold {
    width: 20px;
    height: 32px;
    margin: 1px 7px;
    border: 2px solid;
    border-radius: 4px;
    border-width: 5px 2px;
  }

  .icon-macbookBold {
    width: 32px;
    height: 2px;
    box-shadow: inset 0 0 0 32px;
    margin: 25px 1px 7px 1px;

    &::before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 14px;
      bottom: 2px;
      border: 2px solid;
      border-width: 3px 2px 1px;
      border-radius: 3px 3px 0 0;
    }
  }

  .icon-nexus {
    width: 21px;
    height: 32px;
    border: 2px solid;
    border-width: 3px 1px;
    border-radius: 16px / 3px;
    margin: 1px 7px 1px 6px;
  }

  .icon-terminal {
    width: 28px;
    height: 24px;
    margin: 5px 3px;
    border: 2px solid;

    &::before {
      width: 5px;
      height: 5px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      left: 3px;
      border-width: 2px 2px 0 0;
      border-style: solid;
    }

    &::after {
      position: absolute;
      width: 5px;
      height: 0;
      border-bottom: 2px solid;
      right: 6px;
      bottom: 4px;
    }
  }

  .icon-youtube {
    width: 32px;
    height: 22.28877899px;
    margin: 6px 1px;
    border: 2px solid;
    border-right-color: transparent;
    border-left-color: transparent;
    border-radius: 10px;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 2px solid;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-radius: 6px / 3px;
    }

    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-width: 4px 0 4px 8px;
      border-style: solid;
      border-top-color: transparent;
      border-bottom-color: transparent;
    }
  }

  .icon-market {
    width: 32px;
    height: 12px;
    border: 2px solid;
    border-top: none;
    margin: 19px 1px 3px;

    &::before {
      width: 6px;
      height: 13px;
      position: absolute;
      top: -15px;
      left: -5px;
      border-radius: 0 0 10px 10px;
      border-left: none;
      box-shadow: inset 0 0 0 32px, 8px 0 0, 16px 0 0, 24px 0 0, 32px 0 0;
    }

    &::after {
      width: 6px;
      height: 6px;
      bottom: -2px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      border: 2px solid;
    }
  }

  .icon-clock {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin: 4px;
    border: 2px solid;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 35%;
      box-shadow: inset 0 0 0 32px;
      border-radius: 2px;
    }

    &::before {
      width: 2px;
      height: 9px;
    }

    &::after {
      width: 6px;
      height: 2px;
      transform-origin: left center;
      transform: rotate(45deg) translate(1px, 2px);
    }
  }

  .icon-tiles {
    width: 4px;
    height: 4px;
    box-shadow: 0 -8px 0, -8px -8px 0, 8px -8px 0, 0 0 0 32px inset, -8px 0 0, 8px 0 0, 0 8px 0, -8px 8px 0, 8px 8px 0;
    margin: 15px;
  }

  .icon-list {
    width: 4px;
    height: 4px;
    box-shadow: inset 0 0 0 32px, 0 -8px 0 0, 0 8px 0 0;
    margin: 15px 26px 15px 4px;

    &::before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 4px;
      left: 8px;
      box-shadow: inset 0 0 0 32px, 0 -8px 0 0, 0 8px 0 0;
    }
  }

  .icon-forbidden {
    width: 28px;
    height: 28px;
    margin: 3px;
    border: 2px solid;
    border-width: 3px;
    border-radius: 50%;
    transform: rotate(45deg);

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 4px;
      box-shadow: inset 0 0 0 32px;
    }
  }

  .icon-plusCircle {
    width: 30px;
    height: 30px;
    margin: 2px;
    border-radius: 50%;
    border: 2px solid;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: inset 0 0 0 32px;
    }

    &::before {
      width: 18px;
      height: 2px;
    }

    &::after {
      width: 2px;
      height: 18px;
    }
  }

  .icon-crossCircle {
    width: 30px;
    height: 30px;
    margin: 2px;
    transform: rotate(45deg);
    border-radius: 50%;
    border: 2px solid;

    &::before,
    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: inset 0 0 0 32px;
    }

    &::before {
      width: 18px;
      height: 2px;
    }

    &::after {
      width: 2px;
      height: 18px;
    }
  }

  .icon-checkCircle {
    width: 30px;
    height: 30px;
    margin: 2px;
    border: 2px solid;
    border-radius: 50%;
    transform: rotate(-45deg);

    &::before,
    &::after {
      position: absolute;
      box-shadow: inset 0 0 0 32px;
    }

    &::before {
      width: 14px;
      height: 2px;
      top: 15px;
      left: 14px;
      transform: translate(-50%, -50%);
    }

    &::after {
      width: 2px;
      height: 8px;
      left: 7px;
      bottom: 10px;
    }
  }

  .icon-exclamationCircle {
    width: 30px;
    height: 30px;
    margin: 2px;
    border-radius: 50%;
    border: 2px solid;
    overflow: visible;

    &::after {
      width: 4px;
      height: 3px;
      box-shadow: inset 0 0 0 32px, 0 3px, 0 5px, 0 10px;
      top: 6px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .icon-exclamation {
    overflow: visible;
    width: 30px;
    border-bottom: 2px solid;
    border-radius: 0 0 4px 4px;
    margin: 26px 2px 6px;

    &::before {
      position: absolute;
      width: 26px;
      height: 26px;
      left: 1px;
      top: -14px;
      border-width: 2px 0 0 2px;
      border-style: solid;
      border-radius: 4px 0;
      transform: rotate(45deg) skew(12deg, 12deg);
    }

    &::after {
      width: 4px;
      height: 3px;
      top: -14px;
      box-shadow: inset 0 0 0 32px, 0 3px, 0 8px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .icon-textAlignRight {
    width: 28px;
    height: 22px;
    margin: 6px 3px;

    &::before,
    &::after {
      position: absolute;
      height: 2px;
      box-shadow: inset 0 0 0 32px, 0 8px 0 0, 0 16px 0 0;
      right: 0;
    }

    &::before {
      width: 28px;
      top: 0;
    }

    &::after {
      width: 18px;
      top: 4px;
    }
  }

  .icon-textAlignCenter {
    width: 28px;
    height: 22px;
    margin: 6px 3px;

    &::before,
    &::after {
      position: absolute;
      height: 2px;
      box-shadow: inset 0 0 0 32px, 0 8px 0 0, 0 16px 0 0;
      right: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      width: 28px;
      top: 0;
    }

    &::after {
      width: 18px;
      top: 4px;
    }
  }

  .icon-textAlignLeft {
    width: 28px;
    height: 22px;
    margin: 6px 3px;

    &::before,
    &::after {
      position: absolute;
      height: 2px;
      box-shadow: inset 0 0 0 32px, 0 8px 0 0, 0 16px 0 0;
      right: 0;
      left: 0;
    }

    &::before {
      width: 28px;
      top: 0;
    }

    &::after {
      width: 18px;
      top: 4px;
    }
  }

  .icon-indent {
    width: 20px;
    height: 16px;
    border-width: 4px 0 4px 8px;
    border-style: solid;
    border-color: transparent;
    box-shadow: 0 -2px, 0 2px, inset 0 2px, inset 0 -2px;
    margin: 9px 7px;

    &::before {
      left: -8px;
      border: 5px solid;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-right-width: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .icon-outdent {
    width: 20px;
    height: 16px;
    border-width: 4px 0 4px 8px;
    border-style: solid;
    border-color: transparent;
    box-shadow: 0 -2px, 0 2px, inset 0 2px, inset 0 -2px;
    margin: 9px 7px;

    &::before {
      left: -8px;
      border: 5px solid;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-width: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .icon-comment {
    width: 30px;
    height: 20px;
    box-shadow: inset 0 0 0 32px;
    border-radius: 4px;
    margin: 5px 2px 9px;

    &::before {
      position: absolute;
      width: 8px;
      height: 8px;
      box-shadow: inset 0 0 0 32px;
      transform: rotate(-45deg);
      bottom: -4px;
      left: 6px;
    }
  }

  .icon-commentEmpty {
    width: 30px;
    height: 22px;
    margin: 5px 2px 7px;
    border: 2px solid;
    border-radius: 4px 4px 7px 7px;
    border-bottom-color: transparent;

    &::before {
      position: absolute;
      width: 6px;
      height: 6px;
      border-width: 0 0 2px 2px;
      border-style: solid;
      transform: rotate(-45deg);
      bottom: -4px;
      left: 6px;
    }

    &::after {
      position: absolute;
      width: 8px;
      height: 2px;
      border-width: 0 12px 0 6px;
      border-style: solid;
      bottom: 0;
      left: 0;
    }
  }

  .icon-areaChart {
    width: 30px;
    height: 22px;
    box-shadow: -2px 2px;
    overflow: hidden;
    margin: 4px 0 8px 4px;
    border: 2px solid;
    border-top-width: 0;
    border-right-width: 0;
    border-color: transparent;

    &::before {
      position: absolute;
      left: 0;
      bottom: 7px;
      border: 6px solid transparent;
      border-bottom-color: currentColor;
      box-shadow: 0 7px;
    }

    &::after {
      position: absolute;
      left: 11px;
      bottom: 4px;
      border-width: 0 6px 13px;
      border-style: solid;
      border-color: transparent;
      border-bottom-color: currentColor;
      box-shadow: 0 4px;
    }
  }

  .icon-pieChart {
    width: 0;
    height: 0;
    border: 15px solid;
    border-right-color: transparent;
    border-radius: 50%;
    transform: rotate(-45deg);
    margin: 2px;

    &::before {
      position: absolute;
      width: 0;
      height: 0;
      left: -11px;
      top: -14px;
      border: 14px solid;
      border-left-color: transparent;
      border-bottom-color: transparent;
      border-top-color: transparent;
      border-radius: 50%;
    }
  }

  .icon-barChart {
    width: 30px;
    height: 22px;
    border: 2px solid;
    border-top-width: 0;
    border-right-width: 0;
    border-color: transparent;
    overflow: hidden;
    box-shadow: -2px 2px;
    margin: 4px 0 8px 4px;

    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 4px;
      height: 15px;
      box-shadow: inset 0 -8px 0 0, 6px 0, 12px 7px, 18px 5px;
    }
  }

  .icon-bookmark {
    width: 0;
    height: 0;
    border: 9px solid;
    border-bottom-color: transparent;
    box-shadow: 0 -4px;
    border-radius: 3px 3px 0 0;
    margin: 10px 8px 6px;
  }

  .icon-bookmarkEmpty {
    width: 18px;
    height: 22px;
    border: 2px solid;
    border-bottom: none;
    border-radius: 3px 3px 2px 2px;
    overflow: hidden;
    margin: 6px 8px;

    &::before {
      position: absolute;
      width: 12px;
      height: 12px;
      bottom: 0;
      left: 0;
      border: 2px solid;
      border-right: none;
      border-bottom: none;
      transform: rotate(45deg) translate(35%, 35%);
    }
  }

  .icon-filter {
    width: 0;
    height: 0;
    border: 10px solid;
    border-bottom: none;
    border-left-color: transparent;
    border-right-color: transparent;
    padding: 3px;
    box-shadow: inset 0 7px;
    margin: 9px 4px;
  }

  .icon-volume {
    width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;
    margin: 4px 10px 4px 11px;
  }

  .icon-volumeLow {
    width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;
    margin: 4px 14px 4px 7px;

    &::before {
      width: 15px;
      height: 15px;
      position: absolute;
      border: 2px solid;
      border-radius: 50%;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      left: 2px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .icon-volumeMedium {
    width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;
    margin: 4px 16px 4px 5px;

    &::before {
      width: 15px;
      height: 15px;
      position: absolute;
      border: 2px solid;
      border-radius: 50%;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-style: double;
      border-width: 6px;
      left: -2px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .icon-volumeHigh {
    width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;
    margin: 4px 18px 4px 3px;

    &::before,
    &::after {
      position: absolute;
      border: 2px solid;
      border-radius: 50%;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      width: 15px;
      height: 15px;
      border-style: double;
      border-width: 6px;
      left: -2px;
    }

    &::after {
      width: 32px;
      height: 32px;
      left: -7px;
    }
  }

  .icon-volumeDecrease {
    width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;
    margin: 4px 16px 4px 5px;

    &::before {
      width: 10px;
      height: 2px;
      left: 17px;
      box-shadow: inset 0 0 0 32px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .icon-volumeIncrease {
    width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;
    margin: 4px 16px 4px 5px;

    &::before,
    &::after {
      box-shadow: inset 0 0 0 32px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      width: 10px;
      height: 2px;
      left: 17px;
    }

    &::after {
      height: 10px;
      width: 2px;
      left: 21px;
    }
  }

  .icon-volumeMute {
    width: 0;
    height: 0;
    border: 7px solid;
    border-left: none;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 6px 3px;
    box-shadow: inset 4px 0;
    margin: 4px 16px 4px 5px;

    &::before,
    &::after {
      box-shadow: inset 0 0 0 32px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }

    &::before {
      width: 10px;
      height: 2px;
      left: 17px;
    }

    &::after {
      height: 10px;
      width: 2px;
      left: 21px;
    }
  }

  .icon-tag {
    width: 18px;
    height: 24px;
    border: 2px solid;
    border-radius: 6px 6px 4px 4px;
    border-top: none;
    transform: rotate(45deg);
    margin: 5px 8px;

    &::before {
      position: absolute;
      top: -4px;
      left: 1px;
      width: 10px;
      height: 10px;
      border-width: 2px 0 0 2px;
      border-style: solid;
      transform: rotate(45deg);
      border-radius: 5px 0 0 0;
    }

    &::after {
      top: 1px;
      width: 3px;
      height: 3px;
      border: 2px solid;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .icon-calendar {
    width: 32px;
    height: 28px;
    border-width: 4px 2px 2px;
    border-style: solid;
    border-radius: 4px;
    margin: 5px 1px 1px;

    &::before {
      position: absolute;
      width: 4px;
      height: 4px;
      top: 3px;
      left: 3px;
      box-shadow: inset 0 0 0 32px, 6px 0, 12px 0, 18px 0, 0 6px, 6px 6px, 12px 6px, 18px 6px, 0 12px, 6px 12px, 12px 12px, 18px 12px;
    }

    &::after {
      position: absolute;
      width: 4px;
      height: 8px;
      box-shadow: inset 0 0 0 32px, 16px 0;
      border-radius: 4px;
      top: -8px;
      left: 4px;
    }
  }

  .icon-camera {
    width: 32px;
    height: 24px;
    border-radius: 4px;
    margin: 5px 1px;
    border: 2px solid;

    &::before {
      width: 10px;
      height: 10px;
      border: 1px solid transparent;
      box-shadow: inset 0 0 0 1px, 0 0 0 2px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      position: absolute;
      width: 4px;
      height: 2px;
      right: 2px;
      top: 2px;
      box-shadow: inset 0 0 0 32px;
    }
  }

  .icon-piano {
    width: 28px;
    height: 22px;
    margin: 6px 3px;
    border: 2px solid;

    &::before {
      position: absolute;
      left: 4px;
      top: 0;
      width: 1px;
      height: 100%;
      box-shadow: inset 0 0 0 32px, 5px 0, 10px 0, 15px 0;
    }

    &::after {
      position: absolute;
      width: 3px;
      height: 12px;
      left: 3px;
      top: 0;
      box-shadow: inset 0 0 0 32px, 5px 0, 10px 0, 15px 0;
    }
  }

  .icon-ruler {
    width: 27px;
    height: 12px;
    margin: 11px 4px 11px 3px;
    border: 2px solid;

    &::before {
      position: absolute;
      width: 1px;
      height: 4px;
      box-shadow: inset 0 0 0 32px, 6px 0, 12px 0;
      left: 5px;
      top: 0;
    }

    &::after {
      position: absolute;
      width: 1px;
      height: 2px;
      box-shadow: inset 0 0 0 32px, 2px 0, 6px 0, 8px 0, 12px 0, 14px 0, 18px 0, 20px 0;
      left: 1px;
      top: 0;
    }
  }

  .icon-cup {
    width: 22px;
    height: 16px;
    box-shadow: inset 0 0 0 32px;
    border-radius: 0 0 5px 5px;
    margin: 6px 6px 12px;

    &::before {
      position: absolute;
      right: -3px;
      top: 4px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      box-shadow: 0 0 0 2px;
    }

    &::after {
      bottom: -5px;
      width: 26px;
      height: 3px;
      border-radius: 0 0 3px 3px;
      box-shadow: inset 0 0 0 32px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .icon-creditCard {
    width: 32px;
    height: 24px;
    border-radius: 3px;
    margin: 4px 0;
    border: 2px solid;

    &::before {
      position: absolute;
      top: 4px;
      width: 100%;
      height: 6px;
      box-shadow: inset 0 0 0 32px;
    }

    &::after {
      left: 3px;
      bottom: 3px;
      position: absolute;
      width: 4px;
      height: 2px;
      box-shadow: inset 0 0 0 32px, 6px 0;
    }
  }

  .icon-facebook {
    width: 9px;
    height: 26px;
    box-shadow: inset 2px 4px 0 0;
    border-left: 3px solid;
    border-radius: 5px 0 0 0;
    margin: 4px 11px 4px 14px;

    &::before {
      position: absolute;
      top: 9px;
      left: -6px;
      width: 11px;
      height: 0;
      border-top: 4px solid;
      border-right: 1px solid transparent;
    }
  }

  .icon-twitter {
    width: 14px;
    height: 23px;
    border-radius: 0 0 0 8px;
    box-shadow: -6px 2px 0 0;
    margin: 4px 7px 7px 13px;

    &::before {
      position: absolute;
      bottom: -2px;
      left: -6px;
      width: 17px;
      height: 6px;
      border-radius: 0 0 0 8px;
      box-shadow: inset 4px -6px, 0 -11px;
    }

    &::after {
      position: absolute;
      width: 6px;
      height: 6px;
      box-shadow: inset 0 0 0 32px, 13px 8px, 13px 19px;
      border-radius: 50%;
      left: -6px;
    }
  }

  .icon-instagram {
    width: 26px;
    height: 26px;
    box-shadow: inset 0 0 0 2px;
    border-radius: 4px;
    margin: 5px;

    &::before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      box-shadow: 0 0 0 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 1px;
      right: 3px;
      top: 3px;
      box-shadow: 0 0 0 2px, 1px 1px 0 2px, -5px -1px 0 1px, -10px -1px 0 1px, -16px 1px 0 2px;
    }
  }

  .icon-linkedIn {
    width: 5px;
    height: 16px;
    box-shadow: inset 0 0 0 32px, 8px 0;
    margin: 12px 24px 6px 5px;

    &::before {
      position: absolute;
      width: 5px;
      height: 5px;
      box-shadow: inset 0 0 0 32px;
      top: -7px;
      left: 0;
      border-radius: 50%;
    }

    &::after {
      position: absolute;
      width: 12px;
      height: 16px;
      border-right: 1px solid;
      left: 11px;
      bottom: 0;
      border-radius: 8px 5px 0 0 / 11px 5px 0 0;
      box-shadow: inset -4px 4px;
    }
  }

  .icon-flickr {
    width: 24px;
    height: 24px;
    overflow: hidden;
    border-radius: 4px;
    margin: 5px;

    &::before,
    &::after {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: 4px;
      box-shadow: 0 0 0 1px, 0 -10px 0 6px, 0 10px 0 6px, -4px 0 0 3px;
    }

    &::after {
      right: 4px;
      box-shadow: 0 0 0 1px, 0 -10px 0 6px, 0 10px 0 6px, 4px 0 0 3px;
    }
  }

  .icon-delicious {
    width: 24px;
    height: 24px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: inset 0 0 0 2px;
    margin: 5px;

    &::before {
      position: absolute;
      width: 12px;
      height: 12px;
      box-shadow: inset 0 0 0 32px, 12px -12px 0 0;
      left: 0;
      bottom: 0;
    }
  }

  .icon-codepen {
    width: 2px;
    height: 10px;
    box-shadow: inset 0 0 0 32px, 0 15px, -11px 7px, 11px 7px;
    margin: 4px 16px 20px;

    &::before {
      position: absolute;
      right: 2px;
      top: 3px;
      width: 11px;
      height: 4px;
      transform: skew(0, -35deg) scaleY(0.6);
      box-shadow: inset 0 0 0 32px, 0 13px, 11px 26px, 12px 39px;
    }

    &::after {
      position: absolute;
      left: 2px;
      top: 3px;
      width: 11px;
      height: 4px;
      transform: skew(0, 35deg) scaleY(0.6);
      box-shadow: inset 0 0 0 32px, 0 13px, -11px 26px, -12px 39px;
    }
  }

  .icon-blogger {
    width: 24px;
    height: 14px;
    border-radius: 0 0 7px 7px;
    margin: 14px 5px 6px;

    &,
    &::before {
      border-width: 6px;
      border-style: solid;
    }

    &::before {
      position: absolute;
      width: 8px;
      height: 2px;
      left: -6px;
      top: -15px;
      border-radius: 6px 6px 0 0;
    }
  }

  .spin {
    animation: loading-spinner 2s infinite linear;

    @keyframes loading-spinner {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
