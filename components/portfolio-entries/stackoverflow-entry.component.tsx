import { PortfolioEntry } from "./portfolio-entry.component"

export const StackOverflowEntry = ({id = ''}) => {
  const linkUrl = id ? `https://stackoverflow.com/users/${id}` : ''

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle="Stack Overflow" faClass="fab fa-stack-overflow" entryClass="stack-overflow" />
  )
}