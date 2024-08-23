<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <main class="grid">
        <header class="header">
          <div class="heading">摸头生成器<input id="color-theme" type="checkbox" title="toggle theme" /></div>
          <div>如果你的浏览器崩溃了，这不是我的错</div>
        </header>

        <section class="preview content">
          <div class="content-heading">预览</div>
          <div class="preview-canvas">
            <canvas id="canvas" height="112" width="112" class="canvas" tabindex="1"></canvas>
            <div class="preview-playback">
              <button id="prev" class="btn btn-playback-prev control-grouped-left">
                <i class="jam jam-set-backward"></i>
              </button>
              <button id="play" class="btn btn-playback-playpause control-grouped-center">
                <i class="jam jam-play btn-playback-play"></i>
                <i class="jam jam-pause btn-playback-pause"></i>
              </button>
              <button id="next" class="btn btn-playback-next control-grouped-right">
                <i class="jam jam-set-forward"></i>
              </button>
            </div>
          </div>

          <div class="preview-controls">
            <div class="row">
              <div class="control-group">
                <label for="toggleAdjust" class="control-group-l">调整模式</label>
                <label for="toggleAdjust" class="toggle-switch">
                  <input id="toggleAdjust" type="checkbox" class="toggle-switch-input" />
                  <span class="toggle-switch-control"></span>
                </label>
              </div>
              <div class="hint">启用在预览中使用鼠标/触摸/键盘移动图像。也适用于移动设备 :-)</div>
            </div>
            <div class="row control-group">
              <label for="toggleFlip" class="control-group-l">反转</label>
              <label for="toggleFlip" class="toggle-switch sm">
                <input id="toggleFlip" type="checkbox" class="toggle-switch-input" />
                <span class="toggle-switch-control"></span>
              </label>
            </div>
            <div class="row control-group">
              <label for="scale" class="control-label control-group-s">大小</label>
              <input
                id="scale"
                class="control-range control-group-l"
                type="range"
                step="1"
                min="15"
                max="200"
                value="85"
              />
            </div>
            <div class="row control-group">
              <label for="squish" class="control-label control-group-s">挤压</label>
              <input
                id="squish"
                class="control-range control-group-l"
                type="range"
                step="1"
                min="100"
                max="300"
                value="125"
              />
            </div>
            <div class="row control-group">
              <label for="fps" class="control-label control-group-s">速度</label>
              <input id="fps" class="control-range" type="range" step="2" min="2" max="60" value="16" />
              <input id="fpsVal" type="number" class="control control-sm" step="1" min="2" max="60" value="16" />
            </div>
            <div class="row export-row">
              <div class="control-group">
                <button id="reset" class="btn btn-reset control-group-s">重置</button>
                <div class="spacer" style="width: 0.382em"></div>
                <button id="export" class="btn btn-export control-group-l">导出</button>
              </div>
            </div>
          </div>
        </section>

        <section class="upload content">
          <div class="content-heading">上传</div>
          <div class="upload-preview">
            <label id="dropArea" class="drop-area preview-image-container" for="uploadFile">
              <div class="drop-area-input">
                <input id="uploadFile" class="drop-area-file-input" type="file" accept="image/*" />
                <img id="uploadPreview" class="drop-area-preview preview-image" src="" />
                <div class="drop-area-upload" for="uploadFile">
                  <label for="uploadFile" class="drop-area-upload-btn btn">选择文件</label>
                  <label id="uploadFileName" class="drop-area-upload-filename">或者拖拽到这里</label>
                </div>
              </div>
            </label>
            <div class="row control-group">
              <input
                id="uploadUrl"
                class="control control-group-l control-has-icon control-grouped-left"
                type="url"
                required
                placeholder="输入要上传的网站"
              />
              <button id="uploadUrlBtn" type="submit" class="btn control-icon control-grouped-right">
                <i class="jam jam-upload"></i>
              </button>
            </div>
            <p id="uploadError" class="error-message"></p>
            <p class="help">注意：url上传可能并不总是有效，因为有些网站不喜欢直接链接图片</p>
          </div>
        </section>

        <section class="output content">
          <div class="content-heading">输出</div>
          <figure class="preview-image-container">
            <img id="result" width="112" height="112" class="preview-image" />
            <div id="info" class="help output-info">...</div>
          </figure>
          <p class="help">ps: 如果要共享，请保存导出的gif，使用链接将不起作用，因为它仅存在于您的浏览器中</p>
          <p class="help">pps: 如果导出中有奇怪的绿点，请尝试其他浏览器</p>
        </section>

        <footer class="footer help">
          <div>
            模板:
            <a href="./img/template.gif" target="_blank">gif</a>,
            <a href="./img/sprite.png" target="_blank">精灵图</a>
            <span class="separator">|</span>
            gif使用
            <a href="https://github.com/jnordberg/gif.js" target="_blank">gif.js</a>
            生成
          </div>
        </footer>
      </main>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>
