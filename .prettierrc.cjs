module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  printWidth: 120, // 一行的字符数换行
  tabWidth: 2, // 一个tab代表几个空格数
  useTabs: false, // 是否使用tab进行缩进
  semi: false, // 行尾是否使用分号
  singleQuote: true, // 字符串是否使用单引号
  quoteProps: 'as-needed', // object对象中key值是否加引号
  jsxSingleQuote: false, // 在jsx文件中的引号需要单独设置
  trailingComma: 'none', // 尾部逗号设置
  bracketSpacing: true, // object对象里面的key和value值和括号间的空格，效果：{ foo: bar }
  bracketSameLine: false, // 标签多行属性写法时，尖括号是否另起一行
  arrowParens: 'always', // 箭头函数单个参数的情况是否省略括号
  requirePragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false, // vue script和style标签中是否缩进
  endOfLine: 'auto', // 保留在 Windows 和 Unix 下的换行符,
  embeddedLanguageFormatting: 'auto', // 格式化嵌入式代码
  singleAttributePerLine: false
  // disableLanguages: ['vue'] // 不格式化vue文件，vue文件的格式化单独设置
}
