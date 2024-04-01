import { useQuery } from "react-query";
import { getPosts } from "@/services/getPosts/index.js";

export default function usePosts(pageNumber) {
  return useQuery(["posts", pageNumber], () => getPosts(pageNumber));
}
