const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    news: "./src/js/news.js"
  },
  // 配置模块主要用于解析css图片转换压缩等功能
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
                esModule: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // esModule: false
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },

  // 配置插件 用于生产模板等各项功能
  plugins: [
    new HtmlWebpackPlugin({
      //作用是打包生成对应的html文件
      template: "./src/page/index.html", //要处理的html模板文件(打包后，生成新的html文件)
      filename: "index.html", // 打包生成的文件地址及文件名，filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。
      title: "index", // 设置该页面的title标题标签
      chunks: ["index", "common"],
      inject: "body" // 所有js资源插入到head标签中
    }),
    new HtmlWebpackPlugin({
      //作用是打包生成对应的html文件
      template: "./src/page/news.html", //要处理的html模板文件(打包后，生成新的html文件)
      filename: "news.html", // 打包生成的文件地址及文件名，filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。
      title: "news", // 设置该页面的title标题标签
      chunks: ["news", "common"],
      inject: "body" // 所有js资源插入到head标签中
    }),
    new CleanWebpackPlugin() // 打包前，先将dist文件中的内容全部清除
  ],
  resolve: {
    // 像vue一样配置别名
    alias: {
      "@": resolve("src")
    }
  }
};
