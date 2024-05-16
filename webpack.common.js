const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

// const ASSET_PATH = process.env.ASSET_PATH || '/';
// const ASSET_PATH = 'http://192.168.1.12/test/';

module.exports = {
  entry: {
    main: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[chunkhash].bundle.js',
    //publicPath: ASSET_PATH,
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name].[hash][ext]',
            //publicPath: ''
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name].[hash][ext]',
            //publicPath: ''
        },
      },
    ]
  },

  plugins: [
    // new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    // new HtmlWebpackPlugin({
    //  template: 'src/portfolio.html',
    //   filename: 'portfolio.html'
    // }),
    // new webpack.ProgressPlugin(), // display progress information while processing...
    // new webpack.DefinePlugin({
    //   'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    //   'some.var': 123,
    // }),
  ]
}