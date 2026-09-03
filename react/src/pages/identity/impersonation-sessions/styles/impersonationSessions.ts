/**
 * 模拟登录会话页（ImpersonationSessionsPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useImpersonationSessionsStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});
