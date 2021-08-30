const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  options: {
    buildType: "spa",
    enableBabelCache: false,
  },
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    if (opts.env.target === "web") {
      // Sass loader
      config.module.rules = [
        ...config.module.rules,
        {
          test: /\.s[ac]ss$/i,
          use: [
            config.mode === "production"
              ? MiniCssExtractPlugin.loader
              : {
                  loader: path.resolve(
                    __dirname,
                    "node_modules/razzle/node_modules/style-loader/dist/cjs.js"
                  ),
                  ident: "razzle-style-loader",
                },

            {
              loader: path.resolve(
                __dirname,
                "node_modules/razzle/node_modules/css-loader/dist/cjs.js"
              ),
              ident: "razzle-css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  auto: true,
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                },
              },
            },
            {
              loader: path.resolve(
                __dirname,
                "node_modules/postcss-loader/dist/cjs.js"
              ),
              options: undefined,
              ident: "razzle-postcss-loader",
            },
            "sass-loader",
          ],
        },
      ];

      config.performance = {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      };

      if (!opts.env.dev) {
        config.devtool = false;
      }

      config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
          _: "lodash",
        }),
      ];

      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          Redux: path.resolve(__dirname, "./src/redux"),
          Components: path.resolve(__dirname, "./src/Components"),
        },
      };
    }

    return config;
  },
};
