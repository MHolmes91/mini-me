import styles from "../../styles/PortfolioEntry.module.scss";
import classNames from "classnames";

export const PortfolioEntry = ({
  linkUrl = "",
  linkTarget = "_blank",
  linkTitle = undefined,
  faClass,
  entryClass = "",
}) => (
  <a
    href={linkUrl}
    target={linkTarget}
    title={linkTitle}
    className={classNames({ [styles.entry]: true, [styles[entryClass]]: !!entryClass })}
  >
    <div className={styles.icon}>
      <i className={faClass} />
    </div>
  </a>
);

