<template>
  <div class="container">
    <Breadcrumb />
    <a-card v-for="(main, index) of dataList" :key="index" :title="main.title" class="mb_2" :hoverable="true">
      <a-button v-for="(item, index1) of main.list" :key="index1" :href="item.href" :title="item.title" size="large" target="_blank">
        <template #icon>
          <img v-lazy="filtterUrl(item)" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
        </template>
        {{ item.title }}
      </a-button>
      <a-button v-for="i of 10" :key="i" class="seat"></a-button>
    </a-card>
  </div>
</template>

<script setup>
const dataList = [
  {
    title: 'ChartGPT免费链接',
    list: [
      { title: 'https://chat.theb.ai', href: 'https://chat.theb.ai', favicon: '' },
      { title: 'https://char.forefront.ai/', href: 'https://char.forefront.ai/', favicon: '' },
      { title: 'https://www.aitoolgpt.com', href: 'https://www.aitoolgpt.com', favicon: '' },
      { title: 'https://chatforai.com', href: 'https://chatforai.com', favicon: '' },
      { title: 'https://freechatgpt.chat', href: 'https://freechatgpt.chat', favicon: '' },
      { title: 'https://fastgpt.app', href: 'https://fastgpt.app', favicon: '' },
      { title: 'https://ai.ls', href: 'https://ai.ls', favicon: '' },
      { title: 'https://chatgpt.ddiu.me', href: 'https://chatgpt.ddiu.me', favicon: '' },
      { title: 'https://freegpt.one', href: 'https://freegpt.one', favicon: '' },
      { title: 'https://freegpt.cc', href: 'https://freegpt.cc', favicon: '' },
      { title: 'https://www.mulaen.com', href: 'https://www.mulaen.com', favicon: '' },
      { title: 'https://chat.tgbot.co/chat', href: 'https://chat.tgbot.co/chat', favicon: '' },
      { title: 'https://fastgpt.app', href: 'https://fastgpt.app', favicon: '' },
      { title: 'https://chat.yqcloud.top', href: 'https://chat.yqcloud.top', favicon: '' },
      { title: 'https://ai117.com/', href: 'https://ai117.com/', favicon: '' },
      { title: 'https://zhoubaotong.com/zh', href: 'https://zhoubaotong.com/zh', favicon: '' },
      { title: 'https://gpt.sheepig.top/chat', href: 'https://gpt.sheepig.top/chat', favicon: '' },
      { title: 'https://chat.forchange.cn', href: 'https://chat.forchange.cn', favicon: '' },
      { title: 'https://gpt.tool00.com', href: 'https://gpt.tool00.com', favicon: '' },
      { title: 'https://openaizh.com/chatgpt.html', href: 'https://openaizh.com/chatgpt.html', favicon: '' },
      { title: 'https://chat.gptocean.com', href: 'https://chat.gptocean.com', favicon: '' },
      { title: 'https://hi.icu', href: 'https://hi.icu', favicon: '' },
      { title: 'https://aicodehelper.com', href: 'https://aicodehelper.com', favicon: '' },
      { title: 'https://ai.zecoba.cn', href: 'https://ai.zecoba.cn', favicon: '' },
      { title: 'https://ai-toolbox.codefuture.top', href: 'https://ai-toolbox.codefuture.top', favicon: '' },
      { title: 'https://gptzero.me', href: 'https://gptzero.me', favicon: '' },
      { title: 'https://chat35.com/chat', href: 'https://chat35.com/chat', favicon: '' },
      { title: 'https://94gpt.com', href: 'https://94gpt.com', favicon: '' },
      { title: 'https://chat.forchange.cn', href: 'https://chat.forchange.cn', favicon: '' },
      { title: 'https://aigcfun.com', href: 'https://aigcfun.com', favicon: '' },
      { title: 'https://askai.ws', href: 'https://askai.ws', favicon: '' },
      { title: 'https://chat.moyunav.com', href: 'https://chat.moyunav.com', favicon: '' },
      { title: 'https://chatforai.com', href: 'https://chatforai.com', favicon: '' },
      { title: 'https://gpt.tool00.com', href: 'https://gpt.tool00.com', favicon: '' },
      { title: 'https://fastgpt.app', href: 'https://fastgpt.app', favicon: '' },
      { title: 'https://chater.lanyun1103.top', href: 'https://chater.lanyun1103.top', favicon: '' },
      { title: 'https://chat.javaex.cn', href: 'https://chat.javaex.cn', favicon: '' },
      { title: 'https://fastgpt.app/', href: 'https://fastgpt.app/', favicon: '' },
      { title: 'https://chat.binjie.site:7777/#/chat', href: 'https://chat.binjie.site:7777/#/chat', favicon: '' },
      { title: 'https://ai.ls/', href: 'https://ai.ls/', favicon: '' },
      { title: 'https://aitools.run/', href: 'https://aitools.run/', favicon: '' },
      { title: 'https://future.attejuvonen.fi/', href: 'https://future.attejuvonen.fi/', favicon: '' },
      { title: 'https://freechatgpt.chat/', href: 'https://freechatgpt.chat/', favicon: '' },
      { title: 'https://94gpt.com/', href: 'https://94gpt.com/', favicon: '' },
      { title: 'https://chat.tgbot.co/', href: 'https://chat.tgbot.co/', favicon: '' }
    ]
  },
  {
    title: '免费的 openai 接口代理服务收集',
    list: [{ title: 'https://closeai.deno.dev/v1', href: 'https://closeai.deno.dev/v1', favicon: '' }]
  }
]

const filtterUrl = (item) => {
  const url =
    item.favicon.indexOf('//') >= 0 ? item.favicon : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
  return url
}
</script>

<style lang="scss" scoped>
.ant-card :deep(.ant-card-body) {
  padding-right: 14px;
  padding-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  content-visibility: auto;

  .ant-btn {
    margin-right: 10px;
    margin-bottom: 10px;
    line-height: 44px;

    span {
      max-width: 270px;
      line-height: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  &::before,
  &::after {
    display: none;
  }

  .seat {
    width: 0;
    height: 0;
    zoom: 0;
    margin: 0;
    padding: 0;
  }
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: baseline;
}
</style>
