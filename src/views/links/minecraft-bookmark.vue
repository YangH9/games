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
        <img v-lazy="item.favicon" class="icon" referrer="no-referrer" @error="e => e.target.classList.add('d_hidden')" />
      </template>
      {{ item.title }}
    </a-button>
  </a-card>
</template>

<script setup>
const dataList = [
  {
    title: '组包',
    list: [
      {
        title: 'Essentials',
        href: 'https://www.lanzous.com/b278009/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABP0lEQVQ4jY3RsUocYRTF8f+5M7sbM4XJSiApQ1IJaitaLjbbpAukiLExTYpAHiVdfInUFla2toKtr6DgoDPfPTYSdlkHctvv/OC758rfGRgBxiAkKchCOobiAFhIEZTkridh8qIeDAsMCtrCdIPdQ2/P9ebDMLBR+L6wc6DDP2y8x0ZaAkZERSaYaqT2ga2Zfvxl3JBFAMsAobangkq+feD1K3357XGj7Imn5CKQOrP32ftHGr3k/MSjNb3bJMu/9AKIirYwO+briWxL+rhPewNWLDVZAyhIu5kw+ymgdIpAQTNd7SKsIPFdorGaqcFVTdRI2Kugpksmjebf2PnktXVAejoBeq7u/PU2r85sO9POzLTT6eyLM70y5OWpbZfOpV98KN29s6wCpS0XCGvoE8tLA1Y8s90Q0PWFkPhf8ghEgb0PDsbHlwAAAABJRU5ErkJggg=='
      },
      {
        title: 'MC Colour Guide',
        href: 'http://ess.khhq.net/mc/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB2ElEQVQ4jW1SzWoTYRQ955vJTCKI0baWKiq4cVFoRejGd9CF4IO49i18AJ+lC1EXZiG6sC0ihbapaTuTpJlkfr65x8UkIQW/xYWPc8+553AvJQFoKkkzkQAgmYQgCJYQAAAhFk8SyaIofO3jqJWkIzq3ubH+f8LyL2g2m1odTfOiHceSCGCBAnBL+abWtZEU4BwgERAJqWm4QWjEvJkLApMYhB4SQAC8aUkSQRACrgYDBGHYirJJNh2PNrrdTqctg6CGEzYBBCNdVZV/P35gehnFbV+WZZFn7963t3chA92NCRAETfqn0eAkHl6gqtpR7Ou6+n2A7V1B0HzCIoMZgPHhLz9MK1+XRTmbZMXk+vrgB0i6AGSTO5zHdSSZ/zkMZpnK3Oe5zwuS6bcvRXLVvrcGMzoHIJzHJ6u6Tn5+L9NhPUwhKyaZgjA/Pd/6tP/o1RuZgSTpJEGimF8M+r3eIB1fJsMkScelH+VVmebJ5/1GsbHkJJkZiKODo+PkGq0WqOhWHMFi2MTjOKsaF/PQJOmcpLtPnmpnbwa17nS2nj/D+lrR7fqXew9ev12uGQA1X7tIN+qf9Xtfq/OT0JGtOFy/v7nz4vbDx0sCSZoZF/64cmSrV7wK/QPWBzcZ1QoqvAAAAABJRU5ErkJggg=='
      },
      {
        title: 'Blessing Skin',
        href: 'https://skin.prinzeugen.net/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChElEQVQ4ja2Tu28UZxTFf/ebWRZ5ZhaxZm0SJSIyokFOkMJLdIiGVPkLaKLIVGkSJf9AqtSOEiGgIoAU+kiR0oB4yAvCEsgNEBCPEDu7492157Ezu998lwISLGI6TnGLc849zbkX3j1aIewNN+db/+NloyEIgnB2tnEH68Dnk3Z7qQNw+PDsFOLdRWFpaW1flmUpdFMAH+Dgwb07nfNuR9u2RKd+/iBKr95ibr6xCEd3wWWsNYsXL+2ZAmXuiz/vP31cJNmwtb/b7a74QGS82sK5i3veD0NDUB+7aqKSSpPt0G/CNGFktgeBaBDW9Pz53dHz31aiEz/IQhc+9qEpwOS2oNKJyNeyjGT6s+P8eiitn/zy0QOA02dn6vW6UI6cNCbU5aEKyiQ0xYeWMrKrf//entj1+THZMfkTaI5435lfLsw0EI8gEECUomD1WlsGa1YxW1ahpwbuJQ+fpke+PhOVxRAxZPQG34utMo0aNQ1DUUXUllaGN26SD0qZm6+Vyx17BEgMQBw/6T97vtZf/uOy9la/wdFRVSPWqliroooYD9WxJS1Fk4J+nsd9APOqwzKN1w98e7aRpGWJZ8x/5cqr6VWWtBTm5v0kzasDQLkxQOM8H/zVSVw1cnieqPGMIoJ4HloUml5rqystWSkujuMBoBsDgGaN8ag2vLFAlRdUIytYq2441PUrbXF5ge+Db6QGzdq/W/7rgJ4zMj1Y75dBeOW6OicOQVDw7dh5viFZF1F0AD23ySlDELR2znxoFk9/NX4v3KpU1UvZ84W0gJM/+suPnrlPs6y7smnAS0xN7/7I3BQkVFUFEEEU0oeP3SHo/POWZ9qIHRG4NzSjECdvOl8AWc44xcv72r0AAAAASUVORK5CYII='
      },
      {
        title:
          '[角色]SkinsRestorer —— 老牌皮肤显示插件[1.8+ 中文|持续更新|支持Sponge] - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-805404-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: '[1.14.4][官服]MCDaemon-go+Carpet——纯净服务端解决方案 - 服务端整合包 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-944510-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: '我的世界服务器_我的世界找服网',
        href: 'https://www.fansmc.com/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+klEQVQ4jW2TTWtdVRiF17s/zjn7nnvPTUhCVSJORJ2LtakoDgURCR1Iwb8gpToQKZTQiaBI6S8QitPSiaKICA5srRMnDTpKbUohTXK/ztc9++yP10Fb6SDvZE3eZ43WQ3h6OxBPMgLA+5+/c1YP0ssmT1HW7ZUfdn69ddIfPcEJAAPAB5fePaOUvEBCbDOQkiC4zlmOfDMEd+3Hr37/41nmaQHOf/3eVvS4CCHOJXki6knNwcUoEwmOLDgymWEafcCNrmyufv/lb7cBgF4//8r65qsvfjMcmY+7xgqAIoODzhIZoyfXekituGuWwQyNFEqI4ENcHDXf7e/d+4ze/mTrdCZwR0iJ4apxiCS980RaAAGQiYDvI3QqED1zs+hCPW91c9yiPareVOPdIx9Ho6YeY2APKmU2x2zyFEIICjEg+gCpJGzreHFQwS69qh/MOCn7dnPuvHpZD1BXQZTW46i33DLIP1dQDIHzIgOBMH04RbU/I+8Dkjzl9QqUQ4lTr21AZcZQL5Y4pXNSpcfD+3Mg09yXS6rnS4S6h+0c9GTJydJBw1I2MDTIE9i+J3W8WCBJE2TGYFB4bJYes90FBonEQs5he4VhcBAQEDrFajGA8wF1a5F5DZUmCbsIzCYTdiHwsBjRRqKpWVoeNgGTziE3OSx5Uqnjxjou8gxRGRwcHrBoWwfbu7i2MkSiJJVlwy54jhxpbX1EuVEkZKTgHS+qjgdZQrOqRa45vvT8CtTKWqLaNuTHiwYvrI/dkQkS0cEkmtu2h3MM7i20YKiigHXBg1krwXnVByXGZnUvy/T1kUnj4bTS3nZoWuv7yMzpEDEGmFTzxurIi+ggEfUgTeLxvL3+5917e/9P+Yvt01sPlvLiWurOiRjEtLa8UuTxn/1HECQEk6A8VTHV8sa0bK/+9Nf92yfKdOmjt85My+qCFGJ7PDTp7r+HkJJsG9RNB7r2y52/T5ZpBxA7j0sYAD798I2zj2bl5c5FFKP0yrc/3731DEjAY53/A8O0ovZPiD8fAAAAAElFTkSuQmCC'
      }
    ]
  },
  {
    title: 'DataPackage',
    list: [
      {
        title: 'Towns &amp; Towers - Structure Overhaul Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/towns-amp-towers-structure-overhaul/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'Moss Ruins Datapack Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/moss-ruins-datapack/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'ChoiceTheorem&#39;s Overhauled villages for 1.18.2 Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/choicetheorem-s-overhauled-villages-for-1-18/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'TreeCapitator Minecraft 数据包',
        href: 'https://www.planetminecraft.com/data-pack/treecapitator-datapack-1-13/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'Terralith Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/terralith-overworld-evolved-100-biomes-caves-and-more/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'BlazeandCave&#39;s Advancements Pack [1.18 Datapack] Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/blazeandcave-s-advancements-pack-1-12/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'Incendium ~ Nether Expansion [Now 1.18!] Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/incendium-nether-expansion/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'WASD Moar Swords [Datapack] 1.18.2 Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/moar-swords-4511250/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title:
          'FokaStudio&#39;s Ender Expansion ~ Harder End, New Biomes and More! [Now PROPERLY on 1.18.2!] Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/fokastudio-s-ender-expansion/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      },
      {
        title: 'Bubblellaneous | Furniture, Security, Food &amp; More Minecraft Data Pack',
        href: 'https://www.planetminecraft.com/data-pack/bubblellaneous/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jUXUy49TZRiA8ef9vu/0nLbTmYoDwzUzwAIERwkhKqCYGONlMxqjiTGujBt3JEqEkBg1RoUViSS64x9ww8JEF0bECysSRsBgEEagZtrpXGhP23NOe873utH4/A+/R/i/YPzg1lq33cjdga+OS2XyhM+SkfcREk4EJm18NrPw1udpfa9rLF+PucwIQADHHszsPt63kTmad2y+YX+1tv7RUjkdqN64+xPe7hBz75PELnwa21rgfJqcuX6NU/yOt4DumOW9zU+EH00fqVS3Hkiq66bToMjOUg2flkwOyfpahNQPBYz1q1vqF8saBE9F3ierN/nZAVp4gjBSNzVVyZ6ZfLcUBZbLdx+SX28/joiqCGLEaFw+Slns0HROh6IEgBrmztcoRWEpLLRejsxLMx/I89tOyv5NOab0PaKIoogOBRljJTgVDtwL6gzhrrnJmoGgUT38yrGNuwtJet61kga9YUI7PsRw9BjGQDoCW6qwYV1VqlGhnckvJNwUHROz3HBgxqtVR31C6MW5nLk2Q9L7kIXWSXpFFYDICYJQeEOW9GWYCxgTihA6fKGgiIo4t6it7kFZWjtCP/cgEBpDYDy5CuDJiXTcXBLHUBNvcBjnBbUqkd78+7yM/Hb62U6cTbE4IqcYEUa5Ah7VUGruNzWSC+LU4FPrc1sUeSJReEXjdCdlBxUTERkH5GRFTmcwpBOniMa6mL4uWe4Ur1jxS3PN1sNbWrxZbN3wpVlZHaMUdJmZOkcpuEK7d5hO35KkPYrRiNZSW7qLd7R7oyFpsyIWN3ZVNx+YTide3b6cvKNRuZB1E1/Lgw+cwtgfKXREWJqntTpLPEg1zwuGWe4Hzd7QrVx9zbF09RK9xoXhvW+fXe5uymK3q2S23NfyfSQpShrYjxmzSNEstL04S1AVr+0/Lb2FdvzXrfMWsAxWQ3XRG16CIGvOSzKsSMkPsZ1bMlgNxccFa61M1ha3ic+axi/9Aa3508S7fxHAAJ49L7+IyDkZxVY3Pllh4yOVcX9Rp91Z+nav3Ln7nC+a82sE5RHGvs211e/gQiH/UhZAqc/UMVOeXfuOUxo/wbA8qpkfnDd16Xc3d2l8s4eVrAPt3n8P+AdF240SYiobTwAAAABJRU5ErkJggg=='
      }
    ]
  },
  {
    title: '资源包',
    list: [
      {
        title: '天空材质包Realistic Sky Resource Pack',
        href: 'https://fireeaglefegaming.wixsite.com/myresourcepacks/realisticsky',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jbVSoevyUBR99+3hBHGiICyIaVimZawIKlaDf4IgBkEwCSImEZtB/wNhySbKgmYFy4pFxSazCNMgIoLuvfcL+z75fdHwnXQO3HMPl3OBMYa+AXDOvzIQLwEAEEKc8w/5ZysAQogxhjH+k/CxMcYAAGP8meZ/IQgCQogcj0efzyfLMsbYdV1CCELodDp5HsdxVFUFAELIdrsNh8PYsqxKpYIxns/nmqat1+vX61Wv13u9nmEYpmlWq1VCyGQyqdVqjDGcz+ev1+tutzNNU5Ik0zQty6KURiKRy+XSbDb3+/1wOBwMBu12OxaL4Wg0qijKdDq93W7dbte27cVikUqlZFl+PB5+v7/f77darUwmUygU3u835pzncrnRaCSKYiaTeT6f4/E4m81yzr0zVqtVKpU6HA73+50QggFA13XbtlVVFUUxkUicz2dd1x3H8fl8y+XSMIzZbBYKhRqNBqVU6HQ6wWBQEIRSqSRJUjweDwQCxWLxer0mk8nNZlMulzVNS6fTlmUpigKUUgD4Xc1v4oFS6pXgui4wxjjnn748KQjC7yo/EmMM//f5OOfkKwMA/AAP6O3bcqxHKAAAAABJRU5ErkJggg=='
      },
      {
        title:
          '反射材质包Poudingue/Vanilla-Normals-Renewed-1.12: Vanilla Normals made compatible with SEUS renewed (and other PBR minecraft shaders) for Minecraft &lt; 1.13',
        href: 'https://github.com/Poudingue/Vanilla-Normals-Renewed-1.12',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC'
      },
      {
        title: '方块模型 - 翻译&amp;Wiki - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=374919',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: '教程/制作资源包 - Minecraft Wiki，最详细的官方我的世界百科',
        href: 'https://minecraft-zh.gamepedia.com/%E6%95%99%E7%A8%8B/%E5%88%B6%E4%BD%9C%E8%B5%84%E6%BA%90%E5%8C%85',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvUlEQVQ4jY2Tu4tcZQDFf9937/3u+85m9pndzRq2SBRsNI11srWSFfwPRAxaqYWdYJtCJARS2FpYZP8AC0slGBRBRWHHOJPZ2ex153F37mPu67MQNoKweLoDh8OvOAcu0Lv339r75Jv39y7KiH+bL5O7K19/8d3bXsd5M53kNwzLQJqSpqrRbfu4ani4/8HNB/vivdPzgjtf3dkI3PLDbLK4vcir3SB0qWtNMS9o6xbDFCAkRVri+BZux6VpRK+77B/0/zi+K17/6NbCizwVXPKxfUWZl0gpEaagKRu8yCGd5liuhW41utWks5y6qPj120PM0dFYdtKSw5+eEnZctq5vYFgGfseh1jVN3SKAMisZ/DxiNp2TjBIMpUjn2acC4OYbr+peMmFteYlwyQXADR2aViNbTdwfc9IfozwT5Ts4vsWzR3+2g2FimABXkwpLunhPUp68CBuXVzg+jHHXPPo/DHEiBVVNPspJ7Yyu4XPZ8RiQYAIsWvSqvy6S0z7B98846+bsSpN5PiPKBSpJ6dqKJC2IhMJ2WmplAvxT4NgWkV1hrUVcC9apG81oknC1shjMUsLQZ1EZbG91OctLaqGZZQUAEmCWFxzFEwbHY34f/kXeVKA1wlN0Q5dO4OApzdN4dj6e7e2t5wQSuL6zThz5nIzPSOcLuoHHUTyjqBv68ZS2bXGVRSd0GcUzpDx7TmBIyTCe4iiJ6qwS+DZaQHdzB0MIliOXK6uXcAKPadYghMCxDH1OkC0qLaQhynJOli1oDJOirvG9krJuEKVASgNFQ1HXKNMgK0t5TvDyC+ufB7boTbXP7uYKQeCwshRwbWcVNDRNy1GcMM9qwsBBmqIXusZn/znTvY9vL//2y+Cd4cl8PwqcG65t8WNvxJLnMF3ox8oOH3avqAcHB49O+T+69cru3msvbV54578BRjUxdCPZETIAAAAASUVORK5CYII='
      },
      {
        title: '模型 - Minecraft Wiki，最详细的官方我的世界百科',
        href: 'https://minecraft-zh.gamepedia.com/%E6%A8%A1%E5%9E%8B',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvUlEQVQ4jY2Tu4tcZQDFf9937/3u+85m9pndzRq2SBRsNI11srWSFfwPRAxaqYWdYJtCJARS2FpYZP8AC0slGBRBRWHHOJPZ2ex153F37mPu67MQNoKweLoDh8OvOAcu0Lv339r75Jv39y7KiH+bL5O7K19/8d3bXsd5M53kNwzLQJqSpqrRbfu4ani4/8HNB/vivdPzgjtf3dkI3PLDbLK4vcir3SB0qWtNMS9o6xbDFCAkRVri+BZux6VpRK+77B/0/zi+K17/6NbCizwVXPKxfUWZl0gpEaagKRu8yCGd5liuhW41utWks5y6qPj120PM0dFYdtKSw5+eEnZctq5vYFgGfseh1jVN3SKAMisZ/DxiNp2TjBIMpUjn2acC4OYbr+peMmFteYlwyQXADR2aViNbTdwfc9IfozwT5Ts4vsWzR3+2g2FimABXkwpLunhPUp68CBuXVzg+jHHXPPo/DHEiBVVNPspJ7Yyu4XPZ8RiQYAIsWvSqvy6S0z7B98846+bsSpN5PiPKBSpJ6dqKJC2IhMJ2WmplAvxT4NgWkV1hrUVcC9apG81oknC1shjMUsLQZ1EZbG91OctLaqGZZQUAEmCWFxzFEwbHY34f/kXeVKA1wlN0Q5dO4OApzdN4dj6e7e2t5wQSuL6zThz5nIzPSOcLuoHHUTyjqBv68ZS2bXGVRSd0GcUzpDx7TmBIyTCe4iiJ6qwS+DZaQHdzB0MIliOXK6uXcAKPadYghMCxDH1OkC0qLaQhynJOli1oDJOirvG9krJuEKVASgNFQ1HXKNMgK0t5TvDyC+ufB7boTbXP7uYKQeCwshRwbWcVNDRNy1GcMM9qwsBBmqIXusZn/znTvY9vL//2y+Cd4cl8PwqcG65t8WNvxJLnMF3ox8oOH3avqAcHB49O+T+69cru3msvbV54578BRjUxdCPZETIAAAAASUVORK5CYII='
      },
      {
        title: 'SEUS-PTGI-sonicether | yiff.party',
        href: 'https://yiff.party/patreon/4847727',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADCUlEQVQ4jWWTTWhcZRSG33Pud3/MzOTPNGWkxIXVohQKBRdRqknc6y4LF1VMoXsX6XbAXQp1IQgl7VpoUXDhIqB2Cq0JKFLRTekmo5mOyWQmJvN/73fP6yKxKJ7d4fC+cHh4BMcjAAgAN374+W0DVyy3RfqsDAAaRk9FpaqQ2x+/cfH+vzNysqBy505x4sWX18x4RUTCbDQCT0oFkDCOQTJTlVuHtSerleXl7vGNlEq1WihG418nhbGlTvvARGjQQDVLhWbAc2O0LDNAtDQ9pcNe//tuevReZWGhpxBhISqtJYXCUqfdGokKAmPQT8bk4ua3eOWbuzgwShRoICrotFujpFBYKkSlNYhQ1jZ/fFOpVZ+mEBEVM8k1QNLtYPn2J5IHI3x26UMmZ89ivFhCbkYA5qIIJumCiuGqijrw5F0a0ijGhc0NiVpdTr20z7dqW1Kv7+KouQcVFZBQUSfmriqNiz5LCRGVPEcWxjhV35ZXHz1kiqIMEpX5mQc802jJbruJg0Ydoqp5lpE5F9W8L5sZ5BgLcudwYes7hsOBMFLk+2Monq/Lpac/0YIYnXYTe7/XxPsMpJUVz6ASuQsx3m5i7slvyOIEqjmkHSKdEbxW+BXT+x1YnGDYOcRebRt+NISqcw1VBYzMncNkaxdRvytQR1GDdR3MHItze3Lqr0P4QBEGjj5L0dzZaaio3HNhJAQNJHwYQURpEJGAlF7I7PGEsB8yjRyEBGkWRpHQ8qpS/U2jeWoAl6VsluewXz6DsW6HuTrxCST64jRrv5xHvTyNOPWkKGj0meCmrs7PPyS5Xpyccsh9ZmHI++9eRnO2jKTfY9GP2BifwZevvwMGAWmWJaVxR3D985UPHjiQ0qtWVwVyrvD8zFKv1bbW7Av5Vx9d09KjLUkHPdROz3EYRhb5TJOJiXg06N/Lhp1VAPJMpusbGwU3OXvdjFcUCFPvMYBwv74DHh5IEscwoxcN1v/Yfrx6t1Lp/qPk/3QGuJL7fJF5VgaBVvPPxuCoWw3i8Nanl9//j85/A1z9qhXmWKTSAAAAAElFTkSuQmCC'
      },
      {
        title: 'Nova Skin - Minecraft Wallpaper Generator with custom skins',
        href: 'http://minecraft.novaskin.me/wallpapers/mobile',
        favicon: ''
      },
      {
        title: '首页 - 我的世界皮肤站 - Minecraft SkinMe',
        href: 'http://www.skinme.cc/skinme/user/home/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC2klEQVQ4jT2TT2jcVRSFv/vey2QmM51OkgmNWhBRbKG6UKN2IYp27UKtG7soInTlQgT3uhF04VZcKUjEhSDFP7vQhQhqUlFRC0pQQxE1mTTJZCbz+71373Ux1bM/58DhO/LW7yvrIcqKqRmI4EiQCAiIIy6oZcblADfHcW+klrcaraDFN5IIK6UyCAjmAsKR7lM0IwSKZtpxifsXn8MNEg3ZGn3LX8NrtNvtlZQrNXcCigh4nYvcffwc3XQL6kpdJtzWPsODCxf4T+9897wMxxWN2LJUsovjxBB9NDmUu449ytMn3yQy97/BqZnoPkkaDOotfvjlqrf6QUouEkpWseLkuohWkQf653EXhvo32Yesb33KF5sf04xzpJC4PthkZzAQCORsErQYWpS6yng9Q6+1TMUQo2Ay4aMr77F/uMvO5DcGR3/w89Y6JhUxBqwYKWdFRFBVtE4gTs0YlUxw49lzF3lj9RXevvwazWaT1FLmT3RwDFUIJRslG67C8HCPa39+zYwImTEj3+P0yXt54amXiHOF5mJFbzky103gU188e6H3qpthBrnO/PTr99yxfA+LnT6VjziyEXcunabT7rC5vcGxXpM4I7g7bk7I2cjZKLUykxpM2OX11Rf58sc1GhLJjNnzf3jozBMk6zKZVJgaWpyclaDlZkBRzJS5zixHbHNQDVDJ1D4GMrsH29zYHZGraZkWQ7ORSjHcnSCCujEcDnnmsUucve8Rdsp1cOhIhw8vv8/B4Q16vkAu0+HdnVTylF8VczTI+Ydf5vFTTzJml0bq0aHL51+tceXqZ9x+qoe7ohocM0HwZEVdRCRrlvnmrX54MJYP1t6lPjK0QCCw9s0nzC/N0mgKLu6WTRxHEJeLqyfcbUpsNSmyO9hnvG9UI6NkCAn6S12OL84y0xJiEhAcR2ISkmbbkCgrpu4xRvoLfdGu37wuBBEIRkhM3+bmGC5BpNS28S/uTL8BQh+LZgAAAABJRU5ErkJggg=='
      },
      {
        title: '南烛Nan2uu正在创作我的世界Minecraft 彩虹像素 RainbowPixel~☆材质包 | 爱发电',
        href: 'https://afdian.net/@Nan2uu',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB8UlEQVQ4jZWS3UpUcRTF1/5/nJkJ04rCsg/SNC2wQoKinqKH6QV6jW66q8ugbuqiIihIhLCQpIYSJdNKR2eOc86Zc/baXTghYRCtqw2LH5vFWnL/Tgf/o0ASgDgYAQPkn4ASQLljIREfYQQEMAD9w2zfByNGrySnL0bn7OWDbpHTewFghDjEmojsYaHIeGI8Tt1IvEenZZPXkxDFB2gFLa21rqvNEgYfZZcJ4mxrvff9S+gV1t7Qostum1mHQ0eD8zgyEkbON96/yHbaGqLAIHdvr7EyH2VkPB4aDs7DB/FBerm9e97NU565kIxfrc8+TsueOSeOSjirSn6ez988ah8eDmOXammrmn+WkmwMYmkh/9oszs3Ui0zN6JSmlZmZwU5NJuLs6b3W3JNU1VStLM0nWG0WSQOkkeaoJFmV9NHGLtdfPWwD1hgAwJAYlWacmGlQTZWqdCRJKhVCg3U2y29LRdZVH23omEu3ej7B2ena6HT9+FjIM+0XJw7pNleb+c1bgwuvdzobVZHpjxWenKhNXRtovu1urlXbP0snDKQBABEiPsym7Y1ybPqA8zBCPKj4OJcuL+biJEYR93tL/RYjVj7ly4tZ/aCPUbSybkdFJGkIYEYz/gnsMkhQFtrLTJzEOmCm1d6e+hn+KqPtN38BxJxCkE4C4mkAAAAASUVORK5CYII='
      }
    ]
  },
  {
    title: '插件',
    list: [
      {
        title: '开放登录 [1.7X -1.18X] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/openlogin-1-7x-1-18x.57272/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'Bukkit 插件 - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4je2QMUtCYRSG33O/Dy/XhkIpLBwaJAiaJNxrCuHezampsaWl39AfyMmxoiXHq0ZFP6CgBqGhr8VIErSI0G4lek6TcEULGoPe7XDe87znHOBfFC6y2eyaZVnHvwFo13UPmDkJAEREALoAIgODBWBS9fDS18PJRA1mPtQikiciH8DMuISFSAAFGQIw875SarNcLgdWqVS6dBxnUUR2ROR+BDD7Bm+piajVBwAGYDKZzIbv+8HIDwAgl8tNB0FQJaKEN9dCPaKxnmigcD2P20+nJyK7lUplO3zikIrFYouIzgDAjT7zVvoO8ZZgeaINItJa65uwfwQw4AAw+Yek1biI4+nDxslrrAugzswmbFTjpo0xJpVKTTXZXj1vx3DajuFdlAJw1Ol0CrVajX8EeJ63AmBvTCtt2/ajMebqm83/or4AxPJ5JdyCsXEAAAAASUVORK5CYII='
      },
      {
        title: 'GadgetsMenu [1.8 - 1.17.1] [免费] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/gadgetsmenu-1-8-1-17-1-free.10885/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'SoaromaSAC | 轻量级作弊检测系统 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/soaromasac-lightweight-cheat-detection-system.87702/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'WorldEdit | EngineHub',
        href: 'https://enginehub.org/worldedit/#downloads',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACC0lEQVQ4jV2SW0+TQRCGZ6bfof1abDFQMCYKRqEkcrCmBIgaEmIk6Y3eGG+NPwD+gP/ECxJvjCb+ACOJXpBiIo2xhIqtDULwHAHpubszXuxH27B3u/s++87MvphOLQMAAIgIIooIErYaSikd8lwRQAQBQPAXnVITYb3W7B+MJcYvqpYCYBFBEegGutRUqzQuXTk/mRrpH+idmZ9oNhQiduQGMGpAUEqHwu7ivdn9r79y2WJ8sNd2bBHpMgCS9oEAgNxYmHqx8joxMbz0+MFGJq+1RkTELgARRYCIatXGtdRoYWt358v3Pz8OspntYn7PcW1m6SbopNHG2PhQcjZRrzfnF5ORM14o7CIZoZg+OwAiMsvQ5XOfcjv3H94uFb4V8ru2YwEiACD6U+mUxCK2Y2XfbVtW4NmTV6X8PhFpxdVyTWs2f9B2wHRq2WyE5fDv8a07yZmbV0uFfSSKxsJE+Hxl1bxuTKx2SZYdCHrBvnhscnokOZf4/fPwwvDA+7U8ETIzkf/Flh8HFBERZkD4uFHoi8d6ot7a6odTIwIAy3iZC611OBxcf5Nbf7sZPRtRLfVo6W4nY6YkvxVEEbEd6/PW3kI6dXRQVkpPTY/+O6pUyrVIj8fMHQeDMIsXDm5mi65rX58bY83VSv3l00ww5DBzO694Em9/bkRYOa4rrRFBBCKREAXQhNww/wGmxRzmaxjfRQAAAABJRU5ErkJggg=='
      },
      {
        title: 'Jakllp/MyPet: This is not the main project - Please visit https://github.com/MyPetORG/MyPet',
        href: 'https://github.com/Jakllp/MyPet',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC'
      },
      {
        title: 'EssentialsX Info - Commands',
        href: 'https://essinfo.xeya.me/commands.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACXklEQVQ4jY2SP4tVVxTF19rn3PP+jkOMhWCbqCSVTYpUNn4ACaNVQAjYWIgEAkNCeBYBAxYWEREUUvs+gJ2NXQgICkFIkWAhYxyFmcybufeec/ZKMRpmwiuyy83ei99aexMHSgAJ6PnVq6eOpckvgVgRaomRzataLn78480HD9bWwoX5vL7fMSypFEtLoAedhAPuGAN7y2bjsiZrQyHTaxXhkBmqV/5vAbQtaqoI75xVE6B96t/mcx0cPWSBgABA29tSn4VcqL5QfVbbFQeAT9bWDpEcIngf4uTDaWTnCS5BksXASI6Xwf4nxBkBgH1YHxJHIC+UM5SsVfBr3bixemE+96UCms2MmPnmN99/OYn4qs1tgQrlxdxRRjV/9uz50x8ASAf2eBD95fr66WHbPk7SB12352h7o4iFZ20uduSRcTg9cvHT+z/PZ4DNAP9X4M/ZpcHKxvThKOjsnte+SSm4nK/fvMXm7o5SiD4OMXiyv+Lq9PPTP937QwBNgBHQZGP83Uj57G7b9iwe+rZlt7NQMujoYMgBYO5exhXHw1a58+vlu811gOE6oFdXrpxLpdzuSxYp5i4zdx1MzpFFjmMjGimAtXqZRjsVuLH7xZMnj7l57dqJuvj7UeN+si8155IDZYgpwChYFQiDG1Tk2OuzTA5Lgy4Mj56PWGx/u+J2civXnGuxYKYUAiBQAETbfy8XGyNiSmhLVXROPO/cirn6md0qL14xiAEBhEs0GCACFPaFCHMJJEdNg1prVc0f2Vbb/y6CKUYYAdBJEqJAEBDf3YoQSAoydyWjyf3FP5reVNjRFA/lAAAAAElFTkSuQmCC'
      },
      {
        title: '郝尼克 | 高级尼克插件 | 1.8 - 1.17 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/haonick-advanced-nick-plugin-1-8-1-17.81108/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'SkinsRestorer - Version History | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/skinsrestorer.2124/history',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'SkinFixer | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/skinfixer.82705/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'LuckPerms',
        href: 'https://luckperms.net/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADlElEQVQ4jVWTX2xTZRyG3993zmlPu56edtDRrbXCGJtubmTUkRAnYc4FHVncjUQvTEhchOilXsiliSZGJTEaiNGA3hkSgxqjIkP2zwtM1iH+maNQENqdbbTr2p62a3vO+T4v0IjvzZv34nnvHsK9EAABAJ3t8UGrxiaadPuA4nUiQgDWprRcLcrTiuScTqYX5u5n6J+B+EvwmucffTsQrR/rHs0r0f4S9GhNKG6O9b88lJnX8cf3zVYh7f5Ie2r+9cTHqP77wuJjbar5e9tX3SPFkeHjKe4Pc96oghlXvXRnwYc9z2aF1iJ4wZDYpXfa2eIP+qTWa4wnvjFqEgDhq3Wd6DlYfH7svev19LxPWl1SmR6u07lXd+K3L0NIJ/x05YstzB+u47GXVxr5lK8zM7fFny+tfCd1RPr3NcesU+PvX+PZpCqfPdpJ12eCaO0tw7iqkV1n1NiUcDfphbmmUM+hddbaW3Ru/hQcUJzwJHMc+Wj303k5GOW4MasTSQLgwJWzLRTuqQirxoRVYxSI1DH8WhqMgfxhG92jeZmE+xjz6M5Q+/4NsXShif38aStUP4fkErS66BP2JiNF5RTdbYqR47epnHPj16+b4TTAIntKwqvbQ7LbZ7V5Aw3YDRdJLo7NggRv0Bayyil5KQhF5XD5OM18GBXFjBs1UwJJgrbvLUHx2G0yY4BVY4j0VfHCZ0vYMFRUsjLSCR9SswHIKr/Xbg5Vc+AJ2AhE63AsAhHA6mXZqORdEIBQvA5SMzrmTkbo2sVm0bTVQv/hu3hkLCvqpkSOTdC2NRDrr4qi4UGjKhussiFPZeZ10kLgl8+Ecfl0GIxBKG5OispF0XCJB+Jl6n0mJ0qrLqh+G8wNvrzgp+qGPCUF9K2r1ZznyK4n1qGFLMrdUqluSnAsBlnltO2hTUonNHHordtofrCG+HNZ4dRJ/PhujFdKzitSwVzLeCkWqqx69w0cWWv0jeeYJ2DRjekAup4sYMdgCbMfRNA1nMeuA2Wh+Lh14Y0O150F78mbmV8+kQCwHfsxbVwODeRTTV1tu0ui4/EKf3g0R11DBXJ5HGhhS8T2mrySU+jimzuVxUl90t+3MrGSNB0JgFhJmtb2w8a55fPt/tRsMF7OKopHd8hpELhN8LU47M9vQ2zqRMxOJ5pOaQfnJxKfm9X7bfxP51h80LbZix6/PeTWnAgA1Irycq0kTcke50zy1v91/hsdIqXUKRnwgQAAAABJRU5ErkJggg=='
      },
      {
        title: 'FartherViewDistance | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/fartherviewdistance.84950/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: '洞察 - 超级可配置（区域）限制 + 异步扫描 [1.18] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/insights-super-configurable-region-limits-asynchronous-scans-1-18.56489/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'Files - EssentialsX - Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/projects/essentialsx/files',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADXElEQVQ4jV2PW0xbdQCHv9NzTm+jNzpuG21jZJZSKEUIY9kNYzQbiVOjiW9q4ouJPs0X92yyFxMNPkzjAzEqmwm6ySQSdUrCHqouRpbIraWwCo4eabn0Qjk9Pf37omb6Jb+37+H7SfyPzu5Yrg7WulFHlmQC7UEUu0ytboIQ929NT3U+6CsAXV19r+4U9XONTQ7HhbM9frtppWrqSB4Tu81BfddCo9sHLjVcFfWb5T293ux1T0xP3xhXOju7Lw0N+i4danC5immdx5ZSBIJe7CMBan0NGDsVuLODdT7LTt7J7kD0qUCHk5Xle0PpdFdQcbm9l3VhcLLN5ESrE+dKCmdbAZsDpIobs9UKPfuYv6dpuHvA66HDZFwKd4xCi1m3XJZPnxp6Yz6j2uTsnwx35Mg/2438ZAfyeoX9LzJwxIUU8FBt9qPtQf6bBFdmNvg6Y9LkoKhksxrjH1whn9ui75kLVMUOY+ODvKCY/PJthoeO2GkM2phMVHj58zJWSeXNi68QkyRG3xtFEUKwpW3y6OAQH3/2JS6Hl+sz47w1cRWvVsM+do/t3AEnnn6YqbEoWxcn2U3+xqzDj6qqKEIIV9Wo4Wk4xMgTZ5EtFiqfjqKXJNrefZ/qehat5OTxyBon3XdZev4lvt93cz+Vxmq1uuRIJNKuqmqTEMJjkRW8Hg/Hqho9He2Ezj/HmXiEM8PH6TjQKc2s8VHLafD4kAr59OLS8nU5nU5/pWlavFwu946cPweShB4bYtUXIpm4TXl/n9XVJPmtItiP8nNqmczyAvn89ieJROI1C4Db7Xb7/X5qpkkqlUKpVjne9QjdvXF0XWcvu8nqgU7C5cehyBT29lhbW/MAWACEEIdtNhsejwcA6e8JIVBVFUtrAN/8jwz/OoWQFcKxXqLRqB9ABojH4/O5XG57Y2Pj1MDAAEIItre3MQyDfD5PqVhE1Ay0SpWJ2z/R2tL8YWtLyzuzs7ObMkAymfzD7/eL9fX1F2OxGF6vF5/Ph91uR9M0zP0S7mPdFJuD3Lp5g7ymvX312rXv/i0A6O/vP+pwOMKpVCpYKpUAmJubY3FxEW1rC2HoDEQjLCwszCwnkz8UCoWVf+7+h3A4nBNCWBVFwTAMrFYrAKqqEgqFNicnJ8MP+n8BaK12V+BeXx0AAAAASUVORK5CYII='
      },
      {
        title: 'Files - WorldEdit for Bukkit - Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/projects/worldedit/files',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADXElEQVQ4jV2PW0xbdQCHv9NzTm+jNzpuG21jZJZSKEUIY9kNYzQbiVOjiW9q4ouJPs0X92yyFxMNPkzjAzEqmwm6ySQSdUrCHqouRpbIraWwCo4eabn0Qjk9Pf37omb6Jb+37+H7SfyPzu5Yrg7WulFHlmQC7UEUu0ytboIQ929NT3U+6CsAXV19r+4U9XONTQ7HhbM9frtppWrqSB4Tu81BfddCo9sHLjVcFfWb5T293ux1T0xP3xhXOju7Lw0N+i4danC5immdx5ZSBIJe7CMBan0NGDsVuLODdT7LTt7J7kD0qUCHk5Xle0PpdFdQcbm9l3VhcLLN5ESrE+dKCmdbAZsDpIobs9UKPfuYv6dpuHvA66HDZFwKd4xCi1m3XJZPnxp6Yz6j2uTsnwx35Mg/2438ZAfyeoX9LzJwxIUU8FBt9qPtQf6bBFdmNvg6Y9LkoKhksxrjH1whn9ui75kLVMUOY+ODvKCY/PJthoeO2GkM2phMVHj58zJWSeXNi68QkyRG3xtFEUKwpW3y6OAQH3/2JS6Hl+sz47w1cRWvVsM+do/t3AEnnn6YqbEoWxcn2U3+xqzDj6qqKEIIV9Wo4Wk4xMgTZ5EtFiqfjqKXJNrefZ/qehat5OTxyBon3XdZev4lvt93cz+Vxmq1uuRIJNKuqmqTEMJjkRW8Hg/Hqho9He2Ezj/HmXiEM8PH6TjQKc2s8VHLafD4kAr59OLS8nU5nU5/pWlavFwu946cPweShB4bYtUXIpm4TXl/n9XVJPmtItiP8nNqmczyAvn89ieJROI1C4Db7Xb7/X5qpkkqlUKpVjne9QjdvXF0XWcvu8nqgU7C5cehyBT29lhbW/MAWACEEIdtNhsejwcA6e8JIVBVFUtrAN/8jwz/OoWQFcKxXqLRqB9ABojH4/O5XG57Y2Pj1MDAAEIItre3MQyDfD5PqVhE1Ay0SpWJ2z/R2tL8YWtLyzuzs7ObMkAymfzD7/eL9fX1F2OxGF6vF5/Ph91uR9M0zP0S7mPdFJuD3Lp5g7ymvX312rXv/i0A6O/vP+pwOMKpVCpYKpUAmJubY3FxEW1rC2HoDEQjLCwszCwnkz8UCoWVf+7+h3A4nBNCWBVFwTAMrFYrAKqqEgqFNicnJ8MP+n8BaK12V+BeXx0AAAAASUVORK5CYII='
      },
      {
        title: 'Release ProtocolLib v4.7.0 · dmulloy2/ProtocolLib',
        href: 'https://github.com/dmulloy2/ProtocolLib/releases/tag/4.7.0',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC'
      },
      {
        title: 'Spigot | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/categories/spigot.4/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'BanItem [1.7-1.18+] | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/banitem-1-7-1-18.67701/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title:
          '[管理|安全|修正]BanItem——一款有新型有特色的轻量级封禁物品插件[1.7-1.15] - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-976724-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: 'Files - Multiverse-Core - Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/projects/multiverse-core/files',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADXElEQVQ4jV2PW0xbdQCHv9NzTm+jNzpuG21jZJZSKEUIY9kNYzQbiVOjiW9q4ouJPs0X92yyFxMNPkzjAzEqmwm6ySQSdUrCHqouRpbIraWwCo4eabn0Qjk9Pf37omb6Jb+37+H7SfyPzu5Yrg7WulFHlmQC7UEUu0ytboIQ929NT3U+6CsAXV19r+4U9XONTQ7HhbM9frtppWrqSB4Tu81BfddCo9sHLjVcFfWb5T293ux1T0xP3xhXOju7Lw0N+i4danC5immdx5ZSBIJe7CMBan0NGDsVuLODdT7LTt7J7kD0qUCHk5Xle0PpdFdQcbm9l3VhcLLN5ESrE+dKCmdbAZsDpIobs9UKPfuYv6dpuHvA66HDZFwKd4xCi1m3XJZPnxp6Yz6j2uTsnwx35Mg/2438ZAfyeoX9LzJwxIUU8FBt9qPtQf6bBFdmNvg6Y9LkoKhksxrjH1whn9ui75kLVMUOY+ODvKCY/PJthoeO2GkM2phMVHj58zJWSeXNi68QkyRG3xtFEUKwpW3y6OAQH3/2JS6Hl+sz47w1cRWvVsM+do/t3AEnnn6YqbEoWxcn2U3+xqzDj6qqKEIIV9Wo4Wk4xMgTZ5EtFiqfjqKXJNrefZ/qehat5OTxyBon3XdZev4lvt93cz+Vxmq1uuRIJNKuqmqTEMJjkRW8Hg/Hqho9He2Ezj/HmXiEM8PH6TjQKc2s8VHLafD4kAr59OLS8nU5nU5/pWlavFwu946cPweShB4bYtUXIpm4TXl/n9XVJPmtItiP8nNqmczyAvn89ieJROI1C4Db7Xb7/X5qpkkqlUKpVjne9QjdvXF0XWcvu8nqgU7C5cehyBT29lhbW/MAWACEEIdtNhsejwcA6e8JIVBVFUtrAN/8jwz/OoWQFcKxXqLRqB9ABojH4/O5XG57Y2Pj1MDAAEIItre3MQyDfD5PqVhE1Ay0SpWJ2z/R2tL8YWtLyzuzs7ObMkAymfzD7/eL9fX1F2OxGF6vF5/Ph91uR9M0zP0S7mPdFJuD3Lp5g7ymvX312rXv/i0A6O/vP+pwOMKpVCpYKpUAmJubY3FxEW1rC2HoDEQjLCwszCwnkz8UCoWVf+7+h3A4nBNCWBVFwTAMrFYrAKqqEgqFNicnJ8MP+n8BaK12V+BeXx0AAAAASUVORK5CYII='
      },
      {
        title: 'MyWorlds | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/myworlds.39594/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/bukkit-plugins',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADXElEQVQ4jV2PW0xbdQCHv9NzTm+jNzpuG21jZJZSKEUIY9kNYzQbiVOjiW9q4ouJPs0X92yyFxMNPkzjAzEqmwm6ySQSdUrCHqouRpbIraWwCo4eabn0Qjk9Pf37omb6Jb+37+H7SfyPzu5Yrg7WulFHlmQC7UEUu0ytboIQ929NT3U+6CsAXV19r+4U9XONTQ7HhbM9frtppWrqSB4Tu81BfddCo9sHLjVcFfWb5T293ux1T0xP3xhXOju7Lw0N+i4danC5immdx5ZSBIJe7CMBan0NGDsVuLODdT7LTt7J7kD0qUCHk5Xle0PpdFdQcbm9l3VhcLLN5ESrE+dKCmdbAZsDpIobs9UKPfuYv6dpuHvA66HDZFwKd4xCi1m3XJZPnxp6Yz6j2uTsnwx35Mg/2438ZAfyeoX9LzJwxIUU8FBt9qPtQf6bBFdmNvg6Y9LkoKhksxrjH1whn9ui75kLVMUOY+ODvKCY/PJthoeO2GkM2phMVHj58zJWSeXNi68QkyRG3xtFEUKwpW3y6OAQH3/2JS6Hl+sz47w1cRWvVsM+do/t3AEnnn6YqbEoWxcn2U3+xqzDj6qqKEIIV9Wo4Wk4xMgTZ5EtFiqfjqKXJNrefZ/qehat5OTxyBon3XdZev4lvt93cz+Vxmq1uuRIJNKuqmqTEMJjkRW8Hg/Hqho9He2Ezj/HmXiEM8PH6TjQKc2s8VHLafD4kAr59OLS8nU5nU5/pWlavFwu946cPweShB4bYtUXIpm4TXl/n9XVJPmtItiP8nNqmczyAvn89ieJROI1C4Db7Xb7/X5qpkkqlUKpVjne9QjdvXF0XWcvu8nqgU7C5cehyBT29lhbW/MAWACEEIdtNhsejwcA6e8JIVBVFUtrAN/8jwz/OoWQFcKxXqLRqB9ABojH4/O5XG57Y2Pj1MDAAEIItre3MQyDfD5PqVhE1Ay0SpWJ2z/R2tL8YWtLyzuzs7ObMkAymfzD7/eL9fX1F2OxGF6vF5/Ph91uR9M0zP0S7mPdFJuD3Lp5g7ymvX312rXv/i0A6O/vP+pwOMKpVCpYKpUAmJubY3FxEW1rC2HoDEQjLCwszCwnkz8UCoWVf+7+h3A4nBNCWBVFwTAMrFYrAKqqEgqFNicnJ8MP+n8BaK12V+BeXx0AAAAASUVORK5CYII='
      },
      {
        title: 'McMMO - Minecraft插件百科',
        href: 'https://mineplugin.org/McMMO',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRklEQVQ4jYWSO2tUQRTHfzP37t1HNrhZs0LQSgMGE6Iiio8UCtFKbATBTqtUgvoBTMSvkEKwttJvYBHEIChoCol5GB8b8yCJSdxn7u69c8ZiZ4Mpoqc5w8yZ//nP7wz8J8ZAT3R1Dex37rcX/f0232gsZIwJI0l5ujhzYhXgTq5w8osN79Nr750JPuS2dLKRaBp/fv7UMoAGqwGstzgSMXMjlU0+pPH5Ylt4y+PaZqMyRZruhrZjvg2HdNI+ApQTaIU0y81arfheJK5sbWy+BrCgK9acnowTk3xS32JRP6OoOm3iaB16g7aABRAd2Gyyx8PzbT5PAmCjUDhaFoLxKJoaw2qtAvyEp7Xe7YvetaJjDRHaikqamgZYiu1wSeJpwIz+5bd1/4ja60CMxPEOYsU2QiUAVSXnZ5vNCYDHQGyMQBMRsbBk9zogpY1KG18lvKJcr1norovknoXhu9Y4lWgdqDjKCCqpYaE9xlsKwCrRqeDABaTcwcH0uZIht40urkEN4Njg4oCY5cO+kkGRagGInMALA6i51SdP0zvNzk69FZMZqb012QdzEr5yDlVpZbxYr8+Oap2MRMpvANnvcwFwGVL/LHChgOPAVWAVmAVixyYGhoBfwBWg4oAboMPl5z7QDdwE5oBh4ADw3e1HwApw2zX4ASRcTRr4qFocyAI9wCFgA6gDecBz3bJACOwAfcAyMAPUfGflN3AWuAt8pUW+C1h3ojlgDdgGLgEvgWKbQTsHQKez2H5r1fHoc2KbQMbxKQH2D/J590ziuCm+AAAAAElFTkSuQmCC'
      },
      {
        title: 'mcmmo - 搜索 - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/search?search=mcmmo',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4je2QMUtCYRSG33O/Dy/XhkIpLBwaJAiaJNxrCuHezampsaWl39AfyMmxoiXHq0ZFP6CgBqGhr8VIErSI0G4lek6TcEULGoPe7XDe87znHOBfFC6y2eyaZVnHvwFo13UPmDkJAEREALoAIgODBWBS9fDS18PJRA1mPtQikiciH8DMuISFSAAFGQIw875SarNcLgdWqVS6dBxnUUR2ROR+BDD7Bm+piajVBwAGYDKZzIbv+8HIDwAgl8tNB0FQJaKEN9dCPaKxnmigcD2P20+nJyK7lUplO3zikIrFYouIzgDAjT7zVvoO8ZZgeaINItJa65uwfwQw4AAw+Yek1biI4+nDxslrrAugzswmbFTjpo0xJpVKTTXZXj1vx3DajuFdlAJw1Ol0CrVajX8EeJ63AmBvTCtt2/ajMebqm83/or4AxPJ5JdyCsXEAAAAASUVORK5CYII='
      },
      {
        title: '[2022.1.8]剖开mcMMO给你看——mcMMOの要素解析＆配置教程 - 联机教程 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1290027',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title:
          '[信息][开源][SCT]mcMMO View —— 更好的显示mcmmo,支持高版本! - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1300127',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: '【wiki翻译】McMMO wiki 中文翻译 - 联机教程 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=552650',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: 'mcMMO [Jenkins]',
        href: 'https://popicraft.net/jenkins/job/mcMMO/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADhklEQVQ4jW3SXUxbZRwG8Of/vqf0lHZ042PUZZSuXWBA2eZGcawuY2PZzSYXJpot6K6MWbJ4MRNjYkyUSxc13njhR+JHjHFOI5tZIFu2wJQEjYMRkX21UAgttIV+cFrac3rO+3oDiRf+r5/fk+fiT/ifc9vdAfs2x0W/19PX+3x3q03hanwlPXdrdOK7pcTSFQClrSz9xxEAevX8wNuKTXkzsLu+fuDFPjR5dsCsVES5rLOpmaf45POrN+7dHruQBdYBSGUTMwDi1PETH/n2+C63+z3lc2ePQC9qYjmRIJfTQUQQvT1BBmL992eiX2aXl14CQHwLN9Y3vvBcd+jjYqlkhQ80s7rtKv/i+xEYhkn+Zg9ZloRhGHJd25CFQrH96UJ6WNdLcQZAAMD+A8FLre37FCEkcVg8lyvIcFcbens6pWFUJOeMiAih/XutK+++Lo+Hgkc2p0sCAKfTxR8+ikjTKJe9u+plrdtFwRYvirqgyX9iVCyW5MyjeRRKBkbGpohzqtksIAmgaj2z6mlwgRKJOK3lNBOQsISQkWgMf0zOwKHaKa9t0NDwPapWFQR8uwQAMCklAag7ezocONTuE+fP9DgUm8JBJE1TUNteLy6+cga2KhtOhg9K07Jky57dKOlmCQAUDA4SgEwqtbr82st9fkVhlhBS0XUDRATOCIzbkM5oUgqLnA4HW4wnsaEVsgDAB0dHAcBcTmUXZ58snHC63NUB704IIUGMwRKgx5FF+cP1u3R/+rGUkDyRXDN+vjn6TlbT1hgACYBFY7Ghr3/89UK5Iji3VVFkLi6lkGQYFUzPRmCzKSLY6hOnjx1GIp25ORePR6UEsa03fF9KBuDW2G8TDxWHk1TVhgezUelpcMv+U0fpWCjIwl0dGJ9+Ir+5OjIPwCIC+KaXfw0OdrQcPvrZfE6EiukUekKdcnziAfvqlzvkqq3R7Paq/KffXlevDU9SYzAUVo11yubzv5MPUKmp+VJd66H3avc9u62gaRDJmBXq8Jn+8TG2I5NThoTMrDlsKwPlir/e5XB84OuCmV9F/O6Ng0pRUbp9bV0fugKdWI3HKrBMzqtr2PDfC8pbRkWca9xODVqp7ifV5eROoaeKRYjCumpYViQFRJW0ac54DX3eKGrNolLhXFFIWhZUVw37s1Cj78wnc9fcz2z0X36jKbmSLN2eilQQX3KIrHYHQOFffDitK1US7uUAAAAASUVORK5CYII='
      },
      {
        title: 'Aurelium Skills | Advanced Skills, Stats, Abilities, and more | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/aurelium-skills-advanced-skills-stats-abilities-and-more.81069/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: '玩家头像 - Bukkit 插件 - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/player-heads',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4je2QMUtCYRSG33O/Dy/XhkIpLBwaJAiaJNxrCuHezampsaWl39AfyMmxoiXHq0ZFP6CgBqGhr8VIErSI0G4lek6TcEULGoPe7XDe87znHOBfFC6y2eyaZVnHvwFo13UPmDkJAEREALoAIgODBWBS9fDS18PJRA1mPtQikiciH8DMuISFSAAFGQIw875SarNcLgdWqVS6dBxnUUR2ROR+BDD7Bm+piajVBwAGYDKZzIbv+8HIDwAgl8tNB0FQJaKEN9dCPaKxnmigcD2P20+nJyK7lUplO3zikIrFYouIzgDAjT7zVvoO8ZZgeaINItJa65uwfwQw4AAw+Yek1biI4+nDxslrrAugzswmbFTjpo0xJpVKTTXZXj1vx3DajuFdlAJw1Ol0CrVajX8EeJ63AmBvTCtt2/ajMebqm83/or4AxPJ5JdyCsXEAAAAASUVORK5CYII='
      },
      {
        title: '通过版本 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/viaversion.19254/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'ViaBackwards | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/viabackwards.27448/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: '命令参考 · Multiverse/Multiverse-Core Wiki · GitHub',
        href: 'https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference#teleport-command',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC'
      }
    ]
  },
  {
    title: '服务端核心',
    list: [
      {
        title: '[CPS]Geyser最新使用教程 - 基岩版插件&amp;服务端 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-1126347-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title:
          '[1.16.5/1.18.1]Arclight ⚡ —— 高版本 Forge+Bukkit 服务端实现 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1046859',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title:
          '[1.12.2/1.16.5/1.18.1]Mohist ——— 高版本 Forge+Paper 服务器核心 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=916340',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title:
          '[1.16.5]LoliServer 🎆 —— 基于Forge并融合Spigot/Bukkit的高兼容性核心 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-1280076-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: '间歇泉设置',
        href: 'https://wiki.geysermc.org/geyser/setup/#plugin-setup',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkUlEQVQ4jXWRO0xTYRTHz/e479ty+wIRaokWBoIkOBAJxMFJAiHR+FpcjYmLcXAhwcToYExcjImGuDgw+IrioMbFhfiEBCNVQ3goYAu0tbelt7f39TmpbSlnO8n/98vJ/yComc4HjG8W8ocdFU7ZEnR7FBMCaA457CnzzJdTA5FCZR5V0Yyh/mfJC6opjpUFpmEXA0IYXAGBG2RGd4BMDgbp6HCTuPgXoZX8o9VyPBGTzgkIKWslG1b0MgQlDiwAiDVwcl+Y6wtQ0g0A9QW+InMGm+XLioTby5bbu5hxB/JFpmFgbkym37pUcj0kkueVzH8BY+jzq8w+RaDppGKJmsxxhk5M3faOcyXvDnbQ+Mc5q1VWSAQAUtsFCLHY3MY7gdioxERj2WWj4MPBVoHTO2R2/2hUnh2fLliihKp6qy7x3zEM3Vyyb3kMznsGrGs8utEgo8TpKH1Rm8X1BAghxidzOccloDXgpjwyr2ysLETqZUktO3z1RMuxYGAkY2xdWsfM90PgwP9znuyZucv3XNybOjTSmX7zMGHVFZy5NtRlW8WJNM+fDeeTgfDCNMQzKxAOBZHozLdn+ezJzZy++n5yaWZ7iQBADVv3EutyyccJa7s1UBGFtPkF4luLkJQ20dbXHEUlYlYxlcvSlJVsXNPnAbldm7t0KPSEoZUSSL0ugZd2AHSWCVDpw46CDp+PpwFNKeYLkF02QNDy0EJCIBkKFM0ymJ7rpgmpKr5qSRnl/l9Y7LM5HgjBgL8XoRFL4PcroPgUUFVVyhru/h0vyP1OrzLXfVxkpJcyHCWWp6iSiGxJMXVUfht0SmMhkD9VvQ22DznY1hYVPS/up2zoyIGugBBpfDKj09nbE/d+1Ib/ACvnC+afl0+GAAAAAElFTkSuQmCC'
      },
      {
        title: '理解配置 - Geyser Wiki',
        href: 'https://geyser.superiormc.cn/user-guide/li-jie-pei-zhi#ji-yan-ban-bu-fen',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA1ElEQVQ4je2PsUoEQRBEq2YT91sOPcFUEDRQEAMDAxP/wMjI7zFQ8IJLBUERA0EwkAMTkUU/YhFnqgxa1gXdwMDsOhimZ+pVdUOSpFKKpOb1bWt3//mlsW27bdudvYO7+wfbOefQUBIAAJKqqjo9n56cTbY31xfq+uLyenlxdHx0KCmlFDLalkSyYx5nT1c3t+/5Y2W8tLG2Go4pJdsAvhP6OV1bSiEZdgBIMjjb/btkACRikvj6OmO/7gmADTJIBtYX/JLws/p2g6KhSn9Sz4H/Aj4BuFyVMuAqyPwAAAAASUVORK5CYII='
      },
      {
        title: 'Spigot',
        href: 'https://getbukkit.org/download/spigot',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC40lEQVQ4jU2TS4iWdRjFf8/zfy8znzPjeJlJQzOlG0UWChG4CESyVWQQFLgx3Llz3SLahIsWGe0i2reK2k1Es+hqFytxEJ3R1MbLaE06813e7/0/p4VanfXhcA6cnwEGiP/p1pFnNoxv8Hejbl/zov8hvVNH7E0aHWOcyzT2HoO7VjMAvUL6rNr/+t6N1cudatAjDR6nkx8l9aAeAN0Zqu4fc7fYeeqmLs0ujL79/icXvgOwh3bu3jVWl8fNfM/BLSMcfarD91du89Zvq/HSg+GHnxyI8YF9fDpx7JuaHBBtzoOWWcXwaOFFemFoac+NbtP+8CeoW9o7p3v21fWwhdto/3bwgeU3vhzRYCgfSYoIUpl8bxu+ryDyabLnZEq715ZYYTZZmSYqWdOaFrtYkdybLDqFkCI5UuScaWPOPTHf5OjdP1LYgc0dAXp1W2W1g5BVDqVjjiwkJGRmLsXqUMN53/IXF7uRrzwxXmrHmsLVhD27MTFdG2srsW0ctk5kpkeDNmMmBJJki91u97J/vvDj37XZhflua/Mrw2yVc+Jmy8WV4MB2WN8x1o0FLz7c0Bsid8lkZhHnr127tloA1M781UHed+inm/HIRPITNxqbHoXDjznKggyHnu7z6dnE0m1XXUhBnANwgDZrrjJY7GebudrX9X7w3H3O5jFDAZGdTesyex5o1G0wkwgx92+AKc5GDisNn0hmibjzMzcyELrjNGEQLoXR5v8aMGjPS+oJeRuh0WSaXcz8fCVT1kY5Gvz6e6EvFkqtKeU5YiVKu8BdDpiamhpbt2nrSYcdIYUrp6aV1tfY89sCvNXMvNmNVeXRQp5znDmzcG4X0CsAlpaWVtZv3nrRYLtFZAmvEiwPpI9OCeR0CqkuyBImcQno3ZvgAIr41s3coAIMyUqTTdbYZC0rTIaozMxRfH2XRk/3UB4pJ0+m0noYJVKBKKRIEpLURywR+kXkDxrF8eXl5T6gfwA0bp+1mAwaUAAAAABJRU5ErkJggg=='
      },
      {
        title: '间歇泉MC',
        href: 'https://geysermc.org/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkUlEQVQ4jXWRO0xTYRTHz/e479ty+wIRaokWBoIkOBAJxMFJAiHR+FpcjYmLcXAhwcToYExcjImGuDgw+IrioMbFhfiEBCNVQ3goYAu0tbelt7f39TmpbSlnO8n/98vJ/yComc4HjG8W8ocdFU7ZEnR7FBMCaA457CnzzJdTA5FCZR5V0Yyh/mfJC6opjpUFpmEXA0IYXAGBG2RGd4BMDgbp6HCTuPgXoZX8o9VyPBGTzgkIKWslG1b0MgQlDiwAiDVwcl+Y6wtQ0g0A9QW+InMGm+XLioTby5bbu5hxB/JFpmFgbkym37pUcj0kkueVzH8BY+jzq8w+RaDppGKJmsxxhk5M3faOcyXvDnbQ+Mc5q1VWSAQAUtsFCLHY3MY7gdioxERj2WWj4MPBVoHTO2R2/2hUnh2fLliihKp6qy7x3zEM3Vyyb3kMznsGrGs8utEgo8TpKH1Rm8X1BAghxidzOccloDXgpjwyr2ysLETqZUktO3z1RMuxYGAkY2xdWsfM90PgwP9znuyZucv3XNybOjTSmX7zMGHVFZy5NtRlW8WJNM+fDeeTgfDCNMQzKxAOBZHozLdn+ezJzZy++n5yaWZ7iQBADVv3EutyyccJa7s1UBGFtPkF4luLkJQ20dbXHEUlYlYxlcvSlJVsXNPnAbldm7t0KPSEoZUSSL0ugZd2AHSWCVDpw46CDp+PpwFNKeYLkF02QNDy0EJCIBkKFM0ymJ7rpgmpKr5qSRnl/l9Y7LM5HgjBgL8XoRFL4PcroPgUUFVVyhru/h0vyP1OrzLXfVxkpJcyHCWWp6iSiGxJMXVUfht0SmMhkD9VvQ22DznY1hYVPS/up2zoyIGugBBpfDKj09nbE/d+1Ib/ACvnC+afl0+GAAAAAElFTkSuQmCC'
      },
      {
        title: 'Arclight,在 Forge 上使用 Mixin 实现 Bukkit(1.15/1.16) 服务器,下载Arclight的源码_GitHub_酷徒 ⚡',
        href: 'https://github.com/IzzelAliz/Arclight',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC'
      },
      {
        title: 'PaperMC – The High Performance Fork',
        href: 'https://papermc.io/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC4ElEQVQ4jYWTP2gbZxjGf9/dWbpTIilXyw7xH9xIIZHAHYyziExpS4uxwHjR0EGFQLdCC8KDS8AeTKbakNEENGYIeCrGOBCiTa3TEAqC2qE2BCPLic+xZat3kk53XwchUbtDn+X94P33vO/3vIL/gXOwPnb8/vi73Wot+/wk9qIxJB8v3/9mu+sXXTs1NRVzHEftOiYm4qF7d1MZX+gP6g0x3nb71IiUMnHWLiuq9dNkfnEdkALg9fJi5ufftpY+HLdC3QLBgBo0jNAoQFAigorf6aRJHNn+o/rB/rJYLFpa/uXTpP/q4yNDaJ9JmiiiQ6rlejRaZ71RpO8zODiIbTvU6w0d0AAU/UD8sBvRxmVbcBmKEEjf50roCjMzMywsLHDz5qcXYrSvTOuLnXrgP9m+lChCkE6nyWazxONxXNfl9PT0YpPEjegzrc/1mr7SS/Sl5M7t28zNzZHP53vBlmVxcnKKrvcZExPxEIAyfL3/yVVdlpsCCTAQi/FtLsfS0hLpdJpisUggECAcDnN4eIjj2ISM0Oi9u6lMZ8yh6XeKbBQARoaHmZ+fJ5fLAVAoFIhGo6RSKQAqlQqe53WYCv2BPFgfUwGGx0aPqocfZ1utdtSyjqjVaqytrTEyMkImk0FVO/LY3Nxk5+1bTN0Qo7cSAwNhz9EA3rzZs1VVa7quTalUolQqkUwmmZ2d5fz8nHA4DEC1Wu1oRPFxW5q6W61ltcvbV1UVz/MwTZO9vT1WV1cxTZPJyUkqlQqKEAhNEpFSPj+JvbhQwJey997Z/lOurKyI/f19ALa2tgAQSue3Emft8qs78rEGYBiGdy0sbENodAXV9BF/18/lJ+Y1HMfeb7a8JoBA4Mi2rajWw+X732/3jun18uK078Ue7Ua08TMhhNbneld1WVZko/BraeeX38t/OV12hmF4GxsbFt1j6iL/8mky+F758evI0eeJG9Fn/df7nxhD0+8u7+nf+Af6wTFT+eQINAAAAABJRU5ErkJggg=='
      },
      {
        title: 'Downloads – PaperMC',
        href: 'https://papermc.io/downloads',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC4ElEQVQ4jYWTP2gbZxjGf9/dWbpTIilXyw7xH9xIIZHAHYyziExpS4uxwHjR0EGFQLdCC8KDS8AeTKbakNEENGYIeCrGOBCiTa3TEAqC2qE2BCPLic+xZat3kk53XwchUbtDn+X94P33vO/3vIL/gXOwPnb8/vi73Wot+/wk9qIxJB8v3/9mu+sXXTs1NRVzHEftOiYm4qF7d1MZX+gP6g0x3nb71IiUMnHWLiuq9dNkfnEdkALg9fJi5ufftpY+HLdC3QLBgBo0jNAoQFAigorf6aRJHNn+o/rB/rJYLFpa/uXTpP/q4yNDaJ9JmiiiQ6rlejRaZ71RpO8zODiIbTvU6w0d0AAU/UD8sBvRxmVbcBmKEEjf50roCjMzMywsLHDz5qcXYrSvTOuLnXrgP9m+lChCkE6nyWazxONxXNfl9PT0YpPEjegzrc/1mr7SS/Sl5M7t28zNzZHP53vBlmVxcnKKrvcZExPxEIAyfL3/yVVdlpsCCTAQi/FtLsfS0hLpdJpisUggECAcDnN4eIjj2ISM0Oi9u6lMZ8yh6XeKbBQARoaHmZ+fJ5fLAVAoFIhGo6RSKQAqlQqe53WYCv2BPFgfUwGGx0aPqocfZ1utdtSyjqjVaqytrTEyMkImk0FVO/LY3Nxk5+1bTN0Qo7cSAwNhz9EA3rzZs1VVa7quTalUolQqkUwmmZ2d5fz8nHA4DEC1Wu1oRPFxW5q6W61ltcvbV1UVz/MwTZO9vT1WV1cxTZPJyUkqlQqKEAhNEpFSPj+JvbhQwJey997Z/lOurKyI/f19ALa2tgAQSue3Emft8qs78rEGYBiGdy0sbENodAXV9BF/18/lJ+Y1HMfeb7a8JoBA4Mi2rajWw+X732/3jun18uK078Ue7Ua08TMhhNbneld1WVZko/BraeeX38t/OV12hmF4GxsbFt1j6iL/8mky+F758evI0eeJG9Fn/df7nxhD0+8u7+nf+Af6wTFT+eQINAAAAABJRU5ErkJggg=='
      },
      {
        title: 'BungeeCord | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/wiki/bungeecord/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'Voting (DAY/NIGHT/SUN/RAIN/STORM/CUSTOM) | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/voting-day-night-sun-rain-storm-custom.27385/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'Spigot [Jenkins]',
        href: 'http://ci.mengcraft.com:8081/job/spigot/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADL0lEQVQ4jW2Sy28TZxTFzzcPPya249hp7Tg49iTIdlISIaUqitqIpCqiC9QHC5CQqJRWrYSUJQIVseii/wHsumi7iCitKjUttFQR6gZSCE6qJIAFchi7GT+SsT1j49ge2zNfV47iiru8ur+rc869BK+oSCDS3+d3XmVZxCbHo5OEYW2EQMsphWvL8c1rsizXO7Pc/+Hz584tOAThQ0+vDfNzpwWHnSOgJkzTdDz6J/FlqVR+3+fznVxdXW0BAHsQ/vzTz34Mh8JnnTajeOnCGQ9nNgg1WjCNFmAaCPj6bJMTo0PLK+sTW+ntmwDAdODZ6enjKUn6WM5k6Kn3plxtvYaf/niAe48SXQozeYW1WfmZ2OCgt0vBaDR2a2b2Xb9SKJKjkQDtdQqcw27BxGgYlFIQQgAAocHXcWL6TXuhXM39vfb4wb4Ct9vdm83lYBrmy1Cgz2rhGIhBH1jejlSmAABISlmAEDxNymibNNplQSvtcoMevt5svGyWtGqj019/ksDtpfsAAKWkYXllE/X6HqxWXji4gJycOeYiRsM++1aMcTrsfGfBkUgY83MfAQCmJsfwNLmNN6IiCIFy8Iw0vZ3NXZk/e5jn2L5XvAaKahUFVQXHstD1JuScEu8KMRQ49O+vS/emQkNDbn+/ax8kDIu1jee489cKajUd2Z0CklKmsHj34WVN06r7Gdz87ffFtcSLM7vFchsgKFf2AAC63kR84xlGwgG4XAIufPIB1hNbyVQqle8KEQAkSYr/fOuuxll7wLAMHq4lYOFZnD99AtGRII5ERXxz4081kVLyHWbfgiiKoYHgyH21xQ5k5WwzNhxgTEqZ698uom20q3JOyV//7pd6fP1FjzUYGevtEbzKTvYOAcBEImNf2zyvzfePv+NsNXV4Wmrp7YkIv3NjAaMM9CW9ZTB+7+7xSm24Ranl+0PjvKmVasXU5mFOFMVxVzh20T4wzJcLOYBS1ADPD8tPMMex+WM84w/xXGVB3fOrhtEQLBxntg3oevVZOp3e4SRJeuwOxiqm0faC0q70nxNLRdBr1dtOr/rFV5eOytl8aSmRbpsbm1ZD17cAmP8BdCZfU/oK4QYAAAAASUVORK5CYII='
      },
      {
        title: 'server.properties - Minecraft Wiki，最详细的官方我的世界百科',
        href: 'https://minecraft-zh.gamepedia.com/Server.properties',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADOklEQVQ4jU2TT2xUVRTGv3PffffNv86QmVKmpQlQW6ohShMSjJkUCUq6IaIuDAs3GvDfSqLGxBgzKw0LSagLF0ZJ6gqNCjUSEjaYMrEamzQSaVOwY2GmKJ15M9MyM2/ee/ceF9KBb/edfOeczfcD7iufhwCDNv2Ni+NPT02d/eHAp0s/9X1czm3OwUzI58WmJQBggAhgADj8+VjOJ/12r4Wjh1K77QHxFOqdjH+5Nvz9X53YmV/f2Tf70C53Px6b3D3eieuTJY9esCICvseo61CPKI1Pso9Z59wPUKgnOEHBd+1Qn/75vdwvAEDfAGr/W6Nfbjy77+VrPITr63OsjdRZB5YhlzKWhfX2EZ52D2hNbDnRBIE1N+q1qcLMtdfp4pPDyR1D3try48+pSedE0KfaMjREEaF5b6yEAWcDFyqPYtVEKGqDm812WF0t2T2NYnDQmd8qgz3buOPebLT/WO6tDd+VDYcQj0TZWIoWayMQEEiqENJv8b9/34Zyb1qDusW5zEJ9LPajocVcb0+jP1GMksnMpibMud4JsW5JxJQDFU+AdYja6grulssYVWt4Zus83xb3qB42XXKDXXI5rFCGE9QRNnKVaRImwNnsi/C8JnyvhUpxCZ17DQgZw57MP1jgW7geakgGKukVCKTTAAABRk0mMF6dxqHaLHwZA5kQJgxgKwWfBcreFkQ5CgUBG4SMC4ghWzCBmZmhjI87zi6U7Aw0AwwCCYIXErIRD9uiFgQrEMz/BUinISrVCphIA8SSA1RVP9+Jj/KIvwZDAqEhDMYCvLR9jm37N76BDQaIiUnXm4KFTKYJzGkCUyCcsN9bwvvFU5ioFtiQYkdYvD/9J1+pp2gmyKKNQFtEZAiphNRC9Ky4HoG+YEYYt6UtuUV9rQW9ENmBDVgUGgkbNgLVCCNyEbYtbBBBGPNtw6l53SoXnt8+5ghx0pPpY0FsQH3UdxyZuKcfca/C43lr0S6h41sgiPMGfLrwWXGmC1MeEHnAAMCHb54aLUe2nGgmk8df2zmb+n3pCs6v1wMprAtM4ZnC5K2rD8PUpfT+kS6mM1+/unfuqyOXXnn3ictjbwwexAMR8g9y/wE2QXx29E5HaQAAAABJRU5ErkJggg=='
      },
      {
        title:
          '[面向新手] 从零开始整合Sponge端，让你开起新时代模组服* 从入门到精qi通keng - 我的世界-Minecraft - 格兰蒂协会 - 我的世界MineCraft中文论坛|单机联机游戏论坛 - 自由的游戏玩家社区!',
        href: 'http://www.relatev.com/forum.php?mod=viewthread&tid=218&extra=',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABqElEQVQ4jY2QzUsUcRjHP8/PndUBc8wkCqwkRUoowcMSXYzIThEoCFHRMSrSQ0TQJTp06tQhvKT/g12KZSuQBGPRQ4fFQKLA1j3EDLu2zcuuO0+XaTPY2D6nhwe+L88j8dKEnLhMbwYpoGWiIt47/AIhABUAui8yPM1mVgPPiO3RPw55tEx1BXeBRgEL9gHggA3+ClvLHJ/B3zYa9CE+9S2iL1RX2Q0ADABdJMQ+lfd0pOnqTwHENeouO6+ouTQxYAFQAxsaqWQttkdoJTYtSYM4HLpEVIbAcOQOn1+QvkDvFCkbIIZ4j8D0cPgazlndWJQz86Kq5B9Q+cjwNN2dVHPsZP90+wHWKANzbGYZuc3gpAHIPGVgirXH5J/RcY79V5Oo+u+QKKWBx+Bk8x1w8hYzJYZm+foaTnHgBkAI1igH71L72SwoqvrXiR/u8/0tIzfpOcZuiHSyvazFnJx/iXO0lQAovtG1J9IoIbaGvgxdJ/Po3wktKa1q/qHYfYzdQ9virse5K+qu67dcvDRh2ttHUTJo9N+VPi3qxnOMI6dnReO4vWAPvwC6I8iai/TrAQAAAABJRU5ErkJggg=='
      },
      {
        title: '[1.16.5/1.18.2]Mohist ——— 高版本 Forge+Paper 服务器核心 - 软件资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-916340-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title:
          '【服务端整合包】服务端核心镜像站 [自建|高速|稳定|全面] [1.2-1.18] - 服务端整合包 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=1214823',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: '服务器详细设置server.properties优化服务器 - 联机教程 - Minecraft(我的世界)中文论坛 -',
        href: 'http://www.mcbbs.net/thread-569077-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: 'SpongeForge Downloads',
        href: 'https://www.spongepowered.org/downloads/spongeforge/stable/1.12.2',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVQ4jZ2S21HCQBSGv//EAlJCOjAThneoQKwAOsBUYgnSgZYAz2RnKIES0kB2fTAJm9Wg4/92bt+cmwCqqtpJeuNLhxDCSdITkJtZfT6fL8zIACS9Rr6dpL2kK4D3/n2ueASkklQ3TVObWQ0Uy+WyvAsIIdSR79A0zRGgb70NIWzmAIqNxWKxAfa9uYpCV+Aq6RRCuDjnPr4B+uK780Y6OufW4wi9tn8sBlgNe4kBacupJr5hLzEgvnWdFpjZcwJ4nAC6rhsTJLUp4IdnyieALMuGT8R7XwCT2/dLjnXbQVVVL8CY0L91LmntnBsulV7o1oGZ5cyoLMtiLgbwcC/ovS+yLJuF/wqQtAXafwOY/kaqC8AnSiNY9zZdQEoAAAAASUVORK5CYII='
      }
    ]
  },
  {
    title: '工具',
    list: [
      {
        title: '在线 UUID 生成器工具',
        href: 'https://www.uuidgenerator.net/version4',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACD0lEQVQ4jYWTMUiVYRiFn/P99151VmxqaEtdHPMXFRt1EFosoiEJ7yoNgjZEQyoOF1cbbGgoBwOHdFPs4t/qINYW0hCBg03qvf7faTBvJopn+nh5P855DzziktL57W7neTlI9w23AQQ/or2hJFnMJnt3Lu7r/NFTyVpUzxdkHgKntsdt3wGQ9F3SG6Bg8cHFZOLL8/QIIDQ+n+Tr2IdG+0jD2VT/ighRhJhN9a8gDRvtYx/qJF/vqWQtAAUA1fMFiTZQqwHnTtOZaoo8AJDOVHFuCEKoFdFGPV8AyiGd3+5WJHVkCTyCvXy5l4bsZfCII0uKpOn8dnfBeV5WCHOlo/qnWnPyLJvqe90odKYKQDbdV2nM5j4/LtVOl+otxV/O83II0qCi12oldcjavdb9vHVr96Q5dCp6LUiDSmervzGvFOjE3LX5eGF74Cy6thoj8QDxzZE9xMtwk+NNKkj8FLzNiR2BMPHfvVd00DtbvReJS4nCV4vxEO1NBw01Hcc9RNeNlqKr6TjuOWgo2psFJcki9rtaqXBLuD2drb7AHF3s4DwJogXcXisVxgRPlSRPQjbZu2OcKTAGWkUavd5do6BVBcaMs2yydycAuJhM2BxYHGBLibJsuq+CtYW1lU33VZQow5bFgc2Bi8nEWai/+geTH4HqV8PkoqX3F2HS5ZTp/Ha38rzMJZyxN3wFzn8Akj4MH2Qx+SYAAAAASUVORK5CYII='
      },
      { title: 'Minecraft头像生成器', href: 'http://minecraftskinavatar.com/', favicon: '' },
      {
        title: '命令方块指令生成器 - 实用工具 - MC百科|最大的Minecraft中文MOD百科',
        href: 'https://www.mcmod.cn/tools/cbcreator/#/home/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC50lEQVQ4jWWTzWucZRTFf/c+z5v3nWQyrSYy1hJTRWrEFOxC+iVmo4tSkxQsiLgREf8E3XRhbIs7cevCP0CEiq5ECNZlV6JFUWvSTNoQTWo6k8zH+/lcFzNQxLO43MU5Z3P4CcDK6vJirRZ/VBQ2h1kQEET4j8wwwQRRjfyaFjtX3l9Y/UKu3bh03kXuuipJmVfG/5IjyagEZ0nUlXY5X93uvvOWB1lRR1JmoRDEG2ZDv4xCYMODmSPSA/bSufJO9Z6vsBWP8EyZlxYseMGJqpgFxARCqABBRTFTnOzbXv68/Jm+65BgXvIZD4bgZcxFoQwpIQQRlBAqIk0wCWRVhlhKn5PSKt62icibSK69QvGDssvZmYssHHuTVvsX+erXTxiUXU7PLPPS7CW29n/n29ufsfTsB0zXX6QMyKDK+fTHbTpZirdQyXg0yXjU0Lnp0zTrT9Fq3+KFI6/QiKe47+qcPHKBJw6f4vNbW4jA3W7BeicjVhEPhqpnp9cyFSfPPXaGrOwxVTtK68FNeuE4uTxOq9Pn67U9apEjUqHmHWUVGBaIY1B0WX/wEyeaCzTiKXZ6a9xpb9A8dIqSfwDDqzKmQgCyMuBV0OFokPgJfv7rBofiJvPNl/luM2UrPUusGWlpHK3HzE+Pc6yRcPxwjeZERAiGiqqFUOLU225vk1b7JnkV+H6rAVLDu8Dq3Q4HecXH52a5cuZJrp2bZenpKfohmFz94fW98WjykUgS6+XrdMKydMIiu4N9Jsciat6x3cupOeXRxINiilq/rLSdln0votYvDkztHrvVIhuD84Z1JXaO/TzQzipipxRm3OsXhpkY4FTMKyiBPyZqheyUy+VmepHY5cRezRDzTiz2zgKYqljilMQ7S5xUSZwIxoYmev/yZvdCb5s3Ii8DMMQQEREBEYOHvyEhmLixxIeqykOwywKwdP3vVyfq/Q9DkZ5AhjSOUHpIM4z2EnNR9FuR5Ve/fG3um38BTI1ppmazI9MAAAAASUVORK5CYII='
      },
      {
        title: 'Java Platform, Standard Edition 14 Reference Implementations',
        href: 'https://jdk.java.net/java-se-ri/14',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkUlEQVQ4jc2SyQ4DIQxDHX4c8+WvhwmUWWCOraUIsdgxBunfQdYSZbVhe0vsiJfuq7P0+crBa/c3h9gGCWcOnZDjNhskgQQA38OPAuVKnJVaa92ubM9Xi6wRDJICICIEDLIk1VoPVpw4Q+mW9uH8jieBktaG1RV5i+lJADgF5cNhCt/Erx+Jp/X5zW3vPt8P8AE53F9eS/Y4KAAAAABJRU5ErkJggg=='
      },
      {
        title: 'Latest release | Adoptium - Open source, prebuilt OpenJDK binaries',
        href: 'https://adoptium.net/releases.html?variant=openjdk17',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADSklEQVQ4jSXQzWscdRjA8e/zm9mZndnZl3TXJg0lqK1oQaM5JBVf2oXE10ttaaGth/RgwTa9eRAMQs/ixYqKUE3EivSgsb5FpGqLVYqGoiUI5uBbMDQvuKn7Pjvzezz4+RM+AjDBoWJ/4J2OjByM0K15Y4gQct0ehYxDPuNSUMgJSVmcBSV5aUftnc8URKo8VcoHwVzZZKs+PSJBc6mVXGoZvHUrfr1NZqNOKcqSV7QsrhSE1FU7Way9/Z7r+uG0a7xqbLux7xjXWivZfKAHZqfYPraTtB3z6/R5au9fgUKWdpomeXFc4IwGz1w2qdEjVhOLiCtGTLfVYs/pQzIwWJTPh0/I9RfflbvPTEq4ox/b7oljcDqapKFxtvSydp8BBlK1giC9Tk/LQwMyfGCMn0++iazU+HN2nhvf/8LQ1GOStNqKMYBYV40KDBpUVQRxHEfjuCWjxycwSyu0fliiVO4j4/hcfeVjyvtH8QcrYruJICIAGDCIgEAvTiQqFhl7+iFW3/iCrFUChWbgs3hxgbWVDbZN7iWtt1SMQUUEC0ZUxRhDp9Nk5PDDVNox9U8WyOcjNLWskNBKu3z3+qdUJquYYiiapAgCRsSoCDZVvIzH3mcfoTHzNW6jS5/n8WPSYbkXk8mELJy/xLpJqezfTfJvExwBazHGMdpptRh+cpSd5YjmuSuUihHNdoe5Zo01saSew0Z7k29nv6Ry4lEVz0GtgnHUACgpo4cfVLmwgLN2k4LjstwfsZ51+a2zQa3bxc1EXD47z2Z/JOHwbUg7VvP/I6Kg4iASBWRtA+0ljH/4AnOLMxw8eZR26LPaWyc2qBv6KqAA1qjIRO7o326nNzBy/51MX3je5C4twvYKy2r5/a1vuG/qcRqFDNcuXtNde+6Rwesruj75mh2Mco5qckrG/SMvlzLZ56RRj4d33+E+cHzcpKs3denVedIbG1SCHHftG+P2J0boLP7F5tmv0ltUXM/wT6HdvVeqHCvlg+5cxQ2r0mrgpS0t4kg5zFHyMkTW4tfbhJpQwtWBvqIURFLR5NiW2sw55w9+6gwluz7KOjYIfW+oEAZhlPWtJ2K9VK1vxIZB1uai0IahFwcqV+O0d2rbzdkPFOQ/Fz9teknpAJ0AAAAASUVORK5CYII='
      },
      {
        title: 'Minecraft Skins | Download the best Minecraft Skins',
        href: 'https://www.minecraftskins.net/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABGElEQVQ4jZ3Su0scARTF4W8eu+ODqJWbIqB9imgvluKjjL2FYAr/BImtYrBJI4iVpSIWWlhZWGthq7BJRHwUsiCrMjqzm2JhrJ3TXLiHe34cuMG34U/IWhAHIdI8Q5blCMMQlThCuw2hDyruZHeUtVvo7aqivxogF+GhmSJv56UInfFrcQ5JpYrurj68PD1CFKJxd4PV/aMyhGDn5wJ6kgTPaYooStB4bGCoNoh/fy+Kg4936GTPLP3G9/E1zI/Xi+yNwxr2Ttaxu/yjVIet+QnUPn9BnAzg4Pi4sGcnx3B9dYn6/UOpDs23HK/XdeyenGLq62hhr2xuY3psBIFKKcKf23u0Wu8vdXR+hqgSF5vmS4707bUM4T/do1YI4Q/BWQAAAABJRU5ErkJggg=='
      },
      {
        title: 'MC超实用工具',
        href: 'https://minecraft.tools/en/crafting.php',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADD0lEQVQ4jXVTwU8aeRT+fjMQBumKp2Zl1DAKwW1XaSLFqBGzaWrxtD1oNulfYjzhkZPJxpPGeNxkw6makJAykcgeCktCvRjAIQxkgJMRwiDM8OPXQwtxN+k7ve/l+/Lel/ce8IOoVCrrBwcHvf39fXZzc/P+RzxulDQajZfVavX1CBeLxTd2u93mdDpRLBZ3nvBe1Gq11RG2jMSnp6f/EkL4QqHwu8/ni7darVeiKILjOLRarV8ZY6TZbAZisZhsGIZNUZSdhYWFpAUATNOcsNvtvCRJ1qurq9jx8XGb47jnHo8HPM+j3W6vn5yc1K1Wq8Pn8z0rlUqglNoBgIxGKRQKO8lkMuZ2uycIIZBlGYZhgJBvlO3tbTDGoKoqNjY2Pvj9/r/GFgDA5/PFo9Fou9vtTqRSKWxtbUEQBFgsFvA8j4uLC4TDYfR6PSwvL/890hFN09YVRXmjadqrTqfz/vb2lgsGg7DZbEin06CUYnNzEwCQyWTg9/vBGEtMT0+nXS5Xlnc4HKX7+/u3lNJfnE4nUVUVXq8X6XQakUgE8/PzuLy8hNfrxd3dHRYXF2EYxoKqqr/lcrk/OF3XbcPhcOwVAHieB6UUlUoF2WwWhmGg3W5jOByi0+nANE0QQjAYDKz82dnZF0ppW9f1PmNsttlsYnZ2Fi6XC/F4HJqmYXV1FYIgoFqtQhRFPD4+5kVR/Li2tvbnuC1jjBwdHdUlSfpZlmWEQqHxJABwfX2NlZUVlMtlRCIRgRDS/88WarVaYDAYOLrdLgKBADKZDAaDARhjAIBgMAiO4yAIAsrl8iaAT+M7aDQaL87Pzz+LovhM0zQ8PDxAFEVMTU2B53n0+32oqgqHw4GZmRlomtbf29t7J0lSigOAXq/3k67rNkVREA6HP0SjUYvT6UyYpglKKUzTzB8eHgq7u7tv6/V6f3Jy8ovb7c6NLUiS9LlQKOwYhmFfWlq6BABZltP5fH7barVibm4u893zp1Kp9M7j8eQIIZ3/X2Ly6Zu6XK5sIpEwCSHWUCj0z6ju9XpTT3lfAfvSbgut9DU6AAAAAElFTkSuQmCC'
      },
      {
        title: 'MCEdit Unified',
        href: 'http://www.mcedit-unified.net/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSUlEQVQ4jX2STUiUURiFn+uMNioyZhQlFKSIyiiJWmQ6ZpaQRUFEQREqQUQ7W7QwCtokFi1CIZCMFoWg9uOiWpilZRGUIog/pQuVigwtLEbG+fE7Lb7K33rh7u5z7nvOPYb/jIpwYZGCYT0W34jmg2ljZuEdsyIIhkIyEGcRJYAbMQO8xskV84J3/xTQHtyEKCNMJTGxSWwtAU8eTIzBywfw/esgcMx00bfSyrny8kheE9TJLVJ7oxTwS5JkWdLzJqnULRVSL4hYDBeSKS/9KnVLdZXSxLgN9XVJ1eVSzzNbrLJYyqdXu1kD4FxgvIJVLg+na+DAKfgxBbcvQesNmJyCoW44dAbCIZsL2hs4AZRHNBZZJCbDzsMwMQ7V5TA2ANv3Q3ImjPRCwwXw+8BJPz6m5zeIx+Ins1hhmPt9NqVC+UXILgaH03655TrcPA8WI6aH0NIMarQrUmq8KoUCdnChgNT1ULpcJn0cliY/S8dTpHxalUPkvAW7MGkA3K2Gobew2QOj/dDdDunbIMoFxoCJAIjCb1fAthAiAfCQXQjFR6GlFtruwYZEOFFlhxodB/fr4MsoGHrMIMF5ARdzzBLE4YC9FZCYDB3NNpiaC59GoL4KnjZCKNgD3Fns/wgOFdCgffFSR7NkzdkZ+H3S41vSiTSpAL+8tKiIjIXs3yqriCzmaGT1unQKDsLajTDwBno7ITD7ngiuEUGT6cS3osCfKhPmHLADEQtMY3gC1JpXDC/r/lIBAOUQQxxJWCRgMYGf0WV/vmB+AeXPGszqLOJ+AAAAAElFTkSuQmCC'
      },
      {
        title: 'Disclaimer | Amulet Editor',
        href: 'https://www.amuletmc.com/readme',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMElEQVQ4jW2TTWyUVRSG33Pv/WamP05nppS20BREodEOEek0Ma1NMBqFjZFEWGhId5hGdkTCjokRUiNRQ0wMC+LClMSGACqIiYuaUCllTLC0FJtWSactMxQ6P53fb77v3uOiHcWEszh5c3KezTnvCzxRPAxZ1Y8v7n6BY5Ff+Fbk+/mh7m1P2/kPjEJU9e0vdgV4PHKCJ7vt+dF9vDS2l3miO8+xyEc/RrtqAYAZxAwCsNaqZY92v++p5dMIhFo++2ETBi9sci3FOHFwSQ3sSwCZ9P1KXhz19t26VGWIAUKsrwfKHkSw5tUr4604PtTm3H0QlJvDLWQ0IzGd5K4tKf3poUXr9ZcSQLYyAqWO0c7ffqczZ573HupsuJP2tew48s1259rtRhFoC4qmzmY4ygOAoOwyklMJFJOrZn9vSn/y7rRn8c5s7I0jf7+irl9vEu915PTpIZ/+6WZIdLy5jXSwAdlsGbBcYsMQWnBrbweQSNKFK0lJC1l9sMtlAKTqHiVYUADeWkhZXzYVLlAp5ZB5sRnuyyFWUkHGHlF6/B5odZGlWqbAM1J4PIoBsCo0tRJzgdgwNASz7VCFymxvbkDFKVF9Kodc9i5j6S/4lYcMLKM1wxgQAFJrp6S1fzADBEgpwbYDHY8jPTUN5TLqfT5AM5jNOsIAAFFXl2ACMwGQgogsyVR2yTuTowZhsbQ87Es6BMcQKclSEAlBAIMBQM3MtJIUeS7bQutVDcoXhbe2hnm2CCzlqWYxA6ukWfkkqFgiXYIpuaRp3Xrq8FsJThX8vv7etJyYT1ZujJURaAuIwHMhOK5kYwSUdJFfSKOwUjC72vN6z46cJ2eTBQDy8q8ZHX+7ebItVN7e35fZ2t5oi9iUcefnbKrzETmPH2JlLsUbvVk98Nqy6u95KBVKI5mCe+zqaDb+pJVp8rvwB+0b1PG89m/5/NpGnB3Z4HLxAfbvTql3ujJQpji3vMofHz55/9t/oWqYKAoDAOdPhpt7OtXRoF8M/LHgr5/4cwXPNhZS6Ry+Gpt1v/z6fDwNANEoRHSdeWqcR8+FI3MXwyPDp7b+PPhhe2d1Pnzg/3H+BxPTg/CHBo2YAAAAAElFTkSuQmCC'
      }
    ]
  },
  {
    title: '教程文档',
    list: [
      {
        title: '教程/架设服务器 - Minecraft Wiki，最详细的我的世界百科',
        href: 'https://minecraft.fandom.com/zh/wiki/%E6%95%99%E7%A8%8B/%E6%9E%B6%E8%AE%BE%E6%9C%8D%E5%8A%A1%E5%99%A8#.E4.B8.80.E8.88.AC.E6.AD.A5.E9.AA.A4',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADOklEQVQ4jU2TT2xUVRTGv3PffffNv86QmVKmpQlQW6ohShMSjJkUCUq6IaIuDAs3GvDfSqLGxBgzKw0LSagLF0ZJ6gqNCjUSEjaYMrEamzQSaVOwY2GmKJ15M9MyM2/ee/ceF9KBb/edfOeczfcD7iufhwCDNv2Ni+NPT02d/eHAp0s/9X1czm3OwUzI58WmJQBggAhgADj8+VjOJ/12r4Wjh1K77QHxFOqdjH+5Nvz9X53YmV/f2Tf70C53Px6b3D3eieuTJY9esCICvseo61CPKI1Pso9Z59wPUKgnOEHBd+1Qn/75vdwvAEDfAGr/W6Nfbjy77+VrPITr63OsjdRZB5YhlzKWhfX2EZ52D2hNbDnRBIE1N+q1qcLMtdfp4pPDyR1D3try48+pSedE0KfaMjREEaF5b6yEAWcDFyqPYtVEKGqDm812WF0t2T2NYnDQmd8qgz3buOPebLT/WO6tDd+VDYcQj0TZWIoWayMQEEiqENJv8b9/34Zyb1qDusW5zEJ9LPajocVcb0+jP1GMksnMpibMud4JsW5JxJQDFU+AdYja6grulssYVWt4Zus83xb3qB42XXKDXXI5rFCGE9QRNnKVaRImwNnsi/C8JnyvhUpxCZ17DQgZw57MP1jgW7geakgGKukVCKTTAAABRk0mMF6dxqHaLHwZA5kQJgxgKwWfBcreFkQ5CgUBG4SMC4ghWzCBmZmhjI87zi6U7Aw0AwwCCYIXErIRD9uiFgQrEMz/BUinISrVCphIA8SSA1RVP9+Jj/KIvwZDAqEhDMYCvLR9jm37N76BDQaIiUnXm4KFTKYJzGkCUyCcsN9bwvvFU5ioFtiQYkdYvD/9J1+pp2gmyKKNQFtEZAiphNRC9Ky4HoG+YEYYt6UtuUV9rQW9ENmBDVgUGgkbNgLVCCNyEbYtbBBBGPNtw6l53SoXnt8+5ghx0pPpY0FsQH3UdxyZuKcfca/C43lr0S6h41sgiPMGfLrwWXGmC1MeEHnAAMCHb54aLUe2nGgmk8df2zmb+n3pCs6v1wMprAtM4ZnC5K2rD8PUpfT+kS6mM1+/unfuqyOXXnn3ictjbwwexAMR8g9y/wE2QXx29E5HaQAAAABJRU5ErkJggg=='
      },
      { title: 'Minecraft插件百科', href: 'https://mineplugin.org/%E9%A6%96%E9%A1%B5', favicon: '' },
      {
        title: '协议库 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/resources/protocollib.1997/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: '源 RCON 协议 - Valve 开发者社区',
        href: 'https://developer.valvesoftware.com/wiki/Source_RCON_Protocol',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABqklEQVQ4jaWTP2vbQBiHHyVqIhKS85B6iz10kAdjCHQLeDUZ5FFkC2Q2+QQKdHA/QIKWdsisXUMR7eqCAyHYNFspdryYxAFfTCwlaawORteqNh3cHxzcn/f33Hsv72kAhmHELKAoijRtUXMiPZns7ayzv7vB2zcGrzeX/2nyGiOOvQFyPGFZ1/V3AF/f59jeekXv7pnz7488vcRkhT4XUMytcnv/wsWPx98ZHHsDvMYIOZ6oQLG2xOlhlr2d9RnI5to0y6Vk48NnmTIDyPGEA7eP1xjNAHqD5zRACEEQBIRhSBiG9Pt9LMsC4Ojsht7gZwqcQBWgWq1SLpfxfR/bthFC4DiOMn38MkwVMZGqwXA4DbAsi3w+j+u6uK6rAr9dP82FqQx836dSqShTrVaj2WwihEi9/dPlQ+o5CuA4DkEQIKXEtm2klAghkFICUMytzKQPTNvYMIzYNM240+nEf6per8fJ+dWJGV+dmGqdDFWDbrdLoVCgVCqRyWRotVrq9tPDLNtbOkdnN/ytmVZrt9updTG3yv7uBl5jNLcf/vszaUkdFjFHUaT9AhVcvOFCAebAAAAAAElFTkSuQmCC'
      },
      {
        title: '教程/通用物品分类器 - Minecraft Wiki，最详细的我的世界百科',
        href: 'https://minecraft.fandom.com/zh/wiki/%E6%95%99%E7%A8%8B/%E9%80%9A%E7%94%A8%E7%89%A9%E5%93%81%E5%88%86%E7%B1%BB%E5%99%A8?variant=zh',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADOklEQVQ4jU2TT2xUVRTGv3PffffNv86QmVKmpQlQW6ohShMSjJkUCUq6IaIuDAs3GvDfSqLGxBgzKw0LSagLF0ZJ6gqNCjUSEjaYMrEamzQSaVOwY2GmKJ15M9MyM2/ee/ceF9KBb/edfOeczfcD7iufhwCDNv2Ni+NPT02d/eHAp0s/9X1czm3OwUzI58WmJQBggAhgADj8+VjOJ/12r4Wjh1K77QHxFOqdjH+5Nvz9X53YmV/f2Tf70C53Px6b3D3eieuTJY9esCICvseo61CPKI1Pso9Z59wPUKgnOEHBd+1Qn/75vdwvAEDfAGr/W6Nfbjy77+VrPITr63OsjdRZB5YhlzKWhfX2EZ52D2hNbDnRBIE1N+q1qcLMtdfp4pPDyR1D3try48+pSedE0KfaMjREEaF5b6yEAWcDFyqPYtVEKGqDm812WF0t2T2NYnDQmd8qgz3buOPebLT/WO6tDd+VDYcQj0TZWIoWayMQEEiqENJv8b9/34Zyb1qDusW5zEJ9LPajocVcb0+jP1GMksnMpibMud4JsW5JxJQDFU+AdYja6grulssYVWt4Zus83xb3qB42XXKDXXI5rFCGE9QRNnKVaRImwNnsi/C8JnyvhUpxCZ17DQgZw57MP1jgW7geakgGKukVCKTTAAABRk0mMF6dxqHaLHwZA5kQJgxgKwWfBcreFkQ5CgUBG4SMC4ghWzCBmZmhjI87zi6U7Aw0AwwCCYIXErIRD9uiFgQrEMz/BUinISrVCphIA8SSA1RVP9+Jj/KIvwZDAqEhDMYCvLR9jm37N76BDQaIiUnXm4KFTKYJzGkCUyCcsN9bwvvFU5ioFtiQYkdYvD/9J1+pp2gmyKKNQFtEZAiphNRC9Ky4HoG+YEYYt6UtuUV9rQW9ENmBDVgUGgkbNgLVCCNyEbYtbBBBGPNtw6l53SoXnt8+5ghx0pPpY0FsQH3UdxyZuKcfca/C43lr0S6h41sgiPMGfLrwWXGmC1MeEHnAAMCHb54aLUe2nGgmk8df2zmb+n3pCs6v1wMprAtM4ZnC5K2rD8PUpfT+kS6mM1+/unfuqyOXXnn3ictjbwwexAMR8g9y/wE2QXx29E5HaQAAAABJRU5ErkJggg=='
      },
      {
        title: '附魔/ID - Minecraft Wiki',
        href: 'https://minecraft-zh.gamepedia.com/index.php?title=%E9%99%84%E9%AD%94/ID&variant=zh-hant',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvUlEQVQ4jY2TPYtcZQCFn/e99773e2Yz+5ndzRq2SAzYxDTWcWslK/gPRAxaqYWdkDaFiAgpbC0ssj/AIqUSDBFBRWHHOJOd2eS6M3Pvzv2Y+/VaCBtBWDzdgcPhKc6Bc/Tel2/vffrgg73zMuLf5uvk7sq3X33/jt9135pPsxuGZSBNSVPV0OpHZaPv7394896+eP/krOD2N7c3Arf8KJsubi3yajcIXepaU8wL2rrFMAUISZGWOL6F23VpGtHvLfsHgz+O74o3Pn594XU8FVzwsX1FmZdIKRGmoCkbvI5DOsuxXAvdanSrSeOcuqj49btDzPFoIrtpyeFPTwm7LltXNzAsA7/rUOuapm4RQJmVDH8eE8/mJOMEQynSeXZHANx881XdT6asLS8RLrkAuKFD02pkq4kGE54PJijPRPkOjm/x7OGf7fAoMUyAy0mFJV28JylPXoaNiyscH0a4ax6Dx0c4HQVVTT7OSe2MnuFz0fEYkmACLFr0qr8ukpMBwQ/POO3l7EqTeR7TyQUqSenZiiQt6AiF7bTUygT4p8CxLTp2hbXW4UqwTt1oxtOEy5XFME4JQ59FZbC91eM0L6mFJs4KACRAnBeMoinD4wm/H/1F3lSgNcJT9EKXbuDgKc3TKD4bz/b21gsCCVzdWSfq+DyfnJLOF/QCj1EUU9QNg2hG27a4yqIbuoyjGClPXxAYUnIUzXCURHVXCXwbLaC3uYMhBMsdl0urF3ACj1nWIITAsQx9RpAtKi2kIcpyTpYtaAyToq7xvZKybhClQEoDRUNR1yjTICtLeUbwykvrnwe26M+0z+7mCkHgsLIUcGVnFTQ0TcsoSphnNWHgIE3RD13js/+c6YtPbi3/9svw3VE03w9954ZrW/zYH7PkOcQL/ciyw/u9S+rewcHDE/6P9q7v7r12bfPcO/8NQHUxdZxa9U0AAAAASUVORK5CYII='
      },
      {
        title: 'Optifne 小型实用教程 ',
        href: 'https://www.mcbbs.net/thread-803870-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: 'Blockbench教程-做出属于自己的模型 - 材质资源 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/forum.php?mod=viewthread&tid=833634&orderby=dateline',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: '教程/制作资源包 - Minecraft Wiki，最详细的官方我的世界百科',
        href: 'https://minecraft-zh.gamepedia.com/%E6%95%99%E7%A8%8B/%E5%88%B6%E4%BD%9C%E8%B5%84%E6%BA%90%E5%8C%85#pack.mcmeta',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvUlEQVQ4jY2Tu4tcZQDFf9937/3u+85m9pndzRq2SBRsNI11srWSFfwPRAxaqYWdYJtCJARS2FpYZP8AC0slGBRBRWHHOJPZ2ex153F37mPu67MQNoKweLoDh8OvOAcu0Lv339r75Jv39y7KiH+bL5O7K19/8d3bXsd5M53kNwzLQJqSpqrRbfu4ani4/8HNB/vivdPzgjtf3dkI3PLDbLK4vcir3SB0qWtNMS9o6xbDFCAkRVri+BZux6VpRK+77B/0/zi+K17/6NbCizwVXPKxfUWZl0gpEaagKRu8yCGd5liuhW41utWks5y6qPj120PM0dFYdtKSw5+eEnZctq5vYFgGfseh1jVN3SKAMisZ/DxiNp2TjBIMpUjn2acC4OYbr+peMmFteYlwyQXADR2aViNbTdwfc9IfozwT5Ts4vsWzR3+2g2FimABXkwpLunhPUp68CBuXVzg+jHHXPPo/DHEiBVVNPspJ7Yyu4XPZ8RiQYAIsWvSqvy6S0z7B98846+bsSpN5PiPKBSpJ6dqKJC2IhMJ2WmplAvxT4NgWkV1hrUVcC9apG81oknC1shjMUsLQZ1EZbG91OctLaqGZZQUAEmCWFxzFEwbHY34f/kXeVKA1wlN0Q5dO4OApzdN4dj6e7e2t5wQSuL6zThz5nIzPSOcLuoHHUTyjqBv68ZS2bXGVRSd0GcUzpDx7TmBIyTCe4iiJ6qwS+DZaQHdzB0MIliOXK6uXcAKPadYghMCxDH1OkC0qLaQhynJOli1oDJOirvG9krJuEKVASgNFQ1HXKNMgK0t5TvDyC+ufB7boTbXP7uYKQeCwshRwbWcVNDRNy1GcMM9qwsBBmqIXusZn/znTvY9vL//2y+Cd4cl8PwqcG65t8WNvxJLnMF3ox8oOH3avqAcHB49O+T+69cru3msvbV54578BRjUxdCPZETIAAAAASUVORK5CYII='
      },
      {
        title: 'Minecraft Wiki - Minecraft Wiki',
        href: 'https://wiki.biligame.com/mc/Minecraft_Wiki',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jY2SP2gUQRSHvzcze5c977jDiBhQTGEngqIBAyIkRYKNIJggYiOCImprJXiWNnYiEaJoIXIKgiBIIImFqGCMQv7YiWIjGjS62c1lb2fGYs0ZG8kPBh7vzbz38XsDqxqZCrg7f47R6V4Ahhq6XVuNR6d7uTt/jpGpYLUk1L2CK7Dt6C4qlXe00gWa8RFO7X7OWo2+O0DHhkcEhU1E0W4+P5yBy0j7wu23NaR4g7B8jJXkO5kdwuvX+Rjbg9EPKJY2srx0H79ylpN7FnOCay9CNtXqoI7jfQWhig7AWbBZAoA2JZQG2wLPT0QicPdYWKwbOqtXqXReIPoB3iV4iXCpQxDAAODsL6z1gEIwIFupdF7ESyjcmY/RgaLVOoxTrwBoWk+HFirWAxBpaecAlNtPEDzGtaxB6RKt9CfdXyfp68tYjyYnJ/m4eQVjqgbwKBE+dIU0GgnLu8bw3rOSHOL03rzhzTeGQvgUpSCcGeBDV4hxAniD9wIIsU5RPQGFrB/vwTY7crOAxlyRNOhHBOKegDhLqToBUH+gPLXE8Kk7JUsnyLJxPreW28jzX5tk2ThZOsGn7pRakpPnrkpulCpp6uII5wZ4MjtIvS8Dcrp6X0ZpdpBwboC6OFSp/UsNIDjvCXfEAAwP2zV2+Xa0Nl94G5Ps9IAYnE0ICkXi9/005l7ypaDYYH17hauKtBBrYUvqiKWXICjisiWD97coV88T/RgjyRKqrXzXy/LPe4yDqoMEj9ElylVYXLiuOXjiGcpqUNuBAHD/PaIsyDeayQ2+L176O2ZkqoQpa9ajbMlyZl8C8BsqkQfT9fYhAwAAAABJRU5ErkJggg=='
      },
      {
        title:
          '【服务器技巧】你知道吗，这些东西可以大幅度优化服务器的运行！ - 技巧教程 - 最MC论坛 - 我的世界_Minecraft_联机_服主_资讯_MOD_皮肤_交流_作品_中文论坛',
        href: 'http://www.zuimc.com/thread-42552-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACxklEQVQ4jY3Tv4tcVRjG8e97zrnnztw7WWeTrFlHshjUxCBBkk7QQgJiI6iNhYWFhY2VIIlgLTYigsYi/gGKhRoLC8HGH52bbRyFhVXcRCfJ7J2dmfv73nOPxW60sfCBt3yf5n0/wkECIAYiwADCf8cDDZAdjpPD5dH5M6NLoQ2eVEr3jEDtHJ33tM4hCCKgtQZPusyrL8c7kyvAngCrZ08O37Pavdx2IAhGFHXX4rynax0igoigtEKJ4D3kDZd/nyw/VEC8Ohw+3nZQ1g1FVTEvClznMMpzPDYcjQzDyCLeU9UtrutYHa5cBPoG0J0nFBHOP3wKpRSCYG2A0YqQFo+A0izSnLKq2Z7cRiuxgDaAzIucuqp49bmniXs9rDFYO0BrQ57O8QheC1kyJV0seOvTr2g7DyAG4MWnnkA1JUXeUpYpznVonaGUZr6YEVrLseE93JnNSdMFz154lBzL1q83MQDnHtgg8C1BYKmbljSvsYGglCItSjovtC20HrwoHhmdYNYc3FUBdG2HCSzPXHqX+y++zvufnWRvGrNmHOdOjSib+3jzSsSZF97mlQ++ID4+wvSOwOHTUJcpqhEm403KyW0ee9BRljN++2tGsB9S5CtcOL1GdmOLP7Z22d/fI83qfwsWyR3yuuDHq+/Qi2Jee36Da9/u8NPPN/DOc/ahEW+8dJTr333EL59PuZk1ZKr/T4FvvcYByypnusgYb9+iWpasRQMAinnNta83CWyNCgeYqsSIBfAGcKVrK+06smxJlrX8eSsntIaeNng8TdWwuzthbT2iHx1Q8Y4acAbIro+3f7j3SHDadY4wsBxbj+m8B6BqagKlWbEDnPekhaNqanYm02+AQgNue7q3ubF+woT9vg2jQdrrxwnGJmJs4oxOtO0lxvYTtE0q1M7uLLv6yffjj4HFXbbBIeX4f3Cugfwu578BQJZLP1yFjEoAAAAASUVORK5CYII='
      }
    ]
  },
  {
    title: '娱乐插件',
    list: [
      {
        title: 'BasicQuests - Bukkit 插件 - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/basicquests',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4je2QMUtCYRSG33O/Dy/XhkIpLBwaJAiaJNxrCuHezampsaWl39AfyMmxoiXHq0ZFP6CgBqGhr8VIErSI0G4lek6TcEULGoPe7XDe87znHOBfFC6y2eyaZVnHvwFo13UPmDkJAEREALoAIgODBWBS9fDS18PJRA1mPtQikiciH8DMuISFSAAFGQIw875SarNcLgdWqVS6dBxnUUR2ROR+BDD7Bm+piajVBwAGYDKZzIbv+8HIDwAgl8tNB0FQJaKEN9dCPaKxnmigcD2P20+nJyK7lUplO3zikIrFYouIzgDAjT7zVvoO8ZZgeaINItJa65uwfwQw4AAw+Yek1biI4+nDxslrrAugzswmbFTjpo0xJpVKTTXZXj1vx3DajuFdlAJw1Ol0CrVajX8EeJ63AmBvTCtt2/ajMebqm83/or4AxPJ5JdyCsXEAAAAASUVORK5CYII='
      },
      {
        title: 'Magic - Bukkit Plugins - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/magic',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4je2QMUtCYRSG33O/Dy/XhkIpLBwaJAiaJNxrCuHezampsaWl39AfyMmxoiXHq0ZFP6CgBqGhr8VIErSI0G4lek6TcEULGoPe7XDe87znHOBfFC6y2eyaZVnHvwFo13UPmDkJAEREALoAIgODBWBS9fDS18PJRA1mPtQikiciH8DMuISFSAAFGQIw875SarNcLgdWqVS6dBxnUUR2ROR+BDD7Bm+piajVBwAGYDKZzIbv+8HIDwAgl8tNB0FQJaKEN9dCPaKxnmigcD2P20+nJyK7lUplO3zikIrFYouIzgDAjT7zVvoO8ZZgeaINItJa65uwfwQw4AAw+Yek1biI4+nDxslrrAugzswmbFTjpo0xJpVKTTXZXj1vx3DajuFdlAJw1Ol0CrVajX8EeJ63AmBvTCtt2/ajMebqm83/or4AxPJ5JdyCsXEAAAAASUVORK5CYII='
      },
      {
        title:
          '[管理|娱乐][SCT]Magic——魔法?不只是技能那么简单![1.6-1.17.X] - 服务端插件 - Minecraft(我的世界)中文论坛 -',
        href: 'https://www.mcbbs.net/thread-1182379-1-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuElEQVQ4jXWTy28bVRjFf/fOeDwZvyYP26F2VBJoS0FQlzUV2QQhsWHLjiW7ZMWWLbBqlvwFsESqhISiSg1IIARSFhUVrXBrnBY12NgTv+fOfbALFaRnfc5P35G+I3iOPnzn6k6j6j4WQPtp+vmXtx8dnOcT/wtut+Lymt6rF9RuvaRiieHJKEju9739yUzd/PpOJzkX8P52K355Te2VI7W7sSrilbxAW4lyFukUyuRoD2XSHZj9wUifgTyAra2tT65vyq/ee92+2yjbcJ7BXDmUdUwygzFQCiRbsQ6vrPvbvXn0UX9RDIfD4aEAuHF90+V8RzXO8/YredaLMyaLlIWWRFJSCARhtES7Z/ml7XjUW/C4P6bd/Vv4ALViNq4XF6WfjxX3n8y53Cjw5kXBq3VD0Qv4tSf4/ijj3nHK6WTCazVNHNgxgA/QHRiWQ82NTUsnCemcjHjwZ8i1F5fAGY7aM5LxmEYl5XJTorTPcOo4A2Qmx1FXUatWufLGWzS7tzD6lG/upgwmKdcuzHipAXOd48FfjswKUiMBkAAbK5ZW02MyUdz9Y8QPDyWVUHBpTbFezCiHkk6S596JQBuPjWVBXODZCyxrMfjemMf9nxjh8d1DSTLVTFLBbyc+noCNZaiElsAHbZ6pEEiBMB5eDuqlIc3lPAsd8ePvBiklzQpEeUPmHMpYQs/DF+LfCnNNyfPBFw7tJNpZXog15SVLFFjiokFbyDKNL8EIh3audPZISufoT2mVi7kwjiQ5AOPoDGChLNWCAwT5wGOmPDp9kpPEfLpI1aEHMJrOD6dZ8EW359J5JltR6IVxwXE8kGSZpbkiOFUe3b5LOn372XghPkhOR9+eO6Y4juMolHtXG7ndZCbi8VQReDp5OmRfI28mSZL8N3OuarXazsULqwf11fJBpVLZeZ7vHwSESAk2UBaGAAAAAElFTkSuQmCC'
      },
      {
        title: 'Magic - Minecraft插件百科',
        href: 'https://mineplugin.org/Magic',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRklEQVQ4jYWSO2tUQRTHfzP37t1HNrhZs0LQSgMGE6Iiio8UCtFKbATBTqtUgvoBTMSvkEKwttJvYBHEIChoCol5GB8b8yCJSdxn7u69c8ZiZ4Mpoqc5w8yZ//nP7wz8J8ZAT3R1Dex37rcX/f0232gsZIwJI0l5ujhzYhXgTq5w8osN79Nr750JPuS2dLKRaBp/fv7UMoAGqwGstzgSMXMjlU0+pPH5Ylt4y+PaZqMyRZruhrZjvg2HdNI+ApQTaIU0y81arfheJK5sbWy+BrCgK9acnowTk3xS32JRP6OoOm3iaB16g7aABRAd2Gyyx8PzbT5PAmCjUDhaFoLxKJoaw2qtAvyEp7Xe7YvetaJjDRHaikqamgZYiu1wSeJpwIz+5bd1/4ja60CMxPEOYsU2QiUAVSXnZ5vNCYDHQGyMQBMRsbBk9zogpY1KG18lvKJcr1norovknoXhu9Y4lWgdqDjKCCqpYaE9xlsKwCrRqeDABaTcwcH0uZIht40urkEN4Njg4oCY5cO+kkGRagGInMALA6i51SdP0zvNzk69FZMZqb012QdzEr5yDlVpZbxYr8+Oap2MRMpvANnvcwFwGVL/LHChgOPAVWAVmAVixyYGhoBfwBWg4oAboMPl5z7QDdwE5oBh4ADw3e1HwApw2zX4ASRcTRr4qFocyAI9wCFgA6gDecBz3bJACOwAfcAyMAPUfGflN3AWuAt8pUW+C1h3ojlgDdgGLgEvgWKbQTsHQKez2H5r1fHoc2KbQMbxKQH2D/J590ziuCm+AAAAAElFTkSuQmCC'
      }
    ]
  },
  {
    title: 'Mc_linux',
    list: [
      {
        title: '分享|Linux 上搭建 Minecraft 服务器',
        href: 'https://linux.cn/article-8140-1.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAz0lEQVQ4jc2SsQmEMBSGf49AQip3eYWtA9i4hIWV4BzO4Qpip0XQxspGsHAEQSuJcEUO8VTk7O5rkvzJ95KQWOM4lmWptcaJdV2FENuQc+44jlXXdRiG59WXxHHMuq4DQEREBGAYhjzPbxxmGiIKggBAURQ3gtb69eNhDEKIZwKAfxSWZXkkMMbYIbJtO4qiQ1hVVZZl2N5hj5TS87xDOE2TER7f4bND27ZpmgLo+36eZ9Pf0zTNl6CUUkpt00mSXJbnnDPf96WUl9/7jOu6bwYoSyeJNLJoAAAAAElFTkSuQmCC'
      },
      {
        title: '我的世界：CentOS搭建mc服务器 - xuejianbest的专栏 - CSDN博客',
        href: 'https://blog.csdn.net/xuejianbest/article/details/80508156#1_javaJava18_2',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB/klEQVQ4jU2SPWtUYRCFz5n3bvbubhISoyJiJxEsEkglghZJZUTUJkhAUoja2WihgohFQPAXaGVhk8rGRkQrURDEFOL3B2idkDXJ7t3Nve8ci7ubZOozZ2aeMyzmptAvSSBpBgkxgkQIkOQOkgCAZLeaJEi1NkBDWgeEzXUkFVZTuIPcaSjVkqPb5bEZTp/H4aPMc//0Hs+X9Psb0hrlILm9kuRw5+XbNjsPuX//yNEx239Inbbfu6IvH5jWISU9fzNlmV26FWbn/d0rf7SI5oosaPosF25gZC9iLH1ZzE0JRLeN8YnwYEl/fsSb8+xkTOvyiK0O9h3ERhMSAZAGgKTy3E6eppmePcHmOhtDgmjG2iDXVtjnAcAAyCNrDYxPSNLXZVZTxYIlZTmSBKSkciUrb0BSwfAe5DnW11DmUE7u6bhN3/opRHTbSALSGgSaARDAEOCuYmu72QAwJGq39OszLXDqhP6tKjrc6VEbTdUaHDugIufODRAt6OVTxcIWrtuZi6imCokGUkwet7sPbfExBqpy72Etc0C7xVMX7OodVCroZGquojHIoRECvvzG71+DnLRdSQPIWhiftJlzODLJ4VF1Mvz9qeXXevsCRcEQ+hN2Ps/UaaPIUWswJJKjm6EoWB8syZLsPV8PgiLTGlhHjIoFSaR10OQRpSPwH79sFlWOAVADAAAAAElFTkSuQmCC'
      }
    ]
  },
  {
    title: 'mod',
    list: [
      {
        title: 'LabyMod for Minecraft',
        href: 'https://www.labymod.net/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACx0lEQVQ4jX2TX0iUWRjGf9/MN3MadSfFP/21QtMdrAYkbIyk2qglKESICKKLjNgNVsMiKqSiJLsrkyxk12Kji25a7MKLhYKi7WKbC22QrAbKGGdxavvm0xktv3H63i5yBvtDD7zwnMPzPrznnOcgIpqIaJGR0asiUpBZf6cKZrSaiGhkSGPzqZEDrR3DhmGsnSV2zpQmIpphGGsPnu4a/qXl9EhmT2cGuktPdCcrqvqPdD84sbO261n4ZckLc3ozQHmB666vsuzNpb8Hm+as3qovHeodyvZliHI6E0RfEAzs1Rt6H7bkLgtQ7veR49YJxiK73z0KU7i5meWv/8EBiUyfI0M8ypUgMghpC7tqA67iUpTuRNM0chYspahmC8UeB1r0CcqlfWWgmynxsbAS4lEAklPTTFppZmPVDxZzy1egqzxfZnoHQDQ6Wt/71FyCfwvMqwBg+oNN2rY/M7j3VjFRsYEpT8GSaHS0PmvQfeOvJqM0AN75kDQgNQVAfMLKNqffT5Aaf8uAAUWBn7l683ZTxsDfNxjbyLJqSFuAwLUmuPM7NiAivPzzLE/aG3G73RQqePiuiElRGwG/bppm3qIcbSz0aiAfbzE4HPDrH/DfU5JjY6Q9aeb9tIOyvSfYtEDId8NIJIqVHB8zTTNPExHNsqzKo+1XbneFJn22bUPdHlC56A6NQHkJACVzoDp2jyJvDrGhgWetLY0NSqmwA0ApFe5sO1Tbsb2sLz98HyIhAD6IZO+gLjfO9Y7z8P9w35ljB2qVUmH4dMbZOXcG+0Od7m0nhY6Y0P5c1tyMy7o+keaLtyTYH+qcHW0R0bJBmoFdU+1v21SqUkxPwZV9PD7eQL4b5qbHUzXV/jbgs7f90gAgvmv9yp6qgWuwYj11O3az6N8eflxc2APEvxR/+pLfQCLxfs2Fyz3nAA7/tr/V6/UEv6X7CNxYaD1nh2AYAAAAAElFTkSuQmCC'
      }
    ]
  },
  {
    title: '整合包',
    list: [
      {
        title: '主页 | Project:OPEREO',
        href: 'https://www.opereserver.com/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVQ4jWP8//8/IwMFgIkSzaMGjBowasBgMgAAZ6YDHjftVz8AAAAASUVORK5CYII='
      }
    ]
  },
  {
    title: '资源站&amp;教程&amp;wiki',
    list: [
      {
        title: 'MC百科|最大的Minecraft中文MOD百科',
        href: 'https://www.mcmod.cn/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC50lEQVQ4jWWTzWucZRTFf/c+z5v3nWQyrSYy1hJTRWrEFOxC+iVmo4tSkxQsiLgREf8E3XRhbIs7cevCP0CEiq5ECNZlV6JFUWvSTNoQTWo6k8zH+/lcFzNQxLO43MU5Z3P4CcDK6vJirRZ/VBQ2h1kQEET4j8wwwQRRjfyaFjtX3l9Y/UKu3bh03kXuuipJmVfG/5IjyagEZ0nUlXY5X93uvvOWB1lRR1JmoRDEG2ZDv4xCYMODmSPSA/bSufJO9Z6vsBWP8EyZlxYseMGJqpgFxARCqABBRTFTnOzbXv68/Jm+65BgXvIZD4bgZcxFoQwpIQQRlBAqIk0wCWRVhlhKn5PSKt62icibSK69QvGDssvZmYssHHuTVvsX+erXTxiUXU7PLPPS7CW29n/n29ufsfTsB0zXX6QMyKDK+fTHbTpZirdQyXg0yXjU0Lnp0zTrT9Fq3+KFI6/QiKe47+qcPHKBJw6f4vNbW4jA3W7BeicjVhEPhqpnp9cyFSfPPXaGrOwxVTtK68FNeuE4uTxOq9Pn67U9apEjUqHmHWUVGBaIY1B0WX/wEyeaCzTiKXZ6a9xpb9A8dIqSfwDDqzKmQgCyMuBV0OFokPgJfv7rBofiJvPNl/luM2UrPUusGWlpHK3HzE+Pc6yRcPxwjeZERAiGiqqFUOLU225vk1b7JnkV+H6rAVLDu8Dq3Q4HecXH52a5cuZJrp2bZenpKfohmFz94fW98WjykUgS6+XrdMKydMIiu4N9Jsciat6x3cupOeXRxINiilq/rLSdln0votYvDkztHrvVIhuD84Z1JXaO/TzQzipipxRm3OsXhpkY4FTMKyiBPyZqheyUy+VmepHY5cRezRDzTiz2zgKYqljilMQ7S5xUSZwIxoYmev/yZvdCb5s3Ii8DMMQQEREBEYOHvyEhmLixxIeqykOwywKwdP3vVyfq/Q9DkZ5AhjSOUHpIM4z2EnNR9FuR5Ve/fG3um38BTI1ppmazI9MAAAAASUVORK5CYII='
      },
      {
        title: 'Minecraft Forge',
        href: 'https://files.minecraftforge.net/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABo0lEQVQ4jZ1SOUsDQRidmT0m2WSvFBERQREUFCV4ETHgASJYWAl24h8Q7LRWS7G1sBIbCxu1EAsPUEQUrCwEwVvUGM1hMrszMbMWq4kXQvzKx3sf33vvg+X1XaCYQUWx/yMQf0KO4/xKhRC+CzjneRJCyNA1jGXgOABCAAAEACEEIIjHUzalour39fV0lJUGOec2ZYyxSLipqrKcENuyKaXMsu2rm7uHaGxtY+fs4lpMZ8jt3f3QYH99bTVlLPr4rKo+Q1Pd26KPT3MLSytrm9HYs8M5QkjQghXnl7fbewev2Zyha1iW/IoiSRIAgFI2OT07v7j8kiYFJ24PnDsIwYCpezDujLROjI/IsnRyejYwPJpIphAqhIk+vEIAQOwpnki+SKLoZhAwjbaWkOr3fc5N0Esq82mahj4zNdbb3U4sG2MpQ6zmUF1TqG53/8imtBBrXhAw9YCpr65vHR4dZwhRFG9DbU0k3GgaWiKZcgXw8y8JAvIpXkqzxLJcxOvxYCwTYuU4/6XpXI4nU2kIoSAILsKyWcqYu/uL6W/9/4EU/Xxvy1Kz8YzyfUEAAAAASUVORK5CYII='
      },
      {
        title: 'Minecraft ID List - Minecraft Info',
        href: 'https://www.minecraftinfo.com/idlist.htm',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADNUlEQVQ4jUWTPWwcVRSFz/uZNzM73r/x2htn14liLU2QKyRQJAqLDgUaJEcRBU0qkLGgQHITFEWiQuJnZYmGmiIuaKigIB0KKEghggTZ/Mi7aG3v7uzM7uzOzrw371HYcW53r865p/kO8HzIxh3wZ8vX9275n3x/8+7H371199Zn1/xn9zs/bnAA5NwEAJv3wPZuIAeAt3fWq/SK2Kr51a1SxVsWQuBoEJysFJd2q1l19703vhqdejbZ3o29/PzTqzuXqpeu1LZdW2xfbCz54TiGYzmKcwsLjsstm6Bz1A8szdo/fPug/fibaAQApN1+334kHn4knezD1eYFX+QO4lksXeEypSQxjMChwghb5NNsZmlbYR5ngSW9zxvua5+Stc1q+epqM6w1iyg3FjJRYDycTYhJNfyFMjKmEU9j1MuLcIQw/X6ojv+Kxf6vPYSH4woBasU3b67to5EuRekU9YtlUmo4qJQ9wsFRKBRAqMEwmJj9Bz10/hgaKxeYjWb9p/+cvMBbLU3U05HlUkHzvjSSgowThVCc4PLVOsbjGXq/Rfjz5y4Z7kewCxywKcF/udXSIPzgIMCLL/so9DhqiY3jR8coLZURhRGGBzHCf+dQClBSwdEc8kiCeBzMcaBSgL/e8rGyWETOXYyTFE4fUHOGRXgY/TJBmgHCaFCdQ+eAV3JRLAgkqcTvAU7Bmc4VlBpBMGB5sQTXpRjHBI1qGbPeCK7NoQ2D0Rq2sBDPJWAMXmn5oOOQGhBIv+LpaDo30TQxKpNGaw3H5rAtglTmoFyYeSrNLJVGcKYpIZIzarhbKtF5qupaG6xdqGRBYnil5JCFgjLdYQxOGaSSoCpFccEzU0VUliUChNTnMqf0y3deSphFbxtjgjQnQueKDsOJynJtPM+D1hqCM+N5roLJqU5nIslUYIy5/fDvUXKO8s719epBWtyeRYPtqmf5AEAJUU+6A+S54QYAoySQmWobyPbjwzOUAWATYHs4LdO719ervcF8i3G21ayVln960kGm9EmSprtJHO4eRhidZTIAz8sEgGxsgN2/DwUA15olf/XyygedQYzOdPJFtzsOznQcp2EGAP4HTVuNYlI6+oQAAAAASUVORK5CYII='
      },
      {
        title: 'Minecraft Forge',
        href: 'https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABo0lEQVQ4jZ1SOUsDQRidmT0m2WSvFBERQREUFCV4ETHgASJYWAl24h8Q7LRWS7G1sBIbCxu1EAsPUEQUrCwEwVvUGM1hMrszMbMWq4kXQvzKx3sf33vvg+X1XaCYQUWx/yMQf0KO4/xKhRC+CzjneRJCyNA1jGXgOABCAAAEACEEIIjHUzalour39fV0lJUGOec2ZYyxSLipqrKcENuyKaXMsu2rm7uHaGxtY+fs4lpMZ8jt3f3QYH99bTVlLPr4rKo+Q1Pd26KPT3MLSytrm9HYs8M5QkjQghXnl7fbewev2Zyha1iW/IoiSRIAgFI2OT07v7j8kiYFJ24PnDsIwYCpezDujLROjI/IsnRyejYwPJpIphAqhIk+vEIAQOwpnki+SKLoZhAwjbaWkOr3fc5N0Esq82mahj4zNdbb3U4sG2MpQ6zmUF1TqG53/8imtBBrXhAw9YCpr65vHR4dZwhRFG9DbU0k3GgaWiKZcgXw8y8JAvIpXkqzxLJcxOvxYCwTYuU4/6XpXI4nU2kIoSAILsKyWcqYu/uL6W/9/4EU/Xxvy1Kz8YzyfUEAAAAASUVORK5CYII='
      },
      {
        title: 'Minecraft 物品ID列表',
        href: 'https://gl.xn--gfs727n.com:233/id/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADI0lEQVQ4jVWTzWtcVRjGn/Nxz7lzZ+bOnZk0yUysg1IpfkAXQVxl1yoIggSmf4CbUmjpyq66diFxUSqUduFaEt11IwhdKCiK+IEagtoajUySzmTuvbl37sc55x4XSRN9d8/L87zv5vkBp0OG62BPxbWbl/q3Pl1de/fjt9YuvXO+/3S/bocMADkJAcBwHWzjMgwArKwOer2V9vXFXvdK0G10hBAY7U0O2iy4t/9deuf+e5+NjjJDtnF5w5xcenF1rvfyytKNZsu9+szZeT+ME7iOqzl30HBr3JEE2//sx0hx98FHX9/e/mI2AgBy8eJya/FNdhOBuTZ4tucL4yKZJcoVLjdKE8sIXOZYIaVOy5lTSY1ZVMQ2lh/+8qB4n02caX9h0f+kITxJOSs1VTTKEnaYJJCOQEE0xodTCMaZKxwb7qdqdyvxvn/4aOXnLzfv82gLxl5wD8ZI248f7fP5fgv+kmuDVoMQELRrTXTqDUwODu0PDx/jr18n3NHCptNsGkW54UEAYramjsclMU8UFAWJM41Q7GPw0gLieIbRTxG2vtkhk98iSI8DkhLsGCcACA/DHM4LFt6Io5tJ7P24B/9MC1EYYfJ7gvDPHFoDWmm4FYfaVSB1DlaTQAjw5wIXvW4T1vEQZwXcJ4DOGbqoI/z2EEVpIawFrQwqA9T9GpqewCwvEeYAB4A006jSKQQD5rs+vBpFnBAstVuYjaZwJUdlGWxVQQoHSa5gK4te4IIWOSwoVLtVt1Ga2yjNrCqVNVUFKTkEJyiUAeXC5oWys0JZwZmllKqcwHJHSlaWphPZHM8vBmqSWSfwXdLwtN2ZJGCUQhkNqgvSbNRtqokuy0yAkI6owNjrryxZw1nFCC6Acq8oFSmLQhHKKOGCRHFCGKVoNmpaKcWKPGe5NjEl+OCP3fjzkyqvLg96prlwo0ymV7sN4VsAlBC9uTOGMZYfacRFoe8meXZ7e3xcZQAYAmwDRzC9sTzoMbDrrhRXzp7xO19t/o1CVQdpnt8Lo+jOeIbR8U+G48wpzsNTnM/Pef23Xzu39uq5/trcnNf/j+9/OP8LSxx5harCTBAAAAAASUVORK5CYII='
      },
      {
        title: '登录 Minecraft 统一通行证 - Minecraft 统一通行证',
        href: 'https://login2.nide8.com:233/account/login',
        favicon: ''
      },
      {
        title: 'Bukkit Plugins - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins?filter-game-version=2020709689%3A9190&filter-sort=4#',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4je2QMUtCYRSG33O/Dy/XhkIpLBwaJAiaJNxrCuHezampsaWl39AfyMmxoiXHq0ZFP6CgBqGhr8VIErSI0G4lek6TcEULGoPe7XDe87znHOBfFC6y2eyaZVnHvwFo13UPmDkJAEREALoAIgODBWBS9fDS18PJRA1mPtQikiciH8DMuISFSAAFGQIw875SarNcLgdWqVS6dBxnUUR2ROR+BDD7Bm+piajVBwAGYDKZzIbv+8HIDwAgl8tNB0FQJaKEN9dCPaKxnmigcD2P20+nJyK7lUplO3zikIrFYouIzgDAjT7zVvoO8ZZgeaINItJa65uwfwQw4AAw+Yek1biI4+nDxslrrAugzswmbFTjpo0xJpVKTTXZXj1vx3DajuFdlAJw1Ol0CrVajX8EeJ63AmBvTCtt2/ajMebqm83/or4AxPJ5JdyCsXEAAAAASUVORK5CYII='
      },
      {
        title: 'Trending Minecraft Skins | NameMC',
        href: 'https://namemc.com/minecraft-skins/trending/daily?page=2',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAKklEQVQ4jWNgGHSAEc76//8/dhWMjMhcJlJtYMFvHtxmuDjJNoxqGKIAAGnaBhkuD3D7AAAAAElFTkSuQmCC'
      },
      {
        title: 'Minecraft 着色器 | Mods ',
        href: 'https://shadersmods.com/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACo0lEQVQ4jZWTP2idZRjFf+f5/tybpCbcYMWElIougm5OhVhDhjoI6lCHSkGKUnS3k5uLQ8VVKYKLuDioo4Ih2CEFQekgTkVqitKmSZOmN/fe7/ve9zjcgtLNZ3weDufhHH4CMEhgAG+dXyPyBeA00goA9i3gJ3J8oVNfbv5XIx6Ovz8zx+Lxj5HeoVeUTDJkT48hqAM3qZP9OXs77+vlH4YAshGbb8wxW33HYGadg0kmO1sU9vQtAWFEAAs92B9vcNS+xtrXw5Aw/eoyg5l17o0bgASlkKIqVPQLRRnamyRGnTP7k5bBzDr96rKE5WvnVimLTWcQlk2oClKTuPb3Eb/cGfHb3TE//nnoj1aXdPb5RXKTUxSCLq2VGV2MXllo1GamwfDzzUM+2LrN9Z0RwzZTFWLYZv26M/ZZgW3TK0uSL5YReslN5+E4MRm3unGv4cLmX2w/aFnolfTLIDTNc3fUic4oFDTZ4BfL/cNm+XDUadwmFurwN3/c181hx+MzJV2GZLBNspmpBIVMstxlSVopd+83AlOE6Cy2hx2lNG3QnrYQ07afHfRBkm1L011EaLuuws64FFqaLck2hUASVYhRl1merXjl6XncZiLCKsPYtwL7al0VQs5ttl9/6pgHveDuODHqMnvjjpTNh6tPsjLo4ZwtnKlDoKulI12ZNHozJBWSbx+lOPfMvEdt1u8HLScWat56bpHTJ4+Rm6k7QkxSwvmKAG58++qng/n+u/sHk+bOOJVLj1WxPF87l0HdK4T0UKyM3THo1+yOPtOpr94LG42b+5cOH7QbJ5bn6hdOznPi+GwX/ZK6DDnZqc2OoEPAoF9zb7TBuL1ko39hun5mjskTnxB6m14UTBJOU+YUgl7AJHU8CtOjOLdb59fK/4HzP/x/chNiv9WMAAAAAElFTkSuQmCC'
      }
    ]
  },
  {
    title: 'Minecraft spigot 插件开发',
    list: [
      {
        title: 'Spigot project 源代码',
        href: 'https://hub.spigotmc.org/stash/projects/SPIGOT',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4jZWSS09TURSFv33L7W17Hy19YItgcGKiAwZWSSfGmf4CZw4dOfOnOHeoc6cEcWxAMcSIkBAMva0FYmILt/i47dkObGrVluBK9uCss/baj3PgT3hACLSBDmBGojPgw4FuInLANFARoe2lURHaQGXA585KHkXRd2lvP8f4Lm2gOE5kjeEECETYzPkE0wGa836dgeC81dMphyhcRvU9/fqKpWmHCEifpwMPyBUCevkAJZnkx+Wq+tNOz3XJjqvmj0QFaFRKHLde0I/f2Ro2a6ZxdNusb9w0qbTVHGiGrzCVzxKOzp+0CV4/g3JFaOaua09SkqKn19gk75rZKMGOKicnXarAgYTL6DBbIJ/FpB2sntj6qbgkJGy1zVfJfFzDttTEYHUjWLpP2DykJvks7eEsGWTtKcFMJclhoWr6liOOfCN6+0bvPohPXz7Bm50HerBfh8V7nPyzg/KM1VzfuKEf9m7pzm5N91dtnSvSAa5cnGG/uUJft9HoFSZwf3c/irLrTTV8P9Hx/cQX36UDNAAbKJWLnB6souEyxsugMs5hsOW/7yLAAXazgTsLaOe4251kMAlSWnh4Yf7Soz0grm89vvq/BizeUdeTz0cgcfJ7YW7cTzwTrcaWmH4sxsTSau3IT/gQsSSexjReAAAAAElFTkSuQmCC'
      },
      {
        title: '资源列表 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/wiki/resources-list/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: 'IntelliJ：调试您的插件 | SpigotMC - 高性能 Minecraft',
        href: 'https://www.spigotmc.org/wiki/intellij-debug-your-plugin/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: '概览 (Spigot-API 1.19.2-R0.1-SNAPSHOT API 中文文档)',
        href: 'https://bukkit.windit.net/javadoc/',
        favicon: ''
      },
      {
        title: 'RarityEG&#39;s Plugin Dev Tutorial',
        href: 'https://plgdev.xuogroup.top/#/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADD0lEQVQ4jU2TO2wcVRSG/3Ofszt+bGIblGCMJSKlgIa0CCkFUiJEu6KhQImEBKl5dLiLDYguFBRB0CDkhiINEhKiQKbCShGBReI4cbCd2F7v2js7M3fuPYcC5/HX/6ev+ghPR91uVy0vLycA6C5cOOPH259kYxZHg7D448c/3QGAbhd6eRkMQACAAAALUFgAA0D3szfn3Hj7ChFdUlpNa6NQDcMec7peDMK1G0u/3H+Wocf67ldvvzBm3RUy6n2f+6lRv0QMKWmrABYNIhhv9lNK34gO177/4Ma/AKAB0DtXL37Ume58JywXY0ztWMUIgEgpxZEVaSWhbJLzZsxY8waSfvf0qzP0z+/3Vuj8e/PZ+PMn77cmJmZ8PhkUWRNjQ0oRiADSCjEkGKchjUhxNIqD3X23e/fh7s1bm3OmLiJlN8OA5/anDmRHj88+p/LJE6JIUUoMYoYxGsN+IYOdnhpuH+jegwOWgzSY3QCZs7tG+gUrjqxCGqX+aEvo5ZqSshgbP4kUBVtrm3i0tk2haaRtWmjtW2XYqNfPz4s5MRNpFJlsspCjjPrrJVWuRNnso9/Zw2grYtQrELcCEIUqLim3FtYqWrsdyfyx8gCnXzyLVtshy4HOMGK4OoTONJpWgaonMBHQSUMx0G45xMQIoYHDQxhv5oU0yagoEFIUlzmcMgZ1k1D1PcqigDEWSWsokxCaKK3MI8LIyjpEzZyKVIfIectx23tUdRAWFgFjYtIjcxqkGDFFqUMSqzVGdeDcgWcBMrk3Io3pHJWN6uQuMMaISMhbktAkNJHBIvBaIRorNcekiRyzdAwg6ttfN2pr9Bd5Zh8djhrXxEaVdUh1ZLDyxMzkrEYrM0lLUk4rZxTtFlXz5QZQKyLID7/d+nyqVZ2r4Be9s73JljNgprbhxIJUhkiHZTJa657VeilFnFtd31kCII9bUMD/MV1+67WXjg6rD5WmS21vp//e3AMBewn+eg35evWvu/eeZZ7EdFymApAA4PKFV85s75WfHlYBufeLP/955/bxTx/LBAD+A101nHSUoReIAAAAAElFTkSuQmCC'
      },
      {
        title: 'mineflayer - npm',
        href: 'https://www.npmjs.com/package/mineflayer',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJElEQVQ4jYWSPW4CQQyFP3uGREqEFIlQcgY6Wg6wl4BTcBLOQ4nE3oA6VehAiPCzdopZZtkkEHd+Y/vZb56U4CBACDyIqkplERBwsKp6UK9paGoweOr3X0cjNwNEpK5ydwBEdb9anTYbBUrVJayLwt3N3bwVGVkXxRJK1ZgGutWVACKZR8DMEHGzhEZq2lbY4fAxm513u7fxuDeZNA/uMc+rVzcTVT+fP+fzL3c5Ht+nU0Cu5Ppz+LU/9noxhNDt3u6Z5LorPFWFWSPaPw13oj4664h7TjJO/hJ3pc3Y3PI3KjH1iqqIcNVeOh0XaXAQ1UQk5W9rqPrptF0s7HJ5HgxehkPM9mWZrCElkMzXJtdsypuUZL7k23Brb3fMHEQkqEJj7285nLmISMvnnQAAAABJRU5ErkJggg=='
      },
      {
        title: 'Bukkit插件开发_奋斗的小牛的博客-CSDN博客',
        href: 'https://blog.csdn.net/weixin_45445598/category_11177632.html',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB/klEQVQ4jU2SPWtUYRCFz5n3bvbubhISoyJiJxEsEkglghZJZUTUJkhAUoja2WihgohFQPAXaGVhk8rGRkQrURDEFOL3B2idkDXJ7t3Nve8ci7ubZOozZ2aeMyzmptAvSSBpBgkxgkQIkOQOkgCAZLeaJEi1NkBDWgeEzXUkFVZTuIPcaSjVkqPb5bEZTp/H4aPMc//0Hs+X9Psb0hrlILm9kuRw5+XbNjsPuX//yNEx239Inbbfu6IvH5jWISU9fzNlmV26FWbn/d0rf7SI5oosaPosF25gZC9iLH1ZzE0JRLeN8YnwYEl/fsSb8+xkTOvyiK0O9h3ERhMSAZAGgKTy3E6eppmePcHmOhtDgmjG2iDXVtjnAcAAyCNrDYxPSNLXZVZTxYIlZTmSBKSkciUrb0BSwfAe5DnW11DmUE7u6bhN3/opRHTbSALSGgSaARDAEOCuYmu72QAwJGq39OszLXDqhP6tKjrc6VEbTdUaHDugIufODRAt6OVTxcIWrtuZi6imCokGUkwet7sPbfExBqpy72Etc0C7xVMX7OodVCroZGquojHIoRECvvzG71+DnLRdSQPIWhiftJlzODLJ4VF1Mvz9qeXXevsCRcEQ+hN2Ps/UaaPIUWswJJKjm6EoWB8syZLsPV8PgiLTGlhHjIoFSaR10OQRpSPwH79sFlWOAVADAAAAAElFTkSuQmCC'
      },
      { title: 'Bukkit Development Note', href: 'https://bdn.tdiant.net/#/', favicon: '' },
      {
        title: 'Overview - MythicLib - Bukkit Plugins - Projects - Bukkit',
        href: 'https://dev.bukkit.org/projects/mythiclib',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADXElEQVQ4jV2PW0xbdQCHv9NzTm+jNzpuG21jZJZSKEUIY9kNYzQbiVOjiW9q4ouJPs0X92yyFxMNPkzjAzEqmwm6ySQSdUrCHqouRpbIraWwCo4eabn0Qjk9Pf37omb6Jb+37+H7SfyPzu5Yrg7WulFHlmQC7UEUu0ytboIQ929NT3U+6CsAXV19r+4U9XONTQ7HhbM9frtppWrqSB4Tu81BfddCo9sHLjVcFfWb5T293ux1T0xP3xhXOju7Lw0N+i4danC5immdx5ZSBIJe7CMBan0NGDsVuLODdT7LTt7J7kD0qUCHk5Xle0PpdFdQcbm9l3VhcLLN5ESrE+dKCmdbAZsDpIobs9UKPfuYv6dpuHvA66HDZFwKd4xCi1m3XJZPnxp6Yz6j2uTsnwx35Mg/2438ZAfyeoX9LzJwxIUU8FBt9qPtQf6bBFdmNvg6Y9LkoKhksxrjH1whn9ui75kLVMUOY+ODvKCY/PJthoeO2GkM2phMVHj58zJWSeXNi68QkyRG3xtFEUKwpW3y6OAQH3/2JS6Hl+sz47w1cRWvVsM+do/t3AEnnn6YqbEoWxcn2U3+xqzDj6qqKEIIV9Wo4Wk4xMgTZ5EtFiqfjqKXJNrefZ/qehat5OTxyBon3XdZev4lvt93cz+Vxmq1uuRIJNKuqmqTEMJjkRW8Hg/Hqho9He2Ezj/HmXiEM8PH6TjQKc2s8VHLafD4kAr59OLS8nU5nU5/pWlavFwu946cPweShB4bYtUXIpm4TXl/n9XVJPmtItiP8nNqmczyAvn89ieJROI1C4Db7Xb7/X5qpkkqlUKpVjne9QjdvXF0XWcvu8nqgU7C5cehyBT29lhbW/MAWACEEIdtNhsejwcA6e8JIVBVFUtrAN/8jwz/OoWQFcKxXqLRqB9ABojH4/O5XG57Y2Pj1MDAAEIItre3MQyDfD5PqVhE1Ay0SpWJ2z/R2tL8YWtLyzuzs7ObMkAymfzD7/eL9fX1F2OxGF6vF5/Ph91uR9M0zP0S7mPdFJuD3Lp5g7ymvX312rXv/i0A6O/vP+pwOMKpVCpYKpUAmJubY3FxEW1rC2HoDEQjLCwszCwnkz8UCoWVf+7+h3A4nBNCWBVFwTAMrFYrAKqqEgqFNicnJ8MP+n8BaK12V+BeXx0AAAAASUVORK5CYII='
      },
      {
        title: 'MythicMobs - Bukkit 插件 - Minecraft - CurseForge',
        href: 'https://www.curseforge.com/minecraft/bukkit-plugins/mythicmobs',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4je2QMUtCYRSG33O/Dy/XhkIpLBwaJAiaJNxrCuHezampsaWl39AfyMmxoiXHq0ZFP6CgBqGhr8VIErSI0G4lek6TcEULGoPe7XDe87znHOBfFC6y2eyaZVnHvwFo13UPmDkJAEREALoAIgODBWBS9fDS18PJRA1mPtQikiciH8DMuISFSAAFGQIw875SarNcLgdWqVS6dBxnUUR2ROR+BDD7Bm+piajVBwAGYDKZzIbv+8HIDwAgl8tNB0FQJaKEN9dCPaKxnmigcD2P20+nJyK7lUplO3zikIrFYouIzgDAjT7zVvoO8ZZgeaINItJa65uwfwQw4AAw+Yek1biI4+nDxslrrAugzswmbFTjpo0xJpVKTTXZXj1vx3DajuFdlAJw1Ol0CrVajX8EeJ63AmBvTCtt2/ajMebqm83/or4AxPJ5JdyCsXEAAAAASUVORK5CYII='
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
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADOklEQVQ4jU2TT2xUVRTGv3PffffNv86QmVKmpQlQW6ohShMSjJkUCUq6IaIuDAs3GvDfSqLGxBgzKw0LSagLF0ZJ6gqNCjUSEjaYMrEamzQSaVOwY2GmKJ15M9MyM2/ee/ceF9KBb/edfOeczfcD7iufhwCDNv2Ni+NPT02d/eHAp0s/9X1czm3OwUzI58WmJQBggAhgADj8+VjOJ/12r4Wjh1K77QHxFOqdjH+5Nvz9X53YmV/f2Tf70C53Px6b3D3eieuTJY9esCICvseo61CPKI1Pso9Z59wPUKgnOEHBd+1Qn/75vdwvAEDfAGr/W6Nfbjy77+VrPITr63OsjdRZB5YhlzKWhfX2EZ52D2hNbDnRBIE1N+q1qcLMtdfp4pPDyR1D3try48+pSedE0KfaMjREEaF5b6yEAWcDFyqPYtVEKGqDm812WF0t2T2NYnDQmd8qgz3buOPebLT/WO6tDd+VDYcQj0TZWIoWayMQEEiqENJv8b9/34Zyb1qDusW5zEJ9LPajocVcb0+jP1GMksnMpibMud4JsW5JxJQDFU+AdYja6grulssYVWt4Zus83xb3qB42XXKDXXI5rFCGE9QRNnKVaRImwNnsi/C8JnyvhUpxCZ17DQgZw57MP1jgW7geakgGKukVCKTTAAABRk0mMF6dxqHaLHwZA5kQJgxgKwWfBcreFkQ5CgUBG4SMC4ghWzCBmZmhjI87zi6U7Aw0AwwCCYIXErIRD9uiFgQrEMz/BUinISrVCphIA8SSA1RVP9+Jj/KIvwZDAqEhDMYCvLR9jm37N76BDQaIiUnXm4KFTKYJzGkCUyCcsN9bwvvFU5ioFtiQYkdYvD/9J1+pp2gmyKKNQFtEZAiphNRC9Ky4HoG+YEYYt6UtuUV9rQW9ENmBDVgUGgkbNgLVCCNyEbYtbBBBGPNtw6l53SoXnt8+5ghx0pPpY0FsQH3UdxyZuKcfca/C43lr0S6h41sgiPMGfLrwWXGmC1MeEHnAAMCHb54aLUe2nGgmk8df2zmb+n3pCs6v1wMprAtM4ZnC5K2rD8PUpfT+kS6mM1+/unfuqyOXXnn3ictjbwwexAMR8g9y/wE2QXx29E5HaQAAAABJRU5ErkJggg=='
      },
      {
        title: 'MCSManager 管理面板 - 官方网站',
        href: 'https://mcsmanager.com/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdklEQVQ4jaWTMW/TUBSFv+fGtScnEkEUAYElA10IC7P/BO2cH4bMD8ngmSmKoi7plLZqHDuWUV1FL7Lv7ZC0lKoqsTjSld7w3nnnnHsv/CfM/SEMw86h6hBjei++UJ1vjIniOC4eCMIw7LRUfwH9PT+eVcZ8i+O4cABMXQ9FpC8i7Fl9U9dDgBaAQk9VG5rfWm0B1CLQnIAHAqkqut3XvDl6y8ZanIMDgiDAWguA53mUNyWigu/7XF5esMrSPwSVCK+6Xb6fnrBerzmbntH79JHpZMLn42OK4jdpmjL4+oWgHfDzR0SyTABwAEQVESVLM5bJEgVUBIzhfHbO+w/v8H2ffJWTpdk2yJ3lbYhVRZIsGI1G3N6WeIceV1cXbOwGVWWVZ5Q3JdPphHbQJs9XaFX9beE6WXCdLPYP8bECUW3ehR3u2zg3/7r5VADMYRei67qRiMwaTOLMdd0IHi3TYDDoWGuHiLy8TI4z9zwvGo/HRUPRz+MOjCj5L9wZSJ8AAAAASUVORK5CYII='
      },
      {
        title: 'Infinite Blocks | SpigotMC - High Performance Minecraft',
        href: 'https://www.spigotmc.org/resources/infinite-blocks.101023/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmklEQVQ4jaVTORKAIAzcOD6CRt9AbWPHv/2Bb9CGX8RGHCQHzrgVQ5LdTQgECVbuWpA4GKjJ1NyhJ8W7H/cI2lbU1lwHRd1z0W0BAM6wmjFtMFyr1sVz2ETNCKU3rXjK20ugEI29KWvEAEARDICodWCpU5TDpGjM4Miy+LbMjQtzE7U3L7kPiUfg4ctf8bGkzEvKDHxcJA+/CS5YrDUokhVf1AAAAABJRU5ErkJggg=='
      },
      {
        title: '通用 Minecraft 编辑器：NBT 编辑你的 Minecraft 世界',
        href: 'https://www.universalminecrafteditor.com/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACj0lEQVQ4jXWTO0yTURTH/+fe79WvFBApmCiKiJGkA4sJamKCK9ER4+TsIoaEUJFBVB6C4ACbC+4ObjCZJg7EMBCiomiV8oyCvEpbvnv7Pa6Dgai0Zzw5v19yTs6fUKR6UglLwXgEgnfcTT9uO98iC82xQs3R5ISZU6wj7Yu7aV/cW2Ph9p65OaPQLBWCV7ndmfXzDzK+tACglJtOmBlPbBEd6YnF8kUFo8kJc0Wz4zkv35X2hPUrtQylFKrqzqBcsxybG71hJzr8t+RQ0JNKWPtg8awn76c9YW18X8T67DxAQHVjA6rO1aJcs5wwN/tO+bnhg5uwYvDP2c8AZyCNY+NjEhsLS9j1RCjny+5VHu4YTU6YAEDtK1Mh3XM7D+D1ZArrB3BGgoiBKmxAAdFY/eE6YW722RSMaHre7c8G8s4feAE/pj8Ahg624wAzK1AgUFMtqCqCrfkFECOg9nQIQLfiZjmTymVZT5IIPARKgQwdtL0PmlkB9gSw50BNL4K2ciBdw/bXJWwuryLjSRKBS7zxdutboQUqgLpsHCvVdK5BvpmD2swBjAAiwHGhMhK8NgqyDMh0RmiG1i+qVB97cfHGvmGXPuVgg6QgI/U1qLzeBBYJAUoBCoClQ7twAixsgulcgLOBT6/fD72quekwAHh59poI2TsDSgWDUEqWXGlA5a2rYCUWYHDol+qgxU6C6ZpgRP0V+9HBb2Nj8sgjNSfGrbIyswvE4iCY2XdfkF3bAK+vBhg5KsBAebpsaLKt7TAXR165OTFuRSJ6lwpUPHA9U+xm4DvSUb7fH47YzyZb2v4J1RHBgcQ2EA9cL+7LvAqk22dobOR/uKgAAFqnnof2RElv4Hmu5nkPC8EA8Bu6eT/EfcMWSAAAAABJRU5ErkJggg=='
      },
      {
        title: 'Blockbench',
        href: 'https://www.blockbench.net/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6ElEQVQ4jZWTTWtTQRiFn3dmmjSpSW8TrZ9tXbhx6ddCFK1CF+pCC94i4saFv0D/gH/BH6HQuNWCIHbjMm5FiiBYwS9yg5qmyb0zr4sbS6HXRc5m4B3OmcN5zwiFUAEEgBjhx7rAYn51oKW0YgUJxdwxIYXT5c0mpnECHdawRKiPwExjTA3VWdRPInIYUFcoYKtPcWYJD9iSYBzIBBggAOpBLAyTT3sFbiURwjk0FdBAGChhoCiKoLnp4LF1B/J6JKDCmbaj9luZkNOIzBB8Bij5uyAYFAFVEAHvUN6PBERpkwIQJ/O4qQw/cNhK7lnD6PTgM0GAbGsAtIV46yjGz5CmCzgzR+A4hiZonyCTiDaB/aAHwUxDqGHLU/iBp5cdc+jgAaorOHuScj0PaZj0EfkJ4RfIN1S+YHhH0C6oJaRVVDd5Ofs1X+P5zxWO1C9huYeGBeAUpWgf9l/qIY9CA2S9beAZvfCQF1HiWHzjWJ/rc7tzmUq0xJ/uI4JbQ7s3ELkAegVkHpEemDaBJzyvrYH4XUVSQ9y5jy19ZOPDW9pn0521XtsoU23cxJWuEtKIVuPOrhLqfwqqQqwW1I4284q72ylx8jj/J1rQ4Jxg9syvfz/ESrLKcufijvhYiFfteIRCqBS6A/4CvBDAKqE0b/8AAAAASUVORK5CYII='
      },
      {
        title: 'Querz/mcaselector：用于从 Minecraft 世界中选择块以进行删除或导出的工具。',
        href: 'https://github.com/Querz/mcaselector',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC'
      },
      {
        title: 'amuletmc Minecraft 世界编辑器和转换器',
        href: 'https://www.amuletmc.com/',
        favicon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMElEQVQ4jW2TTWyUVRSG33Pv/WamP05nppS20BREodEOEek0Ma1NMBqFjZFEWGhId5hGdkTCjokRUiNRQ0wMC+LClMSGACqIiYuaUCllTLC0FJtWSactMxQ6P53fb77v3uOiHcWEszh5c3KezTnvCzxRPAxZ1Y8v7n6BY5Ff+Fbk+/mh7m1P2/kPjEJU9e0vdgV4PHKCJ7vt+dF9vDS2l3miO8+xyEc/RrtqAYAZxAwCsNaqZY92v++p5dMIhFo++2ETBi9sci3FOHFwSQ3sSwCZ9P1KXhz19t26VGWIAUKsrwfKHkSw5tUr4604PtTm3H0QlJvDLWQ0IzGd5K4tKf3poUXr9ZcSQLYyAqWO0c7ffqczZ573HupsuJP2tew48s1259rtRhFoC4qmzmY4ygOAoOwyklMJFJOrZn9vSn/y7rRn8c5s7I0jf7+irl9vEu915PTpIZ/+6WZIdLy5jXSwAdlsGbBcYsMQWnBrbweQSNKFK0lJC1l9sMtlAKTqHiVYUADeWkhZXzYVLlAp5ZB5sRnuyyFWUkHGHlF6/B5odZGlWqbAM1J4PIoBsCo0tRJzgdgwNASz7VCFymxvbkDFKVF9Kodc9i5j6S/4lYcMLKM1wxgQAFJrp6S1fzADBEgpwbYDHY8jPTUN5TLqfT5AM5jNOsIAAFFXl2ACMwGQgogsyVR2yTuTowZhsbQ87Es6BMcQKclSEAlBAIMBQM3MtJIUeS7bQutVDcoXhbe2hnm2CCzlqWYxA6ukWfkkqFgiXYIpuaRp3Xrq8FsJThX8vv7etJyYT1ZujJURaAuIwHMhOK5kYwSUdJFfSKOwUjC72vN6z46cJ2eTBQDy8q8ZHX+7ebItVN7e35fZ2t5oi9iUcefnbKrzETmPH2JlLsUbvVk98Nqy6u95KBVKI5mCe+zqaDb+pJVp8rvwB+0b1PG89m/5/NpGnB3Z4HLxAfbvTql3ujJQpji3vMofHz55/9t/oWqYKAoDAOdPhpt7OtXRoF8M/LHgr5/4cwXPNhZS6Ry+Gpt1v/z6fDwNANEoRHSdeWqcR8+FI3MXwyPDp7b+PPhhe2d1Pnzg/3H+BxPTg/CHBo2YAAAAAElFTkSuQmCC'
      }
    ]
  }
]
</script>

<style scoped lang="scss"></style>
