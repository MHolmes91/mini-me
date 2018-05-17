/*
Todo: Separation of concerns
SCSS
Hover state
Formatting
SCSS templating
Manage deps
Refresh on portfolio.json change
Add Generic link/project
Add Generic app/project
Languages
Audit
Font
 */
const crypto = require('crypto');
const path = require('path');
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfolioEntries = require('./src/index.js');

const md5 = (data) => crypto.createHash('md5').update(data).digest("hex");

let portfolioParameters = JSON.parse(fs.readFileSync("portfolio.json"));

if(portfolioParameters.gravatarEmail){
	portfolioParameters.gravatarHash = md5(portfolioParameters.gravatarEmail);
}

const templateParameters = Object.assign({
	title: '',
	description: '',
	gravatarHash: '',
	gravatarEmail: '',
	pictureText: '',
	pageTitle: '',
	portfolioEntries: {}
}, portfolioParameters);

templateParameters.portfolioEntries.github = portfolioEntries.githubEntry(portfolioParameters.portfolio.github);
templateParameters.portfolioEntries.linkedIn = portfolioEntries.linkedInEntry(portfolioParameters.portfolio.linkedIn);
templateParameters.portfolioEntries.twitter = portfolioEntries.twitterEntry(portfolioParameters.portfolio.twitter);
templateParameters.portfolioEntries.bitbucket = portfolioEntries.bitbucketEntry(portfolioParameters.portfolio.bitbucket);
templateParameters.portfolioEntries.email = portfolioEntries.emailEntry(portfolioParameters.portfolio.email);
templateParameters.portfolioEntries.stackOverflow = portfolioEntries.stackOverflowEntry(portfolioParameters.portfolio.stackOverflow);
templateParameters.portfolioEntries.stackExchange = portfolioEntries.stackExchangeEntry(portfolioParameters.portfolio.stackExchange);

module.exports = {
	devServer: {
		contentBase: './dist'
	},
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
