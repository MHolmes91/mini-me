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

Audit
 */
const _ = require('lodash');
const path = require('path');
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const consts = require('./src/consts.js');
const components = require('./src/components.js');

let portfolioParameters = JSON.parse(fs.readFileSync("portfolio.json"));

const templateParameters = Object.assign({
	title: '',
	description: '',
	pageTitle: '',
	portfolioEntries: []
}, portfolioParameters);

templateParameters.headerPictureEntry = components.headerPictureEntry(portfolioParameters.headerPicture);

Object.keys(portfolioParameters.portfolio).forEach((key) => {
	if(_.isFunction(components.portfolio[key])){
		let portfolioParameter = portfolioParameters.portfolio[key];
		templateParameters.portfolioEntries[portfolioParameter.order] = components.portfolio[key](portfolioParameter);
	}
});

module.exports = {
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
