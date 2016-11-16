var webpack = require('webpack');
var path = require('path');

module.exports = {
    // 页面入口文件配置
    entry: [
        // 'webpack-hot-middleware/client?reload=true',
        './app/index'
    ],
    
    // 入口文件输出配置
    output : {
        path : __dirname,
        filename : '/static/bundle.js',
        // publicPath: '/static/'
    },

    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel',

            exclude: ['/node_modules/', '/static/'],
            include: __dirname
        },
        {
            test: /\.jsx$/,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]      
    },

    // 其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    
    // 插件
    // plugins: [
    //     // new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.HotModuleReplacementPlugin(),
    // ]
 
}
