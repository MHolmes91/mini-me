import styles from "../styles/Portfolio.module.scss";
import { EntryType } from "../utils";
import { BitbucketEntry } from "./portfolio-entries/bitbucket-entry.component";
import { EmailEntry } from "./portfolio-entries/email-entry.component";
import { GitHubEntry } from "./portfolio-entries/github-entry.component";
import { GitLabEntry } from "./portfolio-entries/gitlab-entry.component";
import { LinkedInEntry } from "./portfolio-entries/linkedin-entry.component";
import { StackExchangeEntry } from "./portfolio-entries/stackexchange-entry.component";
import { StackOverflowEntry } from "./portfolio-entries/stackoverflow-entry.component";
import { TwitterEntry } from "./portfolio-entries/twitter-entry.component";

const entryComponents = {
  [EntryType.BitBucket]: BitbucketEntry,
  [EntryType.Email]: EmailEntry,
  [EntryType.GitHub]: GitHubEntry,
  [EntryType.GitLab]: GitLabEntry,
  [EntryType.LinkedIn]: LinkedInEntry,
  [EntryType.StackExchange]: StackExchangeEntry,
  [EntryType.StackOverflow]: StackOverflowEntry,
  [EntryType.Twitter]: TwitterEntry,
};

// Account for order
export const Portfolio = ({ entries }) => (
  <div className={styles.portfolio}>
    {Object.entries(entries)
      .sort(
        ([_1, { order: order1 = 10000 }], [_2, { order: order2 = 10000 }]) =>
          order1 > order2 ? 1 : -1
      )
      .map(([entryType, entryValues], key) => {
        const Entry = entryComponents[entryType];
        return Entry ? <Entry {...entryValues} key={key} /> : null;
      })}
  </div>
);

