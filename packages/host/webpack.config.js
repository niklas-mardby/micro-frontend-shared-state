// host/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Host",
      remotes: {
        Remote1: "Remote1@http://localhost:3001/moduleEntry1.js",
        Remote2: "Remote2@http://localhost:3002/moduleEntry2.js",
      },
      shared: {
        ...dependencies,
        "react-context-slices": {},
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        shared_state: {
          requiredVersion: require("../shared_state/package.json").version,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};
