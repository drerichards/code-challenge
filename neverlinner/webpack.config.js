var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: './index.js', 
    output: {
        filename: 'bundle.js', 
        
        path: path.resolve(__dirname, 'dist')
    },
    module: { 
        rules: [
            {
                test: /.js$/, 
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           title: 'Never Linner',
           template: 'index.html',
        })
    ]
}