const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const outputDir = path.join(__dirname, 'dist');
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
            options: {
              localIdentName: '[local]-[hash:base64:5]',
              modules: true
            }
          },
          'sass-loader'
        ]),
        test: /\.s?css$/
      },
      {
        exclude: /node_modules/,
        loader: 'url-loader?limit=1&name=[name].[ext]',
        test: /\.(woff|woff2|ttf|svg|eot)$/
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: outputDir
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      favicon: './src/static/favicon.ico'
    }),
    new ExtractTextPlugin('index.css')
  ],
  target: 'node'
};

module.exports = () => {

  const copyList = [
    {
      from: './src/static/**/*',
      ignore: ['favicon.ico']
    }
  ];

  if (process.env.MODE.trim() === 'prod') {
    copyList.push(
      {from: './package.json'},
      {from: './main.js'},
      {
        from: './.steam-browser-prod-rc',
        to: './.steam-browser-rc',
        toType: 'file'
      }
    );
  }

  config.plugins.push(new CopyWebpackPlugin(copyList));

  return config;

};
