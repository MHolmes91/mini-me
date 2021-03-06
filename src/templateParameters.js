import { isFunction, isNil } from 'lodash'
import fs from 'fs'
import components from './components'

const portfolioParameters = JSON.parse(fs.readFileSync("portfolio.json"))

const templateParameters = {
	title: '',
	description: '',
	pageTitle: '',
	portfolioEntries: [],
	...portfolioParameters
}

templateParameters.headerPictureEntry = components.headerPictureEntry({ gravatarEmail: portfolioParameters.gravatarEmail, ...portfolioParameters.headerPicture })

templateParameters.description = Array.isArray(templateParameters.description)
	? templateParameters.description.reduce((str, entry) => str + components.descriptionEntry(entry) + '<br />', '')
	: components.descriptionEntry(templateParameters.description);

Object.keys(portfolioParameters.portfolio).forEach(key => {
	const portfolioComponent = components.portfolio[key]
	if(isFunction(portfolioComponent)){
		const portfolioParameter = portfolioParameters.portfolio[key]
		const renderedValue = components.portfolio[key](portfolioParameter)
		if(!isNil(portfolioParameter.order)){
			templateParameters.portfolioEntries[portfolioParameter.order] = renderedValue
		}
		else{
			templateParameters.portfolioEntries.push(renderedValue)
		}
	}
})

templateParameters.portfolioEntries = templateParameters.portfolioEntries.filter(val => !isNil(val))

templateParameters.favicon = components.faviconEntry({ gravatarEmail: portfolioParameters.gravatarEmail, ...portfolioParameters.favicon})

templateParameters.footer = portfolioParameters.footer ? components.footer(portfolioParameters.footer) : null

templateParameters.googleAnalytics = portfolioParameters.googleAnalyticsID ? `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${portfolioParameters.googleAnalyticsID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${portfolioParameters.googleAnalyticsID}');
</script>
<!-- End Google Analytics -->
` : ''

export default templateParameters