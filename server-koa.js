import koa from 'koa';
import serve from 'koa-static';
import webpack from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import webpackConfig from './webpack.config';

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
