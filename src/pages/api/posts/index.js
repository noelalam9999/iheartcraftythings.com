import axios from "axios";
import cleanPosts from "../../../utils/cleanPosts";
export const blogsApi = axios.create({
  baseURL: "https://iheartcraftythings.com/wp-json/wp/v2/posts",
});

export default async function handler(req, res) {
  const { per_page, page } = req.query;

  const posts = await blogsApi.get(
    `?categories=300&per_page=${per_page}&page=${page}&_embed`
  );
  // console.log(posts.data);
  const cleanedPosts = cleanPosts(posts.data);
  res.status(200).json({ data: cleanedPosts });
}
