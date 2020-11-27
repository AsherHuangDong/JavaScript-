const path = require('path')

// 引入 vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 引入 html-webpack-plugin 插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包结束时 在dist文件夹下生成 index.html 文件

// 引入 clean-webpack-plugin 插件
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin') // 清除dist文件，再进行打包


module.exports = {
  // 打包入口
  entry: './src/main.js',
  // 设置代码映射规则
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpg|jepg|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 2048
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.styl'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}