'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
      path.join(__dirname, 'js/app/index.js')
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
        extensions: ['', '.js', '.json', '.handlebars'],
        modulesDirectories: [
          'js',
          'js/app',
          'js/vendors',
          'node_modules'
        ],
				alias: {
		      handlebars: 'handlebars/runtime.js',
					Modernizr: path.join(__dirname, '/js/vendors/modernizr.custom')
		    }
    },
		externals: {
      "dollar": "dollar"
    },
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
						{test: /\.handlebars$/, loader: 'handlebars-loader'},
						{
			        test: /\.json$/,
			        loader: 'json-loader'
			      },
						{
							test: /detectizr\.js$/,
							loader: 'imports?this=>window!exports?window.Detectizr;'
						}
        ]
    }
};
