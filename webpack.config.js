const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const path = require('path');

const config = {
  entry: ['./src'],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {modules: true}
          },
          'sass-loader'
        ]),
        test: /\.s?css$/
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.join(`${__dirname}`, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      favicon: './src/favicon.ico'
    }),
    new ExtractTextPlugin('index.css')
  ]
};

module.exports = env => {

  if (env && env.dev) {

    config.entry.unshift('webpack-dev-server/client?http://localhost:8080/');
    config.plugins.unshift(new Webpack.HotModuleReplacementPlugin());

    config.devtool = 'source-map';

    config.devServer = {
      contentBase: './',
      hot: true,
      port: 8080,
      stats: "minimal"
    };

  }

  config.plugins.push(new Webpack.DefinePlugin({
    API_KEY: `"${env.key}"`,
    USER_ID: `"${env.user}"`
  }));

  return config;

};
