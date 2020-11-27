/**
 * * loader: 用于对模块的源代码进行转换。可以让 webpack 能够处理那些非 JavaScript 文件。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，
 *           然后我们就可以利用 webpack 的打包能力，对它们进行处理。
 * * 本质：webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。
 * * 注意：
 *     1.webpack 自身只理解 JavaScript 
 *     2.loader 能够 import 导入任何类型的模块（例如：.css文件），这是 webpack 特有的功能，其他打包程序或任务执行器的可能并不支持，
 *       我们认为这种语言扩展是有必要的，因为这可以使开发人员创建出更准确的依赖图关系。
 * * 在更高层面，在 webpack 的配置中有两个目标：
 *     1.test 属性：用于标识出应该被对应的 loader 进行转换的某个或某些文件。
 *     2.use 属性：表示进行转换时，应该使用哪个 loader
 * 
 * * 以下配置中，对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性：test 和 use。
 *   下面例子表示：在 webpack 在遇见 require() / import 语句中解析为 '.txt'的路径时，在对它打包之前，先使用
 *   raw-loader 转换一下。
 * 
 * * loader作用
 *    1.可以在 import 或 “加载” 模块时预处理文件。类似于其他构件工具中的 “任务(task)”，并提供了处理前端构件步骤的强大方法。
 *    2.可以将文件从不同的语言转换为 JavaScript，或将内联图像转换为 data URL。
 *    3.甚至允许直接在 JavaScript 模块中 import css文件。
 * 
 * * loader特性：
 *    1.loader 支持链式传递。能够对资源使用流水线。一组链式的 loader 将按照相反的顺序执行。
 *      loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。
 *    2.loader 可以是同步的，也可以是异步的。
 *    3.loader 运行在 Node.js 中，并且能够执行任何可能的操作。
 *    4.loader 接收查询参数。用于对 loader 传递配置。
 *    5.loader 也可以使用 options 对象进行配置。
 *    6.除了使用 package.json 常见的 main 属性，还可以将普通的 npm 模块导出为 loader，做法是在 package.json 里定义一个 loader 字段。
 *    7.插件(plugin)可以为 loader 带来更多特性。
 *    8.loader 能够产生额外的任意文件。
 *    9.loader 通过（loader）预处理函数，为 JavaScript 生态系统提供了更多能力。
 *      用户现在可以更加灵活地引入细粒度逻辑，例如压缩、打包、语言翻译和其他更多。
 */
// webpack.config.js
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [{
      test: /\.txt$/, // webpack 遇到该类型的文件
      use: 'raw-loader' // 使用 ‘raw-loader’ 来转换 test 属性对应的类型的文件
    }]
  }
}

module.exports = config;


/**
 * * 示例：使用 loader 告诉 webpack 加载 css 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader。
 *   npm install --save-dev css-loader
 *   npm install --save-dev ts-loader
 *   然后指示 webpack 对每个 .css 使用 css-loader, 以及对所有 .ts 使用 ts-loader
 */
// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: 'css-loader'
    }, {
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  }
}

/**
 * * 使用 loader: 应用程序中，有三种使用方式:
 *   1.配置(推荐): 在 webpack.config.js 文件中指定 loader。
 *   2.内联：在每个 import 语句中显示指定 loader。
 *   3.CLI：在 shell 命令中指定它们。
 * 
 * * 建议：尽可能使用 module.rules，因为这样可以减少源码中的代码量，并且可以在出错时，更快地调试和定位 loader 中的问题。
 */

/**
 * * 配置[Configuration]
 *   module.rules 允许在 webpack 配置中指定多个loader。这是展示 loader 的一种简明方式，并且有助于使代码变得简洁。
 *   同时让我们对各个 loader 有个全局的概览。 
 */
module: {
  rules: [{
    test: /\.css$/,
    use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
    ]
  }]
}

/**
 * * 内联
 *   可以在 import 语句或任何等效于 import 的方式中指定 loader。使用 ! 将资源中的 loader 分开。分开的每个部分相当于当前目录解析。 
 *   通过前置所有规则及使用 ! ,可以对应覆盖到配置中的任意loader。
 * * 选项可以传递参数，例如 ?key=vlaue&foo=bar, 或者一个 JSON 对象，例如 ?{"key":"value", "foo":"bar"}
 * 
 */
import Styles from 'style-loader!css-loader?modules!./styles.css'

/**
 * * CLI
 *   例: webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
 *   这会对 .jade 文件使用 jade-loader, 对 .css 文件使用 style-loader 和 css-loader。
 */

/**
 * * 解析 loader
 *    loader 遵循标准的模块解析。多数情况下，loader 将从模块路径(通常将模块路劲认为是 npm install, node_modules)解析。
 *    loader 模块需要导出为一个函数，并且使用 Node.js 兼容的 JavaScript 编写。通常使用 npm 进行管理，但是也可以将自定义 loader
 *    作为应用程序中的文件。按照约定，loader 通常被命名为 xxx-loader（例如 json-loader）。
 */