import { gravatarUrl, faviconFileToMimeType } from "../utils";

export const Favicon = ({
  useGravatar = false,
  gravatarEmail = "",
  faviconUrl = "",
}) => {
  const href =
    useGravatar && gravatarEmail ? gravatarUrl(gravatarEmail) : faviconUrl;

  const faviconType = useGravatar
    ? faviconFileToMimeType("this-is-a.png")
    : faviconFileToMimeType(faviconUrl);

  return <link rel="icon" type={faviconType} href={href} />;
};
