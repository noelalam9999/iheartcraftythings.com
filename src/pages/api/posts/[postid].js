import { blogsApi } from ".";
import cleanPost from "../../../utils/cleanPost";
export default async function handler(req, res) {
  const { postid } = req.query;
  const { data } = await blogsApi.get(`/${postid}`);
  const cleanedPost = cleanPost(data);
  res.status(200).json(cleanedPost);
}
