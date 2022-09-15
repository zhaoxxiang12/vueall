const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    // 兼容ie配置
    transpileDependencies: true,
    // 配置路径，防止打包后的引入的文件找不到的文通
    publicPath: './',
    // 不会产生map文件(该文件可以追溯源码,用于查找报错的代码行)
    productionSourceMap: false,
    // 路径别名(可以用一个变量来代替某一端的路径)
    configureWebpack: {
        resolve: {
            alias: {
                // 别名：‘路径’  主要用于import 导入某个文件
                xxx: '@/components',
            },
        },
    },
    //跨域
    devServer: {
        //代理
        proxy: {
            //标记
            '/api': {
                //代理的地址
                target: 'http://localhost:3131',
                //重新路径（能够处理后端的第一级路由随时发生变更的问题）
                // pathRewrite: {
                //     '/api': '',
                // },
            },
        },
    },
});
