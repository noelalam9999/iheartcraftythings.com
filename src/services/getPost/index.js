import axios from "axios";
import { config } from "../../config";

export const getPost = (postId) => {
  return axios.get(`${config.backendLocal}/blog/${postId}`);
};
