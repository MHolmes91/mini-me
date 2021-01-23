import { PortfolioEntry } from "./portfolio-entry.component"

export const EmailEntry = ({address = ''}) => {
  const linkUrl = address ? `mailto:${address}` : ''
  const linkTitle = `Email ${address ? address : 'me'}`

  return (
    <PortfolioEntry linkUrl={linkUrl} linkTitle={linkTitle} faClass="fas fa-at" entryClass="email" linkTarget="_self" />
  )
}
