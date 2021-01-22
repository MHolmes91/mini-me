import { PortfolioEntry } from "./portfolio-entry.component"

export const GitLabEntry = ({username = '', customUrl = ''}) => {
  const linkUrl = customUrl ? customUrl : username ? `https://gitlab.com/${username}` : ''

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle="GitLab" faClass="fab fa-gitlab" entryClass="gitlab" />
  )
}