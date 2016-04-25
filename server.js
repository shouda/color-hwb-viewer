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

// import koa from 'koa';
// import serve from 'koa-static';
// import webpack from 'webpack';
// import webpackDevMiddleware from 'koa-webpack-dev-middleware';
// import webpackHotMiddleware from 'koa-webpack-hot-middleware';
// import webpackConfig from './webpack.config';
// const app = koa();
//
// let viewDir;
// if (process.env.NODE_ENV !== 'production') {
//   const compiler = webpack(webpackConfig);
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath,
//   }));
//   app.use(webpackHotMiddleware(compiler));
//
//   viewDir = './src';
// } else {
//   viewDir = './dist';
// }
// app.use(serve(viewDir));
//
// app.listen(8080, 'localhost', () => {
//   console.log('Listening at http://localhost:8080'); // eslint-disable-line no-console
// });
