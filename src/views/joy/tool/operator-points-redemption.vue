<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="方法1: 手机识别二维码发送短信" class="operator_dom mb_2" :hoverable="true">
      <a-space :size="20" wrap>
        <a-card title="中国移动">
          <a-qrcode value="SMSTO:10658999:HF" />
        </a-card>
        <a-card title="中国联通">
          <a-qrcode value="SMSTO:10010:JFJF#Q" />
        </a-card>
        <a-card title="中国电信">
          <a-qrcode value="SMSTO:10001:JFDH" />
        </a-card>
      </a-space>
    </a-card>
    <a-card title="方法2: 手机浏览器点击链接跳转发送短信" class="mb_2" :hoverable="true">
      <a-button href="sms:10658999?body=HF" size="small" type="link" target="_blank">中国移动</a-button>
      <a-button href="sms:10010?body=JFJF#Q" size="small" type="link" target="_blank">中国联通</a-button>
      <a-button href="sms:10001?body=JFDH" size="small" type="link" target="_blank">中国电信</a-button>
    </a-card>
    <a-card title="方法3: 手动编辑短信发送" class="mb_2" :hoverable="true">
      <p><strong>中国移动</strong> 编辑短信 <strong>HF</strong> 发送至 <strong>10658999</strong></p>
      <p><strong>中国联通</strong> 编辑短信 <strong>JFJF#Q</strong> 发送至 <strong>10010</strong></p>
      <p><strong>中国电信</strong> 编辑短信 <strong>JFDH</strong> 发送至 <strong>10001</strong></p>
    </a-card>
    <a-card title="短信发送成功后等待运营商回信，按提示操作即可" class="mb_2" :hoverable="true"></a-card>
    <a-card title="以上方法都无法使用" :hoverable="true">
      <p>点击链接直达官方兑换渠道（可能会由于官方更新失效）</p>
      <p>也可自行前往对应运营商手机App搜索积分兑换查找</p>
      <p>
        中国移动：
        <a-button
          href="https://m.jf.10086.cn/#/modules/pages/ownBusiness/bill/bill"
          size="small"
          type="link"
          target="_blank"
        >
          https://m.jf.10086.cn/#/modules/pages/ownBusiness/bill/bill
        </a-button>
      </p>
      <p>
        中国电信：
        <a-button href="https://apps.telefen.com/webjycalls/" size="small" type="link" target="_blank">
          https://apps.telefen.com/webjycalls/
        </a-button>
      </p>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style scoped lang="scss">
.operator_dom:deep() {
  .ant-card-body {
    text-align: center;
    padding: 10px;
    .ant-space {
      margin-bottom: 0 !important;
      .ant-card-head {
        min-height: 30px;
      }
      .ant-card-body {
        padding: 0;
      }
    }
  }
}
</style>
