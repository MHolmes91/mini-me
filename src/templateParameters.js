import _ from 'lodash'
import path from 'path'
import fs from 'fs'

import components from './components'

const portfolioParameters = JSON.parse(fs.readFileSync("portfolio.json"))

const templateParameters = Object.assign({
	title: '',
	description: '',
	pageTitle: '',
	portfolioEntries: []
}, portfolioParameters)

templateParameters.headerPictureEntry = components.headerPictureEntry(portfolioParameters.headerPicture)

templateParameters.description = Array.isArray(templateParameters.description)
	? templateParameters.description.reduce((str, entry) => str + components.descriptionEntry(entry), '')
	: components.descriptionEntry(templateParameters.description);

Object.keys(portfolioParameters.portfolio).forEach((key) => {
	if(_.isFunction(components.portfolio[key])){
		const portfolioParameter = portfolioParameters.portfolio[key]
		templateParameters.portfolioEntries[portfolioParameter.order] = components.portfolio[key](portfolioParameter)
	}
})

export default templateParameters