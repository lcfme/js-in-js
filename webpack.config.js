const path = require('path');

module.exports = (env = {}) => ({
  mode: env.prod || env.production ? 'production' : 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './work'),
    filename: 'bundle.js',
    library: 'JSJS',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  }
});
