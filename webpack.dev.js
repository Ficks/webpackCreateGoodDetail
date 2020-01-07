const path = require ('path');
const webpack = require ('webpack');

const webpackDevServer = require ('webpack-dev-server');

const merge = require ('webpack-merge');
const common = require ('./webpack.common.js');

let devConfig = {
  mode: 'development',
  output: {
    path: path.resolve (__dirname, 'dist'), // __dirname：是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    filename: 'js/[name]-[hash:8].js', //[chunkhash:5]: 数字和字母组成的8位哈希值,[name]：是根据入口文件的自动生成的，有几个入口文件，就可以打包几个出口文件。
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
  plugins: [new webpack.HotModuleReplacementPlugin ()],
};
module.exports = merge (common, devConfig);
