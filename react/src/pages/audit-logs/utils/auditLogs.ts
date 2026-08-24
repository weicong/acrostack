/**
 * 审计日志页（AuditLogsPage）常量与非平凡助手。
 */

// URL 列展示的最大长度，超出部分截断显示省略号
export const URL_DISPLAY_MAX_LENGTH = 60;

/** HTTP 状态代码映射为徽标颜色。 */
export function statusBadgeColor(
  status?: number | null,
): "success" | "warning" | "danger" | "informative" {
  if (!status) return "informative";
  if (status >= 200 && status < 300) return "success";
  if (status >= 400 && status < 500) return "warning";
  if (status >= 500) return "danger";
  return "informative";
}

/** 实体变化类型映射为展示文案。 */
export function changeTypeLabel(changeType: number): string {
  switch (changeType) {
    case 0:
      return "创建";
    case 1:
      return "已更新";
    case 2:
      return "已删除";
    default:
      return String(changeType);
  }
}

/** 实体变化类型映射为徽标颜色。 */
export function changeTypeBadgeColor(
  changeType: number,
): "success" | "warning" | "danger" | "informative" {
  switch (changeType) {
    case 0:
      return "success";
    case 1:
      return "warning";
    case 2:
      return "danger";
    default:
      return "informative";
  }
}
