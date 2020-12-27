/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  cache: false,
  entry: {
    app: ['@babel/polyfill', path.join(__dirname, 'src/main.ts')],
  },
  output: {
    path: path.join(__dirname, 'build/app/release'),
    publicPath: './',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: true,
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __DEBUG__: true,
      __LOG_INFO__: true,
      __LOG_WARNING__: true,
      __LOG_ERROR__: true,
      __NATIVE_APP__: true,
    }),
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['app'],
      chunksSortMode: 'manual',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'asset',
          to: 'asset',
          globOptions:{
            ignore: [
              'skin/**/_source/**/*',
              '*.tps',
            ],
          }
        },
        {
          from: 'favicon.ico',
          to: 'favicon.ico',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              silent: false,
              useBabel: true,
              babelOptions: {
                compact: process.env.NODE_ENV === 'production',
                highlightCode: true,
              },
              babelCore: '@babel/core',
              useCache: false,
            },
          },
        ],
        exclude: [path.join(__dirname, 'node_modules')],
      },
    ],
  },
  node: {},
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {},
  },
};
