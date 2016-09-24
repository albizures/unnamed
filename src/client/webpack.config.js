const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const config = require('../server/config/environment');

module.exports = {
  watch: config.isDev,
  devtool: 'source-map',
  entry: [
    config.APP_PATH
  ],
  output: {
    path: config.PUBLIC_PATH,
    filename: "bundle.js",
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    //new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'unnamed',
      filename: 'index.html',
      template: config.MAIN_TEMPLATE
    })
  ].concat(config.isProd ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ] : []),

  module: {
    loaders: [{
      test: /\.js$/,
      include: config.CLIENT_PATH,
      loader: "babel"
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      loaders: [
        'file?name=assets/images/[name].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=/assets/fonts/[name].[ext]'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=/assets/fonts/[name].[ext]'
    }, {
      test: /\.pug$/,
      loader: 'pug'
    }, {
      test: /\.css?$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.styl?$/,
      loader: ExtractTextPlugin.extract('style', 'css!stylus')
    }, {
      test: /\.worker\.js?$/,
      loaders: ['worker?name=workers/[name].[ext]', 'babel']
    }],
    preLoaders: [{
      test: /\.js?$/,
      exclude: [/build/, /node_modules/],
      loaders: ['eslint']
    }]
  },
  resolve: {
    alias: {
      utils: path.join(config.CLIENT_PATH, 'utils/'),
      constants: path.join(config.CLIENT_PATH, 'constants/'),
      make: path.join(config.CLIENT_PATH, 'utils/make.js'),
      http: path.join(config.CLIENT_PATH, 'utils/http.js')
    },
    extensions: ['', '.js', '.css', '.styl', '.jade']
  },
  resolveLoader: {
    root: config.MODULES_PATH
  }
};