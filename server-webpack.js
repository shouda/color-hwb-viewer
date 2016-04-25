/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  // noInfo: true,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(8080, 'localhost', (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Listening at localhost:8080');
});
