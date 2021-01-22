import { PortfolioEntry } from "./portfolio-entry.component"

export const LinkedInEntry = ({username = ''}) => {
  const linkUrl = username ? `https://linkedin.com/in/${username}` : ''

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle="LinkedIn" faClass="fab fa-linkedin-in" entryClass="linkedin" />
  )
}