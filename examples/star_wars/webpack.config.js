module.exports = {
  entry: './examples/star_wars/index.js',

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css/, // TO DO MOVE THIS TO THE MODULE'S webpack config, not this example !!!
        loaders: ['style', 'css']
      }
    ]
  },

  resolve: {
    alias: {
      crossfilter: 'crossfilter2' // TO DO : REMOVE THIS
    }
  }
};
