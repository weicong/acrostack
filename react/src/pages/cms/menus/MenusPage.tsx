/**
 * 菜单管理页：权限、列表查询与对话框编排。
 * 树构建见 utils/menuTree，树面板见 components/MenuTreePane。
 */
import { useCallback, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Button, useToastController } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import {
  useMenuItemAdminGetList,
  menuItemAdminGetListQueryKey,
} from "@/api/hooks/menuItemAdmin/useMenuItemAdminGetList";
import { useMenuItemAdminDelete } from "@/api/hooks/menuItemAdmin/useMenuItemAdminDelete";
import type { VoloCmsKitAdminMenusMenuItemWithDetailsDto as MenuItemDto } from "@/api/models/volo/cmsKit/admin/menus/MenuItemWithDetailsDto";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { MenuItemFormDialog } from "./components/MenuItemFormDialog";
import { buildMenuTree, flattenTreeForParentOptions } from "./utils/menuTree";
import { MenuTreePane } from "./components/MenuTreePane";
import { useMenusStyles } from "./styles/menus";

export function MenusPage() {
  const styles = useMenusStyles();
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

  async function handleDeleteConfirm() {
    if (!deleteItemId) return;
    try {
      await deleteMutation.mutateAsync({ path: { id: deleteItemId } });
      setDeleteItemId(null);
      invalidateList();
      dispatchToast("删除成功", { intent: "success" });
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    }
  }

  return (
    <PageLayout title={"菜单"}>
      <div className={styles.toolbar}>
        {canCreate && (
          <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
            {"新建菜单项"}
          </Button>
        )}
      </div>

      <MenuTreePane
        tree={menuTree}
        loading={itemsQuery.isLoading}
        canUpdate={canUpdate}
        canDelete={canDelete}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

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
        onConfirm={() => void handleDeleteConfirm()}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
