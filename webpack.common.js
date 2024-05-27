const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[fullhash].js',
    chunkFilename: 'js/[name].[chunkhash].bundle.js',
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
        test: /\.(png|svg|jpg|gif|webp|avif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name].[fullhash][ext]',
            //publicPath: ''
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name].[fullhash][ext]',
            //publicPath: ''
        },
      },
    ]
  },

  plugins: [
    // new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      scriptLoading: 'defer',
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/generic.html',
      filename: 'generic.html',
      scriptLoading: 'defer',
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/elements.html',
      filename: 'elements.html',
      scriptLoading: 'defer',
      minify: false
    }),
    new webpack.ProgressPlugin(), // display progress information while processing...
  ]
}