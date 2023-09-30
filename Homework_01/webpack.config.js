const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  entry: {
    app_bundle: resolve(__dirname, "src/js/app.js"),
    footer_header_bundle: resolve(__dirname, "src/js/footer_header.js"),
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name]_[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[hash:6].[ext]",
          outputPath: "assets/images",
          publicPath: "assets/images",
          emitFile: true,
          esModule: false,
        },
      }
    ],
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: "src/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: "src/html/index.html",
      chunks: ["app_bundle", "footer_header_bundle"],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: "ADS",
      filename: "ads.html",
      template: "src/html/ads.html",
      chunks: ["app_bundle", "footer_header_bundle"],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: "header.html",
      template: "src/html/header.html",
      chunks: ["app_bundle"],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: "footer.html",
      template: "src/html/footer.html",
      chunks: ["app_bundle"],
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};
