<template>
  <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="CSS秒表">
    <form class="stopwatch">
      <input id="start" type="checkbox" /><input id="pause" type="checkbox" /><label
        class="stopwatch__pause"
        for="pause"
        ><span>Pause</span></label
      ><label class="stopwatch__start" for="start"><span>Start</span></label
      ><button class="stopwatch__reset" id="reset" type="reset"><span>Reset</span></button>
      <div class="stopwatch__restart stopwatch__control"><div class="reset-button"></div></div>
      <div class="stopwatch__stop-start stopwatch__control"><div class="start-button"></div></div>
      <div class="stopwatch__shadows"></div>
      <div class="stopwatch__content">
        <div class="stopwatch__face">
          <div class="digit m m--tens">0</div>
          <div class="digit m m--singles">0</div>
          <span>:</span>
          <div class="digit second s s--tens">0</div>
          <div class="digit second s s--singles">0</div>
          <span>.</span>
          <div class="digit digit--small ms ms--tens">0</div>
          <div class="digit digit--small ms ms--singles">0</div>
        </div>
      </div>
    </form>
  </a-card>
</template>

<script setup lang="jsx"></script>

<style scoped lang="scss">
.stopwatch {
  z-index: 10;
  --state: paused;
  --bg: #ead9f2;
  --digit: #e6f2d9;
  --face: #0d1306;
  --content: #666;
  --shadow: rgba(0, 0, 0, 0.25);
  --glare: rgba(255, 255, 255, 0.2);
  --watch-bg: #197fe6;
  --watch-bg--light: #d1e5fa;
  --watch-bg--dark: #0a335c;
  --stroke: #262626;
  --start: #b83014;
  --start-two: #eb6347;
  --restart: #b3b3b3;
  --restart-two: #e6e6e6;
}
#start:checked ~ .stopwatch__content .ms--tens,
#pause:checked ~ .stopwatch__content .ms--tens {
  --name: ms-tens;
}
#start:checked ~ .stopwatch__content .ms--singles,
#pause:checked ~ .stopwatch__content .ms--singles {
  --name: ms-singles;
}
#start:checked ~ .stopwatch__content .s--tens,
#pause:checked ~ .stopwatch__content .s--tens {
  --name: s-tens;
}
#start:checked ~ .stopwatch__content .s--singles,
#pause:checked ~ .stopwatch__content .s--singles {
  --name: s-singles;
}
#start:checked ~ .stopwatch__content .m--tens,
#pause:checked ~ .stopwatch__content .m--tens {
  --name: m-tens;
}
#start:checked ~ .stopwatch__content .m--singles,
#pause:checked ~ .stopwatch__content .m--singles {
  --name: m-singles;
}
#start:checked ~ .stopwatch__content {
  --state: running;
}
#pause:checked ~ .stopwatch__content {
  --state: paused;
}
#start:checked ~ .stopwatch__start {
  z-index: -1;
}
.stopwatch__start:active ~ .stopwatch__stop-start,
.stopwatch__pause:active ~ .stopwatch__stop-start {
  --y: 25;
}
.stopwatch__reset:active ~ .stopwatch__restart {
  --y: 15;
}
@property --ms-tens {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
@property --ms-singles {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
@property --s-tens {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
@property --s-singles {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
@property --m-tens {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
@property --m-singles {
  initial-value: 0;
  inherits: false;
  syntax: '<integer>';
}
form {
  margin: 0;
}
button {
  appearance: none;
  border: 0;
  outline: transparent;
  background: none;
}
label span,
button span,
[type='checkbox'] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
label,
button {
  cursor: pointer;
}
.reset-button {
  width: 100%;
  height: 50%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  border: 0.5vmin solid var(--stroke);
  border-radius: 1vmin;
  background: var(--restart);
  overflow: hidden;
}
.reset-button:after {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background:
    repeating-linear-gradient(90deg, transparent 0 18%, var(--stroke) 18% 22%) 50% 0/100% 30% no-repeat,
    repeating-linear-gradient(90deg, transparent 0 18%, var(--stroke) 18% 22%) 50% 100%/100% 30% no-repeat;
  content: '';
}
.reset-button:before {
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 1vmin;
  background: var(--restart-two);
  position: absolute;
  bottom: 100%;
  left: 0;
  transform: translate(-20%, 45%);
}
.start-button {
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0;
  border: 0.5vmin solid var(--stroke);
  border-radius: 1vmin;
  background: var(--start);
  overflow: hidden;
}
.start-button:after {
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 1vmin;
  background: var(--start-two);
  position: absolute;
  bottom: 100%;
  left: 0;
  transform: translate(-20%, 35%);
}
.stopwatch {
  height: 45vmin;
  width: 45vmin;
  background-color: var(--watch-bg);
  border-radius: 50%;
  border: 0.5vmin solid var(--stroke);
  position: relative;
}
.stopwatch__pause,
.stopwatch__start,
.stopwatch__reset,
.stopwatch__control {
  --size: 10vmin;
  height: var(--size);
  width: var(--size);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 0.05s;
  transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translate(0, -25vmin)
    translateY(calc(var(--y, 0) * 1%));
  z-index: 10;
}
.stopwatch__control {
  z-index: -1;
}
.stopwatch__restart:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 60%;
  height: 75%;
  border: 0.5vmin solid var(--stroke);
  background: linear-gradient(90deg, var(--restart-two) 0 80%, transparent 81%) 50% 50%/100% 100% no-repeat;
  background-color: var(--restart);
  z-index: -1;
}
.stopwatch__start,
.stopwatch__pause,
.stopwatch__stop-start {
  --rotation: 40deg;
}
.stopwatch__shadows {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.stopwatch__shadows:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 106%;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%) translate(0, 2%);
  box-shadow: 0 0 0 5vmin var(--watch-bg--light);
}
.stopwatch__shadows:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%) translate(0, -2%);
  box-shadow: 0 0 0 5vmin var(--watch-bg--dark);
}
.stopwatch__content {
  height: 40vmin;
  border: 0.5vmin solid var(--stroke);
  width: 40vmin;
  background-color: var(--content);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.stopwatch__content:before {
  box-shadow: 0 0 0 5vmin var(--shadow);
  border-radius: 50%;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%) translate(0, 2%);
}
.stopwatch__content:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%) rotate(-50deg);
  background: linear-gradient(
    transparent 0 15%,
    var(--glare) 16% 35%,
    transparent 36% 40%,
    var(--glare) 41% 45%,
    transparent 46%
  );
}
.stopwatch__branding {
  height: 7vmin;
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%, 0);
  opacity: 0.5;
  filter: saturate(0);
}
.stopwatch__face {
  color: var(--digit);
  display: flex;
  font-size: 6vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.75vmin;
  border-radius: 1vmin;
  background: var(--face);
}
.digit {
  position: relative;
  color: transparent;
  counter-reset: var(--counter-name) var(--counter-variable);
  animation: var(--name, none) var(--duration, 1s) infinite steps(var(--steps)) var(--state);
}
.digit:after {
  content: counter(var(--counter-name));
  font-variant: tabular-nums;
  color: var(--digit);
  position: absolute;
  bottom: 0;
  right: 0;
}
.ms {
  font-size: 4vmin;
  transform: translate(0, -6%);
}
.ms--tens {
  --duration: 1s;
  --steps: 10;
  --counter-name: ms-tens;
  --counter-variable: var(--ms-tens);
}
.ms--singles {
  --duration: 0.1s;
  --steps: 10;
  --counter-name: ms-singles;
  --counter-variable: var(--ms-singles);
}
.s--tens {
  --duration: 60s;
  --steps: 6;
  --counter-name: s-tens;
  --counter-variable: var(--s-tens);
}
.s--singles {
  --duration: 10s;
  --steps: 10;
  --counter-name: s-singles;
  --counter-variable: var(--s-singles);
}
.m--tens {
  --duration: 3600s;
  --steps: 6;
  --counter-name: m-tens;
  --counter-variable: var(--m-tens);
}
.m--singles {
  --duration: 600s;
  --steps: 10;
  --counter-name: m-singles;
  --counter-variable: var(--m-singles);
}
@keyframes ms-tens {
  to {
    --ms-tens: 10;
  }
}
@keyframes ms-singles {
  to {
    --ms-singles: 10;
  }
}
@keyframes s-tens {
  to {
    --s-tens: 6;
  }
}
@keyframes s-singles {
  to {
    --s-singles: 10;
  }
}
@keyframes m-tens {
  to {
    --m-tens: 6;
  }
}
@keyframes m-singles {
  to {
    --m-singles: 10;
  }
}
</style>
