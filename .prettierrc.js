// https://prettier.io/docs/en/options
module.exports = {
  tabWidth: 2, //指定每个缩进级的空格数。
  printWidth: 120, //指定打印换行的行长
  singleQuote: true, //使用单引号
  semi: false, //行末尾分号
  overrides: [
    // 用指定配置覆盖指定后缀的文件的规则配置。
    {
      //overrides[].files：数组，指定文件；overrides[].extends：数组，指定规则集
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always', //箭头函数括号功能，always永远使用括号
  endOfLine: 'auto', //行结束，.editorconfig文件设置end_of_line配置prettier的用法
  // vueIndentScriptAndStyle: true, //.vue文件内，<script>、<style>标签内是否首行缩进；false是不缩进
  trailingComma: 'es5', //尾部逗号，在 ES5（对象、数组等）中有效的拖尾逗号。在 TypeScript 和 Flow 中的类型参数中使用拖尾逗号。
  proseWrap: 'never', //always，超出printWidth就换行；never，不换行；preserve，保持原样比如<div>块
  htmlWhitespaceSensitivity: 'strict', //html空白
}
