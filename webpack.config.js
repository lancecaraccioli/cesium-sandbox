const config = require('./config.json');
const path = require('path');
const webpack = require('webpack');
process.traceDeprecation = true;
const version = require('./package.json').version;
module.exports = {
  context: path.resolve(__dirname, './src'),
  externals: {
    angular: {
      commonjs: "angular",
      amd: "angular",
      root: "angular" // indicates global variable
    }
  },
  entry: {
    'cesium-sandbox': './cesium-sandbox.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    library: 'lcCesiumSandbox',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader?presets[]=env'
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            conservativeCollapse: false,
          }
        }],
      }
    ]
  },
  plugins: [
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: config.port || 9000
  }
};
