const path = require("path")
const resolve = path.resolve
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // set svg-sprite-loader
    // config.module
    //   .rule("svg")
    //   .exclude.add(resolve("src/icons"))
    //   .end();
    // config.module
    //   .rule("icons")
    //   .test(/\.svg$/)
    //   .include.add(resolve("src/icons"))
    //   .end()
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     symbolId: "icon-[name]"
    //   })
    //   .end();
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  }
}