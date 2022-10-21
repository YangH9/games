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
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // "off"或0-关闭规则
    // "warn"或1-将该规则作为警告打开（不影响退出代码）
    // "error"或2-将规则作为错误打开（触发时退出代码为1）

    // http://eslint.cn/docs/rules/
    quotes: 2, // 强制使用一致的反勾号、双引号或单引号
    semi: [2, "never"], // 要求或禁止使用分号代替 ASI
    indent: ["error", 2], // 强制使用一致的缩进
    "no-cond-assign": 0, // 禁止条件表达式中出现赋值操作符
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0, // 禁用 console
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0, // 禁用 debugger
    "no-func-assign": 2, // 禁止对 function 声明重新赋值
    "no-unused-vars": 2, // 禁止出现未使用过的变量
    "no-var": 2, // 要求使用 let 或 const 而不是 var
    "no-prototype-builtins": 0, // 禁止直接调用 Object.prototypes 的内置属性
    "no-useless-escape": 0, // 禁用不必要的转义字符
    "no-unreachable": 0, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-empty": 0, // 禁止出现空语句块
    "no-undef": 0, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-mixed-spaces-and-tabs": 2, // 禁止空格和 tab 的混合缩进
    "space-before-function-paren": 1, // 强制在 function 的左括号之前使用一致的空格

    // https://eslint.vuejs.org/rules/
    "vue/no-unused-components": 0,
    "vue/no-multiple-template-root": 0,
    "vue/multi-word-component-names": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/singleline-html-element-content-newline": 0,
  },
}
