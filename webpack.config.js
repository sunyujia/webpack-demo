const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "tree shaking"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
