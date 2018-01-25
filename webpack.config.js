var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, 'src/index.js')
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, '/public'),
		historyApiFallback: true,
		port: 3000
	}
};