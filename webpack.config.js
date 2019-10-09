const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { list } = require("./contributors/index");

module.exports = {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, "views/index.ejs")
  ],
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.join(__dirname, "/dist/")
  },

  devtool: "eval-source-map",
  mode: "development",
  
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "views", "index.ejs"),
      templateParameters: {
        List: list
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader"
      }
    ]
  },

};