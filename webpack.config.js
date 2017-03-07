const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/react-dc.js',

  output: {
    filename: 'react-dc.js',
    library: 'ReactDc',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: 'dist'
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
    dc: 'react'
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
        //use: ['css-loader']
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('react-dc.css'),
  ],

  resolve: {
    alias: {
      crossfilter: 'crossfilter2'
    }
  }
}
