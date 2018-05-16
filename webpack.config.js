/*
Todo: Portfolio item templating
Separation of concerns
SCSS
Hover state
Formatting
SCSS templating
 */
const crypto = require('crypto');
const path = require('path');
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const md5 = (data) => crypto.createHash('md5').update(data).digest("hex");

let portfolioParameters = JSON.parse(fs.readFileSync("portfolio.json"));

if(portfolioParameters.gravatarEmail){
	portfolioParameters.gravatarHash = md5(portfolioParameters.gravatarEmail);
}
if(portfolioParameters.portfolio.stackOverflow){
	portfolioParameters.stackOverflowLink = portfolioParameters.portfolio.stackOverflow.id ? 'https://stackoverflow.com/users/' + portfolioParameters.portfolio.stackOverflow.id : '';
}

const templateParameters = Object.assign({
	title: '',
	description: '',
	gravatarHash: '',
	gravatarEmail: '',
	pictureText: '',
	pageTitle: '',
	stackOverflowLink: ''
}, portfolioParameters);

module.exports = {
	devServer: {
		contentBase: './dist'
	},
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: 'index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
		    title: 'Mark Holmes',
		    template: './src/index.html',
		    templateParameters: templateParameters
		})
	]
};
