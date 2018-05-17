const _ = require('lodash');
const crypto = require('crypto');
const md5 = (data) => crypto.createHash('md5').update(data).digest("hex");

const consts = require('./consts.js');
const portfolioComponents = require('./portfolioComponents');

let components = {
	headerPictureEntry: (parameters) => {
		if(_.isNil(parameters)){
			return ''
		}
		else {
			let gravatarHash = '';
			if(parameters.gravatarEmail){
				gravatarHash = md5(parameters.gravatarEmail);
			}
			let linkUrl = parameters.linkUrl ? parameters.linkUrl : `https://gravatar.com/avatar/${gravatarHash}?s=256`;

			return `<div class="header__picture">
						<img src="${linkUrl}" alt="${parameters.pictureText ? parameters.pictureText : ''}" title="${parameters.pictureText ? parameters.pictureText : ''}" />
					</div>`;
		}
	},
	portfolio: portfolioComponents
};

module.exports = components;