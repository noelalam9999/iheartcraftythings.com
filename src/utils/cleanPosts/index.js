export default function cleanPosts(posts) {
  return posts.map((post) => {
    return {
      id: post.id,
      image:
        post._embedded["wp:featuredmedia"][0].media_details.sizes.medium
          .source_url,
      title: post.title.rendered,
    };
  });
}
