import cleanPosts from "./index";
import { posts } from "./mockPosts.data";
import { cleanedPosts } from "./mockCleanedPosts.data";

// const cleanPosts = require("./index");
// const posts = require("./mockPosts.data");
// const cleanedPosts = require("./mockCleanedPosts.data");

describe("function cleanPosts filters out unnecessary data", () => {
  test("clean an array of records", () => {
    //Given
    const mockPosts = posts;
    //When
    const mockCleanedPosts = cleanedPosts;

    //Then

    expect(cleanPosts(mockPosts)).toStrictEqual(mockCleanedPosts);
  });
});
