/**
 * off 或 0：表示不验证规则。
 * warn 或 1：表示验证规则，当不满足时，给警告。
 * error或 2 ：表示验证规则，不满足时报错。
 */

// 用于解决模块解析的问题。
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    // 使用script-setup模式下使用
    // https://cn.vuejs.org/api/sfc-script-setup.html#script-setup
    // https://vue3.chengpeiquan.com/efficient.html
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: [
    //顺序有作用，后面的规则可以覆盖前面的规则
    'eslint:recommended',
    'plugin:import/recommended', // 包含了 plugin:import/typescript，并且还添加了其他推荐的导入语句规则。
    'plugin:import/typescript', // `eslint-plugin-import 针对 TypeScript 文件的规则集，用于处理导入语句。

    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier', //prettier相关配置一定要放在最后
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    //ESLint https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options
    ecmaVersion: 'latest', //保证可以检测最新的语法解析
    sourceType: 'module', //脚本源码类型，默认script，module表示当前项目代码使用ECMAScript modules
  },
  plugins: ['simple-import-sort'],
  rules: {
    // eslint https://eslint.org/docs/latest/rules/no-empty
    // 'no-empty': [0], //禁止空块语句

    // vue/*使用的是eslint-plugin-vue  https://eslint.vuejs.org/rules/
    'vue/multi-word-component-names': 0, //组件命名限制
    'vue/no-v-html': 0, //禁止使用v-html
    'vue/no-unused-vars': 1, //禁止未使用变量
    'vue/attributes-order': 1, //元素属性顺序
    'vue/require-default-prop': 1, //props需要默认值

    // @typescript-eslint/*使用@typescript-eslint/eslint-plugin https://typescript-eslint.io/rules/
    '@typescript-eslint/no-explicit-any': [0], //禁用any类型
    '@typescript-eslint/no-empty-interface': [0], //禁止声明空接口
    '@typescript-eslint/explicit-module-boundary-types': 0, //要求在导出函数和类的公共类方法中明确返回和参数类型
    '@typescript-eslint/consistent-type-imports': 1, //强制使用一致的类型导入
    '@typescript-eslint/no-non-null-assertion': 0, //禁止使用!后缀运算符进行非空断言
    '@typescript-eslint/no-unused-vars': 1, //禁止未使用的变量

    // eslint-plugin-import
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
    'import/no-unresolved': [
      //检查导入的模块是否能够被解析。当你导入一个不存在的模块时，该规则会报错。
      2,
      {
        ignore: ['^@/', '^@@/', '^swiper/'],
      },
    ],
    // 下面两个，因为使用了simple-import-sort/imports和simple-import-sort/exports，需要屏蔽
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'sort-imports': 0,
    'import/order': 0,

    // eslint-plugin-simple-import-sort
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
  },
  ignorePatterns: ['dist', 'public', '!.eslintrc.js', '!.prettierrc.js'],
}
