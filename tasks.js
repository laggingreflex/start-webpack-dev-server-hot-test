
const Start = require('start').default
const webpack = require('start-webpack-dev-server-hot')

const start = Start();

exports.webpack = () => start(
  webpack(require('./webpack.config.js'))
)
