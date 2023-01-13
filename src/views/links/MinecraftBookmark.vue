<template>
  <div class="container">
    <Breadcrumb />
    <a-card v-for="(main, index) of dataList" :key="index" :title="main.title" class="mb10" :hoverable="true">
      <a-button v-for="(item, index1) of main.list" :key="index1" size="large" :href="item.href" :title="item.title">
        <!-- <template #icon>
          <img v-lazy="filtterUrl(item)" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
        </template> -->
        {{ item.title }}
      </a-button>
      <a-button v-for="i of 10" :key="i" class="seat"></a-button>
    </a-card>
  </div>
</template>

<script setup>
const dataList = [
  {
    title: '我的世界书签收录',
    list: [
      { title: 'MC百科|最大的Minecraft中文MOD百科', href: 'https://www.mcmod.cn/', favicon: '' },
      { title: 'SpongeForge Downloads', href: 'https://www.spongepowered.org/downloads/spongeforge/stable/1.12.2', favicon: '' },
      { title: 'Minecraft Forge', href: 'https://files.minecraftforge.net/', favicon: '' },
      { title: 'Trending Minecraft Skins | NameMC', href: 'https://namemc.com/minecraft-skins/trending/daily?page=2', favicon: '' },
      { title: '登录 Minecraft 统一通行证 - Minecraft 统一通行证', href: 'https://login2.nide8.com:233/account/login', favicon: '' },
      { title: 'Minecraft 物品ID列表', href: 'https://gl.xn--gfs727n.com:233/id/', favicon: '' },
      { title: 'Minecraft Forge', href: 'https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html', favicon: '' },
      { title: 'umsoea | yiff.party', href: 'https://yiff.party/patreon/19193775#shared_files', favicon: '' },
      { title: 'Disclaimer | Amulet Editor', href: 'https://www.amuletmc.com/readme', favicon: '' },
      { title: 'Minecraft ID List - Minecraft Info', href: 'https://www.minecraftinfo.com/idlist.htm', favicon: '' },
      {
        title: '命令参考 · Multiverse/Multiverse-Core Wiki · GitHub',
        href: 'https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference#teleport-command',
        favicon: ''
      },
      { title: '南烛Nan2uu正在创作我的世界Minecraft 彩虹像素 RainbowPixel~☆材质包 | 爱发电', href: 'https://afdian.net/@Nan2uu', favicon: '' },
      {
        title: 'Bukkit Plugins - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins?filter-game-version=2020709689%3A9190&filter-sort=4#',
        favicon: ''
      },
      { title: 'Minecraft Shaders | Mods &amp; Shader Packs', href: 'https://shadersmods.com/', favicon: '' },
      { title: '主页 | Project:OPEREO', href: 'https://www.opereserver.com/', favicon: '' }
    ]
  },
  {
    title: 'MCBox',
    list: [
      { title: '分享|Linux 上搭建 Minecraft 服务器', href: 'https://linux.cn/article-8140-1.html', favicon: '' },
      {
        title: '我的世界：CentOS搭建mc服务器 - xuejianbest的专栏 - CSDN博客',
        href: 'https://blog.csdn.net/xuejianbest/article/details/80508156#1_javaJava18_2',
        favicon: ''
      },
      { title: '在Linux下搭建我的世界(Minecraft)服务器 - 栖息地 - 博客园', href: 'https://www.cnblogs.com/qixidi/p/10185553.html', favicon: '' },
      { title: 'Linux下安装jdk1.8 - 码农一只 - 博客园', href: 'https://www.cnblogs.com/manong--/p/8016884.html', favicon: '' },
      {
        title: 'Java SE Development Kit 8 - Downloads',
        href: 'https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html',
        favicon: ''
      },
      { title: 'Linux 下安装JDK1.8 - 法号阿兴 - 博客园', href: 'https://www.cnblogs.com/xuliangxing/p/7066913.html', favicon: '' },
      { title: 'Linux下彻底卸载mysql详解 - nicknailo - 博客园', href: 'https://www.cnblogs.com/nicknailo/articles/8563456.html', favicon: '' },
      {
        title: 'jdk下载以前版本需要的账号（转） - 迷了路你就往前走的博客 - CSDN博客',
        href: 'https://blog.csdn.net/WNsshssm/article/details/84315519',
        favicon: ''
      },
      {
        title: '服务器详细设置server.properties优化服务器 - 联机教程 - Minecraft(我的世界)中文论坛 -',
        href: 'http://www.mcbbs.net/thread-569077-1-1.html',
        favicon: ''
      },
      { title: '神器 Tmux 的超绝便利 - 小单同桌 - 博客园', href: 'https://www.cnblogs.com/reboot51/p/9485911.html', favicon: '' },
      { title: 'tmux基本操作 - Guanglin - 博客园', href: 'https://www.cnblogs.com/liuguanglin/p/9290345.html', favicon: '' },
      {
        title: '在Linux下修改phpstudy集成环境中的MySQL端口号 - qq_31788297的博客 - CSDN博客',
        href: 'https://blog.csdn.net/qq_31788297/article/details/81433461',
        favicon: ''
      },
      { title: 'linux上安装phpstudy - 阿波罗任先生 - 博客园', href: 'https://www.cnblogs.com/apolloren/p/8832868.html', favicon: '' },
      {
        title: '如何安装和使用Wine，以便在Linux上运行Windows应用程序 - whereisdog的博客 - CSDN博客',
        href: 'https://blog.csdn.net/whereisdog/article/details/82979990',
        favicon: ''
      }
    ]
  },
  {
    title: '组包',
    list: [
      { title: 'Essentials', href: 'https://www.lanzous.com/b278009/', favicon: '' },
      { title: 'MC Colour Guide', href: 'http://ess.khhq.net/mc/', favicon: '' },
      { title: 'Blessing Skin', href: 'https://skin.prinzeugen.net/', favicon: '' },
      {
        title: '[角色]SkinsRestorer —— 老牌皮肤显示插件[1.8+ 中文|持续更新|支持Sponge] - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-805404-1-1.html',
        favicon: ''
      },
      {
        title: '[1.14.4][官服]MCDaemon-go+Carpet——纯净服务端解决方案 - 服务端整合包 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-944510-1-1.html',
        favicon: ''
      },
      { title: '我的世界服务器_我的世界找服网', href: 'https://www.fansmc.com/', favicon: '' }
    ]
  },
  {
    title: 'DataPackage',
    list: [
      {
        title: 'Towns &amp; Towers - Structure Overhaul Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/towns-amp-towers-structure-overhaul/',
        favicon: ''
      },
      { title: 'Moss Ruins Datapack Minecraft Data Pack', href: 'https://www.planetminecraft.com/data-pack/moss-ruins-datapack/', favicon: '' },
      {
        title: 'ChoiceTheorem&#39;s Overhauled villages for 1.18.2 Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/choicetheorem-s-overhauled-villages-for-1-18/',
        favicon: ''
      },
      { title: 'TreeCapitator Minecraft 数据包', href: 'https://www.planetminecraft.com/data-pack/treecapitator-datapack-1-13/', favicon: '' },
      {
        title: 'Terralith Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/terralith-overworld-evolved-100-biomes-caves-and-more/',
        favicon: ''
      },
      {
        title: 'BlazeandCave&#39;s Advancements Pack [1.18 Datapack] Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/blazeandcave-s-advancements-pack-1-12/',
        favicon: ''
      },
      {
        title: 'Incendium ~ Nether Expansion [Now 1.18!] Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/incendium-nether-expansion/',
        favicon: ''
      },
      {
        title: 'WASD Moar Swords [Datapack] 1.18.2 Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/moar-swords-4511250/',
        favicon: ''
      },
      {
        title: 'FokaStudio&#39;s Ender Expansion ~ Harder End, New Biomes and More! [Now PROPERLY on 1.18.2!] Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/fokastudio-s-ender-expansion/',
        favicon: ''
      },
      {
        title: 'Bubblellaneous | Furniture, Security, Food &amp; More Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/bubblellaneous/',
        favicon: ''
      }
    ]
  },
  {
    title: '资源包',
    list: [
      { title: '天空材质包Realistic Sky Resource Pack', href: 'https://fireeaglefegaming.wixsite.com/myresourcepacks/realisticsky', favicon: '' },
      {
        title:
          '反射材质包Poudingue/Vanilla-Normals-Renewed-1.12: Vanilla Normals made compatible with SEUS renewed (and other PBR minecraft shaders) for Minecraft &lt; 1.13',
        href: 'https://github.com/Poudingue/Vanilla-Normals-Renewed-1.12',
        favicon: ''
      },
      {
        title: '方块模型 - 翻译&amp;Wiki - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=374919',
        favicon: ''
      },
      {
        title: '教程/制作资源包 - Minecraft Wiki，最详细的官方我的世界百科',
        href: 'https://minecraft-zh.gamepedia.com/%E6%95%99%E7%A8%8B/%E5%88%B6%E4%BD%9C%E8%B5%84%E6%BA%90%E5%8C%85',
        favicon: ''
      },
      { title: '模型 - Minecraft Wiki，最详细的官方我的世界百科', href: 'https://minecraft-zh.gamepedia.com/%E6%A8%A1%E5%9E%8B', favicon: '' },
      { title: 'SEUS-PTGI-sonicether | yiff.party', href: 'https://yiff.party/patreon/4847727', favicon: '' },
      {
        title: 'Nova Skin - Minecraft Wallpaper Generator with custom skins',
        href: 'http://minecraft.novaskin.me/wallpapers/mobile',
        favicon: ''
      },
      { title: '首页 - 我的世界皮肤站 - Minecraft SkinMe', href: 'http://www.skinme.cc/skinme/user/home/', favicon: '' }
    ]
  },
  {
    title: '插件',
    list: [
      {
        title: '开放登录 [1.7X -1.18X] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/openlogin-1-7x-1-18x.57272/',
        favicon: ''
      },
      { title: 'Bukkit 插件 - Minecraft - CurseForge', href: 'https://www.curseforge.com/minecraft/bukkit-plugins', favicon: '' },
      {
        title: 'GadgetsMenu [1.8 - 1.17.1] [免费] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/gadgetsmenu-1-8-1-17-1-free.10885/',
        favicon: ''
      },
      {
        title: 'SoaromaSAC | 轻量级作弊检测系统 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/soaromasac-lightweight-cheat-detection-system.87702/',
        favicon: ''
      },
      { title: 'WorldEdit | EngineHub', href: 'https://enginehub.org/worldedit/#downloads', favicon: '' },
      {
        title: 'Jakllp/MyPet: This is not the main project - Please visit https://github.com/MyPetORG/MyPet',
        href: 'https://github.com/Jakllp/MyPet',
        favicon: ''
      },
      { title: 'EssentialsX Info - Commands', href: 'https://essinfo.xeya.me/commands.html', favicon: '' },
      {
        title: '郝尼克 | 高级尼克插件 | 1.8 - 1.17 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/haonick-advanced-nick-plugin-1-8-1-17.81108/',
        favicon: ''
      },
      {
        title: 'SkinsRestorer - Version History | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/skinsrestorer.2124/history',
        favicon: ''
      },
      { title: 'SkinFixer | SpigotMC - 高性能 Minecraft', href: 'https://www.spigotmc.org/resources/skinfixer.82705/', favicon: '' },
      { title: 'LuckPerms', href: 'https://luckperms.net/', favicon: '' },
      {
        title: 'FartherViewDistance | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/fartherviewdistance.84950/',
        favicon: ''
      },
      {
        title: '洞察 - 超级可配置（区域）限制 + 异步扫描 [1.18] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/insights-super-configurable-region-limits-asynchronous-scans-1-18.56489/',
        favicon: ''
      },
      {
        title: 'Files - EssentialsX - Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/projects/essentialsx/files',
        favicon: ''
      },
      {
        title: 'Files - WorldEdit for Bukkit - Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/projects/worldedit/files',
        favicon: ''
      },
      {
        title: 'Release ProtocolLib v4.7.0 · dmulloy2/ProtocolLib',
        href: 'https://github.com/dmulloy2/ProtocolLib/releases/tag/4.7.0',
        favicon: ''
      },
      { title: 'Spigot | SpigotMC - High Performance Minecraft', href: 'https://www.spigotmc.org/resources/categories/spigot.4/', favicon: '' },
      {
        title: 'BanItem [1.7-1.18+] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/banitem-1-7-1-18.67701/',
        favicon: ''
      },
      {
        title: '[管理|安全|修正]BanItem——一款有新型有特色的轻量级封禁物品插件[1.7-1.15] - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-976724-1-1.html',
        favicon: ''
      },
      {
        title: 'Files - Multiverse-Core - Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/projects/multiverse-core/files',
        favicon: ''
      },
      { title: 'MyWorlds | SpigotMC - High Performance Minecraft', href: 'https://www.spigotmc.org/resources/myworlds.39594/', favicon: '' },
      { title: 'Bukkit Plugins - Projects - Bukkit', href: 'https://dev.bukkit.org/bukkit-plugins', favicon: '' },
      { title: 'McMMO - Minecraft插件百科', href: 'https://mineplugin.org/McMMO', favicon: '' },
      { title: 'mcmmo - 搜索 - CurseForge', href: 'https://www.curseforge.com/minecraft/bukkit-plugins/search?search=mcmmo', favicon: '' },
      {
        title: '[2022.1.8]剖开mcMMO给你看——mcMMOの要素解析＆配置教程 - 联机教程 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1290027',
        favicon: ''
      },
      {
        title: '[信息][开源][SCT]mcMMO View —— 更好的显示mcmmo,支持高版本! - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1300127',
        favicon: ''
      },
      {
        title: '【wiki翻译】McMMO wiki 中文翻译 - 联机教程 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=552650',
        favicon: ''
      },
      { title: 'mcMMO [Jenkins]', href: 'https://popicraft.net/jenkins/job/mcMMO/', favicon: '' },
      {
        title: 'Aurelium Skills | Advanced Skills, Stats, Abilities, and more | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/aurelium-skills-advanced-skills-stats-abilities-and-more.81069/',
        favicon: ''
      },
      {
        title: '玩家头像 - Bukkit 插件 - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/player-heads',
        favicon: ''
      },
      { title: '通过版本 | SpigotMC - 高性能 Minecraft', href: 'https://www.spigotmc.org/resources/viaversion.19254/', favicon: '' },
      { title: 'ViaBackwards | SpigotMC - 高性能 Minecraft', href: 'https://www.spigotmc.org/resources/viabackwards.27448/', favicon: '' }
    ]
  },
  {
    title: '服务端核心',
    list: [
      {
        title: '[CPS]Geyser最新使用教程 - 基岩版插件&amp;服务端 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-1126347-1-1.html',
        favicon: ''
      },
      {
        title: '[1.16.5/1.18.1]Arclight ⚡ —— 高版本 Forge+Bukkit 服务端实现 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1046859',
        favicon: ''
      },
      {
        title: '[1.12.2/1.16.5/1.18.1]Mohist ——— 高版本 Forge+Paper 服务器核心 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=916340',
        favicon: ''
      },
      {
        title: '[1.16.5]LoliServer 🎆 —— 基于Forge并融合Spigot/Bukkit的高兼容性核心 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-1280076-1-1.html',
        favicon: ''
      },
      { title: '间歇泉设置', href: 'https://wiki.geysermc.org/geyser/setup/#plugin-setup', favicon: '' },
      { title: '理解配置 - Geyser Wiki', href: 'https://geyser.superiormc.cn/user-guide/li-jie-pei-zhi#ji-yan-ban-bu-fen', favicon: '' },
      { title: 'Spigot', href: 'https://getbukkit.org/download/spigot', favicon: '' },
      { title: '间歇泉MC', href: 'https://geysermc.org/', favicon: '' },
      {
        title: 'Arclight,在 Forge 上使用 Mixin 实现 Bukkit(1.15/1.16) 服务器,下载Arclight的源码_GitHub_酷徒 ⚡',
        href: 'https://github.com/IzzelAliz/Arclight',
        favicon: ''
      },
      { title: 'PaperMC – The High Performance Fork', href: 'https://papermc.io/', favicon: '' },
      { title: 'Downloads – PaperMC', href: 'https://papermc.io/downloads', favicon: '' },
      { title: 'BungeeCord | SpigotMC - High Performance Minecraft', href: 'https://www.spigotmc.org/wiki/bungeecord/', favicon: '' },
      {
        title: 'Voting (DAY/NIGHT/SUN/RAIN/STORM/CUSTOM) | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/voting-day-night-sun-rain-storm-custom.27385/',
        favicon: ''
      },
      { title: 'Spigot [Jenkins]', href: 'http://ci.mengcraft.com:8081/job/spigot/', favicon: '' },
      {
        title: 'server.properties - Minecraft Wiki，最详细的官方我的世界百科',
        href: 'https://minecraft-zh.gamepedia.com/Server.properties',
        favicon: ''
      },
      {
        title:
          '[面向新手] 从零开始整合Sponge端，让你开起新时代模组服* 从入门到精qi通keng - 我的世界-Minecraft - 格兰蒂协会 - 我的世界MineCraft中文论坛|单机联机游戏论坛 - 自由的游戏玩家社区!',
        href: 'http://www.relatev.com/forum.php?mod=viewthread&tid=218&extra=',
        favicon: ''
      },
      {
        title: '[1.16.5/1.18.2]Mohist ——— 高版本 Forge+Paper 服务器核心 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-916340-1-1.html',
        favicon: ''
      },
      {
        title: '【服务端整合包】服务端核心镜像站 [自建|高速|稳定|全面] [1.2-1.18] - 服务端整合包 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1214823',
        favicon: ''
      }
    ]
  },
  {
    title: '工具',
    list: [
      { title: '在线 UUID 生成器工具', href: 'https://www.uuidgenerator.net/version4', favicon: '' },
      { title: 'Minecraft头像生成器', href: 'http://minecraftskinavatar.com/', favicon: '' },
      {
        title: '命令方块指令生成器 - 实用工具 - MC百科|最大的Minecraft中文MOD百科',
        href: 'https://www.mcmod.cn/tools/cbcreator/#/home/',
        favicon: ''
      },
      { title: 'Java Platform, Standard Edition 14 Reference Implementations', href: 'https://jdk.java.net/java-se-ri/14', favicon: '' },
      {
        title: 'Latest release | Adoptium - Open source, prebuilt OpenJDK binaries',
        href: 'https://adoptium.net/releases.html?variant=openjdk17',
        favicon: ''
      },
      { title: 'Minecraft Skins | Download the best Minecraft Skins', href: 'https://www.minecraftskins.net/', favicon: '' },
      { title: 'MC超实用工具', href: 'https://minecraft.tools/en/crafting.php', favicon: '' },
      { title: 'MCEdit Unified', href: 'http://www.mcedit-unified.net/', favicon: '' }
    ]
  },
  {
    title: '教程文档',
    list: [
      {
        title: '教程/架设服务器 - Minecraft Wiki，最详细的我的世界百科',
        href: 'https://minecraft.fandom.com/zh/wiki/%E6%95%99%E7%A8%8B/%E6%9E%B6%E8%AE%BE%E6%9C%8D%E5%8A%A1%E5%99%A8#.E4.B8.80.E8.88.AC.E6.AD.A5.E9.AA.A4',
        favicon: ''
      },
      { title: 'Minecraft插件百科', href: 'https://mineplugin.org/%E9%A6%96%E9%A1%B5', favicon: '' },
      { title: '协议库 | SpigotMC - 高性能 Minecraft', href: 'https://www.spigotmc.org/resources/protocollib.1997/', favicon: '' },
      { title: '源 RCON 协议 - Valve 开发者社区', href: 'https://developer.valvesoftware.com/wiki/Source_RCON_Protocol', favicon: '' },
      {
        title: '教程/通用物品分类器 - Minecraft Wiki，最详细的我的世界百科',
        href: 'https://minecraft.fandom.com/zh/wiki/%E6%95%99%E7%A8%8B/%E9%80%9A%E7%94%A8%E7%89%A9%E5%93%81%E5%88%86%E7%B1%BB%E5%99%A8?variant=zh',
        favicon: ''
      },
      {
        title: '附魔/ID - Minecraft Wiki',
        href: 'https://minecraft-zh.gamepedia.com/index.php?title=%E9%99%84%E9%AD%94/ID&variant=zh-hant',
        favicon: ''
      },
      { title: 'Optifne 小型实用教程 ', href: 'https://www.mcbbs.net/thread-803870-1-1.html', favicon: '' },
      {
        title: 'Blockbench教程-做出属于自己的模型 - 材质资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=833634&orderby=dateline',
        favicon: ''
      },
      {
        title: '教程/制作资源包 - Minecraft Wiki，最详细的官方我的世界百科',
        href: 'https://minecraft-zh.gamepedia.com/%E6%95%99%E7%A8%8B/%E5%88%B6%E4%BD%9C%E8%B5%84%E6%BA%90%E5%8C%85#pack.mcmeta',
        favicon: ''
      },
      { title: 'Minecraft Wiki - Minecraft Wiki', href: 'https://wiki.biligame.com/mc/Minecraft_Wiki', favicon: '' },
      {
        title:
          '【服务器技巧】你知道吗，这些东西可以大幅度优化服务器的运行！ - 技巧教程 - 最MC论坛 - 我的世界_Minecraft_联机_服主_资讯_MOD_皮肤_交流_作品_中文论坛',
        href: 'http://www.zuimc.com/thread-42552-1-1.html',
        favicon: ''
      }
    ]
  },
  {
    title: '娱乐插件',
    list: [
      {
        title: 'BasicQuests - Bukkit 插件 - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/basicquests',
        favicon: ''
      },
      {
        title: 'Magic - Bukkit Plugins - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/magic',
        favicon: ''
      },
      {
        title: '[管理|娱乐][SCT]Magic——魔法?不只是技能那么简单![1.6-1.17.X] - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-1182379-1-1.html',
        favicon: ''
      },
      { title: 'Magic - Minecraft插件百科', href: 'https://mineplugin.org/Magic', favicon: '' }
    ]
  },
  {
    title: '机器人和服务器',
    list: [
      { title: '应用发布 · 创意 - 酷Q社区', href: 'https://cqp.cc/b/app', favicon: '' },
      { title: 'iBot Cloud-小i机器人云平台|智能机器人|智能问答|智能客服|客服机器人', href: 'http://cloud.xiaoi.com/', favicon: '' },
      { title: '图灵机器人－中文语境下高智能度的机器人大脑', href: 'http://www.tuling123.com/', favicon: '' },
      { title: '酷Q Air 5.12 ~ 轻盈，梦想，新生 ~ - 版本发布 · 动态 - 酷Q社区', href: 'https://cqp.cc/t/23253#pid873447', favicon: '' },
      { title: '阿贝云-控制台', href: 'http://www.abeiyun.com/control/#/user', favicon: '' },
      {
        title: '学生服务器的购买和配置方法-云栖社区-阿里云',
        href: 'https://yq.aliyun.com/articles/699826?spm=a2c4e.11155472.0.0.5185722cZ4BxF0',
        favicon: ''
      },
      { title: '图灵AI开放平台-实名认证', href: 'http://biz.turingos.cn/certification', favicon: '' },
      { title: 'AI云机器人市场 - 后台管理', href: 'http://www.app-yun.cn/index.php?m=index&a=userhome_myapp&p=2', favicon: '' },
      { title: '微信个人号接入教程 · 帮助中心 · 看云', href: 'https://www.kancloud.cn/turing/www-tuling123-com/718229', favicon: '' }
    ]
  },
  {
    title: 'DevMC',
    list: [
      { title: 'Spigot project 源代码', href: 'https://hub.spigotmc.org/stash/projects/SPIGOT', favicon: '' },
      { title: '资源列表 | SpigotMC - 高性能 Minecraft', href: 'https://www.spigotmc.org/wiki/resources-list/', favicon: '' },
      {
        title: 'IntelliJ：调试您的插件 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/wiki/intellij-debug-your-plugin/',
        favicon: ''
      },
      { title: '概览 (Spigot-API 1.19.2-R0.1-SNAPSHOT API 中文文档)', href: 'https://bukkit.windit.net/javadoc/', favicon: '' },
      { title: 'RarityEG&#39;s Plugin Dev Tutorial', href: 'https://plgdev.xuogroup.top/#/', favicon: '' },
      { title: 'mineflayer - npm', href: 'https://www.npmjs.com/package/mineflayer', favicon: '' },
      { title: 'Bukkit插件开发_奋斗的小牛的博客-CSDN博客', href: 'https://blog.csdn.net/weixin_45445598/category_11177632.html', favicon: '' },
      { title: 'Bukkit Development Note', href: 'https://bdn.tdiant.net/#/', favicon: '' },
      { title: 'Overview - MythicLib - Bukkit Plugins - Projects - Bukkit', href: 'https://dev.bukkit.org/projects/mythiclib', favicon: '' },
      {
        title: 'MythicMobs - Bukkit 插件 - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/mythicmobs',
        favicon: ''
      },
      {
        title: 'Bukkit编程杂谈',
        href: 'https://hamsteryds.github.io/noticements-in-bukkit/#bukkit%E7%BC%96%E7%A8%8B%E6%9D%82%E8%B0%88%E9%9B%B7%E7%82%B9%E6%A8%A1%E6%9D%BF%E6%80%9D%E8%B7%AF%E8%AE%BE%E8%AE%A1',
        favicon: ''
      },
      {
        title: 'org.bukkit.event.entity (Spigot-API 1.19.2-R0.1-SNAPSHOT API 中文文档)',
        href: 'https://bukkit.windit.net/javadoc/org/bukkit/event/entity/package-summary.html',
        favicon: ''
      },
      {
        title: '命令/item - Minecraft Wiki，最详细的我的世界百科',
        href: 'https://minecraft.fandom.com/zh/wiki/%E5%91%BD%E4%BB%A4/item',
        favicon: ''
      },
      { title: 'MCSManager 管理面板 - 官方网站', href: 'https://mcsmanager.com/', favicon: '' },
      {
        title: 'Infinite Blocks | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/infinite-blocks.101023/',
        favicon: ''
      },
      { title: '通用 Minecraft 编辑器：NBT 编辑你的 Minecraft 世界', href: 'https://www.universalminecrafteditor.com/', favicon: '' },
      { title: 'Blockbench', href: 'https://www.blockbench.net/', favicon: '' },
      {
        title: 'Querz/mcaselector：用于从 Minecraft 世界中选择块以进行删除或导出的工具。',
        href: 'https://github.com/Querz/mcaselector',
        favicon: ''
      },
      { title: 'amuletmc Minecraft 世界编辑器和转换器', href: 'https://www.amuletmc.com/', favicon: '' }
    ]
  }
]
</script>

<style lang="less" scoped>
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
    span {
      max-width: 280px;
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
