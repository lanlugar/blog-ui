const path = require('path');
const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  modules: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new htmlwebpackplugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: false,
    port: 5000
  }
};
