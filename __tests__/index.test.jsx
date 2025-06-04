import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

const baseProps = {
  data: { title: 'Developer Name' },
  headerPictureUrl: null,
  faviconUrl: null,
  faviconType: '',
  portfolioEntries: [],
  description: 'Lorem'
};

describe('Home page', () => {
  it('renders portfolio title', () => {
    render(<Home {...baseProps} />);
    expect(screen.getByRole('heading', { name: 'Developer Name' })).toBeInTheDocument();
  });

  it('renders all entry types with links', () => {
    const entries = [
      { url: 'https://github.com/u', title: 'GitHub', type: 'github' },
      { url: 'https://twitter.com/u', title: 'Twitter', type: 'twitter' },
      { url: 'https://bsky.app/profile/u.bsky.social', title: 'Bluesky', type: 'bluesky' },
      { url: 'https://www.linkedin.com/in/u', title: 'LinkedIn', type: 'linkedin' },
      { url: 'mailto:u@example.com', title: 'Email u@example.com', type: 'email', target: '_self' },
      { url: 'https://bitbucket.org/u', title: 'Bitbucket', type: 'bitbucket' },
      { url: 'https://stackoverflow.com/users/1', title: 'Stack Overflow', type: 'stack-overflow' },
      { url: 'https://stackexchange.com/users/1', title: 'Stack Exchange', type: 'stack-exchange' }
    ];

    render(<Home {...baseProps} portfolioEntries={entries} />);

    entries.forEach(e => {
      const link = screen.getByTitle(e.title);
      expect(link).toHaveAttribute('href', e.url);
      expect(link).toHaveClass(`portfolio__element portfolio__element--${e.type}`);
    });

    const emailLink = screen.getByTitle('Email u@example.com');
    expect(emailLink).toHaveAttribute('target', '_self');
  });

  it('renders div when entry has no URL', () => {
    const entry = { url: null, title: 'Twitter', type: 'twitter' };
    const { container } = render(<Home {...baseProps} portfolioEntries={[entry]} />);
    const element = container.querySelector('.portfolio__element--twitter');
    expect(element.tagName).toBe('DIV');
  });
});
