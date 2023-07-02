"use strict";

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const dataObj = require("./data/data.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  mode: mode,
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
  },
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/index.html"),
          to: path.resolve(__dirname, "dist/index.html"),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      fonts: path.resolve(__dirname, "src/assets/fonts"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9001,
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not yet set!");
      }

      devServer.app.get("/api/categories", function (req, res) {
        res.json(dataObj.categories);
      });

      devServer.app.get("/api/category/*", function (req, res) {
        res.json(dataObj.articles);
      });

      devServer.app.get("/api/author/*", function (req, res) {
        let author = {};
        const authorId = req.params["0"];

        for (let index = 0; index < dataObj.authors.length; index++) {
          if (dataObj.authors[index].id === authorId) {
            author = dataObj.authors[index];
            break;
          }
        }
        res.json(author);
      });

      devServer.app.get("/api/search/*", function (req, res) {
        res.json(dataObj.articles);
      });
    },
  },
};
