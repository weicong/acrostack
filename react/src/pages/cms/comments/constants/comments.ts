/**
 * 评论管理页常量。
 */

/** 内容列展示的最大字符数，超出部分截断显示省略号 */
export const TEXT_MAX = 80;

// ABP CommentApproveState enum (Volo.CmsKit.Comments.CommentApproveState)
export const CommentApproveState = {
  Approved: 0,
  WaitingForApproval: 1,
} as const;
