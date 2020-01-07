// 生成最终dist版本，
const path = require ('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin'); //提取css到单独文件的插件
// const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin'); //压缩css插件
// const UglifyJsPlugin = require ('uglifyjs-webpack-plugin'); //压缩js文件
// const HtmlWebpackPlugin = require ('html-webpack-plugin'); //把打包后的文件直接注入到html模板中
// const CleanWebpackPlugin = require ('clean-webpack-plugin'); //每次运行前清理目录的插件
const merge = require ('webpack-merge');
const common = require ('./webpack.common.js');

let prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve (__dirname, 'dist'), // __dirname：是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    filename: 'js/[name]-[hash:8].js', //[chunkhash:5]: 数字和字母组成的8位哈希值,[name]：是根据入口文件的自动生成的，有几个入口文件，就可以打包几个出口文件。
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/, //图片各类格式
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024, //图片大小
              name: '[name]-aaa.[ext]', //图片名称规则
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin ({
      filename: 'css/[name][hash].css', ////都提到build目录下的css目录中
      chunkFilename: '[id][hash].css',
    }),
  ],
};
module.exports = merge (common, prodConfig);
