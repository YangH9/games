require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [ "plugin:vue/vue3-essential", "eslint:recommended", "plugin:vue/recommended" ],
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
    // Possible Errors、这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：
    "for-direction": "error", // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    "getter-return": "error", // 强制 getter 函数中出现 return 语句
    "no-async-promise-executor": "error", // 禁止使用异步函数作为 Promise executor
    "no-await-in-loop": "error", // 禁止在循环中出现 await
    "no-compare-neg-zero": "error", // 禁止与 -0 进行比较
    "no-cond-assign": "error", // 禁止条件表达式中出现赋值操作符
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 禁用 console
    "no-constant-condition": "error", // 禁止在条件中使用常量表达式
    "no-control-regex": "error", // 禁止在正则表达式中使用控制字符
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 禁用 debugger
    "no-dupe-args": "error", // 禁止 function 定义中出现重名参数
    "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": "error", // 禁止出现重复的 case 标签
    "no-empty": process.env.NODE_ENV === "production" ? "error" : "off", // 禁止出现空语句块
    "no-empty-character-class": "error", // 禁止在正则表达式中使用空字符集
    "no-ex-assign": "error", // 禁止对 catch 子句的参数重新赋值
    "no-extra-boolean-cast": "error", // 禁止不必要的布尔转换
    "no-extra-parens": "error", // 禁止不必要的括号
    "no-extra-semi": "error", // 禁止不必要的分号
    "no-func-assign": "error", // 禁止对 function 声明重新赋值
    "no-inner-declarations": "error", // 禁止在嵌套的块中出现变量声明或 function 声明
    "no-invalid-regexp": "error", // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    "no-irregular-whitespace": "error", // 禁止不规则的空白
    "no-misleading-character-class": "error", // 不允许在字符类语法中出现由多个代码点组成的字符
    "no-obj-calls": "error", // 禁止把全局对象作为函数调用
    "no-prototype-builtins": "error", // 禁止直接调用 Object.prototypes 的内置属性
    "no-regex-spaces": "error", // 禁止正则表达式字面量中出现多个空格
    "no-setter-return": "error", // 禁止从设置器返回值
    "no-sparse-arrays": "error", // 禁用稀疏数组
    "no-template-curly-in-string": "error", // 禁止在常规字符串中出现模板字面量占位符语法
    "no-unexpected-multiline": "error", // 禁止出现令人困惑的多行表达式
    "no-unreachable": "error", // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-unsafe-finally": "error", // 禁止在 finally 语句块中出现控制流语句
    "no-unsafe-negation": "error", // 禁止对关系运算符的左操作数使用否定操作符
    "require-atomic-updates": "error", // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    "use-isnan": "error", // 要求使用 isNaN() 检查 NaN
    "valid-typeof": "error", // 强制 typeof 表达式与有效的字符串进行比较

    // Best Practices、这些规则是关于最佳实践的，帮助你避免一些问题
    "accessor-pairs": "error", // 强制 getter 和 setter 在对象中成对出现
    "array-callback-return": "error", // 强制数组方法的回调函数中有 return 语句
    "block-scoped-var": "error", // 强制把变量的使用限制在其定义的作用域范围内
    "class-methods-use-this": "error", // 强制类方法使用 this
    complexity: "error", // 指定程序中允许的最大环路复杂度
    "consistent-return": "error", // 要求 return 语句要么总是指定返回的值，要么不指定
    curly: "error", // 强制所有控制语句使用一致的括号风格
    "default-case": "error", // 要求 switch 语句中有 default 分支
    "dot-location": "error", // 强制在点号之前和之后一致的换行
    "dot-notation": "error", // 强制尽可能地使用点号
    eqeqeq: "error", // 要求使用 === 和 !==
    "guard-for-in": "error", // 要求 for-in 循环中有一个 if 语句
    "max-classes-per-file": "error", // 强制每个文件中包含的的类的最大数量
    "no-alert": "error", // 禁用 alert、confirm 和 prompt
    "no-caller": "error", // 禁用 arguments.caller 或 arguments.callee
    "no-case-declarations": "error", // 不允许在 case 子句中使用词法声明
    "no-div-regex": "error", // 禁止除法操作符显式的出现在正则表达式开始的位置
    "no-else-return": "error", // 禁止 if 语句中 return 语句之后有 else 块
    "no-empty-function": "error", // 禁止出现空函数
    "no-empty-pattern": "error", // 禁止使用空解构模式
    "no-eq-null": "error", // 禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-eval": "error", // 禁用 eval()
    "no-extend-native": "error", // 禁止扩展原生类型
    "no-extra-bind": "error", // 禁止不必要的 .bind() 调用
    "no-extra-label": "error", // 禁用不必要的标签
    "no-fallthrough": "error", // 禁止 case 语句落空
    "no-floating-decimal": "error", // 禁止数字字面量中使用前导和末尾小数点
    "no-global-assign": "error", // 禁止对原生对象或只读的全局对象进行赋值
    "no-implicit-coercion": "off", // 禁止使用短符号进行类型转换
    "no-implicit-globals": "error", // 禁止在全局范围内使用变量声明和 function 声明
    "no-implied-eval": "error", // 禁止使用类似 eval() 的方法
    "no-invalid-this": "error", // 禁止 this 关键字出现在类和类对象之外
    "no-iterator": "error", // 禁用 __iterator__ 属性
    "no-labels": "error", // 禁用标签语句
    "no-lone-blocks": "error", // 禁用不必要的嵌套块
    "no-loop-func": "error", // 禁止在循环语句中出现包含不安全引用的函数声明
    "no-magic-numbers": "off", // 禁用魔术数字
    "no-multi-spaces": "error", // 禁止使用多个空格
    "no-multi-str": "error", // 禁止使用多行字符串
    "no-new": "error", // 禁止使用 new 以避免产生副作用
    "no-new-func": "error", // 禁止对 Function 对象使用 new 操作符
    "no-new-wrappers": "error", // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-octal": "error", // 禁用八进制字面量
    "no-octal-escape": "error", // 禁止在字符串中使用八进制转义序列
    "no-param-reassign": "error", // 禁止对 function 的参数进行重新赋值
    "no-proto": "error", // 禁用 __proto__ 属性
    "no-redeclare": "error", // 禁止多次声明同一变量
    "no-restricted-properties": "error", // 禁止使用对象的某些属性
    "no-return-assign": "error", // 禁止在 return 语句中使用赋值语句
    "no-return-await": "error", // 禁用不必要的 return await
    "no-script-url": "error", // 禁止使用 javascript: url
    "no-self-assign": "error", // 禁止自我赋值
    "no-self-compare": "error", // 禁止自身比较
    "no-sequences": "error", // 禁用逗号操作符
    "no-throw-literal": "error", // 禁止抛出异常字面量
    "no-unmodified-loop-condition": "error", // 禁用一成不变的循环条件
    "no-unused-expressions": "error", // 禁止出现未使用过的表达式
    "no-unused-labels": "error", // 禁用出现未使用过的标
    "no-useless-call": "error", // 禁止不必要的 .call() 和 .apply()
    "no-useless-catch": "error", // 禁止不必要的 catch 子句
    "no-useless-concat": "error", // 禁止不必要的字符串字面量或模板字面量的连接
    "no-useless-escape": "error", // 禁用不必要的转义字符
    "no-useless-return": "error", // 禁止多余的 return 语句
    "no-void": "error", // 禁用 void 操作符
    "no-warning-comments": "error", // 禁止在注释中使用特定的警告术语
    "no-with": "error", // 禁用 with 语句
    "prefer-named-capture-group": "off", // 建议在正则表达式中使用命名捕获组
    "prefer-promise-reject-errors": "error", // 要求使用 Error 对象作为 Promise 拒绝的原因
    radix: "error", // 强制在 parseInt() 使用基数参数
    "require-await": "error", // 禁止使用不带 await 表达式的 async 函数
    "require-unicode-regexp": "off", // 强制在 RegExp 上使用 u 标志
    "vars-on-top": "error", // 要求所有的 var 声明出现在它们所在的作用域顶部
    "wrap-iife": "error", // 要求 IIFE 使用括号括起来
    yoda: "error", // 要求或禁止 “Yoda” 条件

    // Variables 这些规则与变量声明有关：
    "init-declarations": [ "error", "always" ], // 要求或禁止 var 声明中的初始化
    "no-delete-var": "error", // 禁止删除变量
    "no-label-var": "error", // 不允许标签与变量同名
    "no-restricted-globals": [ "error", "event" ], // 禁用特定的全局变量
    "no-shadow": "error", // 禁止变量声明与外层作用域的变量同名
    "no-shadow-restricted-names": "error", // 禁止将标识符定义为受限的名字
    "no-undef": process.env.NODE_ENV === "production" ? "error" : "warn", // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-undef-init": "error", // 禁止将变量初始化为 undefined
    "no-undefined": "error", // 禁止将 undefined 作为标识符
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn", // 禁止出现未使用过的变量
    "no-use-before-define": "error", // 禁止在变量定义之前使用它们

    // Stylistic Issues、这些规则是关于风格指南的，而且是非常主观的：
    "array-bracket-newline": "error", // 在数组开括号后和闭括号前强制换行
    "array-bracket-spacing": [ "error", "always", { singleValue: false, objectsInArrays: false, arraysInArrays: false }], // 强制数组方括号中使用一致的空格
    "array-element-newline": [ "error", "consistent" ], // 强制数组元素间出现换行
    "block-spacing": [ "error", "always" ], // 禁止或强制在代码块中开括号前和闭括号后有空格
    "brace-style": "error", // 强制在代码块中使用一致的大括号风格
    camelcase: [ "error", { properties: "never" }], // 强制使用骆驼拼写法命名约定
    "capitalized-comments": "off", // 强制或禁止对注释的第一个字母大写
    "comma-dangle": [ "error", "never" ], // 要求或禁止末尾逗号
    "comma-spacing": [ "error", { before: false, after: true }], // 强制在逗号前后使用一致的空格
    "comma-style": "error", // 强制使用一致的逗号风格
    "computed-property-spacing": [ "error", "always" ], // 强制在计算的属性的方括号中使用一致的空格
    "consistent-this": "error", // 当获取当前执行环境的上下文时，强制使用一致的命名
    "eol-last": [ "error", "always" ], // 要求或禁止文件末尾存在空行
    "func-call-spacing": "error", // 要求或禁止在函数标识符和其调用之间有空格
    "func-name-matching": "error", // 要求函数名与赋值给它们的变量名或属性名相匹配
    "func-names": "error", // 要求或禁止使用命名的 function 表达式
    "func-style": [ "error", "declaration", { allowArrowFunctions: true }], // 强制一致地使用 function 声明或表达式
    "function-paren-newline": "error", // 强制在函数括号内使用一致的换行
    "id-blacklist": "error", // 禁用指定的标识符
    "id-length": [ "error", { min: 1 }], // 强制标识符的最小和最大长度
    "id-match": "error", // 要求标识符匹配一个指定的正则表达式
    "implicit-arrow-linebreak": [ "error", "beside" ], // 强制隐式返回的箭头函数体的位置
    indent: [ "error", 2 ], // 强制使用一致的缩进
    "jsx-quotes": "error", // 强制在 JSX 属性中一致地使用双引号或单引号
    "key-spacing": [ "error", { mode: "strict" }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    "keyword-spacing": "error", // 强制在关键字前后使用一致的空格
    "line-comment-position": "off", // 强制行注释的位置
    "linebreak-style": "off", // 强制使用一致的换行风格
    "lines-around-comment": "error", // 要求在注释周围有空行
    "lines-between-class-members": "error", // 要求或禁止类成员之间出现空行
    "max-depth": "error", // 强制可嵌套的块的最大深度
    "max-len": "off", // 强制一行的最大长度
    "max-lines": "off", // 强制最大行数
    "max-lines-per-function": "off", // 强制函数最大代码行数
    "max-nested-callbacks": "error", // 强制回调函数最大嵌套深度
    "max-params": "error", // 强制函数定义中最多允许的参数数量
    "max-statements": "error", // 强制函数块最多允许的的语句数量
    "max-statements-per-line": "error", // 强制每一行中所允许的最大语句数量
    "multiline-comment-style": "off", // 强制对多行注释使用特定风格
    "multiline-ternary": [ "error", "always-multiline" ], // 要求或禁止在三元操作数中间换行
    "new-cap": [ "error", { capIsNew: false }], // 要求构造函数首字母大写
    "new-parens": "error", // 强制或禁止调用无参构造函数时有圆括号
    "newline-per-chained-call": "error", // 要求方法链中每个调用都有一个换行符
    "no-array-constructor": "error", // 禁用 Array 构造函数
    "no-bitwise": [ "error", { allow: ["~"] }], // 禁用按位运算符
    "no-continue": "error", // 禁用 continue 语句
    "no-inline-comments": "off", // 禁止在代码后使用内联注释
    "no-lonely-if": "error", // 禁止 if 作为唯一的语句出现在 else 语句中
    "no-mixed-operators": "off", // 禁止混合使用不同的操作符
    "no-mixed-spaces-and-tabs": "error", // 禁止空格和 tab 的混合缩进
    "no-multi-assign": "error", // 禁止连续赋值
    "no-multiple-empty-lines": "error", // 禁止出现多行空行
    "no-negated-condition": "error", // 禁用否定的表达式
    "no-nested-ternary": "error", // 禁用嵌套的三元表达式
    "no-new-object": "error", // 禁用 Object 的构造函数
    "no-plusplus": "off", // 禁用一元操作符 ++ 和 --
    "no-restricted-syntax": "error", // 禁用特定的语法
    "no-tabs": "error", // 禁用 tab
    "no-ternary": "off", // 禁用三元操作符
    "no-trailing-spaces": "error", // 禁用行尾空格
    "no-underscore-dangle": "error", // 禁止标识符中有悬空下划线
    "no-unneeded-ternary": "error", // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-whitespace-before-property": "error", // 禁止属性前有空白
    "nonblock-statement-body-position": "error", // 强制单个语句的位置
    "object-curly-newline": "error", // 强制大括号内换行符的一致性
    "object-curly-spacing": [ "error", "always" ], // 强制在大括号中使用一致的空格
    "object-property-newline": "off", // 强制将对象的属性放在不同的行上
    "one-var": [ "error", "never" ], // 强制函数中的变量要么一起声明要么分开声明
    "one-var-declaration-per-line": "error", // 要求或禁止在变量声明周围换行
    "operator-assignment": "error", // 要求或禁止在可能的情况下使用简化的赋值操作符
    "operator-linebreak": "error", // 强制操作符使用一致的换行符
    "padded-blocks": [ "error", "never" ], // 要求或禁止块内填充
    "padding-line-between-statements": "error", // 要求或禁止在语句间填充空行
    "prefer-object-spread": "error", // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    "quote-props": [ "error", "as-needed" ], // 要求对象字面量属性名称用引号括起来
    quotes: [ "error", "double" ], // 强制使用一致的反勾号、双引号或单引号
    semi: [ "error", "never" ], // 要求或禁止使用分号代替 ASI
    "semi-spacing": "error", // 强制分号之前和之后使用一致的空格
    "semi-style": [ "error", "last" ], // 强制分号的位置
    "sort-keys": "off", // 要求对象属性按序排列
    "sort-vars": "off", // 要求同一个声明块中的变量按顺序排列
    "space-before-blocks": "error", // 强制在块之前使用一致的空格
    "space-before-function-paren": "error", // 强制在 function的左括号之前使用一致的空格
    "space-in-parens": "error", // 强制在圆括号内使用一致的空格
    "space-infix-ops": "error", // 要求操作符周围有空格
    "space-unary-ops": "error", // 强制在一元操作符前后使用一致的空格
    "spaced-comment": [ "error", "always" ], // 强制在注释中 // 或 /* 使用一致的空格
    "switch-colon-spacing": [ "error", { before: true, after: false }], // 强制在 switch 的冒号左右有空格
    "template-tag-spacing": "error", // 要求或禁止在模板标记和它们的字面量之间有空格
    "unicode-bom": "error", // 要求或禁止 Unicode 字节顺序标记 (BOM)
    "wrap-regex": "error", // 要求正则表达式被括号括起来

    // ECMAScript 6 、这些规则只与 ES6 有关, 即通常所说的 ES2015：
    "arrow-body-style": [ "error", "as-needed" ], // 要求箭头函数体使用大括号
    "arrow-parens": [ "error", "as-needed" ], // 要求箭头函数的参数使用圆括号
    "arrow-spacing": [ "error", { before: true, after: true }], // 强制箭头函数的箭头前后使用一致的空格
    "constructor-super": "error", // 要求在构造函数中有 super() 的调用
    "generator-star-spacing": "error", // 强制 generator 函数中 * 号周围使用一致的空格
    "no-class-assign": "error", // 禁止修改类声明的变量
    "no-confusing-arrow": "off", // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-const-assign": "error", // 禁止修改 const 声明的变量
    "no-dupe-class-members": "error", // 禁止类成员中出现重复的名称
    "no-duplicate-imports": "error", // 禁止重复模块导入
    "no-new-symbol": "error", // 禁止 Symbolnew 操作符和 new 一起使用
    "no-restricted-imports": "error", // 禁止使用指定的 import 加载的模块
    "no-this-before-super": "error", // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-useless-computed-key": "error", // 禁止在对象中使用不必要的计算属性
    "no-useless-constructor": "error", // 禁用不必要的构造函数
    "no-useless-rename": "error", // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "object-shorthand": "error", // 要求或禁止对象字面量中方法和属性使用简写语法
    "prefer-arrow-callback": "error", // 要求回调函数使用箭头函数
    "prefer-const": "error", // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-destructuring": "error", // 优先使用数组和对象解构
    "prefer-numeric-literals": "error", // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    "prefer-rest-params": "error", // 要求使用剩余参数而不是 arguments
    "prefer-spread": "error", // 要求使用扩展运算符而非 .apply()
    "prefer-template": "error", // 要求使用模板字面量而非字符串连接
    "require-yield": "error", // 要求 generator 函数内有 yield
    "rest-spread-spacing": "error", // 强制剩余和扩展运算符及其表达式之间有空格
    "sort-imports": "off", // 强制模块内的 import 排序
    "symbol-description": "error", // 要求 symbol 描述
    "template-curly-spacing": "error", // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "yield-star-spacing": "error", // 强制在 yield* 表达式中 * 周围使用空格

    // Vue eslint
    "vue/html-indent": [ "error", 2 ],
    "vue/max-attributes-per-line": [ "error", { singleline: { max: 1 }, multiline: { max: 1 } }],
    "vue/no-setup-props-destructure": "off",
    "vue/no-v-for-template-key": "off",
    "vue/require-default-prop": "off",
    "vue/comma-spacing": "warn",
    "vue/attribute-hyphenation": "off",
    "vue/valid-v-model": "off",
    "vue/html-self-closing": "off",
    "vue/no-v-model-argument": "off",
    "vue/no-unused-components": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-newline": "off"
  }
}
