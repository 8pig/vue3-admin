module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-spacing': [
      2,
      {
        // 箭头函数空格
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'never'], // 间隔
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': 0, // 对象字面量项尾不能有逗号
    'comma-spacing': [
      2,
      {
        // 逗号前后的空格
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
    'constructor-super': 2, // 非派生类不能调用super，派生类必须调用super
    curly: [2, 'all'], // 必须使用 if(){} 中的{}
    'dot-location': [2, 'property'], // 对象访问符的位置，换行的时候在行首还是行尾
    'eol-last': 0, // 最后不能空行
    eqeqeq: 1, // 必须使用全等
    'generator-star-spacing': [
      2,
      {
        // 生成器函数*的前后空格
        before: true,
        after: true
      }
    ],
    'handle-callback-err': [2, '^(err|error)$'], // nodejs 处理错误
    indent: [
      2,
      2,
      {
        // 代码缩进
        SwitchCase: 1
      }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        // 对象字面量中冒号的前后空格
        beforeColon: false,
        afterColon: true
      }
    ],
    'new-cap': [
      2,
      {
        // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2, // new时必须加小括号
    'no-array-constructor': 2, // 禁止使用数组构造器
    'no-caller': 2, // 禁止使用arguments.caller或arguments.callee
    'no-console': 'off', // 禁止使用console
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-control-regex': 0, // 禁止在正则表达式中使用控制字符
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-args': 2, // 函数参数不能重复
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
    'no-empty-pattern': 2,
    'no-eval': 1, // 禁止使用eval
    'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
    'no-extend-native': 2, // 禁止扩展native对象
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
    'no-extra-parens': [2, 'functions'], // 禁止非必要的括号
    'no-fallthrough': 2, // 禁止switch穿透
    'no-floating-decimal': 2, // 禁止省略浮点数中的0
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-implied-eval': 2, // 禁止使用隐式eval
    'no-inner-declarations': [2, 'functions'], // 禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2, // 禁止无效的正则表达式
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-iterator': 2, // 禁止使用__iterator__ 属性
    'no-label-var': 2, // label名不能与var声明的变量名相同
    'no-labels': [
      2,
      {
        // 禁止标签声明
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2, // 禁止混用tab和空格
    'no-multi-spaces': 2, // 不能用多余的空格
    'no-multi-str': 1,
    'no-multiple-empty-lines': [
      2,
      {
        // 空行最多不能超过2行
        max: 2
      }
    ],
    'no-new-object': 2, // 禁止使用new Object()
    'no-new-require': 2, // 禁止使用new require
    'no-new-wrappers': 2, // 禁止使用new创建包装实例，new String new Boolean new Number
    'no-proto': 1, // 禁止使用__proto__属性
    'no-redeclare': 2, // 禁止重复声明变量
    'no-sequences': 1, // 禁止使用逗号运算符
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 2, // 在调用super()之前不能使用this或super
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'no-unexpected-multiline': 1, // 避免多行表达式
    'no-unneeded-ternary': [
      2,
      {
        // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        defaultAssignment: false
      }
    ],
    'no-unreachable': 2, // 不能有无法执行的代码
    'no-unused-vars': [
      2,
      {
        // 不能有声明后未被使用的变量或参数
        vars: 'all',
        args: 'none'
      }
    ],
    'one-var': [
      2,
      {
        // 连续声明
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        // 换行时运算符在行尾还是行首
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    quotes: [
      1,
      'single',
      {
        // 引号类型 `` "" ''
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'always'], // 分号结尾
    'semi-spacing': [
      2,
      {
        // 分号前后空格
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [2, 'always'], // 不以新行开始的块{前面要不要有空格
    'space-before-function-paren': [1, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        // 注释风格
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2, // 必须使用合法的typeof的值
    'wrap-iife': [2, 'any'], // 立即执行函数表达式的小括号风格
    'object-curly-spacing': [
      2,
      'always',
      {
        // 大括号内是否允许不必要的空格
        objectsInObjects: false
      }
    ],
    'array-bracket-spacing': [2, 'never']
  }
};
