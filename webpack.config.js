var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/app.js'
	},
	output: {
		path: './dist',
		filename: '[name].bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		hot: true
	},
	resolve: {
		extensions: ['', '.js', 'index.js']
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			}, {
				test: /\.css/,
				loader: 'style!css',
			}, {
				test: /\.scss/,
				loader: 'style!css!sass',
			}, {
				test: /\.ttf/,
				loader: 'url'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: '焦点装修',
			template: './src/index.html',
			inject: 'body'
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 	}
		// })
	]
}