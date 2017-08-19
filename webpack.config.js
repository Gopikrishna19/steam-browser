const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const config = {
  entry: ['./src'],
  externals: nodeExternals(),
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
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      favicon: './src/favicon.ico'
    }),
    new ExtractTextPlugin('index.css')
  ],
  target: 'node'
};

module.exports = env => {
  config.plugins.push(new Webpack.DefinePlugin({
    'global.API_KEY': `"${env.apiKey}"`,
    'global.STEAM_ID': `${env.steamId}`
  }));

  return config;
};
