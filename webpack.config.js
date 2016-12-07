module.exports = {
  entry: './index.js',

  output: {
    library: 'ReactDc',
    libraryTarget: 'umd',
    filename: 'react-dc.js',
    path: 'dist'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    alias: {
      crossfilter: 'crossfilter2'
    }
  }
};
