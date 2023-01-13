<template>
  <a-card v-calcHeight="{ height: 12, dom: '.ant-card-body' }" title="按钮特效">
    <!-- demo01 -->
    <div class="button demo01">demo01</div>
    <!-- demo02 -->
    <div class="button demo02" data-text="demo02"><span>demo02</span></div>
    <!-- demo03 -->
    <div class="button demo03">demo03</div>
    <!-- demo04 -->
    <div class="button demo04">demo04</div>
    <!-- demo05 -->
    <div class="button demo05" data-text="demo05"><span>demo05</span></div>
    <!-- demo06 -->
    <div class="button demo06" data-text="demo06"><span>demo06</span></div>
    <!-- demo07 -->
    <div class="button demo07">demo07</div>
    <!-- demo08 -->
    <div class="button demo08">demo08</div>
    <!-- demo09 -->
    <div class="button demo09">demo09</div>
    <!-- demo10 -->
    <div class="button demo10"><span>demo10</span></div>
    <!-- demo11 -->
    <div class="button demo11">demo11</div>
    <!-- demo12 -->
    <div class="button demo12" data-text="demo12"><span>demo12</span></div>
    <!-- demo13 -->
    <div class="button demo13">demo13</div>
    <!-- demo14 -->
    <div class="button demo14" data-text="demo14"><span>d</span><span>e</span><span>m</span><span>o</span><span>1</span><span>4</span></div>
    <!-- demo15 -->
    <div class="button demo15"><span>d</span><span>e</span><span>m</span><span>o</span><span>1</span><span>5</span></div>
    <!-- demo16 -->
    <div class="button demo16"><span>demo16</span></div>
    <!-- demo17 -->
    <div class="button demo17"><i class="button__icon">17</i><span>demo17</span></div>
    <!-- demo18 -->
    <div class="button demo18"><i class="button__icon">18</i><span>demo18</span></div>
    <!-- demo19 -->
    <div class="button demo18 demo19"><i class="button__icon">19</i><span>demo19</span></div>
    <!-- demo20 -->
    <div class="button demo20">demo20</div>
    <!-- demo21 -->
    <div class="button demo21"><span>demo21</span></div>
    <!-- demo22 -->
    <div class="button demo21 demo22"><span>demo22</span></div>
    <!-- demo23 -->
    <div class="button demo23"><i class="button__icon">23</i><span>demo23</span></div>
    <!-- demo24 -->
    <div class="button demo24">demo24</div>
    <!-- demo25 -->
    <div class="button demo25"><span>demo25</span></div>
    <!-- demo26 -->
    <div class="button demo26"><span>demo26</span></div>
    <!-- demo27 -->
    <div class="button demo27">demo27</div>
    <!-- demo28 -->
    <div class="button demo28"><span>demo28</span></div>
    <!-- demo29 -->
    <div class="button demo29">demo29</div>
    <!-- demo30 -->
    <div class="button demo29 demo30">demo30</div>
    <!-- demo31 -->
    <div class="button demo31">demo31</div>
    <!-- demo32 -->
    <div class="button demo32">demo32</div>
    <!-- demo33 -->
    <div class="button demo33">demo33</div>
    <!-- demo34 -->
    <div class="button demo34"><span>demo34</span></div>
    <!-- demo35 -->
    <div class="button demo35">demo35<span></span></div>
    <!-- demo36 -->
    <div class="button demo36">demo36</div>
    <!-- demo37 -->
    <div class="button demo36 demo37">demo37</div>
    <!-- demo38 -->
    <div class="button demo38"><span>demo38</span></div>
    <!-- demo39 -->
    <div class="button demo39"><span>demo39</span></div>
    <!-- demo40 -->
    <div class="button demo40">demo40</div>
    <!-- demo41 -->
    <div class="button demo41">demo41</div>
    <!-- demo42 -->
    <div class="button demo42"><span>demo42</span></div>
    <!-- demo43 -->
    <div class="button demo43">demo43</div>
    <!-- demo44 -->
    <div class="button demo44">demo44</div>
    <!-- demo45 -->
    <div class="button demo45">demo45</div>
    <!-- demo46 -->
    <div class="button demo46">demo46</div>
    <!-- demo47 -->
    <div class="button demo47">demo47</div>
    <!-- demo48 -->
    <div class="button demo48"><span>demo48</span></div>
    <!-- demo49 -->
    <div class="button demo49">demo49</div>
    <!-- demo50 -->
    <div class="button demo50">demo50</div>
    <!-- demo51 -->
    <div class="button demo51"><span>demo51</span></div>
    <!-- demo52 -->
    <div class="button demo52">demo52</div>
    <!-- demo53 -->
    <div class="button demo53"><span>demo53</span></div>
    <!-- demo53 -->
    <div class="button demo53 demo54"><span>demo54</span></div>
    <!-- demo55 -->
    <div class="button demo55" data-text="demo55"><span>d</span><span>e</span><span>m</span><span>o</span><span>5</span><span>5</span></div>
    <!-- demo56 -->
    <div class="button demo55 demo56" data-text="demo56"><span>d</span><span>e</span><span>m</span><span>o</span><span>5</span><span>6</span></div>
    <!-- demo57 -->
    <div class="button demo57">demo57</div>
    <!-- demo58 -->
    <div class="button demo58">demo58</div>
    <!-- demo59 -->
    <div class="button demo58 demo59">demo59</div>
    <!-- demo60 -->
    <div class="button demo60">demo60</div>
    <!-- demo61 -->
    <div class="button demo61">demo61</div>
    <!-- demo62 -->
    <div class="button demo62">demo62</div>
    <!-- demo63 -->
    <div class="button demo63"><span data-text="demo63">demo63</span></div>
    <svg class="hidden">
      <defs>
        <clipPath id="clipBox" clipPathUnits="objectBoundingBox">
          <polygon points="0,0 0,1 0.35,1 0.35,0.6 0.65,0.6 0.65,1 1,1 1,0" />
        </clipPath>
      </defs>
    </svg>
  </a-card>
