import axios from "axios";

export const getPosts = (pageNumber) => {
  return axios.get(`/api/posts?per_page=10&page=${pageNumber}`);
};
