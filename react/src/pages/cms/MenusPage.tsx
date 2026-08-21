import { useCallback, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Badge,
  Button,
  Text,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  Add20Regular,
  Delete20Regular,
  Edit20Regular,
  Navigation20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import {
  useMenuItemAdminGetList,
  menuItemAdminGetListQueryKey,
} from "@/api/hooks/menuItemAdmin/useMenuItemAdminGetList";
import { useMenuItemAdminDelete } from "@/api/hooks/menuItemAdmin/useMenuItemAdminDelete";
import type { VoloCmsKitAdminMenusMenuItemWithDetailsDto as MenuItemDto } from "@/api/models/volo/cmsKit/admin/menus/MenuItemWithDetailsDto";
import { MenuItemFormDialog, type MenuItemParentOption } from "./MenuItemFormDialog";

// ── Tree helpers ────────────────────────────────────────────────────

interface MenuTreeNode {
  item: MenuItemDto;
  children: MenuTreeNode[];
}

function buildMenuTree(items: MenuItemDto[]): MenuTreeNode[] {
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
  // Sort by order at each level
  const sortNodes = (nodes: MenuTreeNode[]) => {
    nodes.sort((a, b) => (a.item.order ?? 0) - (b.item.order ?? 0));
    nodes.forEach((n) => sortNodes(n.children));
  };
  sortNodes(roots);
  return roots;
}

function flattenTreeForParentOptions(
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

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: tokens.spacingHorizontalM,
  },
  pane: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    overflow: "hidden",
  },
  paneHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  paneTitle: {
    fontWeight: "semibold",
  },
  paneBody: {
    display: "flex",
    flexDirection: "column",
    padding: tokens.spacingVerticalS,
    gap: tokens.spacingVerticalXXS,
    minHeight: "200px",
  },
  menuItemRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusSmall,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  menuItemInfo: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
  },
  menuItemName: {
    fontWeight: "semibold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  menuItemUrl: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  rowActions: {
    display: "flex",
    gap: tokens.spacingHorizontalXXS,
    flexShrink: 0,
  },
  inactiveBadge: {
    marginLeft: tokens.spacingHorizontalS,
  },
  emptyPane: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingVerticalXL,
    color: tokens.colorNeutralForeground3,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function MenusPage() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();

  const canCreate = isGranted("CmsKit.Menus.Create");
  const canUpdate = isGranted("CmsKit.Menus.Update");
  const canDelete = isGranted("CmsKit.Menus.Delete");

  const deleteMutation = useMenuItemAdminDelete();

  const itemsQuery = useMenuItemAdminGetList();
  const items = useMemo(() => itemsQuery.data?.items ?? [], [itemsQuery.data]);
  const menuTree = useMemo(() => buildMenuTree(items), [items]);

  const [formOpen, setFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItemDto | undefined>();
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

  const parentOptions = useMemo(
    () => flattenTreeForParentOptions(menuTree, 0, editingItem?.id),
    [menuTree, editingItem?.id],
  );

  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: menuItemAdminGetListQueryKey() });
  }, [queryClient]);

  const handleCreate = useCallback(() => {
    setEditingItem(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((item: MenuItemDto) => {
    setEditingItem(item);
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteItemId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    setEditingItem(undefined);
    invalidateList();
  }, [invalidateList]);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteItemId) return;
    deleteMutation.mutate(
      { path: { id: deleteItemId } },
      {
        onSuccess: () => {
          setDeleteItemId(null);
          invalidateList();
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteItemId, deleteMutation, invalidateList, dispatchToast]);

  const renderMenuTreeNode = (node: MenuTreeNode, depth: number) => {
    const item = node.item;
    const paddingLeft = `${tokens.spacingHorizontalM} + ${depth * 20}px`;
    return (
      <div key={item.id ?? depth}>
        <div className={styles.menuItemRow} style={{ paddingLeft: `calc(${paddingLeft})` }}>
          <div className={styles.menuItemInfo}>
            <span className={styles.menuItemName}>
              {item.displayName || "-"}
              {item.isActive === false && (
                <Badge
                  className={styles.inactiveBadge}
                  appearance="filled"
                  color="severe"
                  size="small"
                >
                  {"未激活"}
                </Badge>
              )}
            </span>
            {item.url && <span className={styles.menuItemUrl}>{item.url}</span>}
          </div>
          {(canUpdate || canDelete) && (
            <div className={styles.rowActions}>
              {canUpdate && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Edit20Regular />}
                  onClick={() => handleEdit(item)}
                  aria-label={"编辑"}
                  title={"编辑"}
                />
              )}
              {canDelete && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Delete20Regular />}
                  onClick={() => item.id && handleDelete(item.id)}
                  aria-label={"删除"}
                  title={"删除"}
                />
              )}
            </div>
          )}
        </div>
        {node.children.map((child) => renderMenuTreeNode(child, depth + 1))}
      </div>
    );
  };

  return (
    <PageLayout title={"菜单"}>
      <div className={styles.toolbar}>
        {canCreate && (
          <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
            {"新建菜单项"}
          </Button>
        )}
      </div>

      <div className={styles.pane}>
        <div className={styles.paneHeader}>
          <Text className={styles.paneTitle}>{"菜单项"}</Text>
        </div>
        <div className={styles.paneBody}>
          {itemsQuery.isLoading ? (
            <Text size={200}>{"加载中..."}</Text>
          ) : menuTree.length === 0 ? (
            <div className={styles.emptyPane}>
              <Navigation20Regular fontSize={24} />
              <Text size={200}>{"暂无菜单项"}</Text>
            </div>
          ) : (
            menuTree.map((node) => renderMenuTreeNode(node, 0))
          )}
        </div>
      </div>

      <MenuItemFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        menuItem={editingItem}
        parentOptions={parentOptions}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteItemId !== null}
        onOpenChange={(open) => !open && setDeleteItemId(null)}
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
