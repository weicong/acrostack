/**
 * 菜单项树面板：层级缩进展示、激活徽标与行内编辑/删除操作。
 */
import { Badge, Button, Text, tokens } from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular, Navigation20Regular } from "@fluentui/react-icons";
import type { MenuTreeNode } from "../utils/menuTree";
import { useMenusStyles } from "../styles/menus";

interface MenuTreePaneProps {
  tree: MenuTreeNode[];
  loading: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  onEdit: (item: MenuTreeNode["item"]) => void;
  onDelete: (id: string) => void;
}

export function MenuTreePane({
  tree,
  loading,
  canUpdate,
  canDelete,
  onEdit,
  onDelete,
}: MenuTreePaneProps) {
  const styles = useMenusStyles();

  function renderNode(node: MenuTreeNode, depth: number) {
    return (
      <div key={node.item.id ?? depth}>
        <MenuNodeRow
          node={node}
          depth={depth}
          canUpdate={canUpdate}
          canDelete={canDelete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
        {node.children.map((child) => renderNode(child, depth + 1))}
      </div>
    );
  }

  return (
    <div className={styles.pane}>
      <div className={styles.paneHeader}>
        <Text className={styles.paneTitle}>{"菜单项"}</Text>
      </div>
      <div className={styles.paneBody}>
        {loading ? (
          <Text size={200}>{"加载中..."}</Text>
        ) : tree.length === 0 ? (
          <div className={styles.emptyPane}>
            <Navigation20Regular fontSize={24} />
            <Text size={200}>{"暂无菜单项"}</Text>
          </div>
        ) : (
          tree.map((node) => renderNode(node, 0))
        )}
      </div>
    </div>
  );
}

function MenuNodeRow({
  node,
  depth,
  canUpdate,
  canDelete,
  onEdit,
  onDelete,
}: {
  node: MenuTreeNode;
  depth: number;
  canUpdate: boolean;
  canDelete: boolean;
  onEdit: (item: MenuTreeNode["item"]) => void;
  onDelete: (id: string) => void;
}) {
  const styles = useMenusStyles();
  const item = node.item;
  const paddingLeft = `calc(${tokens.spacingHorizontalM} + ${depth * 20}px)`;

  return (
    <div className={styles.menuItemRow} style={{ paddingLeft }}>
      <div className={styles.menuItemInfo}>
        <span className={styles.menuItemName}>
          {item.displayName || "-"}
          {item.isActive === false && (
            <Badge className={styles.inactiveBadge} appearance="filled" color="severe" size="small">
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
              onClick={() => onEdit(item)}
              aria-label={"编辑"}
              title={"编辑"}
            />
          )}
          {canDelete && (
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={() => item.id && onDelete(item.id)}
              aria-label={"删除"}
              title={"删除"}
            />
          )}
        </div>
      )}
    </div>
  );
}
