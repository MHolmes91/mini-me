import React from 'react'
import PortfolioEntry, {
  GithubEntry,
  TwitterEntry,
  LinkedInEntry,
  EmailEntry,
  BitbucketEntry,
  BlueskyEntry,
  StackOverflowEntry,
  StackExchangeEntry,
} from './PortfolioEntry'

const map = {
  github: GithubEntry,
  twitter: TwitterEntry,
  linkedin: LinkedInEntry,
  email: EmailEntry,
  bitbucket: BitbucketEntry,
  bluesky: BlueskyEntry,
  'stack-overflow': StackOverflowEntry,
  'stack-exchange': StackExchangeEntry,
}

export default function PortfolioEntries({ entries }) {
  return (
    <>
      {entries.map((entry, idx) => {
        const EntryComponent = map[entry.type] || PortfolioEntry
        return <EntryComponent key={idx} {...entry} />
      })}
    </>
  )
}
