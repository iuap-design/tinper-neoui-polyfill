var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;
var fs = require('fs');

var config = {
	entry: './js/core.js',
	devtool: '',
	output: {
		path: './lib/',
		filename:'core.js',
		libraryTarget:'var',
		umdNamedDefine: true
	},
	module:{
		loaders:[
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/ 
			}
		]
	},
	resolve:{
		extensions: ['','.js','.jsx']
	},
	plugins:[]
};

module.exports = config;