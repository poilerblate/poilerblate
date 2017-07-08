const path = require('path');
const pjson = require('./package.json');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  module: {
    rules: [
      {
        test: /\.s?[a|c]ss$/,
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
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: process.env.PORT || 3000,
    open: true,
    openPage: '',
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
      title: pjson.name,
      template: 'src/templates/index.html',
      inject: 'body',
      cache: false
    })
  ]
}
