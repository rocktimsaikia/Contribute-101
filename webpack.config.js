const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const { list } = require("./contributors/index");

module.exports = {
  entry: "./views/index.ejs",
  target: "web",
  output: {
    filename: "index.html",
    publicPath: "/dist/",
    path: path.join(__dirname, "dist")
  },

  mode: "development",
  stats: { colors: true },
	devtool: "eval",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        query: {
          List: list
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "views", "index.ejs"),
      templateParameters: {
        List: list
      }
    }),

    new CopyPlugin([
      {
        from: path.join(__dirname, "public"),
        to: path.join(__dirname, "dist")
      }
    ])
  ],

   devServer: {
    contentBase: "dist",
    port: 9000,
    hot: true,
    watchContentBase: true,
    historyApiFallback: true
  }
};