import React from 'react';

function PortfolioEntry({ url, title, fa, type, target }) {
  const Element = url ? 'a' : 'div';
  const props = url ? { href: url, target: target || '_blank', title } : { title };

  return (
    <Element {...props} className={`portfolio__element portfolio__element--${type}`}>
      <div className="portfolio__element__icon">
        <i className={fa}></i>
      </div>
    </Element>
  );
}

export default PortfolioEntry;

export const GithubEntry = (props) => <PortfolioEntry {...props} fa="fab fa-github" type="github" />;
export const TwitterEntry = (props) => <PortfolioEntry {...props} fa="fab fa-twitter" type="twitter" />;
export const LinkedInEntry = (props) => <PortfolioEntry {...props} fa="fab fa-linkedin-in" type="linkedin" />;
export const EmailEntry = (props) => <PortfolioEntry {...props} fa="fas fa-at" type="email" target="_self" />;
export const BitbucketEntry = (props) => <PortfolioEntry {...props} fa="fab fa-bitbucket" type="bitbucket" />;
export const StackOverflowEntry = (props) => <PortfolioEntry {...props} fa="fab fa-stack-overflow" type="stack-overflow" />;
export const StackExchangeEntry = (props) => <PortfolioEntry {...props} fa="fab fa-stack-exchange" type="stack-exchange" />;
