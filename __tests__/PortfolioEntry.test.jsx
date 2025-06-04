import { render } from '@testing-library/react'
import PortfolioEntry, {
  GithubEntry,
  TwitterEntry,
  LinkedInEntry,
  EmailEntry,
  BitbucketEntry,
  StackOverflowEntry,
  StackExchangeEntry,
} from '../components/PortfolioEntry'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const wrappers = {
  github: [GithubEntry, 'github'],
  twitter: [TwitterEntry, 'twitter'],
  linkedin: [LinkedInEntry, 'linkedin-in'],
  email: [EmailEntry, 'at'],
  bitbucket: [BitbucketEntry, 'bitbucket'],
  'stack-overflow': [StackOverflowEntry, 'stack-overflow'],
  'stack-exchange': [StackExchangeEntry, 'stack-exchange'],
}

describe('PortfolioEntry components', () => {
  it('renders an anchor when url is provided', () => {
    const { container } = render(
      <PortfolioEntry url="https://x" title="X" icon={faGithub} type="github" />
    )
    const a = container.querySelector('a.portfolio__element')
    expect(a).toBeInTheDocument()
    expect(a).toHaveAttribute('href', 'https://x')
    expect(a).toHaveClass('portfolio__element--github')
  })

  it('renders a div when no url is provided', () => {
    const { container } = render(
      <PortfolioEntry title="No Link" icon={faGithub} type="github" />
    )
    const div = container.querySelector('div.portfolio__element')
    expect(div).toBeInTheDocument()
  })

  it('wrapper components set icon and type props', () => {
    Object.entries(wrappers).forEach(([type, [Comp, icon]]) => {
      const { container } = render(<Comp url="#" title={type} />)
      const el = container.querySelector('.portfolio__element')
      expect(el).toHaveClass(`portfolio__element--${type}`)
      const svg = container.querySelector(`svg[data-icon="${icon}"]`)
      expect(svg).toBeInTheDocument()
    })
  })

  it('EmailEntry uses _self target', () => {
    const { container } = render(<EmailEntry url="mailto:test" title="Email" />)
    const a = container.querySelector('a')
    expect(a).toHaveAttribute('target', '_self')
  })
})
