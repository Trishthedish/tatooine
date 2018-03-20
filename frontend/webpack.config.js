const path = require('path'),
  os = require('os'),
  APP_DIR = path.resolve(__dirname, 'app'),
  BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: [APP_DIR + '/app.js'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['babel-loader']
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(os.homedir(), '.node_modules'),
          APP_DIR + '/styles'
        ],
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  resolveLoader: {
    modules: [
      path.resolve(os.homedir(), '.node_modules'),
      'node_modules'
    ]
  },
  resolve: {
    modules: [
      path.resolve(os.homedir(), '.node_modules'),
      'node_modules'
    ]
  }
};
