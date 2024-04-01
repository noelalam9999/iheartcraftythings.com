export default function cleanPost(post) {
  return {
    title: post.title.rendered,
    subtitle: post.wps_subtitle,
    content: post.content.rendered,
  };
}
