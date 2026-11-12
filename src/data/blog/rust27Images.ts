/** Auto-generated from rust-27-images.zip — 26 assets */
export const RUST27_BLOG_IMAGES = [
  "/images/blog/rust-27/rust-27-01",
  "/images/blog/rust-27/rust-27-02",
  "/images/blog/rust-27/rust-27-03",
  "/images/blog/rust-27/rust-27-04",
  "/images/blog/rust-27/rust-27-05",
  "/images/blog/rust-27/rust-27-06",
  "/images/blog/rust-27/rust-27-07",
  "/images/blog/rust-27/rust-27-08",
  "/images/blog/rust-27/rust-27-09",
  "/images/blog/rust-27/rust-27-10",
  "/images/blog/rust-27/rust-27-11",
  "/images/blog/rust-27/rust-27-12",
  "/images/blog/rust-27/rust-27-13",
  "/images/blog/rust-27/rust-27-14",
  "/images/blog/rust-27/rust-27-15",
  "/images/blog/rust-27/rust-27-16",
  "/images/blog/rust-27/rust-27-17",
  "/images/blog/rust-27/rust-27-18",
  "/images/blog/rust-27/rust-27-19",
  "/images/blog/rust-27/rust-27-20",
  "/images/blog/rust-27/rust-27-21",
  "/images/blog/rust-27/rust-27-22",
  "/images/blog/rust-27/rust-27-23",
  "/images/blog/rust-27/rust-27-24",
  "/images/blog/rust-27/rust-27-25",
  "/images/blog/rust-27/rust-27-26"
] as const;

/** Blog index grid: skip adjacent rust-27 frames so cards do not look duplicated. */
const BLOG_IMAGE_SPREAD_INDICES = [
  0, 5, 10, 15, 20, 25, 3, 8, 13, 18, 23, 1, 6, 11, 16, 21, 4, 9,
] as const;

export function blogImageForIndex(index: number): string {
  const i = BLOG_IMAGE_SPREAD_INDICES[index % BLOG_IMAGE_SPREAD_INDICES.length] ?? 0;
  return RUST27_BLOG_IMAGES[i]!;
}
