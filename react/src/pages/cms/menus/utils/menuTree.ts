/**
 * 菜单树构建与父级选项扁平化助手。
 */
import type { VoloCmsKitAdminMenusMenuItemWithDetailsDto as MenuItemDto } from "@/api/models/volo/cmsKit/admin/menus/MenuItemWithDetailsDto";
import type { MenuItemParentOption } from "../components/MenuItemFormDialog";

export interface MenuTreeNode {
  item: MenuItemDto;
  children: MenuTreeNode[];
}

/** 按parentId 组树并按 order 逐层排序。 */
export function buildMenuTree(items: MenuItemDto[]): MenuTreeNode[] {
  const map = new Map<string, MenuTreeNode>();
  const roots: MenuTreeNode[] = [];
  for (const item of items) {
    if (item.id) map.set(item.id, { item, children: [] });
  }
  for (const item of items) {
    const node = item.id ? map.get(item.id) : undefined;
    if (!node) continue;
    if (item.parentId && map.has(item.parentId)) {
      map.get(item.parentId)!.children.push(node);
    } else {
      roots.push(node);
    }
  }
  // 各层级按 order 排序
  const sortNodes = (nodes: MenuTreeNode[]) => {
    nodes.sort((a, b) => (a.item.order ?? 0) - (b.item.order ?? 0));
    nodes.forEach((n) => sortNodes(n.children));
  };
  sortNodes(roots);
  return roots;
}

/** 树扁平化为带缩进前缀的父级下拉选项；excludeId 用于编辑时排除自身及子树入口。 */
export function flattenTreeForParentOptions(
  nodes: MenuTreeNode[],
  depth = 0,
  excludeId?: string,
): MenuItemParentOption[] {
  const result: MenuItemParentOption[] = [];
  for (const node of nodes) {
    if (!node.item.id) continue;
    if (node.item.id === excludeId) continue;
    const prefix = depth > 0 ? `${"  ".repeat(depth)}└ ` : "";
    result.push({
      id: node.item.id,
      label: `${prefix}${node.item.displayName ?? ""}`,
    });
    result.push(...flattenTreeForParentOptions(node.children, depth + 1, excludeId));
  }
  return result;
}
