import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faBitbucket,
  faStackOverflow,
  faStackExchange,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

function PortfolioEntry({ url, title, icon, type, target }) {
  const Element = url ? 'a' : 'div'
  const props = url ? { href: url, target: target || '_blank', title } : { title }

  return (
    <Element {...props} className={`portfolio__element portfolio__element--${type}`}>
      <div className="portfolio__element__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
    </Element>
  )
}

export default PortfolioEntry

export const GithubEntry = (props) => <PortfolioEntry {...props} icon={faGithub} type="github" />
export const TwitterEntry = (props) => <PortfolioEntry {...props} icon={faTwitter} type="twitter" />
export const LinkedInEntry = (props) => <PortfolioEntry {...props} icon={faLinkedinIn} type="linkedin" />
export const EmailEntry = (props) => <PortfolioEntry {...props} icon={faAt} type="email" target="_self" />
export const BitbucketEntry = (props) => <PortfolioEntry {...props} icon={faBitbucket} type="bitbucket" />
export const StackOverflowEntry = (props) => <PortfolioEntry {...props} icon={faStackOverflow} type="stack-overflow" />
export const StackExchangeEntry = (props) => <PortfolioEntry {...props} icon={faStackExchange} type="stack-exchange" />
