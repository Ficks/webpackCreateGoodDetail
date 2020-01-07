const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const {CleanWebpackPlugin} = require ('clean-webpack-plugin');

console.log ('------------------------------------------');
console.log (__dirname);
console.log (__dirname);
console.log (__dirname);
console.log (__dirname);
console.log (__dirname);
console.log ('------------------------------------------');
module.exports = {
  entry: {
    index: './src/js/index.js',
    // news: './src/js/news.js',
  },
  // 配置模块主要用于解析css图片转换压缩等功能
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: ['es2015'],
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(png|svg|jpg|gif|jpeg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader', // 根据图片大小，把图片优化成base64
      //       options: {
      //         limit: 10000,
      //       },
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       // options: {
      //       //     mozjpeg: {
      //       //         progressive: true,
      //       //         quality: 65
      //       //     },
      //       //     optipng: {
      //       //         enabled: true,
      //       //     },
      //       //     pngquant: {
      //       //         quality: '65-90',
      //       //         speed: 4
      //       //     },
      //       //     gifsicle: {
      //       //         interlaced: true,
      //       //     },
      //       //     webp: {
      //       //         quality: 75
      //       //     }
      //       // }
      //     },
      //   ],
      // },
    ],
  },

  // 配置插件 用于生产模板等各项功能
  plugins: [
    new HtmlWebpackPlugin ({
      //作用是打包生成对应的html文件
      template: './src/page/index.html', //要处理的html模板文件(打包后，生成新的html文件)
      filename: 'index.html', // 打包生成的文件地址及文件名，filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。
      title: 'index', // 设置该页面的title标题标签
      chunks: ['index', 'common'],
      inject: 'body', // 所有js资源插入到head标签中
    }),
    // new HtmlWebpackPlugin ({
    //   //作用是打包生成对应的html文件
    //   template: './src/page/news.html', //要处理的html模板文件(打包后，生成新的html文件)
    //   filename: 'news.html', // 打包生成的文件地址及文件名，filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。
    //   title: 'news', // 设置该页面的title标题标签
    //   chunks: ['news', 'common'],
    //   inject: 'body', // 所有js资源插入到head标签中
    // }),
    new CleanWebpackPlugin (), // 打包前，先将dist文件中的内容全部清除
  ],
};
