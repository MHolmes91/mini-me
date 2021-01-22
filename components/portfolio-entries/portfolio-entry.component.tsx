export const PortfolioEntry = ({ linkUrl = '', linkTarget = '_blank', linkTitle = undefined, faClass, entryClass = '' }) => (
  <a href={linkUrl} target={linkTarget} title={linkTitle} className={entryClass}>
    <div className="portfolio-icon">
      <i className={faClass} />
    </div>
  </a>
)