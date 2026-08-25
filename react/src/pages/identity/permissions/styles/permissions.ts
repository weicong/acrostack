/**
 * 权限管理页（PermissionsPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const usePermissionsStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalM,
  },
  providerSelect: {
    minWidth: "200px",
  },
  groups: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  groupCard: {
    padding: tokens.spacingHorizontalM,
  },
  permissionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    paddingBlock: tokens.spacingVerticalXXS,
  },
  childPermission: {
    marginLeft: tokens.spacingHorizontalXL,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalM,
  },
});
