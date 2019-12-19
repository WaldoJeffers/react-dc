const path = require('path')

module.exports = {
  entry: './src/react-dc.js',

  output: {
    filename: 'react-dc.js',
    library: 'ReactDc',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.join(__dirname, 'dist')
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    dc: 'dc'
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
      }
    ]
  },

  resolve: {
    alias: {
      crossfilter: 'crossfilter2'
    }
  }
}
