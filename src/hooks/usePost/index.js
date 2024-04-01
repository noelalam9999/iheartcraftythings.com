import { useQuery } from "react-query";
import { getPost } from "@/services/getPost/index.js";

export default function usePost(postId) {
  return useQuery(["post", postId], () => getPost(postId));
}
