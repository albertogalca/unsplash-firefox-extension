import React from "react";

import { getRandomPhoto } from "../api/unsplash";

import { PhotoDataType } from "../types";
import { getPhotoData } from "../utils";
import useApi from "./useApi";

export const useGetRandomPhoto = () => {
  const getPhoto: any = useApi(getRandomPhoto);
  const [photoData, setPhotoData] = React.useState<PhotoDataType | undefined>(
    undefined
  );

  React.useEffect(() => {
    getPhoto.request();
  }, []);

  React.useEffect(() => {
    if (getPhoto.data) {
      setPhotoData(getPhotoData(getPhoto.data));
    }
  }, [getPhoto.data]);

  return photoData;
};
