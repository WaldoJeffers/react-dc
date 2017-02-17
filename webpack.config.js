module.exports = {
  entry: './src/react-dc.js',

  output: {
    filename: 'react-dc.js',
    path: 'dist'
  },

  externals: {
    react: 'react',
    dc: 'dc'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          forceEnv: 'browser'
        }
      },
      {
        test: /\.css/, // TO DO MOVE THIS TO THE MODULE'S webpack config, not this example !!!
        use: ['css-loader']
      }
    ]
  },

  resolve: {
    alias: {
      crossfilter: 'crossfilter2'
    }
  }
};
