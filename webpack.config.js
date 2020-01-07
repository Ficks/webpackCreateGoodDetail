const path = require ('path');
const webpack = require ('webpack');
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
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    // news: './src/js/news.js',
  },

  devServer: {
    //配置
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    progress: true,
    hot: true,
    port: 8080,
  },
  // 配置模块主要用于解析css图片转换压缩等功能
  module: {
    rules: [
      {
        test: /\.(le|c|)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require ('autoprefixer') ({
                  overrideBrowserslist: [
                    'Android 4.1',
                    'iOS 7.1',
                    'Chrome > 31',
                    'ff > 31',
                    'ie >= 8',
                  ],
                }),
              ],
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  // 配置插件 用于生产模板等各项功能
  plugins: [
    new webpack.HotModuleReplacementPlugin (),
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
