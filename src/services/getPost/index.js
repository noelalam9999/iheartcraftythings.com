import axios from "axios";
import { config } from "../../config";

export const getPost = (postId) => {
  console.log("inside get post");
  return axios.get(`${config.backendLocal}/blog/${postId}`);
};
