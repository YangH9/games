<template>
  <a-card v-for="(main, index) in dataList" :key="index" :title="main.title" class="card_button_list" :hoverable="true">
    <a-button
      v-for="(item, index1) in main.list"
      :key="index1"
      :href="item.href"
      :title="item.title"
      size="large"
      target="_blank"
    >
      <template #icon>
        <img
          v-lazy="filtterUrl(item)"
          class="icon"
          referrer="no-referrer"
          @error="(e) => e.target.classList.add('hidden')"
        />
      </template>
      {{ item.title }}
    </a-button>
  </a-card>
</template>

<script setup>
// https://github.com/LiLittleCat/awesome-free-chatgpt

const dataList = [
  {
    title: 'ChartGPT免费链接',
    list: [
      { title: 'https://free.easychat.work', href: 'https://free.easychat.work', favicon: '' },
      { title: 'https://free.icoding.ink/', href: 'https://free.icoding.ink/', favicon: '' },
      { title: 'https://py.c1ns.cn', href: 'https://py.c1ns.cn', favicon: '' },
      { title: 'https://aibn.cc/', href: 'https://aibn.cc/', favicon: '' },
      { title: 'https://chatgptduo.com/', href: 'https://chatgptduo.com/', favicon: '' },
      { title: 'https://chatp.free2gpt.xyz/', href: 'https://chatp.free2gpt.xyz/', favicon: '' },
      { title: 'https://chat.aigc101.net/', href: 'https://chat.aigc101.net/', favicon: '' },
      { title: 'https://chat.geekgpt.org/', href: 'https://chat.geekgpt.org/', favicon: '' },
      { title: 'https://chat.tinycms.xyz:3002', href: 'https://chat.tinycms.xyz:3002', favicon: '' },
      { title: 'https://chat.leadscloud.xyz/', href: 'https://chat.leadscloud.xyz/', favicon: '' },
      { title: 'https://ai.skybyte.me', href: 'https://ai.skybyte.me', favicon: '' },
      { title: 'https://powerchat.top/', href: 'https://powerchat.top/', favicon: '' },
      { title: 'https://coffeecat.ai', href: 'https://coffeecat.ai', favicon: '' },
      { title: 'https://f.aifree.site/', href: 'https://f.aifree.site/', favicon: '' },
      { title: 'https://newpc.icoding.ink/', href: 'https://newpc.icoding.ink/', favicon: '' },
      { title: 'https://ai.qidianym.net/', href: 'https://ai.qidianym.net/', favicon: '' },
      { title: 'https://gpt.freet.top', href: 'https://gpt.freet.top', favicon: '' },
      { title: 'https://www.chatfree.cc/', href: 'https://www.chatfree.cc/', favicon: '' },
      { title: 'https://chat.aifree.site/', href: 'https://chat.aifree.site/', favicon: '' },
      { title: 'https://chatz.free2gpt.xyz/', href: 'https://chatz.free2gpt.xyz/', favicon: '' },
      { title: 'https://openai.aifree.site/', href: 'https://openai.aifree.site/', favicon: '' },
      { title: 'https://ai.azstudio.top/', href: 'https://ai.azstudio.top/', favicon: '' },
      { title: 'https://ai.zenglingkun.cn/', href: 'https://ai.zenglingkun.cn/', favicon: '' },
      { title: 'https://chatgpt.kiask.xyz/', href: 'https://chatgpt.kiask.xyz/', favicon: '' },
      { title: 'https://chat.acytoo.com/', href: 'https://chat.acytoo.com/', favicon: '' },
      { title: 'https://c1ns.cn/chat/', href: 'https://c1ns.cn/chat/', favicon: '' },
      { title: 'https://newstop.c1ns.cn/', href: 'https://newstop.c1ns.cn/', favicon: '' },
      { title: 'https://gpt.aifree.site/', href: 'https://gpt.aifree.site/', favicon: '' },
      { title: 'https://hteyun.com/', href: 'https://hteyun.com/', favicon: '' },
      { title: 'https://chat.weuseing.com/', href: 'https://chat.weuseing.com/', favicon: '' },
      { title: 'https://zyq-chatgpt.github.io', href: 'https://zyq-chatgpt.github.io', favicon: '' },
      { title: 'https://gptdidi.com/', href: 'https://gptdidi.com/', favicon: '' },
      { title: 'https://chat.flares.ai/', href: 'https://chat.flares.ai/', favicon: '' },
      { title: 'https://devgpt.com/', href: 'https://devgpt.com/', favicon: '' },
      { title: 'https://chat.newstop.asia/', href: 'https://chat.newstop.asia/', favicon: '' },
      { title: 'https://nb8.c1ns.cn/', href: 'https://nb8.c1ns.cn/', favicon: '' },
      { title: 'https://chatyou.lovebaby.today/', href: 'https://chatyou.lovebaby.today/', favicon: '' },
      { title: 'https://www.magicaibot.com/talk', href: 'https://www.magicaibot.com/talk', favicon: '' },
      { title: 'https://521.zeabur.app/', href: 'https://521.zeabur.app/', favicon: '' },
      { title: 'https://chat.kunshanyuxin.com/', href: 'https://chat.kunshanyuxin.com/', favicon: '' },
      { title: 'https://chat.jubianxingqiu.com/', href: 'https://chat.jubianxingqiu.com/', favicon: '' },
      { title: 'https://tchat.c1ns.cn/', href: 'https://tchat.c1ns.cn/', favicon: '' },
      { title: 'https://a.aiask.me/', href: 'https://a.aiask.me/', favicon: '' },
      { title: 'https://ai.gptforlove.com/', href: 'https://ai.gptforlove.com/', favicon: '' },
      { title: 'https://as1.betai55.uk/', href: 'https://as1.betai55.uk/', favicon: '' },
      { title: 'https://chat.pinkfong.cn/', href: 'https://chat.pinkfong.cn/', favicon: '' },
      { title: 'https://ai.heptax.com/', href: 'https://ai.heptax.com/', favicon: '' },
      { title: 'https://index.chat.bnu120.space/', href: 'https://index.chat.bnu120.space/', favicon: '' },
      { title: 'https://f12.xjai.cc/', href: 'https://f12.xjai.cc/', favicon: '' },
      { title: 'https://nav4ai.net/chatgptweb', href: 'https://nav4ai.net/chatgptweb', favicon: '' },
      { title: 'https://mirrorchat.extkj.cn/', href: 'https://mirrorchat.extkj.cn/', favicon: '' },
      { title: 'https://chat13.xeasy.me/', href: 'https://chat13.xeasy.me/', favicon: '' },
      { title: 'https://www.chatgptunli.com/chatgpt/', href: 'https://www.chatgptunli.com/chatgpt/', favicon: '' },
      { title: 'https://dev.yqcloud.top/', href: 'https://dev.yqcloud.top/', favicon: '' },
      { title: 'https://www.promptboom.com/', href: 'https://www.promptboom.com/', favicon: '' },
      { title: 'https://greengpt.app/', href: 'https://greengpt.app/', favicon: '' },
      { title: 'https://chatcat.zhaoyoung.me', href: 'https://chatcat.zhaoyoung.me', favicon: '' },
      { title: 'https://ai.mcbbs.gq/', href: 'https://ai.mcbbs.gq/', favicon: '' },
      { title: 'https://ai.gogpt.site/', href: 'https://ai.gogpt.site/', favicon: '' },
      { title: 'https://aichat.gogpt.site/', href: 'https://aichat.gogpt.site/', favicon: '' },
      { title: 'https://vvanglro.eu.org/', href: 'https://vvanglro.eu.org/', favicon: '' },
      { title: 'https://pro.ai.ls/', href: 'https://pro.ai.ls/', favicon: '' },
      { title: 'https://chatbot.theb.ai/', href: 'https://chatbot.theb.ai/', favicon: '' },
      { title: 'https://www.aitianhu.com/', href: 'https://www.aitianhu.com/', favicon: '' },
      { title: 'https://chatcat.pages.dev/', href: 'https://chatcat.pages.dev/', favicon: '' },
      { title: 'https://chat2.geekr.dev/', href: 'https://chat2.geekr.dev/', favicon: '' },
      { title: 'https://chat.gpt.bz/', href: 'https://chat.gpt.bz/', favicon: '' },
      { title: 'https://ailink.icu/', href: 'https://ailink.icu/', favicon: '' },
      { title: 'https://desk.im/', href: 'https://desk.im/', favicon: '' },
      { title: 'https://ai.ls/', href: 'https://ai.ls/', favicon: '' },
      { title: 'https://ai.ci/', href: 'https://ai.ci/', favicon: '' },
      { title: 'https://chat2.xeasy.me/', href: 'https://chat2.xeasy.me/', favicon: '' },
      { title: 'https://gpt.xeasy.me/', href: 'https://gpt.xeasy.me/', favicon: '' },
      { title: 'https://gpt.getshare.net/', href: 'https://gpt.getshare.net/', favicon: '' },
      { title: 'https://chat.51buygpt.com/', href: 'https://chat.51buygpt.com/', favicon: '' },
      { title: 'https://trychatgp.com/', href: 'https://trychatgp.com/', favicon: '' },
      { title: 'https://chat12.xeasy.me/', href: 'https://chat12.xeasy.me/', favicon: '' },
      { title: 'https://t1.c1ns.cn/', href: 'https://t1.c1ns.cn/', favicon: '' },
      { title: 'https://tchat.c1ns.cn', href: 'https://tchat.c1ns.cn', favicon: '' },
      { title: 'https://feel-gpt.top', href: 'https://feel-gpt.top', favicon: '' },
      { title: 'https://unifyai.cn/', href: 'https://unifyai.cn/', favicon: '' },
      { title: 'https://chatgpt.hklan.top/', href: 'https://chatgpt.hklan.top/', favicon: '' },
      { title: 'https://deepai.org/', href: 'https://deepai.org/', favicon: '' },
      { title: 'https://aixforce.app/', href: 'https://aixforce.app/', favicon: '' },
      { title: 'https://www.perplexity.ai/', href: 'https://www.perplexity.ai/', favicon: '' },
      { title: 'https://99.opao.xyz/', href: 'https://99.opao.xyz/', favicon: '' },
      { title: 'https://chat.zhulei.xyz/', href: 'https://chat.zhulei.xyz/', favicon: '' },
      { title: 'https://chatplus.buzz', href: 'https://chatplus.buzz', favicon: '' },
      { title: 'https://www.typingmind.com/', href: 'https://www.typingmind.com/', favicon: '' },
      { title: 'https://caffcat.com', href: 'https://caffcat.com', favicon: '' },
      { title: 'https://www.jinwangyile.xyz', href: 'https://www.jinwangyile.xyz', favicon: '' },
      { title: 'https://bettergpt.chat/', href: 'https://bettergpt.chat/', favicon: '' },
      { title: 'https://chatgpt-cn.co/', href: 'https://chatgpt-cn.co/', favicon: '' },
      { title: 'https://chatforai.com/', href: 'https://chatforai.com/', favicon: '' },
      { title: 'https://ai.okmiku.com/chat', href: 'https://ai.okmiku.com/chat', favicon: '' },
      { title: 'https://nb.aitom.cc', href: 'https://nb.aitom.cc', favicon: '' },
      { title: 'https://freegpt.dingtoucake.xyz/', href: 'https://freegpt.dingtoucake.xyz/', favicon: '' },
      { title: 'https://freegpt.cc/', href: 'https://freegpt.cc/', favicon: '' },
      { title: 'https://chat.sb-chat.com/index.php', href: 'https://chat.sb-chat.com/index.php', favicon: '' },
      { title: 'https://www.tomchat.uk', href: 'https://www.tomchat.uk', favicon: '' },
      { title: 'https://www.tomchat.work', href: 'https://www.tomchat.work', favicon: '' },
      { title: 'https://i.aibusx.com', href: 'https://i.aibusx.com', favicon: '' },
      { title: 'https://visionarybrush.com/', href: 'https://visionarybrush.com/', favicon: '' },
      { title: 'https://coffeecat.ai/', href: 'https://coffeecat.ai/', favicon: '' },
      { title: 'https://to.opengpt88.com/', href: 'https://to.opengpt88.com/', favicon: '' },
      { title: 'https://aigptx.top/', href: 'https://aigptx.top/', favicon: '' },
      { title: 'https://www.sreaigc.com/', href: 'https://www.sreaigc.com/', favicon: '' },
      { title: 'https://chattoai.cc/', href: 'https://chattoai.cc/', favicon: '' },
      { title: 'https://chat.icoding.ink/', href: 'https://chat.icoding.ink/', favicon: '' },
      { title: 'https://wrtn.ai/', href: 'https://wrtn.ai/', favicon: '' },
      { title: 'https://ai.hxkj.vip/', href: 'https://ai.hxkj.vip/', favicon: '' },
      { title: 'https://carps.ink/', href: 'https://carps.ink/', favicon: '' },
      { title: 'https://chat.wenwen-ai.com/', href: 'https://chat.wenwen-ai.com/', favicon: '' },
      { title: 'https://free.netfly.top/', href: 'https://free.netfly.top/', favicon: '' },
      { title: 'https://chat8.com/', href: 'https://chat8.com/', favicon: '' },
      { title: 'https://aassdd.opao.xyz', href: 'https://aassdd.opao.xyz', favicon: '' },
      { title: 'https://zhuo.mkzero.top:17777/', href: 'https://zhuo.mkzero.top:17777/', favicon: '' },
      { title: 'https://ai.mkzero.top:44444/', href: 'https://ai.mkzero.top:44444/', favicon: '' },
      { title: 'https://firstai.opao.xyz/', href: 'https://firstai.opao.xyz/', favicon: '' },
      { title: 'https://www.ai2dog.com/bavarder', href: 'https://www.ai2dog.com/bavarder', favicon: '' },
      { title: 'https://candy666.top/', href: 'https://candy666.top/', favicon: '' },
      { title: 'https://ai.fanyi.im', href: 'https://ai.fanyi.im', favicon: '' },
      { title: 'https://chat.gpt4plus.fun', href: 'https://chat.gpt4plus.fun', favicon: '' },
      { title: 'https://chat.immuseai.com/', href: 'https://chat.immuseai.com/', favicon: '' },
      { title: 'https://chat.bumo.tech/', href: 'https://chat.bumo.tech/', favicon: '' },
      { title: 'https://chat.zhenbs.com/', href: 'https://chat.zhenbs.com/', favicon: '' },
      { title: 'https://gpt4.gravityengine.cc/', href: 'https://gpt4.gravityengine.cc/', favicon: '' },
      { title: 'https://chat.iwoso.co/', href: 'https://chat.iwoso.co/', favicon: '' },
      { title: 'https://nat.dev/', href: 'https://nat.dev/', favicon: '' },
      { title: 'https://fastgpt.app/', href: 'https://fastgpt.app/', favicon: '' },
      { title: 'https://freechatgpt.chat/', href: 'https://freechatgpt.chat/', favicon: '' },
      { title: 'https://www.chatbotui.com/', href: 'https://www.chatbotui.com/', favicon: '' },
      { title: 'https://94gpt.com/', href: 'https://94gpt.com/', favicon: '' },
      { title: 'https://ai.imiphp.com/', href: 'https://ai.imiphp.com/', favicon: '' },
      { title: 'https://dzyai.com/chat', href: 'https://dzyai.com/chat', favicon: '' },
      { title: 'https://gptplus.io/', href: 'https://gptplus.io/', favicon: '' },
      { title: 'https://ai-connect.cn/chat', href: 'https://ai-connect.cn/chat', favicon: '' },
      { title: 'https://zhiziera.com/', href: 'https://zhiziera.com/', favicon: '' },
      { title: 'https://xdu.cn/', href: 'https://xdu.cn/', favicon: '' },
      { title: 'https://c1ns.cn/wlyzs', href: 'https://c1ns.cn/wlyzs', favicon: '' },
      { title: 'https://chat.ijixian.com.cn', href: 'https://chat.ijixian.com.cn', favicon: '' },
      { title: 'https://www.magicaibot.com/talk', href: 'https://www.magicaibot.com/talk', favicon: '' },
      { title: 'https://www.dqzboy.top/', href: 'https://www.dqzboy.top/', favicon: '' },
      { title: 'https://freechat.xiaopao.link', href: 'https://freechat.xiaopao.link', favicon: '' },
      { title: 'https://chat.gpt.bz/', href: 'https://chat.gpt.bz/', favicon: '' },
      { title: 'https://dashuye.top', href: 'https://dashuye.top', favicon: '' },
      { title: 'https://jqk.ai', href: 'https://jqk.ai', favicon: '' },
      { title: 'https://zyzyai.cn', href: 'https://zyzyai.cn', favicon: '' },
      { title: 'https://www.confman.com/chat', href: 'https://www.confman.com/chat', favicon: '' },
      { title: 'https://emkok.com', href: 'https://emkok.com', favicon: '' },
      { title: 'https://varmsg.com/', href: 'https://varmsg.com/', favicon: '' },
      { title: 'https://home.xiamis.xyz/', href: 'https://home.xiamis.xyz/', favicon: '' },
      { title: 'https://chatgptmirror.com/', href: 'https://chatgptmirror.com/', favicon: '' },
      { title: 'https://ai.douresources.com', href: 'https://ai.douresources.com', favicon: '' },
      { title: 'https://aihalo.chat/', href: 'https://aihalo.chat/', favicon: '' },
      { title: 'https://chat1.wobcw.com/', href: 'https://chat1.wobcw.com/', favicon: '' },
      { title: 'https://ai.iiter.cn/', href: 'https://ai.iiter.cn/', favicon: '' },
      { title: 'https://www.openaicloud.cloud/', href: 'https://www.openaicloud.cloud/', favicon: '' },
      { title: 'https://gpts.dawu.world/', href: 'https://gpts.dawu.world/', favicon: '' },
      { title: 'https://aiget.cc/', href: 'https://aiget.cc/', favicon: '' },
      { title: 'https://gpt.uziai.com/', href: 'https://gpt.uziai.com/', favicon: '' },
      { title: 'https://chat.bumo.ai/', href: 'https://chat.bumo.ai/', favicon: '' },
      { title: 'https://ai.hxkj.vip/', href: 'https://ai.hxkj.vip/', favicon: '' },
      { title: 'https://qxme.com/', href: 'https://qxme.com/', favicon: '' },
      { title: 'https://chat.douresources.com/', href: 'https://chat.douresources.com/', favicon: '' },
      { title: 'https://chat.wobcw.com/', href: 'https://chat.wobcw.com/', favicon: '' },
      { title: 'https://www.vivi-chat.com/#/chat', href: 'https://www.vivi-chat.com/#/chat', favicon: '' },
      { title: 'https://openmao.panchuang.net/', href: 'https://openmao.panchuang.net/', favicon: '' },
      { title: 'https://www.weijiwangluo.com/talk', href: 'https://www.weijiwangluo.com/talk', favicon: '' },
      { title: 'https://gpt6.fun/', href: 'https://gpt6.fun/', favicon: '' },
      { title: 'https://chat.alpaca-bi.com/', href: 'https://chat.alpaca-bi.com/', favicon: '' },
      { title: 'https://www.bz1y.cn/', href: 'https://www.bz1y.cn/', favicon: '' },
      { title: 'https://www.sweetsai.com/', href: 'https://www.sweetsai.com/', favicon: '' },
      { title: 'https://gpt.opengpt88.com/', href: 'https://gpt.opengpt88.com/', favicon: '' },
      { title: 'https://tubogpt.vercel.app/', href: 'https://tubogpt.vercel.app/', favicon: '' },
      { title: 'https://seven-star.org/', href: 'https://seven-star.org/', favicon: '' },
      { title: 'https://chat.hehanwang.com/', href: 'https://chat.hehanwang.com/', favicon: '' },
      { title: 'https://chat.8kg.co/', href: 'https://chat.8kg.co/', favicon: '' },
      { title: 'https://open-gpt.app/', href: 'https://open-gpt.app/', favicon: '' },
      { title: 'https://chat.wudi11.shop', href: 'https://chat.wudi11.shop', favicon: '' },
      { title: 'https://gpt.ltopx.com', href: 'https://gpt.ltopx.com', favicon: '' },
      { title: 'https://caffcat.co/', href: 'https://caffcat.co/', favicon: '' }
    ]
  },
  {
    title: '替代方案',
    list: [
      { title: 'Poe - Fast, Helpful AI Chat', href: 'https://poe.com/', favicon: '' },
      { title: 'HuggingChat', href: 'https://huggingface.co/chat', favicon: '' },
      { title: 'Chat with Open Large Language Models', href: 'https://chat.lmsys.org/', favicon: '' },
      { title: 'Bing Chat', href: 'https://www.bing.com/new', favicon: '' },
      { title: '百度 文心一言', href: 'https://yiyan.baidu.com/', favicon: '' },
      { title: 'Bing Chat', href: 'https://www.bing.com/new', favicon: '' }
    ]
  }
]

const filtterUrl = (item) => {
  const url =
    item.favicon.indexOf('//') >= 0
      ? item.favicon
      : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
  return url
}
</script>

<style lang="scss" scoped></style>
