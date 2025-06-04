import Head from 'next/head'
import Script from 'next/script'

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

  const getGravatar = () => md5 ? `https://gravatar.com/avatar/${md5}?s=256` : ''

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
  if (p.github) assign(p.github.order, { url: p.github.username ? `https://github.com/${p.github.username}` : null, title: 'GitHub', fa: 'fab fa-github', type: 'github' })
  if (p.twitter) assign(p.twitter.order, { url: p.twitter.handle ? `https://twitter.com/${p.twitter.handle}` : null, title: 'Twitter', fa: 'fab fa-twitter', type: 'twitter' })
  if (p.linkedIn) assign(p.linkedIn.order, { url: p.linkedIn.username ? `https://www.linkedin.com/in/${p.linkedIn.username}` : null, title: 'LinkedIn', fa: 'fab fa-linkedin-in', type: 'linkedin' })
  if (p.email) assign(p.email.order, { url: p.email.address ? `mailto:${p.email.address}` : null, title: `Email ${p.email.address || 'me'}`, fa: 'fas fa-at', type: 'email', target: '_self' })
  if (p.bitbucket) assign(p.bitbucket.order, { url: p.bitbucket.username ? `https://bitbucket.org/${p.bitbucket.username}` : null, title: 'Bitbucket', fa: 'fab fa-bitbucket', type: 'bitbucket' })
  if (p.stackOverflow) assign(p.stackOverflow.order, { url: p.stackOverflow.id ? `https://stackoverflow.com/users/${p.stackOverflow.id}` : null, title: 'Stack Overflow', fa: 'fab fa-stack-overflow', type: 'stack-overflow' })
  if (p.stackExchange) assign(p.stackExchange.order, { url: p.stackExchange.id ? `https://stackexchange.com/users/${p.stackExchange.id}` : null, title: 'Stack Exchange', fa: 'fab fa-stack-exchange', type: 'stack-exchange' })

  const portfolioEntries = entries.filter(Boolean)

  const description = Array.isArray(data.description) ? data.description.join('<br />') : data.description

  return {
    props: { data, headerPictureUrl, faviconUrl, faviconType, portfolioEntries, description }
  }
}

export default function Home({ data, headerPictureUrl, faviconUrl, faviconType, portfolioEntries, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.pageTitle ? data.pageTitle : data.title}</title>
        {faviconUrl && <link rel="icon" type={faviconType} href={faviconUrl} />}
        <link href='//fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic|PT+Sans:400,700|PT+Sans+Narrow:400,700|Inconsolata:400' rel='stylesheet' type='text/css' />
      </Head>
      <Script src="https://kit.fontawesome.com/f938125ef2.js" strategy="afterInteractive" />
      {data.googleAnalyticsID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${data.googleAnalyticsID}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${data.googleAnalyticsID}');`
          }} />
        </>
      )}
      <div className="header">
        <div className="header__text">
          <h1 className="header__title">{data.title}</h1>
          <p className="header__description" dangerouslySetInnerHTML={{__html: description}} />
        </div>
        {headerPictureUrl && (
          <div className="header__picture">
            <img src={headerPictureUrl} alt={data.headerPicture?.pictureText || ''} title={data.headerPicture?.pictureText || ''} />
          </div>
        )}
      </div>
      <div className="portfolio">
        {portfolioEntries.map((entry, idx) => (
          entry.url ? (
            <a key={idx} href={entry.url} target={entry.target || '_blank'} title={entry.title} className={`portfolio__element portfolio__element--${entry.type}`}>
              <div className="portfolio__element__icon">
                <i className={entry.fa}></i>
              </div>
            </a>
          ) : (
            <div key={idx} className={`portfolio__element portfolio__element--${entry.type}`}>
              <div className="portfolio__element__icon">
                <i className={entry.fa}></i>
              </div>
            </div>
          )
        ))}
      </div>
      {data.footer && <div className="footer" dangerouslySetInnerHTML={{__html: data.footer}} />}
    </>
  )
}
