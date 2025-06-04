import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export default function getPortfolioProps() {
  const dataPath = path.join(process.cwd(), 'portfolio.json');
  let raw;
  try {
    raw = fs.readFileSync(dataPath, 'utf8');
  } catch (err) {
    raw = fs.readFileSync(path.join(process.cwd(), 'portfolio.default.json'), 'utf8');
  }
  const data = JSON.parse(raw);

  const md5 = data.gravatarEmail
    ? crypto.createHash('md5').update(data.gravatarEmail).digest('hex')
    : null;

  const getGravatar = () => (md5 ? `https://gravatar.com/avatar/${md5}?s=256` : '');

  let headerPictureUrl = null;
  if (data.headerPicture) {
    headerPictureUrl = data.headerPicture.useGravatar
      ? getGravatar()
      : data.headerPicture.linkUrl;
  }

  let faviconUrl = null;
  let faviconType = '';
  if (data.favicon) {
    faviconUrl = data.favicon.useGravatar ? getGravatar() : data.favicon.linkUrl;
    const ext = faviconUrl.split('.').pop().toUpperCase();
    const map = {
      ICO: 'image/x-icon',
      GIF: 'image/gif',
      PNG: 'image/png',
      SVG: 'image/svg+xml',
    };
    faviconType = map[ext] || '';
  }

  // Build the list of portfolio links. We keep each entry at the index
  // specified by its optional `order` field to preserve any custom order.
  const slots = [];
  // `add` places an entry in the `slots` array at its ordered index when
  // provided, otherwise it appends the entry to the end of the array.
  const add = (order, entry) => {
    if (order !== undefined && order !== null) {
      slots[order] = entry;
    } else {
      slots.push(entry);
    }
  };

  const p = data.portfolio || {};
  // Mapping of portfolio section keys to functions that create an entry object
  // from the corresponding configuration. Each entry is later placed in the
  // `slots` array based on its `order` field.
  const builders = {
    github: (cfg) => ({
      url: cfg.username ? `https://github.com/${cfg.username}` : null,
      title: 'GitHub',
      type: 'github',
    }),
    twitter: (cfg) => ({
      url: cfg.handle ? `https://twitter.com/${cfg.handle}` : null,
      title: 'Twitter',
      type: 'twitter',
    }),
    linkedIn: (cfg) => ({
      url: cfg.username ? `https://www.linkedin.com/in/${cfg.username}` : null,
      title: 'LinkedIn',
      type: 'linkedin',
    }),
    email: (cfg) => ({
      url: cfg.address ? `mailto:${cfg.address}` : null,
      title: `Email ${cfg.address || 'me'}`,
      type: 'email',
      target: '_self',
    }),
    bitbucket: (cfg) => ({
      url: cfg.username ? `https://bitbucket.org/${cfg.username}` : null,
      title: 'Bitbucket',
      type: 'bitbucket',
    }),
    stackOverflow: (cfg) => ({
      url: cfg.id ? `https://stackoverflow.com/users/${cfg.id}` : null,
      title: 'Stack Overflow',
      type: 'stack-overflow',
    }),
    stackExchange: (cfg) => ({
      url: cfg.id ? `https://stackexchange.com/users/${cfg.id}` : null,
      title: 'Stack Exchange',
      type: 'stack-exchange',
    }),
  };

  // Iterate through the portfolio configuration and build the resulting list
  // of portfolio links using the helpers above.
  Object.entries(p).forEach(([key, cfg]) => {
    const build = builders[key];
    if (build) {
      add(cfg.order, build(cfg));
    }
  });

  // Remove any empty slots resulting from sparse ordering.
  const portfolioEntries = slots.filter(Boolean);
  const description = data.description || '';

  return {
    data,
    headerPictureUrl,
    faviconUrl,
    faviconType,
    portfolioEntries,
    description,
  };
}
