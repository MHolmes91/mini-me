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

Audit
 */
import _ from 'lodash'
import path from 'path'
import fs from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import jss from 'jss'
import jssPreset from 'jss-preset-default'

import consts from './src/consts'
import components from './src/components'
import styles from './src/styles'

const portfolioParameters = JSON.parse(fs.readFileSync("portfolio.json"))

jss.setup(jssPreset())
const compiledStyles = jss.createStyleSheet(styles)

const templateParameters = Object.assign({
	title: '',
	description: '',
	pageTitle: '',
	portfolioEntries: []
}, portfolioParameters)

templateParameters.headerPictureEntry = components.headerPictureEntry(portfolioParameters.headerPicture, compiledStyles)

Object.keys(portfolioParameters.portfolio).forEach((key) => {
	if(_.isFunction(components.portfolio[key])){
		const portfolioParameter = portfolioParameters.portfolio[key]
		templateParameters.portfolioEntries[portfolioParameter.order] = components.portfolio[key](portfolioParameter, compiledStyles)
	}
})

templateParameters.styles = compiledStyles
templateParameters.styleSheet = compiledStyles.toString()

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
