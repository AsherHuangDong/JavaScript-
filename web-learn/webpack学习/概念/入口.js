/**
 * * 入口(entry):
 *   入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建工具内部依赖图的开始。
 *   进入起点后，webpack 会找出有哪些模块和库是入口起点(直接或间接)依赖的。
 *   每个依赖项被处理后，最后输出到称之为 bundles 的文件中
 *   可以通过在 webpack 配置中配置 entry 属性，来制定一个或多个入口起点。默认值为 './src'。
 */
/**
 * * 单个入口语法：
 * * 例：webpack.config.js文件里：
 *  */
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
}
module.exports = config

// 以上的简写
const config = {
  entry: './path/to/my/entry/file.js'
}
module.exports = config


/**
 * * 对象语法： 
 *     用法：entry: {[entryChunkName: string]: string | Array<string>}
 */
// 例
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
}

/**
 * * 常见场景：分离应用程序(app) 和 第三方库(vendor) 入口
 * 
 * * 这是什么？
 *     从表面看，这告诉我们 webpack 从 app.js 和 vendors.js 开始创建依赖图。
 *     这些依赖图是彼此完全分离的，互相独立的(每个 bundle 中都有一个 webpack 引导(bootstrap)).这种方式比较常见于，
 *     只有一个入口起点（不包括 vendor）的单页应用程序中。
 * * 为什么？
 *     此设置允许我们使用 CommonChunkPlugin 从 应用程序 bundle 中提取 vendor 引用(vendeor reference) 到 vendor bundle,
 *     并把引用 vendor 的部分替换为 __webpack_require__() 调用。如果 bundle 中没有vendor代码，
 *     那么我们可以在 webpack 中实现被称为长效缓存的通用模式。
 */
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
}

/**
 * * 多页面应用程序：
 */
const config = {
  // 这是什么？我们告诉 webpack 需要 3 个独立分离的依赖图。
  // 为什么？在多页应用中，服务器将为我们获取一个新的 HTML 文档。页面重新加载新文档，并且资源被重新下载。在这期间我们可以做很多事。
  // 使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle。由于入口起点增多，多页应用能够复用入口起点之间的大量代码/模块，
  // 从而可以极大地从这些技术中受益。
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
}