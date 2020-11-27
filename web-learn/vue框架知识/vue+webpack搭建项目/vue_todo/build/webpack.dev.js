const baseConfig = require('./webpack.base.js')
const {
  merge
} = require('webpack-merge')

// 引入webpack插件
const Webpack = require('webpack')

const devConfig = {
  mode: 'development',
  // 设置代码映射规则
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // 指定服务器根目录
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 使用热模块代替
    hot: true
  },
  plugins: [
    // 热启动插件 HMR
    new Webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConfig, devConfig)