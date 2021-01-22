import { PortfolioEntry } from "./portfolio-entry.component"

export const TwitterEntry = ({handle = ''}) => {
  const linkUrl = handle ? `https://twitter.com/${handle}` : ''

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle="Twitter" faClass="fab fa-twitter" entryClass="twitter" />
  )
}