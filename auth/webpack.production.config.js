'use strict';

const path = require('path');
const webpack = require('webpack');
const projectPath = path.resolve('.');

module.exports = {
    // The entry file. All your app roots fromn here.
    entry: [
        path.join(projectPath, 'js/app/index.js')
    ],
    // Where you want the output to go
    output: {
			path: path.join(__dirname, 'assets/js'),
			filename: 'app.min.js',
			publicPath: '/assets/js/'
    },
    plugins: [
        // webpack gives your modules and chunks ids to identify them. Webpack can vary the
        // distribution of the ids to get the smallest id length for often used ids with
        // this plugin
        new webpack.optimize.OccurenceOrderPlugin(),

        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),

        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

		resolve: {
        extensions: ['', '.js', '.json', '.handlebars'],
        modulesDirectories: [
          'js',
          'js/app',
          'node_modules'
        ],
				alias: {
		      handlebars: 'handlebars/runtime.js',
          Modernizr: path.join(__dirname, '/js/vendors/modernizr.custom')
		    }
    },

    // ESLint options
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: true
    },

    module: {
        // Runs before loaders
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        // loaders handle the assets, like transforming sass to css or jsx to js.
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json?$/,
            loader: 'json'
        },
        {test: /\.handlebars$/, loader: 'handlebars-loader'},
				{
					test: /detectizr\.js$/,
					loader: 'imports?this=>window!exports?window.Detectizr;'
				}]
    }
};
