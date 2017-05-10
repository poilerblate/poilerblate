const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: process.env.PORT || 3000,
    open: true,
    filename: 'assets/bundle.js',
    overlay: {
      warnings: false,
      errors: true
    },
    watchContentBase: true,
    clientLogLevel: 'none',
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'assets/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'poilerblate',
      template: 'src/templates/index.html',
      inject: 'body',
      cache: false
    })
  ]
}
