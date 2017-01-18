module.exports = {
  entry: './examples/rolling_stone/index.js',

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
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  resolve: {
    alias: {
      crossfilter: 'crossfilter2' // TO DO : REMOVE THIS
    }
  }
};
