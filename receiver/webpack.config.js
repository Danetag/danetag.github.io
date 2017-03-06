'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
      path.join(__dirname, 'js/app/entry.js')
    ],
    output: {
      path: path.join(__dirname, '/assets/js'),
      filename: 'app.js'
    },
    plugins: [
				new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
  				'process.env': {
  					NODE_ENV: JSON.stringify('development'),
  					DEV: (process.env.NODE_ENV !== 'production'),
  					IS_BROWSER: true
  				}
  			})
    ],
    resolve: {
        extensions: ['', '.js', '.json'],
        modulesDirectories: [
          'js',
          'js/app',
          'node_modules'
        ]
    },
		externals: {},
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            },
						{
							test: /detectizr\.js$/,
							loader: 'imports?this=>window!exports?window.Detectizr;'
						},
            {
                test: /\.json?$/,
                loader: 'json'
            }
        ]
    }
};
