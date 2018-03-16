const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: [APP_DIR + '/app.js'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  }
};
