module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: [
        'style-loader',
        'css-loader'
      ],
    }]
  }
}
