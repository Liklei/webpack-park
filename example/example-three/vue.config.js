const cdnSettings = require('./cdn-settings')
const webpack = require('webpack')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  publicPath: cdnSettings[process.env.ENV || 'dev'].publicPath,
  assetsDir: 'static',

  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'styles': path.join(__dirname, 'src/styles'),
        'images': path.join(__dirname, 'src/images'),
        'routes': path.join(__dirname, 'src/routes'),
        '@': path.join(__dirname, 'src')
      },
      unsafeCache: true,
      symlinks: false
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: !process.env.ENV || process.env.ENV === 'dev',
        __TEST__: process.env.ENV === 'test',
        __PRE__: process.env.ENV === 'pre',
        __ONLINE__: process.env.ENV === 'online',
        __BUILD__: process.env.NODE_ENV === 'production'
      })
    ]
  },

  productionSourceMap: process.env.ENV !== 'online',

  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.optimization.minimizer('terser').tap(args => {
      const options = args[0]
      options.terserOptions.compress.drop_console = false
      options.terserOptions.compress.drop_debugger = false
      return args
    })

    // add by wjy at 2020-11-5 10:51:08
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
        symbolId: "icon-[name]"
      });
    // svg rule loader
    // const svgRule = config.module.rule('svg') // 找到svg-loader
    // svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    // svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    // svgRule // 添加svg新的loader处理
    //   .test(/\.svg$/)
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //   })
    // 修改images loader 添加svg处理
    // const imagesRule = config.module.rule('images')
    // imagesRule.exclude.add(resolve('src/assets/icons'))
    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },

  css: {
    sourceMap: process.env.ENV !== 'online' // 关闭可以提升构建速度
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
