/**
 * * plugins(插件)：
 *    插件是 webpack 的支柱功能。webpack 自身也是构建于，你在 webpack 配置中用到的相同的插件系统之上！插件目的在于解决 loader 无法实现的其他事。
 *    loader 被用于转换某些类型的模块。
 *    插件则可以用于执行范围更广的任务。包括打包的优化和压缩，一直到重新定义环境中的变量。
 * * 使用：
 *    首先 require 它，然后把它添加到 plugins 数组中。多数插件可以通过选项（option）自定义。
 *    也可以在一个配置文件中因为不同目的而多次使用同一个插件，这是需要通过使用 new 操作符来创建它的一个实例。
 */
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpck-plugin') // 通过 npm 安装插件
const webpack = require('webpack') // 用于访问内置插件

const config = {
  module: {
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
module.exports = config;


/**
 * * 剖析
 *   webpack 插件是一个具有 apply 属性的 JavaScript 对象。apply 属性会被 webpack compiler 调用，
 *   并且 compiler 对象可在整个编译生命周期访问。
 */
// ConsoleLogOnBuildWebpackPlugin.js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    // compiler hook 的 tap 方法的第一个参数，应该是一个驼峰式命名的插件名称。
    // 建议使用一个常量，以便它可以在所有 hook 中复用。
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log("webpack 构建过程开始！")
    })
  }
}