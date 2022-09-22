import format from "date-fns/format";

import { PhotoDataType } from "../types/PhotoData";

export const getPhotoData = (data: any): PhotoDataType | undefined => {
  if (!data) return;

  console.log(data);

  return {
    urls: {
      photo: data.urls.regular,
      unplash: data.links.html,
      download: data.links.download,
    },
    user: {
      url: data.user.portfolio_url,
      picture: data.user.profile_image.small,
      name: data.user.name,
    },
    location: data.location.country,
    exif: [
      { label: "Make", content: data.exif.make },
      { label: "Model", content: data.exif.model },
      { label: "Shutter Speed", content: data.exif.exposure_time },
      { label: "Aperture", content: data.exif.aperture },
      { label: "Focal Length", content: data.exif.focal_length },
      { label: "ISO", content: data.exif.iso },
      {
        label: "Published on",
        content: format(new Date(data.created_at), "PPP"),
      },
      { label: "Dimensions", content: `${data.width} x ${data.height}` },
    ],
  };
};
