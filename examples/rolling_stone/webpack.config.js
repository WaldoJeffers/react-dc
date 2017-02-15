module.exports = {
  entry: './examples/rolling_stone/index.js',

  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css/, // TO DO MOVE THIS TO THE MODULE'S webpack config, not this example !!!
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    alias: {
      crossfilter: 'crossfilter2' // TO DO : REMOVE THIS
    }
  }
};
