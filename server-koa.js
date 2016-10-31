/* eslint-disable strict */

'use strict';

const koa = require('koa');
const serve = require('koa-static');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const app = koa();

let viewDir;
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));

  viewDir = './src';
} else {
  viewDir = './dist';
}
app.use(serve(viewDir));

app.listen(8080, 'localhost', () => {
  console.log('Listening at http://localhost:8080'); // eslint-disable-line no-console
});