<style scoped>
@import 'https://unpkg.com/sanitize.css';
@import 'https://unpkg.com/sanitize.css/forms.css';
@import 'https://unpkg.com/sanitize.css/typography.css';
@import 'https://unpkg.com/jam-icons/css/jam.min.css';
@import 'https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&family=Work+Sans:wght@400;600&display=swap';
</style>

<style scoped lang="scss">
body {
  font-size: 11pt;
  font-family: 'Work Sans', sans-serif;
  background-color: #fff5d3;
  color: #572e23;
}

p {
  margin: 0.618em 0;
}

a,
:any-link {
  color: #b24a1f;
  text-decoration: none;
}

a:hover,
:any-link:hover {
  color: #d55825;
  text-decoration: underline;
}

img {
  max-width: 90%;
}

img:not([src]) {
  display: none;
}

.error-message {
  font-weight: bold;
  color: #ff6e3f;
}

input,
button,
.btn,
.control {
  border-radius: 0.328em;
  font-size: 0.95em;
  padding: 0.618em 1.232em;
  box-shadow: 0px 1px 2px rgba(202, 143, 46, 0.4);
}

input:disabled,
button:disabled,
.btn:disabled,
.control:disabled {
  opacity: 0.8;
  pointer-events: none;
  touch-action: none;
  cursor: not-allowed;
}

.canvas {
  border: 2px solid rgba(246, 184, 22, 0.5);
  width: 100%;
  height: auto;
  background: #fffbf3;
  image-rendering: pixelated;
}

.canvas.adjust-mode {
  touch-action: none;
  cursor: grab;
  box-shadow: 0 0 5px rgba(246, 184, 22, 0.5);
}

.heading {
  margin: 0.238rem 0;
  font-weight: 700;
  font-size: 2.382em;
  font-family: 'Balsamiq Sans', sans-serif;
  color: #7c4231;
}

.content {
  padding: 0.618em 2.472em 1.236em;
  background-color: #fff;
  text-align: center;
}

.content-heading {
  font-weight: bold;
  margin: 0.618em 0 1em;
  text-align: center;
  color: #7c4231;
  font-family: 'Balsamiq Sans', sans-serif;
}

.row {
  margin: 0.5em 0 0.9em;
  text-align: left;
}

.hint {
  margin: 0.618em 0;
  font-size: 0.75em;
  opacity: 0.85;
  color: rgba(94, 50, 38, 0.9);
}

.help {
  font-size: 0.85em;
}

.control {
  background: #fff;
  border: 1px solid rgba(246, 184, 22, 0.5);
  outline: 0;
  padding-left: 1em;
}

.control:hover {
  border-color: rgba(246, 184, 22, 0.8);
}

.control:focus {
  border-color: #f6b816;
}

.control-sm {
  font-size: smaller;
  padding: 0.2em 0.2em 0.2em 0.55em;
  box-shadow: 0px 1px 1px rgba(202, 143, 46, 0.4);
}

