/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

const entryApp = [
  path.resolve(__dirname, 'src/index'),
];

const webpackPlugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.CommonsChunkPlugin(
    'vendors', isProd ? 'vendors.[hash:8].js' : 'vendors.js'
  ),
];

if (isProd) {
  webpackPlugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: false,
      output: { comments: false },
    }),
    function () { // eslint-disable-line func-names
      this.plugin('done', (stats) => {
        fs.writeFileSync(
          path.join(__dirname, 'dist', 'stats.json'),
          JSON.stringify(stats.toJson())
        );
      });
    }
  );
} else {
  entryApp.unshift('webpack-hot-middleware/client');
  entryApp.unshift('react-hot-loader/patch');
}

const config = {
  debug: !isProd,
  devtool: !isProd ? 'cheap-module-eval-source-map' : 'source-map',
  entry: {
    app: entryApp,
    vendors: [
      'react',
      'react-dom',
      'redux',
      'redux-thunk',
      'redux-logger',
      'react-redux',
      'react-router',
      'react-router-redux',
      'immutable',
      'color2',
    ],
  },
  output: {
    path: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    filename: isProd ? '[name].[chunkhash:8].js' : '[name].js',
    publicPath: '/',
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },
      {
        test: /\.(jsx|js)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['react-hot-loader/babel'],
        },
      },
    ],
  },
  /* eslint-disable global-require */
  postcss: () => (
    [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      // add your 'plugins' here
      // ...
      // and if you want to compress,
      // just use css-loader option that already use cssnano under the hood
      require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
    ]
  ),
  /* eslint-enable global-require */
  plugins: webpackPlugins,
};

module.exports = config;
