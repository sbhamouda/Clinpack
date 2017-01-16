var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/_catalogs/masterpage/IntranetCloudisia/YourAppName/js');

var APP_DIR = path.resolve(__dirname, 'src/_catalogs/masterpage/IntranetCloudisia/YourAppName/components');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'news.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
