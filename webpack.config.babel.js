/*
Todo:

SCSS
SCSS templating
Refresh on portfolio.json change
Manage deps

Add Generic link/project
Add Generic app/project
Languages

Hover state
favicon
Font
Breakpoints

GA scripts

Audits
 */
import path from 'path'
import fs from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import templateParameters from './src/templateParameters.js'

export default {
	devServer: {
		contentBase: './dist'
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
