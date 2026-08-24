/**
 * 博客文章页类型与 ABP 状态枚举常量。
 */
import type { AbpGridParams } from "@/components/data-table/useDataTableQuery";

/** 列表查询参数：ABP 分页排序参数 + 按博客 Id 过滤。 */
export type BlogPostListParams = AbpGridParams & {
  BlogId?: string;
};

// ABP BlogPostStatus enum (Volo.CmsKit.Blogs.BlogPostStatus)
export const BlogPostStatus = {
  Draft: 0,
  Published: 1,
  SentToReview: 2,
  Rejected: 3,
} as const;
