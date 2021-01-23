import { PortfolioEntry } from "./portfolio-entry.component"

export const GitHubEntry = ({username = ''}) => {
  const linkUrl = username ? `https://github.com/${username}` : ''

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle="GitHub" faClass="fab fa-github" entryClass="github" />
  )
}
