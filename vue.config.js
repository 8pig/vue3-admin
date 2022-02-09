const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    proxy: {
      '/mock': {
        target: 'http://127.0.0.1:4523/mock/611454',
        changeOrigin: true,
        pathRewrite: { '^/mock': '' }
      }
    }
  },
  chainWebpack (config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  }
};
