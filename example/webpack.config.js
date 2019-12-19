module.exports = {
  entry: './example/index.js',

  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          envName: 'browser'
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    alias: {
      crossfilter: 'crossfilter2'
    }
  }
};
