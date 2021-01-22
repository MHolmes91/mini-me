import { PortfolioEntry } from "./portfolio-entry.component"

export const StackExchangeEntry = ({id = ''}) => {
  const linkUrl = id ? `https://stackexchange.com/users/${id}` : ''

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle="Stack Exchange" faClass="fab fa-stack-exchange" entryClass="stack-exchange" />
  )
}