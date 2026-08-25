/**
 * 评论管理页（CommentsPage）非平凡助手。
 */
import type { VoloCmsKitAdminCommentsCommentWithAuthorDto as CommentItem } from "@/api/models/volo/cmsKit/admin/comments/CommentWithAuthorDto";

/** 拼接评论作者显示名：优先"名 姓"，缺失时回退用户名或占位符。 */
export function getAuthorName(comment: CommentItem): string {
  const author = comment.author;
  if (!author) return "-";
  const name = author.name ?? author.userName;
  const surname = author.surname;
  if (name && surname) return `${name} ${surname}`;
  return name ?? author.userName ?? "-";
}
