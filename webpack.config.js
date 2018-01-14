/**
 * Webpack 3.x 配置文件
 */

const path = require('path');
const webpack = require('webpack');

// 判断环境
const debug = process.env.NODE_ENV !== "production";

// 引入插件
const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin()
]

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    index:path.resolve(__dirname,"./src/js/index.js")
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    port: 9002,
    host: '127.0.0.1'
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }],
      exclude: /node_modules/
    }]
  },
  plugins: plugins
}