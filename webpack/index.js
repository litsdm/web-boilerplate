const { resolve } = require('path');
const vendor = require('./vendor');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./devServer');
const devtool = require('./devtool');

const settings = {
  resolve: {
    alias: {
      '@containers': resolve(__dirname, '../src/containers'),
      '@shapes': resolve(__dirname, '../src/shapes')
    },
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  context: resolve(__dirname, '..'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/index'
    ],
    vendor,
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules,
  },
  plugins,
  devServer,
  devtool,
};

module.exports = settings;
