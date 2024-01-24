/* 依赖导入 */
import html2canvas from 'html2canvas'
import JsPdf from 'jspdf'

const wMap = new WeakMap()
const imgObj = {
  width: 0,
  height: 0
}

/* 初始化获取需要转换的dom */
const init = async dom => {
  const canvas = await html2canvas(dom)
  const imgUrl = canvas.toDataURL('image/jpeg', 1.0)
  imgObj.width = canvas.width
  imgObj.height = canvas.height
  wMap.set(dom, imgUrl)
}

/* 下载 */
const click2Download = (url, name) => {
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
}

/* 导出为图片 */
export const export2Img = async (dom, picName = 'default.jpg') => {
  wMap.has(dom) ? null : await init(dom)
  const image = document.createElement('img')
  const b64Data = wMap.get(dom)
  image.src = b64Data
  document.body.appendChild(image)
  click2Download(b64Data, picName)
  document.body.removeChild(image)
}

/* 导出为html */
export const export2Html = async (dom, htmlName = 'default.html') => {
  wMap.has(dom) ? null : await init(dom)
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  </head>
  <body style="text-align:center">
  <img src="${wMap.get(dom)}"/>
  </body>
  </html>`
  const url = window.URL.createObjectURL(
    new Blob([html], {
      type: "text/plain;charset='utf-8'"
    })
  )
  click2Download(url, htmlName)
  window.URL.revokeObjectURL(url)
}

/* 导出为pdf */
export const export2Pdf = async (dom, pdfName = 'default.pdf') => {
  wMap.has(dom) ? null : await init(dom)
  // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
  const pdfWidth = 595.28
  const pdfHeight = 841.89
  const domWidth = imgObj.width
  const domHeight = imgObj.height
  const b64Data = wMap.get(dom)
  const pageHeight = (domWidth / pdfWidth) * pdfHeight
  // 未生成pdf的html页面高度
  let leftHeight = domHeight
  // 页面偏移
  let position = 0
  const imgWidth = pdfWidth
  const imgHeight = (pdfWidth / domWidth) * domHeight
  const pdf = new JsPdf('', 'pt', 'a4')

  // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(pdfHeight)
  // 当内容未超过pdf一页显示的范围，无需分页
  if (leftHeight < pageHeight) {
    // 在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
    pdf.addImage(b64Data, 'JPEG', 0, 0, imgWidth, imgHeight)
  } else {
    // 分页
    while (leftHeight > 0) {
      pdf.addImage(b64Data, 'JPEG', 0, position, imgWidth, imgHeight)
      leftHeight -= pageHeight
      position -= pdfHeight
      // 避免添加空白页
      if (leftHeight > 0) {
        pdf.addPage()
      }
    }
  }
  pdf.save(pdfName)
}
