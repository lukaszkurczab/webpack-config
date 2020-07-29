const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../', 'build')
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../', 'public'),
    port: 5001
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: "raw-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
        },
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      title: "Łukasz Kurczan - front-end developer"
    }),
    new CopyPlugin({
      patterns: [{
        from: 'public/images',
        to: 'images'
      }]
    }),
  ]
};