import { create } from "zustand";

const useBlogListDistance = create((set) => ({
  blogListDistance: 0,
  setBlogListDistance: (distance) =>
    set(() => ({
      blogListDistance: distance,
    })),
}));

export default useBlogListDistance;
