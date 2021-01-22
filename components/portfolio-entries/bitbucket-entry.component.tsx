import { PortfolioEntry } from "./portfolio-entry.component"

export const BitbucketEntry = ({username = ''}) => {
  const linkUrl = username ? `https://bitbucket.org/${username}` : ''

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle="Bitbucket" faClass="fab fa-bitbucket" entryClass="bitbucket" />
  )
}