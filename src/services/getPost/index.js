import axios from "axios";

export const getPost = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};
