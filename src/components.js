import { isNil } from 'lodash'
import crypto from 'crypto'
import portfolioComponents from './portfolioComponents'

const md5 = data => crypto.createHash('md5').update(data).digest("hex")

const faviconFileToMimeType = faviconFileName => {
	const extToMimeType = {
		ICO: 'image/x-icon',
		GIF: 'image/gif',
		PNG: 'image/png',
		SVG: 'image/svg+xml'
	}
	const regexec = /\.(\w+)$/.exec(faviconFileName)
	if(regexec && regexec[1]){
		const ext = regexec[1].toUpperCase()
		return extToMimeType[ext] ? extToMimeType[ext] : ''
	}

	return ''
}

export default {
	headerPictureEntry: parameters => {
		if(isNil(parameters)){
			return ''
		}
		else {
			let gravatarHash = '';
			if(parameters.gravatarEmail){
				gravatarHash = md5(parameters.gravatarEmail);
			}
			let linkUrl = parameters.useGravatar ? `https://gravatar.com/avatar/${gravatarHash}?s=256` : parameters.linkUrl;

			return `<div class="header__picture">
						<img src="${linkUrl}" alt="${parameters.pictureText ? parameters.pictureText : ''}" title="${parameters.pictureText ? parameters.pictureText : ''}" />
					</div>`;
		}
	},
	faviconEntry: parameters => {
		if(isNil(parameters)){
			return ''
		}
		else{
			let gravatarHash = '';
			if(parameters.gravatarEmail){
				gravatarHash = md5(parameters.gravatarEmail);
			}
			const faviconType = parameters.useGravatar ? faviconFileToMimeType('this-is-a.png') : faviconFileToMimeType(parameters.faviconUrl)
			let linkUrl = parameters.useGravatar ? `https://gravatar.com/avatar/${gravatarHash}?s=256` : parameters.linkUrl;
			return `<link rel="icon" type="${faviconType}" href="${linkUrl}">`
		}
	},
	descriptionEntry: entry => entry,
	portfolio: portfolioComponents
};