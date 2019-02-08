import { isNil } from 'lodash'
import consts from './consts'

const portfolioEntry = ({ linkUrl, linkTarget, linkTitle, faClass, portfolioElementType}) => linkUrl
	? `<a href="${linkUrl}" target="${linkTarget ? linkTarget : '_blank'}" title="${linkTitle}" class="portfolio__element portfolio__element--${portfolioElementType}">
		<div class="portfolio__element__icon">
			<i class="${faClass}"></i>
		</div>
	</a>`
	: `<div class="portfolio__element portfolio__element--${portfolioElementType}">
		<div class="portfolio__element__icon">
			<i class="${faClass}"></i>
		</div>
	</div>`
;

export default {
	[consts.PORTFOLIO_ENTRY.GITHUB]: parameters => isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.username ? `https://github.com/${parameters.username}` : null,
		linkTitle: 'GitHub',
		portfolioElementType: 'github',
		faClass: 'fab fa-github'
	}),
	[consts.PORTFOLIO_ENTRY.LINKEDIN]: parameters => isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.username ? `https://www.linkedin.com/in/${parameters.username}` : null,
		linkTitle: 'LinkedIn',
		portfolioElementType: 'linkedin',
		faClass: 'fab fa-linkedin-in'
	}),
	[consts.PORTFOLIO_ENTRY.TWITTER]: parameters => isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.handle ? `https://twitter.com/${parameters.handle}` : null,
		linkTitle: 'Twitter',
		portfolioElementType: 'twitter',
		faClass: 'fab fa-twitter'
	}),
	[consts.PORTFOLIO_ENTRY.BITBUCKET]: parameters => isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.username ? `https://bitbucket.org/${parameters.username}` : null,
		linkTitle: 'Bitbucket',
		portfolioElementType: 'bitbucket',
		faClass: 'fab fa-bitbucket'
	}),
	[consts.PORTFOLIO_ENTRY.EMAIL]: parameters => isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.address ? `mailto:${parameters.address}` : null,
		linkTitle: `Email ${parameters.address ? parameters.address : 'me'}`,
		linkTarget: '_self',
		portfolioElementType: 'email',
		faClass: 'fas fa-at'
	}),
	[consts.PORTFOLIO_ENTRY.STACKOVERFLOW]: parameters => isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.id ? `https://stackoverflow.com/users/${parameters.id}` : null,
		linkTitle: 'Stack Overflow',
		portfolioElementType: 'stack-overflow',
		faClass: 'fab fa-stack-overflow'
	}),
	[consts.PORTFOLIO_ENTRY.STACKEXCHANGE]: parameters => isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.id ? `https://stackexchange.com/users/${parameters.id}` : null,
		linkTitle: 'Stack Exchange',
		portfolioElementType: 'stack-exchange',
		faClass: 'fab fa-stack-exchange'
	})
};