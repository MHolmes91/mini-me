import styles from "../styles/Header.module.scss";
import { Description } from "./Description";
import { HeaderPicture } from "./HeaderPicture";

export const Header = ({
  title,
  description,
  headerPicture,
  gravatarEmail,
}) => (
  <div className={styles.header}>
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        <Description description={description} />
      </p>
    </div>
    <HeaderPicture {...headerPicture} gravatarEmail={gravatarEmail} />
  </div>
);
