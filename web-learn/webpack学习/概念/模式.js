/**
 * * 模式：通过选择 development 或 production 中的一个，来设置 mode 参数，我们可以启用
 *        相应模式下的 webpack 内置的优化。
 * 
 * * development: 会将 process.env.NODE_ENV 的值设置为 development。
 *                启用 NamedChunksPlugin 和 NamedModulesPlugin。
 * 
 * * production: 会将 process.env.NODE_ENV 的值设置为 production。
 *               启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin,
 *               OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin
 * 
 * * 用法：1.只在配置中提供 mode 选项 
 *        2.从 CLI 参数中传递
 * 
 * * 注意：只设置 NODE_ENV，则不会自动设置 mode
 */
// 用法1：只在配置中提供 mode 选项 
module.exports = {
  mode: 'production'
}
// 用法2：从 CLI 参数中传递
// webpack --mode=production

// mode: development
// webpack.development.config.js
module.exports = {
  mode: 'development',
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
}

// mode: production
// webpack.production.config.js
module.exports = {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin( /**... */ ),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}