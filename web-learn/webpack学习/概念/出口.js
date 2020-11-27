/**
 * * 出口（output）：可以控制 webpack 如何向硬盘写入编译文件。
 *   该属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
 *   基本上，整个程序结构，都会被编译到我们指定的输出路径的文件夹中。我们可以通过在配置中制定一个 output 字段，来配置这些处理过程：
 * 
 * * 用法：在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括以下两点：
 *        1.filename 用于输出文件的文件名。
 *        2.目标输出目录 path 的绝对路径。
 * 
 * * 注意：入口起点可以是多个，但只能制定一个出口配置。
 */
// webpack.config.js
const path = require('path') // Node.js核心模块，用于操作文件路径

module.exports = {
  entry: './path/to/my/entry/file.js', // 入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'), // bundle 生成的位置
    filename: 'my-first-webpack.bundles.js' // bundle 的名称
  }
}

// 将一个单独的 bundle.js 输出到 /home/proj/public/assets 目录中。
const config = {
  output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
}


/**
 * * 多个入口起点：
 *    如果配置创建了多个单独的 “chunk”（例如，使用多个起点或使用像 CommonChunkPlugin 这样的插件），
 *    则应该使用 占位符(substitutions) 来确保每个文件具有唯一的名称
 */

const config = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  // 写入硬盘: ./dist/app.js, ./dist/search.js
  output: {
    filename: '[name].js', // 确保每个文件具有唯一名称
    path: __dirname + '/dist'
  }
}

/**
 * * 高级进阶
 * 
 * * 以下是使用 CDN 和资源 hash 的复杂实例：
 */
// config.js
config = {
  output: {
    path: '/home/proj/cdn/assets/[hash]',
    publicPath: 'http://cdn.example.com/assets/[hash]/'
  }
}
/**
 * * 在编译时不知道 publicPath 的情况下，publicPath 可以留空，并且在入口起点文件运行时动态设置。
 *   如果编译时不知道 publicPath，可以先忽略它，并且在入口起点设置 __webpack_public_path__
 */
__webpack_public_path__ = myRuntimePublicPath
// 剩余的应用程序入口