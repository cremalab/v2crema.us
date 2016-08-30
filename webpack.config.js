module.exports = {
  entry: {
    bundle: ['./public/javascripts/entry.js'],
    servicesMobile: ['./public/javascripts/services-mobile.js']
    
  },
  output: {
    path: './public/javascripts',
    filename: '[name].js'
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
