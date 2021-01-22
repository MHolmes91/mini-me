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
    <div className="header__picture">
      <img {...imgParameters} />
    </div>
  );
};
