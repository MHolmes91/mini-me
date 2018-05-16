const _ = require('lodash');

const portfolioEntry = (parameters) => parameters.linkUrl
	? `<a href="${parameters.linkUrl}" target="${parameters.linkTarget ? parameters.linkTarget : '_blank'}" title="${parameters.linkTitle}" class="portfolio__element portfolio__element--${parameters.portfolioElementType}">
		<div class="portfolio__element__icon">
			<i class="${parameters.faClass}"></i>
		</div>
	</a>`
	: `<div class="portfolio__element portfolio__element--${parameters.portfolioElementType}">
		<div class="portfolio__element__icon">
			<i class="${parameters.faClass}"></i>
		</div>
	</div>`
;

module.exports = {
	githubEntry: (parameters) => _.isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.username ? `https://github.com/${parameters.username}` : null,
		linkTitle: 'GitHub',
		portfolioElementType: 'github',
		faClass: 'fab fa-github'
	}),
	linkedInEntry: (parameters) => _.isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.username ? `https://www.linkedin.com/in/${parameters.username}` : null,
		linkTitle: 'LinkedIn',
		portfolioElementType: 'linkedin',
		faClass: 'fab fa-linkedin-in'
	}),
	twitterEntry: (parameters) => _.isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.handle ? `https://twitter.com/${parameters.handle}` : null,
		linkTitle: 'Twitter',
		portfolioElementType: 'twitter',
		faClass: 'fab fa-twitter'
	}),
	bitbucketEntry: (parameters) => _.isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.username ? `https://bitbucket.org/${parameters.username}` : null,
		linkTitle: 'Bitbucket',
		portfolioElementType: 'bitbucket',
		faClass: 'fab fa-bitbucket'
	}),
	emailEntry: (parameters) => _.isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.address ? `mailto:${parameters.address}` : null,
		linkTitle: `Email ${parameters.address ? parameters.address : 'me'}`,
		linkTarget: '_self',
		portfolioElementType: 'email',
		faClass: 'fas fa-at'
	}),
	stackOverflowEntry: (parameters) => _.isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.id ? `https://stackoverflow.com/users/${parameters.id}` : null,
		linkTitle: 'Stack Overflow',
		portfolioElementType: 'stack-overflow',
		faClass: 'fab fa-stack-overflow'
	}),
	stackExchangeEntry: (parameters) => _.isNil(parameters) ? '' : portfolioEntry({
		linkUrl: parameters.id ? `https://stackexchange.com/users/${parameters.id}` : null,
		linkTitle: 'Stack Exchange',
		portfolioElementType: 'stack-exchange',
		faClass: 'fab fa-stack-exchange'
	}),
};