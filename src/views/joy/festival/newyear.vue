<template>
  <div class="container">
    <audio
      id="audioDom"
      src="https://download.kstore.space/download/2719/newyear/files/audio.mp3"
      preload="auto"
      loop="loop"></audio>
    <div
      id="yhBtn"
      style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:999;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff ; font-size:20px    ">
      <p>💥点击我💥</p>
      <img
        style="width:64px;margin-bottom:36px "
        src="files/boom.png">
    </div>
    <div style="height: 0; width: 0; position: absolute; visibility: hidden;">
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol
          id="icon-play"
          viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"></path>
        </symbol>
        <symbol
          id="icon-pause"
          viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
        </symbol>
        <symbol
          id="icon-close"
          viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
          </path>
        </symbol>
        <symbol
          id="icon-settings"
          viewBox="0 0 24 24">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
          </path>
        </symbol>
        <symbol
          id="icon-sound-on"
          viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z">
          </path>
        </symbol>
        <symbol
          id="icon-sound-off"
          viewBox="0 0 24 24">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z">
          </path>
        </symbol>
      </svg>
    </div>

    <div class="container">
      <div class="loading-init">
        <div class="loading-init__header"></div>
        <div class="loading-init__status"></div>
      </div>
      <div class="stage-container remove">
        <div class="page_two hide">
          <div
            id="text"
            style="display:none;">
            <p>倒计时<br><br>还有<span id="time"></span><br><span id="text1"></span><br>接龙哈！发给你最好的3个朋友<br>超过5个就永远幸福<br>不许在你这里断了！<br>明年到来之前必须发完，不许偷懒<br>想起谁，发给谁，包括我[awa]<br><br>彩蛋:点击屏幕任意地方即可放烟花<br><br><br><span id="copyright"></span></p>
          </div>
          <div
            id="contents"
            class="type_words"
            style="font-size:1.15rem;line-height:1.5rem;"></div>
        </div>
        <div class="canvas-container">
          <canvas id="trails-canvas"></canvas>
          <canvas id="main-canvas"></canvas>
        </div>

        <div class="menu hide">
          <div class="menu__inner-wrap">
            <div class="menu__header">设置</div>

            <form>
              <div class="form-option form-option--select">
                <label class="shell-type-label">烟花类型</label>
                <select class="shell-type"></select>
              </div>
              <div class="form-option form-option--select">
                <label class="shell-size-label">烟花大小</label>
                <select class="shell-size"></select>
              </div>
              <div class="form-option form-option--select">
                <label class="quality-ui-label">画质</label>
                <select class="quality-ui"></select>
              </div>
              <div class="form-option form-option--select">
                <label class="sky-lighting-label">天空照明</label>
                <select class="sky-lighting"></select>
              </div>
              <div class="form-option form-option--select">
                <label class="scaleFactor-label">规模</label>
                <select class="scaleFactor"></select>
              </div>
              <div class="form-option form-option--checkbox">
                <label class="auto-launch-label">自动发射</label>
                <input
                  class="auto-launch"
                  type="checkbox" />
              </div>
              <div class="form-option form-option--checkbox form-option--finale-mode">
                <label class="finale-mode-label">结局模式</label>
                <input
                  class="finale-mode"
                  type="checkbox" />
              </div>
              <div class="form-option form-option--checkbox">
                <label class="hide-controls-label">隐藏控制器</label>
                <input
                  class="hide-controls"
                  type="checkbox" />
              </div>
              <div class="form-option form-option--checkbox form-option--fullscreen">
                <label class="fullscreen-label">全屏</label>
                <input
                  class="fullscreen"
                  type="checkbox" />
              </div>
              <div class="form-option form-option--checkbox">
                <label class="long-exposure-label">打开快门</label>
                <input
                  class="long-exposure"
                  type="checkbox" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="help-modal">
        <div class="help-modal__overlay"></div>
        <div class="help-modal__dialog">
          <div class="help-modal__header"></div>
          <div class="help-modal__body"></div>
          <button
            type="button"
            class="help-modal__close-btn">
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// https://github.com/corestudi0/corestudi0.github.io/tree/main/newyear
</script>

<style lang="less" scoped>
.ant-layout-content {
  text-align: center;
}

</style>
