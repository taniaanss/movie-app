const path = require("path");

module.exports = {
  watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          // ts-loader
          { loader: "ts-loader" },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true,
  },
};
