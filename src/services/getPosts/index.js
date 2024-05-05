import axios from "axios";
import { config } from "../../config";

export const getPosts = (pageNumber) => {
  return axios.get(`${config.backendLocal}/blogs`);
};
