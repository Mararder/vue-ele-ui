module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // eslint 警告
    "no-console": "warn", //  禁止使用console
    "no-debugger": "warn", //  禁止使用debugger
    "no-alert": "warn", //  禁止使用alert confirm prompt
    // eslint 报错
    "space-before-function-paren": ["error", "never"],  // 函数名与括号之间不需要空格
    "quotes": ["error", "double"],  // 使用双引号
    "object-shorthand": "error",  //  强制对象字面量缩写语法
    "semi": ["error", "always"],  //  语句强制分号结尾
    "eqeqeq": "error",  //  必须使用全等
    "no-extra-boolean-cast": "error", //  禁止不必要的bool转换
    "no-invalid-regexp": "error", //  禁止无效的正则表达式
    "no-lone-blocks": "error",  //  禁止不必要的嵌套块
    "no-nested-ternary": "error", // 禁止使用嵌套的三目运算
    "no-plusplus": "error", // 禁止使用++，--
    "no-redeclare": "error",  //  禁止重复声明变量
    "no-regex-spaces": "error", //  禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-self-compare": "error", //  不能比较自身
    "no-sequences": "error",  //  禁止使用逗号运算符
    "no-shadow": "error", //  外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-sparse-arrays": "error",  //  禁止稀疏数组， [1,,2]
    "no-undef": "error",  //  不能有未定义的变量
    "no-var": "error",  //  禁用var，用let和const代替
    "default-case": "error",  //  switch语句最后必须有default
    "spaced-comment": "error", // 注释风格要有空格
    "valid-typeof": "error",  //  必须使用合法的typeof的值
    "no-unused-vars": "error",  //  禁止未使用的变量
    "prefer-template": "error", //  需要模板文字而不是字符串连接x
    // vue
    "vue/max-attributes-per-line": ["error",
      {
        "singleline": 10,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "vue/require-explicit-emits": ["error", {
      "allowProps": false
    }],
    "vue/no-v-html": "off", //  关闭v-html检测
    "vue/name-property-casing": ["error", "PascalCase"],  // 组件名称必须大写
    "vue/v-bind-style": ["error", "shorthand"], // 必须使用v-bind缩写
    "vue/v-on-style": ["error","shorthand"], // 必须使用v-on缩写
    "vue/require-prop-types": "error",  //  此规则强制props语句包含类型定义。
    "vue/prop-name-casing": ["error", "camelCase"], //  强制props中的属性名称为驼峰式
    "vue/html-end-tags": "error", //  禁止标签缺少结束标记
  },
};