</template>

<script setup></script>

<style lang="less" scoped>
.ant-card :deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}

.hidden {
  display: none;
}

.button {
  display: inline-block;
  margin: 1em;
  padding: 1em 2em;
  border: 1px transparent solid;
  background: none;
  color: inherit;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;

  &::before,
  &::after,
  span,
  span::before,
  span::after {
    pointer-events: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    position: initial;
  }

  // demo01
  &.demo01 {
    border: 1px solid transparent;
    transition: 0.6s;
    color: #0af;

    &::before,
    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 0;
      height: 0;
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

    &:hover {
      border-color: currentColor;

      &::before,
      &::after {
        width: 100%;
        height: 100%;
        border-color: currentColor;
      }

      &::before {
        transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
      }

      &::after {
        transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s, height 0.2s ease-out 0.6s;
      }
    }
  }

  // demo02
  &.demo02 {
    overflow: hidden;
    transition: border-color 0.3s, background-color 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

    &::after {
      padding: 1em 2em;
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      color: #3f51b5;
      transform: translate3d(0, 25%, 0);
    }

    span {
      display: block;
    }

    &::after,
    span {
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:hover {
      border-color: #3f51b5;
      background-color: rgba(63, 81, 181, 0.1);

      &::after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      span {
        opacity: 0;
        transform: translate3d(0, -25%, 0);
      }
    }
  }

  // demo03
  &.demo03 {
    transition: border-color 0.4s, color 0.4s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
      transform: scale3d(0.7, 1, 1);
      transition: transform 0.4s, opacity 0.4s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      border-radius: 2px;
      background: #7986cb;
    }

    &,
    &::before {
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:hover {
      color: #fff;
      border-color: #37474f;

      &::before {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  // demo04
  &.demo04 {
    overflow: hidden;
    transition: border-color 0.3s, color 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 100%;
      background: #37474f;
      z-index: -1;
      transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
      transform-origin: 0% 100%;
      transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
    }

    &:hover {
      color: #fff;
      border-color: #3f51b5;

      &::before {
        opacity: 1;
        background-color: #3f51b5;
        transform: rotate3d(0, 0, 1, 0deg);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
    }
  }

  // demo05
  &.demo05 {
    overflow: hidden;
    color: #7986cb;

    &::before,
    &::after {
      text-align: center;
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 50%;
      left: 0;
      background: #7986cb;
      color: #fff;
      overflow: hidden;
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &::before {
      top: 0;
      padding-top: 1em;
    }

    &::after {
      bottom: 0;
      line-height: 0;
    }

    span {
      display: block;
      transform: scale3d(0.2, 0.2, 1);
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:hover {
      &::before {
        transform: translate3d(0, -102%, 0);
      }

      &::after {
        transform: translate3d(0, 100%, 0);
      }

      span {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  }

  // demo06
  &.demo06 {
    overflow: hidden;

    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 1em 2em;
      background: #7986cb;
      transform: translate3d(-102%, 0, 0);
    }

    span {
      display: block;
    }

    &::before,
    span {
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      &::before {
        transform: translate3d(0, 0, 0);
      }

      span {
        transform: translate3d(0, 3em, 0);
      }
    }
  }

  // demo07
  &.demo07 {
    color: #ffffff;

    &::before,
    &::after {
      content: '';
      border-radius: inherit;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      transition: transform 0.3s, background-color 0.3s;
      transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
    }

    &::before {
      border: 2px solid #7986cb;
      transform: scale3d(0.7, 0.7, 1);
    }

    &::after {
      background: #7986cb;
    }

    &:hover {
      &::before {
        transform: scale3d(1, 1, 1);
      }

      &::after {
        transform: scale3d(0.7, 0.7, 1);
        background-color: #3f51b5;
      }
    }
  }

  // demo08
  &.demo08 {
    transition: color 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

    &::before {
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      opacity: 0.2;
      transform: scale3d(0.7, 1, 1);
      transition: transform 0.3s, opacity 0.3s;
    }

    &::after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale3d(1.1, 1, 1);
      transition: transform 0.3s, background-color 0.3s;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: inherit;
      background: #7986cb;
      z-index: -1;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:hover {
      color: #fff;

      &::before {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }

      &::after {
        background-color: #37474f;
        transform: scale3d(1, 1, 1);
      }
    }
  }

  // demo09
  &.demo09 {
    background: #7986cb;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      bottom: -20px;
      right: -20px;
      background: inherit;
      z-index: -1;
      opacity: 0.4;
      transform: scale3d(0.8, 0.5, 1);
    }

    &:hover {
      transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
      color: #eceff1;
      background-color: #3f51b5;
      animation: anim-demo9-1 0.3s forwards;

      &::before {
        animation: anim-demo9-2 0.3s 0.3s forwards;
      }
    }

    @keyframes anim-demo9-1 {
      60% {
        transform: scale3d(0.8, 0.8, 1);
      }

      85% {
        transform: scale3d(1.1, 1.1, 1);
      }

      100% {
        transform: scale3d(1, 1, 1);
      }
    }

    @keyframes anim-demo9-2 {
      to {
        opacity: 0;
        transform: scale3d(1, 1, 1);
      }
    }
  }

  // demo10
  &.demo10 {
    color: #fff;
    background: #7986cb;
    overflow: hidden;

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 100%;
      margin: -15px 0 0 1px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #3f51b5;
      transform-origin: 100% 50%;
      transform: scale3d(1, 2, 1);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
    }

    span {
      vertical-align: middle;
    }

    &:hover::before {
      transform: scale3d(9, 9, 1);
    }
  }

  // demo11
  &.demo11 {
    background: #fff;
    color: #37474f;
    overflow: hidden;
    transition: color 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: 100%;
      left: 0;
      z-index: -1;
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &::before {
      background: #7986cb;
    }

    &::after {
      background: #3f51b5;
    }

    &:hover {
      color: #fff;

      &::before,
      &::after {
        transform: translate3d(0, 100%, 0);
      }

      &::after {
        transition-delay: 0.175s;
      }
    }
  }

  // demo12
  &.demo12 {
    overflow: hidden;
    color: #fff;
    background: #37474f;
    transition: background-color 0.3s ease-in, color 0.3s ease-in;

    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 1em 2em;
      color: #37474f;
      transform-origin: -25% 50%;
      transform: rotate3d(0, 0, 1, 45deg);
      transition: transform 0.3s ease-in;
    }

    &:hover {
      background-color: #7986cb;
      color: #7986cb;
      transition-timing-function: ease-out;

      &::after {
        transform: rotate3d(0, 0, 1, 0deg);
        transition-timing-function: ease-out;
      }
    }
  }

  // demo13
  &.demo13 {
    background: #37474f;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #3f51b5;
      z-index: -1;
      border-radius: inherit;
      opacity: 0;
      transform: scale3d(0.6, 0.6, 1);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      background-color: #fff;
      color: #3f51b5;

      &::before {
        transform: scale3d(1, 1, 1);
        opacity: 1;
      }
    }
  }

  // demo14
  &.demo14 {
    background: #7986cb;
    color: #fff;
    overflow: hidden;
    transition: background-color 0.3s;

    span {
      display: inline-block;
      opacity: 0;
      color: #fff;
      transform: translate3d(0, -10px, 0);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 1em 2em;
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      background-color: #3f51b5;

      &::before {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }

      span {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      span:nth-child(1) {
        transition-delay: 0.045s;
      }

      span:nth-child(2) {
        transition-delay: 0.09s;
      }

      span:nth-child(3) {
        transition-delay: 0.135s;
      }

      span:nth-child(4) {
        transition-delay: 0.18s;
      }

      span:nth-child(5) {
        transition-delay: 0.225s;
      }

      span:nth-child(6) {
        transition-delay: 0.27s;
      }

      span:nth-child(7) {
        transition-delay: 0.315s;
      }

      span:nth-child(8) {
        transition-delay: 0.36s;
      }

      span:nth-child(9) {
        transition-delay: 0.405s;
      }

      span:nth-child(10) {
        transition-delay: 0.45s;
      }
    }
  }

  // demo15
  &.demo15 {
    padding: 0 2em;
    overflow: hidden;
    background: #7986cb;
    transition: background-color 0.3s;

    span {
      display: inline-block;
      padding: 1em 0;
    }

    &:hover {
      background-color: #3f51b5;

      span:nth-child(odd) {
        animation: anim-demo15-1 0.5s forwards;
      }

      span:nth-child(even) {
        animation: anim-demo15-2 0.5s forwards;
      }

      span:nth-child(odd),
      span:nth-child(even) {
        transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
      }

      span:nth-child(1) {
        animation-delay: 0s;
      }

      span:nth-child(2) {
        animation-delay: 0.05s;
      }

      span:nth-child(3) {
        animation-delay: 0.1s;
      }

      span:nth-child(4) {
        animation-delay: 0.15s;
      }

      span:nth-child(5) {
        animation-delay: 0.2s;
      }

      span:nth-child(6) {
        animation-delay: 0.25s;
      }

      span:nth-child(7) {
        animation-delay: 0.3s;
      }

      span:nth-child(8) {
        animation-delay: 0.35s;
      }

      span:nth-child(9) {
        animation-delay: 0.4s;
      }

      span:nth-child(10) {
        animation-delay: 0.45s;
      }

      span:nth-child(11) {
        animation-delay: 0.5s;
      }
    }

    @keyframes anim-demo15-1 {
      0%,
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      49% {
        opacity: 1;
        transform: translate3d(0, 100%, 0);
      }

      50% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        color: inherit;
      }

      51% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
        color: #fff;
      }

      100% {
        color: #fff;
      }
    }

    @keyframes anim-demo15-2 {
      0%,
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      49% {
        opacity: 1;
        transform: translate3d(0, -100%, 0);
      }

      50% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
        color: inherit;
      }

      51% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        color: #fff;
      }

      100% {
        color: #fff;
      }
    }
  }

  // demo16
  &.demo16 {
    &::before,
    &::after {
      content: '';
      z-index: -1;
      border-radius: inherit;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &::before {
      border: 2px solid #37474f;
      opacity: 0;
      transform: scale3d(1.2, 1.2, 1);
    }

    &::after {
      background: #fff;
    }

    &:hover {
      &::before {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }

      &::after {
        opacity: 0;
        transform: scale3d(0.8, 0.8, 1);
      }
    }
  }

  // demo17
  &.demo17 {
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid;
      border-radius: inherit;
      clip-path: polygon(0% 0%, 0% 100%, 35% 100%, 35% 60%, 65% 60%, 65% 100%, 100% 100%, 100% 0%);
      clip-path: url(#clipBox);
      transform: translate3d(0, 100%, 0) translate3d(0, -2px, 0);
      transform-origin: 50% 100%;
    }

    &::before,
    .button__icon {
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    .button__icon {
      position: absolute;
      top: 100%;
      left: 50%;
      font-size: 20px;
      padding: 10px;
      transform: translate3d(-50%, 0, 0);
    }

    span {
      display: block;
      transition: transform 0.3s, opacity 0.3s;
      transition-delay: 0.3s;
    }

    &:hover {
      &::before {
        transform: translate3d(0, 0, 0);
      }

      .button__icon {
        transition-delay: 0.1s;
        transform: translate3d(-50%, -100%, 0);
      }

      span {
        opacity: 0;
        transform: translate3d(0, -50%, 0);
        transition-delay: 0s;
      }
    }
  }

  // demo18
  &.demo18 {
    overflow: hidden;
    border: 1px solid currentColor;
    transition: background-color 0.3s;

    &::before {
      content: '';
      position: absolute;
      left: -50%;
      width: 200%;
      height: 200%;
      background: #37474f;
      top: -50%;
      z-index: -1;
      transform: translate3d(0, -100%, 0) rotate3d(0, 0, 1, -10deg);
    }

    span {
      display: block;
    }

    .button__icon {
      padding: 1em 2em;
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      color: #fff;
      transform: translate3d(0, -100%, 0);
    }

    span,
    .button__icon {
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      background-color: #37474f;
      transition: background-color 0s 0.3s;

      .button__icon {
        transform: translate3d(0, 0, 0);
      }

      span {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }

      &::before {
        animation: anim-demo18 0.3s forwards ease-in;
      }
    }

    @keyframes anim-demo18 {
      50% {
        transform: translate3d(0, -50%, 0) rotate3d(0, 0, 1, -10deg);
        animation-timing-function: ease-out;
      }

      100% {
        transform: translate3d(0, 0%, 0) rotate3d(0, 0, 1, 0deg);
      }
    }
  }

  // demo19
  &.demo19 {
    .button__icon {
      transform: translate3d(0, 100%, 0);
    }

    &::before {
      transform: translate3d(0, 100%, 0) rotate3d(0, 0, 1, 10deg);
    }

    &:hover {
      &::before {
        animation: anim-demo19 0.3s forwards ease-in;
      }

      span {
        transform: translate3d(0, -100%, 0);
      }
    }

    @keyframes anim-demo19 {
      50% {
        transform: translate3d(0, 50%, 0) rotate3d(0, 0, 1, 10deg);
        animation-timing-function: ease-out;
      }

      100% {
        transform: translate3d(0, 0%, 0) rotate3d(0, 0, 1, 0deg);
      }
    }
  }

  // demo20
  &.demo20 {
    background: #7986cb;
    color: #7986cb;
    overflow: hidden;
    transition: color 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);

    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      border-radius: inherit;
    }

    &::after {
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      background: #fff;
    }

    &::before {
      background: #37474f;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translate3d(0, 100%, 0);
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      color: #37474f;

      &::before {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  // demo21
  &.demo21 {
    color: #fff;
    transition: color 0.3s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      box-shadow: inset 0 0 0 35px #37474f;
      transform: scale3d(0.9, 0.9, 1);
      transition: box-shadow 0.3s, transform 0.3s;
    }

    &:hover {
      color: #37474f;

      &::before {
        box-shadow: inset 0 0 0 2px #37474f;
        transform: scale3d(1, 1, 1);
      }
    }
  }

  // demo22
  &.demo22 {
    color: #37474f;

    &::before {
      box-shadow: inset 0 0 0 2px #37474f;
      transform: scale3d(1, 1, 1);
    }

    &:hover {
      color: #fff;

      &::before {
        box-shadow: inset 0 0 0 35px #37474f;
        transform: scale3d(0.9, 0.9, 1);
      }
    }
  }

  // demo23
  &.demo23 {
    overflow: hidden;
    background: #fff;
    color: #37474f;
    border: 1px solid currentColor;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;

    span {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    .button__icon {
      position: absolute;
      left: 20px;
      font-size: 18px;
      transform: translate3d(-40px, 2.5em, 0);
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      background: #3f51b5;
      border-color: #3f51b5;
      color: #fff;

      .button__icon {
        transform: translate3d(0, 0, 0);
      }

      span {
        transform: translate3d(20px, 0, 0);
      }
    }
  }

  // demo24
  &.demo24 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #8d53b3;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      content: '';
      width: 20px;
      height: 20px;
      background: #492064;
      border-radius: 50%;
      z-index: -1;
    }

    &::before {
      left: -20px;
      transform: translate(-50%, -50%);
    }

    &::after {
      right: -20px;
      transform: translate(50%, -50%);
    }

    &:hover {
      color: #dadce0;

      &::before {
        animation: demo24-cross-left 0.8s both;
      }

      &::after {
        animation: demo24-cross-right 0.8s both;
      }
    }

    @keyframes demo24-cross-left {
      0% {
        left: -20px;
      }

      50% {
        left: 50%;
        width: 20px;
        height: 20px;
      }

      100% {
        left: 50%;
        width: 375px;
        height: 375px;
      }
    }

    @keyframes demo24-cross-right {
      0% {
        right: -20px;
      }

      50% {
        right: 50%;
        width: 20px;
        height: 20px;
      }

      100% {
        right: 50%;
        width: 375px;
        height: 375px;
      }
    }
  }

  // demo25
  &.demo25 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #8d53b3;

    & span {
      transition: none;
    }

    &::before,
    &::after,
    span::before,
    span::after {
      transition: 0.5s;
      z-index: -1;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 0 0;
      border-color: #492064;
      position: absolute;
    }

    &::after {
      top: 0;
      right: 0;
    }

    &::before {
      bottom: 0;
      left: 0;
    }

    span::after {
      top: 0;
      left: 0;
    }

    span::before {
      right: 0;
      bottom: 0;
    }

    &:hover {
      color: #decde9;

      &::before {
        border-width: 14px 33px;
      }

      &::after {
        border-width: 14px 33px;
      }

      span::before {
        border-width: 14px 33px;
      }

      span::after {
        border-width: 14px 33px;
      }
    }
  }

  // demo26
  &.demo26 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #8d53b3;

    &::before,
    &::after,
    span::before,
    span::after {
      transition: 0.5s;
      z-index: -1;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 0 0;
      position: absolute;
    }

    &::after {
      border-color: transparent #492064 transparent transparent;
      top: 0;
      right: 0;
    }

    &::before {
      border-color: transparent transparent transparent #492064;
      bottom: 0;
      left: 0;
    }

    span::after {
      border-color: #492064 transparent transparent transparent;
      top: 0;
      left: 0;
    }

    span::before {
      border-color: transparent transparent #492064 transparent;
      right: 0;
      bottom: 0;
    }

    &:hover {
      color: #decde9;

      &::before {
        border-width: 28px 65px;
      }

      &::after {
        border-width: 28px 65px;
      }

      span::before {
        border-width: 28px 65px;
      }

      span::after {
        border-width: 28px 65px;
      }
    }
  }

  // demo27
  &.demo27 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #808695;

    &::before,
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 0 0;
      position: absolute;
      transition: 0.5s;
      z-index: -1;
    }

    &::after {
      border-color: transparent #3f444e transparent transparent;
      top: 0;
      right: 0;
    }

    &::before {
      border-color: transparent transparent transparent #3f444e;
      bottom: 0;
      left: 0;
    }

    &:hover {
      color: #dadce0;

      &::before,
      &::after {
        border-width: 55px 135px;
      }
    }
  }

  // demo28
  &.demo28 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #27692b;

    &::before,
    &::after,
    span::before,
    span::after {
      content: '';
      position: absolute;
      top: 0;
      width: 25%;
      height: 0;
      background: #012f04;
      transition: 0.5s;
      z-index: -1;
    }

    &::before {
      left: 0;
    }

    &::after {
      left: 50%;
    }

    span::before,
    span::after {
      top: auto;
      bottom: 0;
    }

    span::before {
      left: 25%;
    }

    span::after {
      left: 75%;
    }

    &:hover {
      color: #c0d3c1;

      &::before,
      &::after,
      span::before,
      span::after {
        height: 100%;
      }
    }
  }

  // demo29
  &.demo29 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #9a3789;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #520c46;
      transition: 0.5s;
      z-index: -1;
    }

    &:hover {
      color: #e1c4dc;

      &::before {
        width: 100%;
      }
    }
  }

  // demo30
  &.demo30 {
    color: #9a3789;

    &::before {
      width: 100%;
      height: 0;
    }

    &:hover::before {
      height: 100%;
    }
  }

  // demo31
  &.demo31 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #be876e;

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 0 0;
      border-color: #6b4432 transparent transparent transparent;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s;
      z-index: -1;
    }

    &:hover {
      color: #ecdcd4;

      &::after {
        border-width: 180px 180px 0 0;
      }
    }
  }

  // demo32
  &.demo32 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #bc4b41;

    &::before,
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 0 0;
      position: absolute;
      bottom: 0;
      transition: 0.5s;
      z-index: -1;
    }

    &::before {
      border-color: transparent transparent transparent #6a1a13;
      left: 0;
    }

    &::after {
      border-color: transparent transparent #6a1a13 transparent;
      right: 0;
    }

    &:hover {
      color: #ebcac7;

      &::before {
        border-width: 130px 0 0 130px;
      }

      &::after {
        border-width: 0 0 130px 130px;
      }
    }
  }

  // demo33
  &.demo33 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #48a6b1;

    &::before,
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 0 0;
      position: absolute;
      transition: 0.5s;
      z-index: -1;
    }

    &::before {
      border-color: transparent transparent transparent #185a62;
      bottom: 0;
      left: 0;
    }

    &::after {
      border-color: transparent #185a62 transparent transparent;
      top: 0;
      right: 0;
    }

    &:hover {
      color: #c9e5e8;

      &::before {
        border-width: 100px 0 0 100px;
      }

      &::after {
        border-width: 0 100px 100px 0;
      }
    }
  }

  // demo34
  &.demo34 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #ad96a0;

    &::before,
    &::after,
    span::before,
    span::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 0 0;
      position: absolute;
      transition: 0.5s;
      z-index: -1;
    }

    &::before {
      border-color: transparent transparent transparent #5f4f56;
      bottom: 0;
      left: 0;
    }

    &::after {
      border-color: transparent #5f4f56 transparent transparent;
      top: 0;
      right: 0;
    }

    span::before {
      border-color: transparent transparent #5f4f56 transparent;
      right: 0;
      bottom: 0;
    }

    span::after {
      border-color: #5f4f56 transparent transparent transparent;
      top: 0;
      left: 0;
    }

    &:hover {
      color: #e7e0e3;

      &::before {
        border-width: 100px 0 0 100px;
      }

      &::after {
        border-width: 0 100px 100px 0;
      }

      span::before {
        border-width: 0 0 100px 100px;
      }

      span::after {
        border-width: 100px 100px 0 0;
      }
    }
  }

  // demo35
  &.demo35 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #80629f;

    span {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      top: 100%;
      left: 0;
      border-radius: 50%;
      background: #402a55;
      transform: translate(-50%, -50%);
      transition: width 0.4s, height 0.4s;
      z-index: -1;
    }

    &:hover {
      color: #dad1e3;

      span {
        width: 300px;
        height: 300px;
      }
    }
  }

  // demo36
  &.demo36 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #5177a7;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: #1e395b;
      transition: 0.5s;
      z-index: -1;
    }

    &::after {
      top: auto;
      bottom: 0;
    }

    &:hover {
      color: #ccd7e5;

      &::before,
      &::after {
        height: 100%;
      }
    }
  }

  // demo37
  &.demo37 {
    &::before,
    &::after {
      width: 0;
      height: 100%;
    }

    &::after {
      left: auto;
      right: 0;
    }

    &:hover {
      &::before,
      &::after {
        width: 100%;
      }
    }
  }

  // demo38
  &.demo38 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #c93a8e;

    &::before,
    &::after,
    span::before,
    span::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: rgba(115, 14, 73, 0.25);
      transition: 0.4s;
      z-index: -1;
    }

    &::after,
    span::before {
      top: auto;
      bottom: 0;
    }

    span::before,
    span::after {
      transition-delay: 0.4s;
    }

    &:hover {
      color: #efc5de;

      &::before,
      &::after,
      span::before,
      span::after {
        height: 100%;
      }
    }
  }

  // demo39
  &.demo39 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #8f5c82;

    &::before,
    &::after,
    span::before,
    span::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: rgba(74, 38, 65, 0.25);
      transition: 0.4s;
      z-index: -1;
    }

    &::after,
    span::before {
      left: auto;
      right: 0;
    }

    span::before,
    span::after {
      transition-delay: 0.4s;
    }

    &:hover {
      color: #decfda;

      &::before,
      &::after,
      span::before,
      span::after {
        width: 100%;
      }
    }
  }

  // demo40
  &.demo40 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #eb9e05;
    transition: all 0.6s;

    &:hover {
      background: #eb9e05;
      color: #fff;
    }
  }

  // demo41
  &.demo41 {
    overflow: hidden;
    border: 1px solid currentColor;
    color: #2194e0;

    &::before {
      content: '';
      background-color: rgba(255, 255, 255, 0.5);
      height: 100%;
      width: 3em;
      display: block;
      position: absolute;
      top: 0;
      left: -4.5em;
      transform: skewX(-45deg) translateX(0);
      transition: none;
    }

    &:hover {
      background-color: #2194e0;
      color: #fff;

      &::before {
        transform: skewX(-45deg) translateX(230px);
        transition: all 0.5s ease-in-out;
      }
    }
  }

  // demo42
  &.demo42 {
    background: #0a4;
    border: 1px solid #0a4;
    overflow: hidden;
    transition: all 0.5s;
    color: #fff;

    span {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      top: 50%;
      right: 20px;
      background: rgba(0, 0, 0, 0);
      border: 2px solid currentColor;
      border-top: none;
      border-left: none;
      transform: translate3d(40px, -2.5em, 0) rotate(45deg);
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      color: #0c5;
      border-color: currentColor;
      background: #fff;

      span {
        transform: translate3d(-10px, 0, 0);
      }

      &::after {
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }
    }
  }

  // demo43
  &.demo43 {
    border: 1px solid currentColor;
    color: #9c89f7;
    transition: color 1s;

    &:hover {
      animation: anim-demo43 1s forwards;
      background: radial-gradient(circle, #9c89f7 0.2em, transparent 0.25em) 0 0/1.25em 1.25em,
        radial-gradient(circle, #9c89f7 0.2em, transparent 0.25em) 6.25em 6.25em/1.25em 1.25em;
      color: #e4f789;
    }

    @keyframes anim-demo43 {
      100% {
        background-size: 2.375em 2.375em, 0.1em 0.1em;
      }
    }
  }

  // demo44
  &.demo44 {
    border: 1px solid currentColor;
    color: #f9879b;
    transition: color 1s;

    &:hover {
      animation: anim-demo44 1s ease-in infinite;
      background: radial-gradient(circle, rgba(249, 135, 155, 0.25) 43%, transparent 50%) 0 0/1em 1em,
        radial-gradient(circle, rgba(249, 135, 155, 0.25) 43%, transparent 50%) 0.5em 0.5em/2em 2em;
      color: #0bdcb7;
    }

    @keyframes anim-demo44 {
      50% {
        background-position: 0.66em 0.66em, -0.33em -0.33em;
      }

      100% {
        background-size: 2em 2em, 1em 1em;
        background-position: -1.5em -1.5em, -1em -1em;
      }
    }
  }

  // demo45
  &.demo45 {
    border: 1px solid currentColor;
    color: #546b00;
    transition: color 1s;

    &:hover {
      animation: anim-demo45 0.35s infinite linear;
      background: linear-gradient(45deg, #546b00 0.5em, transparent 0.5em) 0 0/1em 1em,
        linear-gradient(-45deg, #546b00 0.5em, transparent 0.5em) 0 0/1em 1em;
      color: #8769f1;
    }

    @keyframes anim-demo45 {
      100% {
        background-position: 1em 0;
      }
    }
  }

  // demo46
  &.demo46 {
    border: 1px solid currentColor;
    color: #eea163;
    transition: color 1s;

    &:hover {
      animation: anim-demo46 1s linear infinite;
      background: linear-gradient(135deg, rgba(238, 161, 99, 0.25) 0.25em, transparent 0.25em) -0.5em 0,
        linear-gradient(225deg, rgba(238, 161, 99, 0.25) 0.25em, transparent 0.25em) -0.5em 0,
        linear-gradient(315deg, rgba(238, 161, 99, 0.25) 0.25em, transparent 0.25em) 0 0,
        linear-gradient(45deg, rgba(238, 161, 99, 0.25) 0.25em, transparent 0.25em) 0 0;
      background-size: 0.75em 0.75em;
      color: #63b0ee;
    }

    @keyframes anim-demo46 {
      100% {
        background-position: 1em 0, 1em 0, -0.75em 0, -0.75em 0;
      }
    }
  }

  // demo47
  &.demo47 {
    border: 1px solid currentColor;
    color: #009970;
    transition: color 1s;

    &:hover {
      animation: anim-demo47 0.75s infinite linear;
      background: repeating-linear-gradient(45deg, #00cf98 0, #00d89e 0.25em, transparent 0.25em, transparent 0.5em);
      color: #f682a0;
    }

    @keyframes anim-demo47 {
      100% {
        background-position: 3em 0px;
      }
    }
  }

  // demo48
  &.demo48 {
    border: 1px solid transparent;

    span {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-top: 1px solid currentColor;
      border-bottom: 1px solid currentColor;
      transform: scaleX(0);
      transition: transform 0.3s;
    }

    &::after {
      width: 10px;
      height: 10px;
      top: 50%;
      right: 30px;
      background: transparent;
      border: 2px solid currentColor;
      border-top: none;
      border-left: none;
      opacity: 0;
      transform: translate3d(-2em, -50%, 0) rotate(-45deg);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      color: #136eac;

      span {
        transform: translate3d(-10px, 0, 0);
      }

      &::before {
        transform: scaleX(1);
      }

      &::after {
        opacity: 1;
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }
    }
  }

  // demo49
  &.demo49 {
    border: 1px solid currentColor;
    transition: color 1s, border 1s;

    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: #2ecd71;
      transform: scaleX(0);
      transition: transform 0.5s;
      z-index: -1;
    }

    &:hover {
      color: #fff;

      &::before {
        transform: scaleX(1);
      }
    }
  }

  // demo50
  &.demo50 {
    border: 1px solid currentColor;
    transition: color 1s, border 1s;

    &::after {
      content: '';
      background: #3598dc;
      position: absolute;
      z-index: -1;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      transform: scaleX(0);
      transform-origin: 0 50%;
      transition: transform 0.5s ease-out;
      opacity: 0;
    }

    &:hover {
      color: #fff;

      &::after {
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  // demo51
  &.demo51 {
    border: 1px solid #0002;
    z-index: 1;

    &::before,
    &::after,
    span::before,
    span::after {
      z-index: -1;
      content: '';
      position: absolute;
      border-width: 0;
      border-style: solid;
      border-color: #000;
      width: 0.6em;
      height: 0.6em;
      transition: width 0.3s, height 0.3s;
    }

    &::before,
    &::after {
      top: -1px;
      border-top-width: 1px;
    }

    span::before,
    span::after {
      bottom: -1px;
      border-bottom-width: 1px;
    }

    &::before,
    span::before {
      left: -1px;
      border-left-width: 1px;
    }

    &::after,
    span::after {
      right: -1px;
      border-right-width: 1px;
    }

    &:hover {
      color: #fff;
      background: #e77e22;
      transition-delay: 0.3s;

      &::before,
      &::after,
      & span::before,
      & span::after {
        width: 55%;
        height: 55%;
      }
    }
  }

  // demo52
  &.demo52 {
    border: 1px solid transparent;
    background: #a9b3bd;
    color: #fff;

    &::before {
      content: '';
      position: absolute;
      border: 4px solid white;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      opacity: 0;
      transition-duration: 0.3s;
      transition-property: opacity;
    }

    &:hover {
      color: #dad1e3;

      &::before {
        opacity: 1;
      }
    }
  }

  // demo53
  &.demo53 {
    border: 1px solid #0002;
    overflow: hidden;
    z-index: 1;

    &::before,
    &::after,
    span::before,
    span::after {
      z-index: -1;
      content: '';
      position: absolute;
      border-width: 0;
      border-style: solid;
      border-color: #000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: transform 0.3s;
    }

    &::before {
      border-top-width: 1px;
      transform: translate3d(-100%, 0, 0);
    }

    &::after {
      border-bottom-width: 1px;
      transform: translate3d(100%, 0, 0);
    }

    span::before {
      border-left-width: 1px;
      transform: translate3d(0, 100%, 0);
    }

    span::after {
      border-right-width: 1px;
      transform: translate3d(0, -100%, 0);
    }

    &:hover {
      &::before,
      &::after,
      span::before,
      span::after {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  // demo54
  &.demo54 {
    &::before,
    &::after,
    span::before,
    span::after {
      transform: translate3d(0, 0, 0);
    }

    &:hover {
      &::before {
        transform: translate3d(-100%, 0, 0);
      }

      &::after {
        transform: translate3d(100%, 0, 0);
      }

      span::before {
        transform: translate3d(0, 100%, 0);
      }

      span::after {
        transform: translate3d(0, -100%, 0);
      }
    }
  }

  // demo55
  &.demo55 {
    background: #019067;
    color: #fff;
    overflow: hidden;

    &::before {
      content: '';
      width: 100%;
      height: 0%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      background: #fff;
      transition: 0.5s;
    }

    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 1em 2em;
    }

    span {
      display: inline-block;
      transform: translate3d(0, -2em, 0);
      opacity: 0;
      transition: transform 0.6s, opacity 0.6s;

      &:nth-child(even) {
        transform: translate3d(0, 2em, 0);
      }
    }

    &:hover {
      color: #000;

      &::after {
        opacity: 0;
      }

      &::before {
        height: 50%;
      }

      span {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  // demo56
  &.demo56 {
    span {
      transform: translate3d(-6em, 0, 0);
    }

    span:nth-child(even) {
      transform: translate3d(6em, 0, 0);
    }

    &:hover span {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  // demo57
  &.demo57 {
    background: #e1e1e1;
    color: #666;

    &::before {
      position: absolute;
      content: '';
      height: 0;
      width: 0;
      bottom: 0;
      left: 0;
      background: white;
      background: linear-gradient(45deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);
      box-shadow: 1px -1px 1px rgb(0 0 0 / 40%);
      transition: width 0.3s, height 0.3s;
    }

    &:hover::before {
      width: 25px;
      height: 25px;
    }
  }

  // demo58
  &.demo58 {
    color: #000;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      transition: transform 0.5s;
      border: 1px solid #a7a7a7;
      background-color: #e1e1e180;
    }

    &:hover {
      &::before {
        transform: rotateX(60deg) translate(0px, 3em);
      }

      &::after {
        transform: rotateX(-60deg) translate(0px, -3em);
      }
    }
  }

  // demo59
  &.demo59 {
    &:hover {
      &::before {
        transform: rotateY(68deg) translate(9em, 0px);
      }

      &::after {
        transform: rotateY(-68deg) translate(-9em, 0px);
      }
    }
  }

  // demo60
  &.demo60 {
    border: 1px solid currentColor;
    color: #4b4b4b;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 0;
      border-left: 5em solid transparent;
      border-right: 5em solid transparent;
      border-bottom: 10em solid #50505066;
      transform: translate(-50%, 0);
      z-index: -1;
      transition: transform 0.5s;
    }

    &::after {
      transition-delay: 0.2s;
    }

    &:hover {
      &::before {
        transform: translate(-50%, -90%);
      }

      &::after {
        transform: translate(-50%, -60%);
      }
    }
  }

  // demo61
  &.demo61 {
    border: 1px solid currentColor;
    color: #4b4b4b;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: #8c8c8c66;
      transition: transform 0.3s;
      transform: translate(-13%, -190%) rotate(-30deg);
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &::after {
      transition-delay: 0.2s;
      transform: translate(13%, -190%) rotate(30deg);
    }

    &:hover {
      &::before,
      &::after {
        transform: translate(0, 0);
      }
    }
  }

  // demo62
  &.demo62 {
    border: 1px solid currentColor;
    color: #4b4b4b;
    overflow: hidden;
    transition: border 0.5s;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      z-index: -1;
      transition: transform 0.5s;
      transform: translate(-100%, -600%) rotate(30deg);
      background-color: currentColor;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover {
      border-color: transparent;

      &::before {
        transform: translate(0, 0);
      }
    }
  }

  // demo63
  &.demo63 {
    position: relative;
    color: #331c55;
    background: #7e4bcf;

    span {
      position: relative;

      &::before {
        content: attr(data-text);
        transition: all 0.3s ease;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        color: #fff;
        width: 0;
      }
    }

    &:hover span::before {
      width: 100%;
    }
  }
}
</style>
