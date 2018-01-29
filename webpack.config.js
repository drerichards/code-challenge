var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: [
		'whatwg-fetch',
		path.join(__dirname, 'src/index.js')
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.(css|scss)$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		},
		{ test: /\.handlebars$/, loader: 'handlebars-loader' }]
	},
	output: {
		path: path.join(__dirname, '/public'),
		publicPath: '/',
		filename: 'js/bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.template.html',
			title:'BuildNG Code Challenge',
			filename: 'index.html',
			inject: 'body'
		})],
	devServer: {
		contentBase: path.join(__dirname, '/public'),
		historyApiFallback: {
			index:'/'
		},
		port: 3000
	}
};