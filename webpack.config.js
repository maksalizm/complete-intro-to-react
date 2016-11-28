/**
 * Created by maksalizm on 2016. 11. 18..
 */
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/BrowserEntry.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/,

      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      }

    ]
  }
}