.btn {
  cursor: pointer;
  background: #fedc7d;
  border: 1px solid #f6b816;
  color: #943d1a;
  outline: 0;
  transition: background 250ms;
}

.btn:hover {
  background: #fed86e;
}

.btn:active {
  background: #fdcf4a;
}

.control-group {
  display: flex;
  width: 100%;
  align-items: center;
}

.control-group-s {
  min-width: 32.8%;
}

.control-group-l {
  flex-grow: 1;
}

.control-grouped-left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.control-grouped-right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.control-grouped-center {
  border-radius: 0;
}

[type='range'],
[type='checkbox'] {
  box-shadow: none;
}

.control-range {
  appearance: none;
  width: 100%;
  height: 0.618em;
  border-radius: 0.618em;
  background: rgba(229, 194, 112, 0.25);
  box-shadow: inset 0 0 3px rgba(202, 143, 46, 0.4);
  outline: none;
  opacity: 0.8;
  transition: opacity 200ms;
}

.control-range:hover {
  opacity: 1;
}

.control-range::-webkit-slider-thumb {
  appearance: none;
  background: #feecba;
  border-radius: 50%;
  border: 1px solid #f6b816;
  box-shadow: 0px 1px 2px rgba(202, 143, 46, 0.4);
  cursor: pointer;
  display: block;
  height: 1.236em;
  transition: scale 200ms;
  width: 1.236em;
}

.control-range::-webkit-slider-thumb:hover {
  transform: scale(1.1, 1.1);
}

.control-range::-moz-range-thumb {
  background: #feecba;
  border-radius: 50%;
  border: 1px solid #f6b816;
  box-shadow: 0px 1px 2px rgba(202, 143, 46, 0.4);
  cursor: pointer;
  display: block;
  height: 1.236em;
  transition: scale 200ms;
  width: 1.236em;
}

.control-range::-moz-range-thumb:hover {
  transform: scale(1.1, 1.1);
}

.toggle-switch {
  --w: 3.25em;
  --h: calc(var(--w) / 2);
}

.toggle-switch.sm {
  --w: 2.5em;
}

.toggle-switch-control {
  width: var(--w);
  height: var(--h);
  position: relative;
  border-radius: var(--h);
  display: block;
  background: rgba(233, 203, 134, 0.25);
  box-shadow: inset 0 0 3px rgba(202, 143, 46, 0.4);
  transition: background 200ms ease-in;
  cursor: pointer;
}

.toggle-switch-control::after {
  content: '';
  width: var(--h);
  height: var(--h);
  display: block;
  background: #feecba;
  box-shadow: 0px 1px 2px rgba(202, 143, 46, 0.4);
  border: 1px solid #f6b816;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition:
    left 200ms ease-out,
    transform 500ms;
}

.toggle-switch-control:hover::after {
  transform: scale(1.1, 1.1);
}

.toggle-switch-input {
  appearance: none;
  visibility: hidden;
  width: 0px;
  height: 0px;
  padding: 0;
  margin: 0;
  position: absolute;
}

.toggle-switch-input:checked + .toggle-switch-control {
  background: #fedc7d;
}

.toggle-switch-input:checked + .toggle-switch-control::after {
  left: var(--h);
}

.drop-area {
  border-radius: 0.328em;
  cursor: pointer;
  display: block;
  outline-offset: -4px;
  outline: 1px dashed rgba(246, 184, 22, 0.5);
  transition: outline-offset 250ms;
}

.drop-area-input {
  padding: 0.5em;
}

.drop-area-error,
.drop-area-file-input {
  display: none;
}

.drop-area-upload {
  margin-top: 1.2em;
  font-size: 0.8em;
  width: 100%;
  border-radius: 0.618em;
  border: 1px solid rgba(246, 184, 22, 0.5);
  padding: 0.328em;
  display: flex;
  align-items: center;
}

.drop-area-upload-btn {
  font-size: 1em;
  margin-right: 0.618em;
  flex-shrink: 0;
}

.drop-area-upload-filename {
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
}

