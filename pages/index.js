import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import PortfolioEntries from '../components/PortfolioEntries'

const DEFAULT_GOOGLE_FONTS_URL =
  '//fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic|PT+Sans:400,700|PT+Sans+Narrow:400,700|Inconsolata:400'

export async function getStaticProps() {
  const fs = require('fs')
  const path = require('path')
  const crypto = require('crypto')
  const dataPath = path.join(process.cwd(), 'portfolio.json')
  let raw
  try {
    raw = fs.readFileSync(dataPath, 'utf8')
  } catch (err) {
    raw = fs.readFileSync(path.join(process.cwd(), 'portfolio.default.json'), 'utf8')
  }
  const data = JSON.parse(raw)

  const md5 = data.gravatarEmail
    ? crypto.createHash('md5').update(data.gravatarEmail).digest('hex')
    : null

  const getGravatar = () => (md5 ? `https://gravatar.com/avatar/${md5}?s=256` : '')

  let headerPictureUrl = null
  if (data.headerPicture) {
    headerPictureUrl = data.headerPicture.useGravatar ? getGravatar() : data.headerPicture.linkUrl
  }

  let faviconUrl = null
  let faviconType = ''
  if (data.favicon) {
    faviconUrl = data.favicon.useGravatar ? getGravatar() : data.favicon.linkUrl
    const ext = faviconUrl.split('.').pop().toUpperCase()
    const map = { ICO: 'image/x-icon', GIF: 'image/gif', PNG: 'image/png', SVG: 'image/svg+xml' }
    faviconType = map[ext] || ''
  }

  const entries = []
  const assign = (order, obj) => {
    if (order !== undefined && order !== null) {
      entries[order] = obj
    } else {
      entries.push(obj)
    }
  }
  const p = data.portfolio || {}
  if (p.github) assign(p.github.order, { url: p.github.username ? `https://github.com/${p.github.username}` : null, title: 'GitHub', type: 'github' })
  if (p.twitter) assign(p.twitter.order, { url: p.twitter.handle ? `https://twitter.com/${p.twitter.handle}` : null, title: 'Twitter', type: 'twitter' })
  if (p.linkedIn) assign(p.linkedIn.order, { url: p.linkedIn.username ? `https://www.linkedin.com/in/${p.linkedIn.username}` : null, title: 'LinkedIn', type: 'linkedin' })
  if (p.email) assign(p.email.order, { url: p.email.address ? `mailto:${p.email.address}` : null, title: `Email ${p.email.address || 'me'}`, type: 'email', target: '_self' })
  if (p.bitbucket) assign(p.bitbucket.order, { url: p.bitbucket.username ? `https://bitbucket.org/${p.bitbucket.username}` : null, title: 'Bitbucket', type: 'bitbucket' })
  if (p.stackOverflow) assign(p.stackOverflow.order, { url: p.stackOverflow.id ? `https://stackoverflow.com/users/${p.stackOverflow.id}` : null, title: 'Stack Overflow', type: 'stack-overflow' })
  if (p.stackExchange) assign(p.stackExchange.order, { url: p.stackExchange.id ? `https://stackexchange.com/users/${p.stackExchange.id}` : null, title: 'Stack Exchange', type: 'stack-exchange' })

  const portfolioEntries = entries.filter(Boolean)

  const description = data.description || ''

  return {
    props: { data, headerPictureUrl, faviconUrl, faviconType, portfolioEntries, description },
  }
}

const icons = {
  github: faGithub,
  twitter: faTwitter,
  linkedin: faLinkedinIn,
  email: faAt,
  bitbucket: faBitbucket,
  'stack-overflow': faStackOverflow,
  'stack-exchange': faStackExchange,
}

export default function Home({ data, headerPictureUrl, faviconUrl, faviconType, portfolioEntries, description }) {
  const styleVars = []
  const colors = data.style?.colors || {}
  const fonts = data.style?.fonts || {}
  if (colors.text) styleVars.push(`--color-text: ${colors.text}`)
  if (colors.background) styleVars.push(`--color-background: ${colors.background}`)
  if (colors.accent) styleVars.push(`--color-accent: ${colors.accent}`)
  if (colors.accentAlt) styleVars.push(`--color-accent-alt: ${colors.accentAlt}`)
  if (colors.iconBackground) styleVars.push(`--color-icon-background: ${colors.iconBackground}`)
  if (colors.icon) styleVars.push(`--color-icon: ${colors.icon}`)
  if (fonts.body) styleVars.push(`--font-body: ${fonts.body}`)
  if (fonts.header) styleVars.push(`--font-header: ${fonts.header}`)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.pageTitle ? data.pageTitle : data.title}</title>
        {faviconUrl && <link rel="icon" type={faviconType} href={faviconUrl} />}
        <link href={fonts.googleFontsUrl || DEFAULT_GOOGLE_FONTS_URL} rel="stylesheet" type="text/css" />
        {styleVars.length > 0 && <style>{`:root{${styleVars.join(';')};}`}</style>}
      </Head>
      <div className="header">
        <div className="header__text">
          <h1 className="header__title">{data.title}</h1>
          <ReactMarkdown className="header__description">{description}</ReactMarkdown>
        </div>
        {headerPictureUrl && (
          <div className="header__picture">
            <img src={headerPictureUrl} alt={data.headerPicture?.pictureText || ''} title={data.headerPicture?.pictureText || ''} />
          </div>
        )}
      </div>
      <div className="portfolio">
        <PortfolioEntries entries={portfolioEntries} />
      </div>
      {data.footer && (
        <div className="footer">
          <ReactMarkdown>{data.footer}</ReactMarkdown>
        </div>
      )}
    </>
  )
}
