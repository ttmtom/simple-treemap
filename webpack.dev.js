const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, "public/"),
    compress: true,
    port: 3030,
    historyApiFallback: true,
  },
});