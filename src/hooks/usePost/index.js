import { useQuery } from "react-query";
import { getPost } from "@/services/getPost/index.js";

export default function usePost(postId) {
  return useQuery(["post", postId], async () => {
    const res = await getPost(postId);

    return res;
  });
}
