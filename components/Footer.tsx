import styles from "../styles/Footer.module.scss";

export const Footer = ({ content }) =>
  content ? <div className={styles.footer}>{content}</div> : "";
