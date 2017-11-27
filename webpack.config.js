const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  entry: './index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        // match files based on pattern
        test: /\.js$/,
        // ignore files matching pattern
        // exclude: /node_modules/
        exclude: /node_modules(?!\/webpack-dev-server)/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        },
        include: path.join(__dirname, '/../src')
      },
      { test: /\.(gif|png|jpe?g|svg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};

module.exports = config;
