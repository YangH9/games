<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <MainDom></MainDom>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import MyTableVue from '@/components/MyTable.vue'
import { ref } from 'vue'

const number = ref()
const result = ref('')

const digitUppercase = num => {
  const fraction = ['角', '分']
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const unit = [
    ['圆', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  const head = num < 0 ? '负' : ''

  const decNum = `${~~((num * 100) % 100)}`
  const decimal = fraction.map((i, j) => `${digit[decNum[j] || 0]}${i}`.replace(/零./, '')).join('') || '整'

  const intNum = [...`${Math.floor(Math.abs(num))}`].reverse()
  const integer = unit[0]
    .map(
      (i, ii) =>
        `${unit[1]
          .map((j, ji) =>
            intNum.length > ii * unit[1].length + ji ? `${digit[intNum[ii * unit[1].length + ji] || 0]}${j}` : ''
          )
          .reverse()
          .join('')
          .replace(/(零.)*零$/, '')
          .replace(/^$/, '零')}${i}`
    )
    .reverse()
    .join('')
  return `${head}${integer}${decimal}`
    .replace(/^(零.)+/, '')
    .replace(/(零.)*零圆/, '圆')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零圆整')
}

const generate = () => {
  const num = number.value
  console.log(num, Number.isNaN(num))
  if (!num) {
    result.value = '输入阿拉伯数字'
  } else if (num < 999999999999 && num > -999999999999) {
    result.value = digitUppercase(num)
  } else {
    result.value = '数字过大，无法计算'
  }
}

const MainDom = () => (
  <>
    <a-card title="大小写转换器" hoverable={true} class="mb_2">
      <a-form label-col={{ style: { width: '100px' } }}>
        <a-form-item label="阿拉伯数字">
          <a-row gutter={[10, 10]}>
            <a-col span={24} md={12}>
              <a-input v-model:value={number.value} />
            </a-col>
            <a-col span={24} md={12}>
              <a-button onClick={generate}>大写转换</a-button>
            </a-col>
          </a-row>
        </a-form-item>
      </a-form>
      <div class="result">{result.value}</div>
    </a-card>
    <a-card title="数字转换" hoverable={true} class="mb_2">
      <MyTableVue
        data={[
          { col1: '1', col2: '壹', col3: '2', col4: '贰', col5: '3', col6: '叁' },
          { col1: '4', col2: '肆', col3: '5', col4: '伍', col5: '6', col6: '陆' },
          { col1: '7', col2: '柒', col3: '8', col4: '捌', col5: '9', col6: '玖' },
          { col1: '0', col2: '零', col3: '十', col4: '拾', col5: '百', col6: '佰' },
          { col1: '千', col2: '仟', col3: '万', col4: '万', col5: '亿', col6: '亿' },
          { col1: '元', col2: '圆' }
        ]}
        columns={[
          { label: '数字', prop: 'col1' },
          { label: '大写', prop: 'col2' },
          { label: '数字', prop: 'col3' },
          { label: '大写', prop: 'col4' },
          { label: '数字', prop: 'col5' },
          { label: '大写', prop: 'col6' }
        ]}
      ></MyTableVue>
    </a-card>
    <a-card title="金额转换" hoverable={true} class="mb_2">
      <MyTableVue
        data={[
          { col1: '0', col2: '零圆整', col3: '1', col4: '壹圆整', col5: '2', col6: '贰圆整' },
          { col1: '3', col2: '叁圆整', col3: '4', col4: '肆圆整', col5: '5', col6: '伍圆整' },
          { col1: '6', col2: '陆圆整', col3: '7', col4: '柒圆整', col5: '8', col6: '捌圆整' },
          { col1: '9', col2: '玖圆整', col3: '10', col4: '壹拾元整', col5: '11', col6: '壹拾壹圆整' },
          { col1: '12', col2: '拾贰圆整', col3: '13', col4: '壹拾叁圆整', col5: '14', col6: '壹拾肆圆整' },
          { col1: '15', col2: '壹拾伍圆整', col3: '16', col4: '壹拾陆圆整', col5: '17', col6: '壹拾柒圆整' },
          { col1: '18', col2: '壹拾捌圆整', col3: '19', col4: '壹拾玖圆整', col5: '20', col6: '贰拾圆整' },
          { col1: '21', col2: '贰拾壹圆整', col3: '22', col4: '贰拾贰圆整', col5: '23', col6: '贰拾叁圆整' },
          { col1: '24', col2: '贰拾肆圆整', col3: '25', col4: '贰拾伍圆整', col5: '26', col6: '贰拾陆圆整' },
          { col1: '27', col2: '贰拾柒圆整', col3: '28', col4: '贰拾捌圆整', col5: '29', col6: '贰拾玖圆整' },
          { col1: '30', col2: '叁拾圆整圆', col3: '40', col4: '肆拾圆整', col5: '50', col6: '伍拾圆整' },
          { col1: '60', col2: '陆拾圆整', col3: '70', col4: '柒拾圆整', col5: '80', col6: '捌拾圆整' },
          { col1: '90', col2: '玖拾圆整' }
        ]}
        columns={[
          { label: '数字金额', prop: 'col1' },
          { label: '大写数字', prop: 'col2' },
          { label: '数字金额', prop: 'col3' },
          { label: '大写数字', prop: 'col4' },
          { label: '数字金额', prop: 'col5' },
          { label: '大写数字', prop: 'col6' }
        ]}
      ></MyTableVue>
    </a-card>
    <a-card hoverable={true}>
      <p>
        中文大写金额数字应用正楷或行书填写，如壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整(正)等字样。不得用一、二(两)、三、四、五、六、七、八、九、十、廿、毛、另(或0)填写，不得自造简化字。如果大写数字一到十书写中使用繁体字，如贰、陆、亿、万、圆的，也应受理。
      </p>
      <p>一、中文大写金额数字到"元"为止的，在"元"之后，应写"整"(或"正")字，在"角"之后，可以不写"整"(或"正")字。</p>
      <p>二、中文大写金额数字前应标明"人民币"字样，大写金额数字有"分"的，"分"后面不写"整"(或"正")字。</p>
      <p>
        三、大写金额数字应紧接"人民币"字样填写，不得留有空白。大写金额数字前未印"人民币"字样的，应加填"人民币"三字。在票据和结算凭证大写金额栏内不得预印固定的"仟、佰、拾、万、仟、佰、拾、元、角、分"字样。
      </p>
      <p>四、阿拉伯数字小写金额数字中有"0"时，中文大写应按照汉语语言规律、金额数字构成和防止涂改的要求进行书写。</p>
    </a-card>
  </>
)
</script>

<style scoped lang="scss">
:deep(.result) {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bolder;
  color: var(--el-color-danger);
}
</style>
