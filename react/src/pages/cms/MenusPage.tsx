import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Text, makeStyles, tokens, useToastController } from "@fluentui/react-components";
import {
  Add20Regular,
  Delete20Regular,
  Edit20Regular,
  Navigation20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { useMenuGetList, menuGetListQueryKey } from "@/api/hooks/menu/useMenuGetList";
import { useMenuGetByName, menuGetByNameQueryKey } from "@/api/hooks/menu/useMenuGetByName";
import { useMenuDelete } from "@/api/hooks/menu/useMenuDelete";
import { useMenuItemDelete } from "@/api/hooks/menuItem/useMenuItemDelete";
import type { AcroStackServicesDtosCmsMenuDto as MenuDto } from "@/api/models/acroStack/services/dtos/cms/MenuDto";
import type { AcroStackServicesDtosCmsMenuItemDto as MenuItemDto } from "@/api/models/acroStack/services/dtos/cms/MenuItemDto";
import { MenuFormDialog } from "./MenuFormDialog";
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
  root: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "flex-start",
  },
  pane: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    overflow: "hidden",
  },
  leftPane: {
    width: "280px",
    minWidth: "240px",
    flexShrink: 0,
  },
  rightPane: {
    flex: 1,
    minWidth: 0,
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
    maxHeight: "60vh",
    overflowY: "auto",
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
  menuRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    cursor: "pointer",
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left" as const,
    borderRadius: tokens.borderRadiusSmall,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  menuRowSelected: {
    backgroundColor: tokens.colorBrandBackground2,
    "&:hover": {
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
  },
  menuName: {
    flex: 1,
    minWidth: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  rowActions: {
    display: "flex",
    gap: tokens.spacingHorizontalXXS,
    flexShrink: 0,
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
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();

  const canCreate = isGranted("AcroStack.Cms.Menus.Create");
  const canUpdate = isGranted("AcroStack.Cms.Menus.Update");
  const canDelete = isGranted("AcroStack.Cms.Menus.Delete");

  const menuDeleteMutation = useMenuDelete();
  const menuItemDeleteMutation = useMenuItemDelete();

  const menusQuery = useMenuGetList();
  const menus = useMemo(() => menusQuery.data?.items ?? [], [menusQuery.data]);

  const [selectedMenuName, setSelectedMenuName] = useState<string | null>(null);
  const [menuFormOpen, setMenuFormOpen] = useState(false);
  const [editingMenu, setEditingMenu] = useState<MenuDto | undefined>();
  const [deleteMenuId, setDeleteMenuId] = useState<string | null>(null);
  const [menuItemFormOpen, setMenuItemFormOpen] = useState(false);
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItemDto | undefined>();
  const [deleteMenuItemId, setDeleteMenuItemId] = useState<string | null>(null);

  const selectedMenuQuery = useMenuGetByName(
    selectedMenuName ? { name: selectedMenuName } : undefined,
    { query: { enabled: !!selectedMenuName } },
  );

  const selectedMenu = selectedMenuQuery.data as MenuDto | undefined;
  const menuItems = useMemo(() => selectedMenu?.items ?? [], [selectedMenu?.items]);
  const menuTree = useMemo(() => buildMenuTree(menuItems), [menuItems]);
  const parentOptions = useMemo(
    () => flattenTreeForParentOptions(menuTree, 0, editingMenuItem?.id),
    [menuTree, editingMenuItem?.id],
  );

  const selectedMenuId = useMemo(() => {
    if (!selectedMenuName) return "";
    return menus.find((m) => m.name === selectedMenuName)?.id ?? "";
  }, [menus, selectedMenuName]);

  // ── Menu handlers ────────────────────────────────────────────────
  const handleCreateMenu = useCallback(() => {
    setEditingMenu(undefined);
    setMenuFormOpen(true);
  }, []);

  const handleEditMenu = useCallback((menu: MenuDto) => {
    setEditingMenu(menu);
    setMenuFormOpen(true);
  }, []);

  const handleSelectMenu = useCallback((name: string) => {
    setSelectedMenuName(name);
  }, []);

  const handleDeleteMenu = useCallback((id: string) => {
    setDeleteMenuId(id);
  }, []);

  const handleMenuFormSuccess = useCallback(() => {
    setMenuFormOpen(false);
    setEditingMenu(undefined);
    void queryClient.invalidateQueries({ queryKey: menuGetListQueryKey() });
  }, [queryClient]);

  const handleDeleteMenuConfirm = useCallback(() => {
    if (!deleteMenuId) return;
    menuDeleteMutation.mutate(
      { id: deleteMenuId },
      {
        onSuccess: () => {
          setDeleteMenuId(null);
          if (selectedMenuId === deleteMenuId) setSelectedMenuName(null);
          void queryClient.invalidateQueries({ queryKey: menuGetListQueryKey() });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteMenuId, menuDeleteMutation, selectedMenuId, queryClient, dispatchToast, t]);

  // ── Menu item handlers ───────────────────────────────────────────
  const handleCreateMenuItem = useCallback(() => {
    setEditingMenuItem(undefined);
    setMenuItemFormOpen(true);
  }, []);

  const handleEditMenuItem = useCallback((item: MenuItemDto) => {
    setEditingMenuItem(item);
    setMenuItemFormOpen(true);
  }, []);

  const handleDeleteMenuItem = useCallback((id: string) => {
    setDeleteMenuItemId(id);
  }, []);

  const invalidateSelectedMenu = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: menuGetListQueryKey() });
    if (selectedMenuName) {
      void queryClient.invalidateQueries({
        queryKey: menuGetByNameQueryKey({ name: selectedMenuName }),
      });
    }
  }, [queryClient, selectedMenuName]);

  const handleMenuItemFormSuccess = useCallback(() => {
    setMenuItemFormOpen(false);
    setEditingMenuItem(undefined);
    invalidateSelectedMenu();
  }, [invalidateSelectedMenu]);

  const handleDeleteMenuItemConfirm = useCallback(() => {
    if (!deleteMenuItemId) return;
    menuItemDeleteMutation.mutate(
      { id: deleteMenuItemId },
      {
        onSuccess: () => {
          setDeleteMenuItemId(null);
          invalidateSelectedMenu();
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteMenuItemId, menuItemDeleteMutation, invalidateSelectedMenu, dispatchToast, t]);

  // ── Render helpers ───────────────────────────────────────────────
  const renderMenuTreeNode = (node: MenuTreeNode, depth: number) => {
    const item = node.item;
    const paddingLeft = `${tokens.spacingHorizontalM} + ${depth * 20}px`;
    return (
      <div key={item.id ?? depth}>
        <div className={styles.menuItemRow} style={{ paddingLeft: `calc(${paddingLeft})` }}>
          <div className={styles.menuItemInfo}>
            <span className={styles.menuItemName}>{item.displayName || "-"}</span>
            {item.url && <span className={styles.menuItemUrl}>{item.url}</span>}
          </div>
          {(canUpdate || canDelete) && (
            <div className={styles.rowActions}>
              {canUpdate && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Edit20Regular />}
                  onClick={() => handleEditMenuItem(item)}
                  aria-label={t("AbpUi::Edit")}
                  title={t("AbpUi::Edit")}
                />
              )}
              {canDelete && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Delete20Regular />}
                  onClick={() => item.id && handleDeleteMenuItem(item.id)}
                  aria-label={t("AbpUi::Delete")}
                  title={t("AbpUi::Delete")}
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
    <PageLayout title={t("Cms:Menus")}>
      <div className={styles.root}>
        {/* Left pane: menus list */}
        <div className={`${styles.pane} ${styles.leftPane}`}>
          <div className={styles.paneHeader}>
            <Text className={styles.paneTitle}>{t("Cms:Menus")}</Text>
            {canCreate && (
              <Button
                size="small"
                appearance="primary"
                icon={<Add20Regular />}
                onClick={handleCreateMenu}
              >
                {t("Cms:NewMenu")}
              </Button>
            )}
          </div>
          <div className={styles.paneBody}>
            {menusQuery.isLoading ? (
              <Text size={200}>{t("AbpUi::Loading")}</Text>
            ) : menus.length === 0 ? (
              <div className={styles.emptyPane}>
                <Navigation20Regular fontSize={24} />
                <Text size={200}>{t("Cms:NoMenus")}</Text>
              </div>
            ) : (
              menus.map((menu) => {
                const isSelected = menu.name === selectedMenuName;
                return (
                  <div
                    key={menu.id}
                    className={`${styles.menuRow} ${isSelected ? styles.menuRowSelected : ""}`}
                    onClick={() => menu.name && handleSelectMenu(menu.name)}
                  >
                    <span className={styles.menuName}>{menu.name || "-"}</span>
                    {(canUpdate || canDelete) && (
                      <div className={styles.rowActions}>
                        {canUpdate && (
                          <Button
                            size="small"
                            appearance="subtle"
                            icon={<Edit20Regular />}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditMenu(menu);
                            }}
                            aria-label={t("AbpUi::Edit")}
                            title={t("AbpUi::Edit")}
                          />
                        )}
                        {canDelete && (
                          <Button
                            size="small"
                            appearance="subtle"
                            icon={<Delete20Regular />}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (menu.id) handleDeleteMenu(menu.id);
                            }}
                            aria-label={t("AbpUi::Delete")}
                            title={t("AbpUi::Delete")}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right pane: menu items tree */}
        <div className={`${styles.pane} ${styles.rightPane}`}>
          <div className={styles.paneHeader}>
            <Text className={styles.paneTitle}>
              {selectedMenuName
                ? `${t("Cms:MenuItems")} — ${selectedMenuName}`
                : t("Cms:MenuItems")}
            </Text>
            {canCreate && selectedMenuName && (
              <Button
                size="small"
                appearance="primary"
                icon={<Add20Regular />}
                onClick={handleCreateMenuItem}
              >
                {t("Cms:NewMenuItem")}
              </Button>
            )}
          </div>
          <div className={styles.paneBody}>
            {!selectedMenuName ? (
              <div className={styles.emptyPane}>
                <Navigation20Regular fontSize={24} />
                <Text size={200}>{t("Cms:SelectMenu")}</Text>
              </div>
            ) : selectedMenuQuery.isLoading ? (
              <Text size={200}>{t("AbpUi::Loading")}</Text>
            ) : menuTree.length === 0 ? (
              <div className={styles.emptyPane}>
                <Text size={200}>{t("Cms:NoMenuItems")}</Text>
              </div>
            ) : (
              menuTree.map((node) => renderMenuTreeNode(node, 0))
            )}
          </div>
        </div>
      </div>

      <MenuFormDialog
        open={menuFormOpen}
        onOpenChange={setMenuFormOpen}
        menu={editingMenu}
        onSuccess={handleMenuFormSuccess}
      />

      <MenuItemFormDialog
        open={menuItemFormOpen}
        onOpenChange={setMenuItemFormOpen}
        menuId={selectedMenuId}
        menuItem={editingMenuItem}
        parentOptions={parentOptions}
        onSuccess={handleMenuItemFormSuccess}
      />

      <ConfirmDialog
        open={deleteMenuId !== null}
        onOpenChange={(open) => !open && setDeleteMenuId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpUi::ItemWillBeDeleted")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteMenuConfirm}
        isPending={menuDeleteMutation.isPending}
      />

      <ConfirmDialog
        open={deleteMenuItemId !== null}
        onOpenChange={(open) => !open && setDeleteMenuItemId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpUi::ItemWillBeDeleted")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteMenuItemConfirm}
        isPending={menuItemDeleteMutation.isPending}
      />
    </PageLayout>
  );
}
