import axios from "axios";

export const blogsApi = axios.create({
  baseURL: "https://iheartcraftythings.com/wp-json/wp/v2",
});

export default function handler(req, res) {
  const params = req.query;
  
  res.status(200).json({ id: req.body });
}
