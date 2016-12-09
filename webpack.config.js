const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

const entryApp = [
  path.resolve(__dirname, 'src/index'),
];

const webpackPlugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({
    debug: !isProd,
    options: {
      postcss: [
        /* eslint-disable global-require */
        require('postcss-import')({ addDependencyTo: webpack }),
        require('postcss-url')(),
        require('postcss-cssnext')(),
        require('postcss-browser-reporter')({
          sourcemap: true,
          browsers: ['last 2 versions', 'android 4', 'opera 12'],
        }),
        require('postcss-reporter')({ clearMessages: true }),
        /* eslint-enable global-require */
      ],
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    filename: isProd ? 'vendors.[hash:8].js' : 'vendors.js',
  }),
];

if (isProd) {
  webpackPlugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
      mangle: false,
      beautify: false,
      comments: false,
      sourceMap: true,
    }),
    function () { // eslint-disable-line func-names
      this.plugin('done', (stats) => {
        fs.writeFileSync(path.join(__dirname, 'dist', 'stats.json'),
          JSON.stringify(stats.toJson()));
      });
    });
} else {
  entryApp.unshift('webpack-hot-middleware/client');
  entryApp.unshift('react-hot-loader/patch');
}

const config = {
  devtool: !isProd ? 'eval' : 'cheap-module-source-map',
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
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'lib'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(jsx|js)$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'lib')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [['es2015', { modules: false }], 'react'],
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
    ],
  },
  plugins: webpackPlugins,
};

module.exports = config;
