import crypto from "crypto";

export const md5 = (data: string) =>
  crypto.createHash("md5").update(data).digest("hex");

export const faviconFileToMimeType = (faviconFileName: string) => {
  const extToMimeType = {
    ICO: "image/x-icon",
    GIF: "image/gif",
    PNG: "image/png",
    SVG: "image/svg+xml",
  };
  const regexec = /\.(\w+)$/.exec(faviconFileName);
  if (regexec && regexec[1]) {
    const ext = regexec[1].toUpperCase();
    return extToMimeType[ext] ? extToMimeType[ext] : "";
  }

  return "";
};

export const gravatarUrl = (gravatarEmail: string) =>
  `https://gravatar.com/avatar/${md5(gravatarEmail)}?s=256`;
