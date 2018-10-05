import _ from 'lodash'
import crypto from 'crypto'

import consts from './consts.js'
import portfolioComponents from './portfolioComponents'

const md5 = (data) => crypto.createHash('md5').update(data).digest("hex");

export default {
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