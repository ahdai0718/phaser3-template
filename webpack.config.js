/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      path.join(__dirname, 'src/main.ts')
    ],
  },
  devtool: 'eval-source-map',
  output: {
    pathinfo: true,
    path: path.resolve('dist'),
    publicPath: path.resolve('dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    publicPath: path.resolve('dist'),
    port: 8765,
    host: '0.0.0.0',
    disableHostCheck: true
  },
  watch: true,
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 60000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: '',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __DEBUG__: true,
      __LOG_INFO__: true,
      __LOG_WARNING__: true,
      __LOG_ERROR__: true,
      __NATIVE_APP__: false,
    }),
    new HtmlWebpackPlugin({
      title: '',
      filename: path.resolve('index.html'),
      template: path.resolve('src', 'index.html'),
      chunks: ['app'],
      chunksSortMode: 'manual',
      alwaysWriteToDisk: true,
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false,
        html5: false,
        minifyCSS: false,
        minifyJS: false,
        minifyURLs: false,
        removeComments: false,
        removeEmptyAttributes: false,
      },
      hash: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        checkSyntacticErrors: true,
        memoryLimit: 4096
      }
    }),
    new HappyPack({
      id: 'ts-loader',
      threads: 4,
      loaders: ['ts-loader']
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      onStart({ compilation }) {
        console.log('start detecting webpack modules cycles');
      },
      onDetected({ module: webpackModuleRecord, paths, compilation }) {
        compilation.errors.push(new Error(paths.join(' -> ')))
      },
      onEnd({ compilation }) {
        console.log('end detecting webpack modules cycles');
      },
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {}
  },
  node: {},
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [{
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true,
            experimentalWatchApi: true,
          },
        },],
        exclude: [
          path.join(__dirname, 'node_modules'),
        ]
      },
    ]
  }
};
