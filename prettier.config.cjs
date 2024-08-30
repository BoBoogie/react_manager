// 官网：prettier.io
// 中文网：prettier.cn
// 文档参考：https://www.prettier.io/docs/options.html

//~ 最好安装 prettier 为开发依赖: npm install -D prettier

/*
VSCODE ~ 插件 Prettier - Code formatter 所属 prettier.io
VSCODE ~ settings.json 添加如下内容指定
{
  "prettier.configPath": "prettier.config.js",
  "prettier.requireConfig": true
}
*/

module.exports = {
  // 指定一行的最大长度, 超过可能会换行, 默认值 80
  printWidth: 180,
  // 缩进大小, 默认 2
  // .editorconfig 的 indent_size 和 tab_width 会覆盖这个默认值, 但是这里可以再次覆盖
  tabWidth: 2,
  // 是否使用制表符缩进, 默认 false
  useTabs: false,
  // 是否打印分号, 默认 true
  semi: true,
  // 是否单引号, 默认 true
  singleQuote: true,
  // 对象中属性的引号包裹, 默认 "as-needed"
  // "as-needed" 在需要的时候添加
  // "consistent" 一直添加
  // "preserve" 从不添加
  quoteProps: 'as-needed',
  // 在JSX中，使用单引号替换双引号，默认 false
  jsxSingleQuote: false,
  // 默认 "all"
  // "all"
  // "es5"
  // "none"
  trailingComma: 'none',
  // 对象大括号两边的空格, 默认 true
  bracketSpacing: true,

  // 默认 false
  // bracketSameLine: false,
  // 已弃用, 换成了 bracketSameLine
  jsxBracketSameLine: true,

  // 箭头函数参数是否带有括号
  // 默认 "always"
  arrowParens: 'avoid',

  // 只格式化一个文件的一部分
  // 默认 rangeStart: 0, rangeEnd: Infinity
  rangeStart: 0,
  rangeEnd: Infinity,

  // 解析器 (3.0版本之后, 用 plugins 替换)
  // 默认 'none'
  // 直到 1.13.0 版本, 默认值为 "babylon"
  // 可用的选项: https://www.prettier.cn/docs/options.html#parser
  // parser: 'none',

  // 通过文件名指定 parser, 默认 "none"
  // cat foo | prettier --stdin-filepath foo.css
  // filepath: 'none',

  // 是否需要格式化标记 @prettier 或者 @format
  // 默认 false
  requirePragma: false,

  // 默认 false
  insertPragma: false,

  // 默认 "preserve"
  // "always"  超过打印宽度时换行
  // "never" 把每一段散的块都拆成一行
  // "preserve" 什么都不做，就这样; v1.9.0中首次提供
  proseWrap: 'preserve',

  // 默认 "css"
  // "css" - 尊重CSS显示属性的默认值。对于Handlebars，处理与严格相同
  // "strict" - 所有标签周围的空白（或缺少空白）被认为是重要的
  // "ignore" - 所有标签周围的空白（或缺少空白）被认为是微不足道的
  htmlWhitespaceSensitivity: 'css',

  // 在 Vue 文件中，是否缩进 <script> 和 <style> 的内容
  // 默认 false
  // false - 不要缩进Vue文件中的脚本和样式标记
  // true - 缩进Vue文件中的脚本和样式标记
  vueIndentScriptAndStyle: false,

  // 默认 "lf"
  // "lf" – 仅限换行符（\n），在Linux和macOS上以及git-reos内部常见
  // "crlf" - 回车+换行字符（\r\n），在Windows上常见
  // "cr" - 仅限回车字符（\r），很少使用
  // "auto" - 保留现有的行尾（通过查看第一行之后使用的内容来规范一个文件中的混合值）
  endOfLine: 'lf',

  // 默认 'auto'
  // "auto" – 如果Prettier能够自动识别嵌入代码，则设置嵌入代码的格式
  // "off" - 从不自动格式化嵌入代码
  embeddedLanguageFormatting: 'auto',

  // 在 HTML/Vue/JSX 中, 强制每行一个属性
  // 默认 false
  // false - 不强制每行使用一个属性
  // true - 强制每行一个属性
  singleAttributePerLine: false,

  // 插件
  plugins: [
    //~ 官方插件
    // https://github.com/prettier/plugin-php
    // https://github.com/prettier/plugin-pug
    // https://github.com/prettier/plugin-ruby
    // https://github.com/prettier/plugin-xml
    //~ 社区插件
    // https://github.com/dangmai/prettier-plugin-apex
    // https://github.com/withastro/prettier-plugin-astro
    // https://github.com/gicentre/prettier-plugin-elm
    // https://github.com/adamzapasnik/prettier-plugin-erb
    // https://github.com/NaridaL/glsl-language-toolkit/tree/main/packages/prettier-plugin-glsl
    // https://github.com/NiklasPor/prettier-plugin-go-template
    // https://github.com/jhipster/prettier-java
    // https://github.com/Stedi/prettier-plugin-jsonata
    // https://github.com/Angry-Potato/prettier-plugin-kotlin
    // https://github.com/dfinity/prettier-plugin-motoko
    // https://github.com/joedeandev/prettier-plugin-nginx
    // https://github.com/umidbekk/prettier-plugin-prisma
    // https://github.com/eemeli/prettier-plugin-properties
    // https://github.com/jinxdash/prettier-plugin-rust
    // https://github.com/un-ts/prettier/tree/master/packages/sh
    // https://github.com/un-ts/prettier/tree/master/packages/sql
    // https://github.com/nene/prettier-plugin-sql-cst
    // https://github.com/prettier-solidity/prettier-plugin-solidity
    // https://github.com/sveltejs/prettier-plugin-svelte
    // https://github.com/bd82/toml-tools/tree/master/packages/prettier-plugin-toml
    //~ 自定义插件
  ]
};
