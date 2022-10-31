require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    es2020: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    quotes: 2, // 强制使用一致的反勾号、双引号或单引号
    semi: [ 2, "never" ], // 要求或禁止使用分号代替 ASI
    indent: [ "error", 2 ], // 强制使用一致的缩进
    "no-cond-assign": 0, // 禁止条件表达式中出现赋值操作符
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0, // 禁用 console
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0, // 禁用 debugger
    "no-func-assign": 2, // 禁止对 function 声明重新赋值
    "no-unused-vars": 0, // 禁止出现未使用过的变量
    "no-setter-return": 0,
    "no-var": 2, // 要求使用 let 或 const 而不是 var
    "no-prototype-builtins": 0, // 禁止直接调用 Object.prototypes 的内置属性
    "no-useless-escape": 0, // 禁用不必要的转义字符
    "no-unreachable": 0, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-empty": 0, // 禁止出现空语句块
    "no-undef": 0, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-mixed-spaces-and-tabs": 2, // 禁止空格和 tab 的混合缩进
    "space-before-function-paren": 1, // 强制在 function 的左括号之前使用一致的空格
    "arrow-parens": [ "error", "as-needed" ],
    "implicit-arrow-linebreak": [ "error", "beside" ],
    "comma-dangle": [ "error", "never" ],
    "arrow-body-style": [ "error", "as-needed" ],
    "array-bracket-spacing": [ "error", "always", { "singleValue": false, "objectsInArrays": false, "arraysInArrays": false }], // 数组两端空格
    "object-curly-spacing": [ "error", "always" ], // 对象两端空格
    "computed-property-spacing": [ "error", "always" ],
    "switch-colon-spacing": [ "error", { "before": true, "after": false }], // 强制冒号后又空格
    "comma-spacing": [ "error", { "before": false, "after": true }],
    "arrow-spacing": [ "error", { "before": true, "after": true }],
    "block-spacing": [ "error", "always" ],
    "key-spacing": [ "error", { "mode": "strict" }],
    "no-multi-spaces": "error",
    
    "vue/comma-spacing": 1,
    "vue/attribute-hyphenation": 0,
    "vue/valid-v-model": 0,
    "vue/html-self-closing": 0,
    "vue/no-v-model-argument": 0,
    "vue/no-unused-components": 0,
    "vue/no-multiple-template-root": 0,
    "vue/multi-word-component-names": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/singleline-html-element-content-newline": 0
  }
}
