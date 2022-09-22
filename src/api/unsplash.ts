import { axios } from "../lib/axios";

export const getRandomPhoto = () => axios.get("/photos/random");
