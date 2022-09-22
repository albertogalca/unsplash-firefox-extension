import { Item } from "../components/List/types";

export type PhotoDataType = {
  urls: {
    photo: string;
    unplash: string;
    download: string;
  };
  user: {
    url: string;
    picture: string;
    name: string;
  };
  location?: string;
  exif: Array<Item>;
};
