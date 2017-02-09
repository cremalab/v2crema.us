module.exports = {
  entry: {
    bundle: ['./public/javascripts/entry.js'],
    home: ['./public/javascripts/home.js'],
    servicesMobile: ['./public/javascripts/services-mobile.js'],
    expertiseB: ['./public/javascripts/expertise.js'],
    teamB:['./public/javascripts/team.js'],
    
  },
  output: {
    path: './public/javascripts/build',
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
