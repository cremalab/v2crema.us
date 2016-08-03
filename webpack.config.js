module.exports = {
  entry: {
    filename: './public/javascripts/entry.js'
  },
  output: {
    filename: './public/javascripts/bundle.js'
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules|routes/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
          }
      ]
  }
}
