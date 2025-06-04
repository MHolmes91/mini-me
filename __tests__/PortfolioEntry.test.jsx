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

const wrappers = {
  github: [GithubEntry, 'fab fa-github'],
  twitter: [TwitterEntry, 'fab fa-twitter'],
  linkedin: [LinkedInEntry, 'fab fa-linkedin-in'],
  email: [EmailEntry, 'fas fa-at'],
  bitbucket: [BitbucketEntry, 'fab fa-bitbucket'],
  'stack-overflow': [StackOverflowEntry, 'fab fa-stack-overflow'],
  'stack-exchange': [StackExchangeEntry, 'fab fa-stack-exchange'],
}

describe('PortfolioEntry components', () => {
  it('renders an anchor when url is provided', () => {
    const { container } = render(
      <PortfolioEntry url="https://x" title="X" fa="fab fa-x" type="github" />
    )
    const a = container.querySelector('a.portfolio__element')
    expect(a).toBeInTheDocument()
    expect(a).toHaveAttribute('href', 'https://x')
    expect(a).toHaveClass('portfolio__element--github')
  })

  it('renders a div when no url is provided', () => {
    const { container } = render(
      <PortfolioEntry title="No Link" fa="fab fa-x" type="github" />
    )
    const div = container.querySelector('div.portfolio__element')
    expect(div).toBeInTheDocument()
  })

  it('wrapper components set fa and type props', () => {
    Object.entries(wrappers).forEach(([type, [Comp, fa]]) => {
      const { container } = render(<Comp url="#" title={type} />)
      const el = container.querySelector('.portfolio__element')
      expect(el).toHaveClass(`portfolio__element--${type}`)
      const icon = container.querySelector('i')
      expect(icon).toHaveClass(fa)
    })
  })

  it('EmailEntry uses _self target', () => {
    const { container } = render(
      <EmailEntry url="mailto:test" title="Email" />
    )
    const a = container.querySelector('a')
    expect(a).toHaveAttribute('target', '_self')
  })
})
