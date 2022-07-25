const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'), 
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: __dirname + '/docs/',
    host: 'localhost',
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })]
};