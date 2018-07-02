const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === 'production';
const dist = 'dist';
// the path(s) that should be cleaned
const pathsToClean = [
  `${dist}/*.*`,
];
// the clean options to use
const cleanOptions = {
  root: resolve(__dirname, '..'),
  exclude: [`${dist}/.gitignore`],
  verbose: true,
  dry: false,
};
const plugins = [
  new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new HtmlWebpackPlugin({
    template: join('src', 'index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: isProduction ? '[name].[hash].css' : '[name].css',
    chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
  }),
  new webpack.NamedModulesPlugin(),
];
if (isProduction) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  );
} else {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = plugins;
