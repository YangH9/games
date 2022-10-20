require("@rushstack/eslint-patch/modern-module-resolution");

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
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
  },
  rules: {
    'no-var': 1,//禁用var 
    semi: 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "space-before-function-paren": 0, // 方法空格
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "vue/no-multiple-template-root": "off",
    "no-prototype-builtins": 0,
    "no-setter-return": "off",
    "no-cond-assign": "off",
    "no-useless-escape": "off",
    "no-unreachable": "off",
    "no-empty": "off",
    "no-undef": "off",
    'vue/multi-word-component-names': 'off' // 关闭组件名称校验
  },
};
