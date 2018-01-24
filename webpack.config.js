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
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, '/public'),
		historyApiFallback: true,
		hot: true,
		inline: true,
		port: 3000
	}
};