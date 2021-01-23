import styles from "../styles/HeaderPicture.module.scss";
import { gravatarUrl } from "../utils";

export const HeaderPicture = ({
  gravatarEmail = "",
  useGravatar = false,
  linkUrl = "",
  pictureText = "",
}) => {
  const src =
    useGravatar && gravatarEmail ? gravatarUrl(gravatarEmail) : linkUrl;

  const imgParameters = {
    src,
    ...(pictureText ? { title: pictureText, alt: pictureText } : {}),
  };

  return (
    <div className={styles.picture}>
      <img {...imgParameters} />
    </div>
  );
};
