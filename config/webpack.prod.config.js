// webpack.config.js
const {GenerateSW} = require('workbox-webpack-plugin')
const Config = require('./config')

module.exports = {
  entry: {
    bundle: './src/scripts/index.js',
    homepage: './src/scripts/Views/Home.js'
  },
  output: {
    filename: '[name].js'
  },
  mode: 'production', // Setting this to production auto enables JS uglify
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [['env', {modules: false}]]
        }
      }
    ]
  }
}
