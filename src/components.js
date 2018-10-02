const _ = require('lodash');
const crypto = require('crypto');
const md5 = (data) => crypto.createHash('md5').update(data).digest("hex");

const consts = require('./consts.js');
const portfolioComponents = require('./portfolioComponents');

export default {
	headerPictureEntry: (parameters, styles) => {
		if(_.isNil(parameters)){
			return ''
		}
		else {
			let gravatarHash = '';
			if(parameters.gravatarEmail){
				gravatarHash = md5(parameters.gravatarEmail);
			}
			let linkUrl = parameters.linkUrl ? parameters.linkUrl : `https://gravatar.com/avatar/${gravatarHash}?s=256`;

			return `<div class="${styles.classes.headerPicture}">
						<img src="${linkUrl}" alt="${parameters.pictureText ? parameters.pictureText : ''}" title="${parameters.pictureText ? parameters.pictureText : ''}" />
					</div>`;
		}
	},
	portfolio: portfolioComponents
};