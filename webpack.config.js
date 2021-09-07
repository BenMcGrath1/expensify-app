const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'styles.css' }),
      new webpack.ProvidePlugin({ process: 'process/browser' })
    ],
    mode: isProduction ? 'production' : isDevelopment ? ' devlopment' : 'none',
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
