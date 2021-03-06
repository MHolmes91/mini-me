import path from 'path'
import fs from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import templateParameters from './src/templateParameters.js'

export default {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test:/\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: './dist',
		watchContentBase: true
	},
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
		    template: './src/index.html',
		    templateParameters: templateParameters
		})
	]
};