.drop-area.highlight {
  outline-color: rgba(246, 184, 22, 0.8);
  outline-offset: -10px;
}

.drop-area:hover .drop-area-message,
.drop-area.highlight .drop-area-message {
  border-color: rgba(246, 184, 22, 0.8);
}

.drop-area:hover .drop-area-message strong {
  color: #b24a1f;
}

.preview-image {
  object-fit: contain;
  width: 128px;
  height: 128px;
}

.preview-image-container {
  margin: 0;
  padding: 0.618em;
  text-align: center;
  border-radius: 0.328em;
  background: #fffbf3;
}

.e {
  color: inherit !important;
  text-decoration: none !important;
  cursor: default;
}

.fingies {
  letter-spacing: -3px;
  display: block;
}

.fingies:hover .fl {
  animation: fingers 1200ms ease-in-out infinite;
}

@keyframes fingers {
  0% {
    margin-right: 0em;
  }

  50% {
    margin-right: 0.75em;
  }

  100% {
    margin-right: 0em;
  }
}

.separator {
  color: rgba(94, 50, 38, 0.9);
  opacity: 0.8;
}

#color-theme {
  appearance: none;
  filter: none;
  visibility: hidden;
  padding: 0;
}

#color-theme::before {
  content: '🌝';
  cursor: pointer;
  display: inline-block;
  font-size: 1.25rem;
  text-align: center;
  vertical-align: top;
  visibility: initial;
  width: 1.25rem;
}

.separator {
  color: rgba(94, 50, 38, 0.9);
  opacity: 0.5;
  margin: 0 0.312em;
}

@media only screen and (max-width: 40em) {
  .content-heading {
    padding: 0 0 0.618em;
  }

  .heading {
    margin: 0.5em 0;
  }

  .row {
    margin: 1.5em 0;
  }

  .control-group-s {
    min-width: 25%;
  }
}

.grid {
  margin: 0 auto;
  max-width: 48em;
  display: grid;
  grid-template-columns: 38.2% 61.8%;
  grid-template-areas:
    'header  header'
    'preview upload'
    'preview output'
    'footer  footer';
}

.header {
  grid-area: header;
  text-align: center;
  padding: 0.618em 0.618em 1.25em;
}

.preview {
  grid-area: preview;
  border-top-left-radius: 0.618em;
  border-bottom-left-radius: 0.618em;
  padding-right: 0;
}

.upload {
  grid-area: upload;
  border-top-right-radius: 0.618em;
}

.output {
  grid-area: output;
  border-bottom-right-radius: 0.618em;
}

.footer {
  grid-area: footer;
  text-align: center;
  padding: 1.618em;
}

.preview-canvas {
  margin: 0 auto 2.312em;
  max-width: 200px;
}

.preview-playback {
  display: flex;
}

.preview-playback .btn {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  flex-grow: 1;
}

.btn-playback-playpause.paused .btn-playback-pause,
.btn-playback-playpause:not(.paused) .btn-playback-play {
  display: none;
}

.export-row {
  margin-top: 1.75em;
}

.output-info {
  color: rgba(94, 50, 38, 0.9);
}

img[src] + .output-info {
  margin-top: 1em;
}

fieldset {
  padding: 0;
  margin: 0;
  border: 0;
}

#fpsVal {
  width: 4em;
  margin-left: 0.618em;
}

@media only screen and (max-width: 40em) {
  .grid {
    grid-template-columns: 100%;
    grid-template-areas:
      'header'
      'upload'
      'preview'
      'output'
      'footer';
  }

  .header,
  .footer,
  .content {
    padding: 1.618em 8%;
    border-radius: 0;
  }

  .preview {
    padding-left: 16%;
    padding-right: 16%;
  }

  .content,
  .footer {
    border-top: 1px solid rgba(246, 184, 22, 0.5);
  }

  .export-row {
    margin-top: 2.5em;
  }

  #fpsVal {
    width: 7em;
    font-size: small;
    padding: 0.5em;
    padding-right: 0.2em;
  }
}
</style>
