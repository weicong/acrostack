/**
 * 文件管理页共享类型。
 */

/** 面包屑条目：id 为 null 表示根目录。 */
export interface BreadcrumbCrumb {
  id: string | null;
  name: string;
}

/** 移动对话框的目标（文件或文件夹）。 */
export type MoveTarget =
  | { kind: "file"; id: string; name: string }
  | { kind: "folder"; id: string; name: string };
