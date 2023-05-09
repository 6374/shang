const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath:'./',
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave: false,
  //打包去除 map文件：显示哪里报错
  productionSourceMap:false,
  //代理跨域  
  devServer: {
    host: 'localhost',
    port: '8080',
  // proxy: {
  //   '/api': {
  //     target: 'http://gmall-h5-api.atguigu.cn',
  //   }
  // }
    }
})
