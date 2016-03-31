var webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/app.js'
	},
	output: {
		path: './dist',
		filename: '[name].bundle.js'
	},
	devServer: {
		// historyApiFallback: true,
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
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 	}
		// })
	]
}