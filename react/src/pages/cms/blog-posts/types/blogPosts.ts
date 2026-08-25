/**
 * 博客文章页类型。
 */
import type { AbpGridParams } from "@/components/data-table/useDataTableQuery";

/** 列表查询参数：ABP 分页排序参数 + 按博客 Id 过滤。 */
export type BlogPostListParams = AbpGridParams & {
  BlogId?: string;
};
