const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "",
    filename: "bundle.js"
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Simple Treemap',
        template: './public/index.html'
      }),
    ]
};