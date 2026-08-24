/**
 * 菜单管理页（MenusPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useMenusStyles = makeStyles({
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
