var path = require('path')

module.exports = {
  entry: path.join(__dirname, './webpack/index.js'),

  output: {
    path: './app/assets/javascripts',
    filename: 'webpack.bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      }
    ]
  },
}
