/**
 * 博客文章页 ABP 状态枚举常量。
 */

// ABP BlogPostStatus enum (Volo.CmsKit.Blogs.BlogPostStatus)
export const BlogPostStatus = {
  Draft: 0,
  Published: 1,
  SentToReview: 2,
  Rejected: 3,
} as const;
