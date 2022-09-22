import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
  },
});
