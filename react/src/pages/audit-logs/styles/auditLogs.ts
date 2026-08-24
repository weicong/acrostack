/**
 * 审计日志页（AuditLogsPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useAuditLogsStyles = makeStyles({
  tabs: {
    marginBottom: tokens.spacingVerticalS,
  },
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    minWidth: 0,
  },
  detailSection: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  detailRow: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    "& > span:first-child": {
      minWidth: "140px",
      fontWeight: 600,
    },
  },
  changeHeader: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    marginBottom: tokens.spacingVerticalXS,
  },
  propertyChange: {
    paddingLeft: tokens.spacingHorizontalL,
    fontSize: tokens.fontSizeBase200,
  },
  actionItem: {
    padding: `${tokens.spacingVerticalXS} 0`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  badge: {
    minWidth: "40px",
    textAlign: "center",
  },
  exceptions: {
    whiteSpace: "pre-wrap",
    color: tokens.colorPaletteRedForeground1,
  },
  originalValue: {
    color: tokens.colorPaletteRedForeground1,
  },
  newValue: {
    color: tokens.colorPaletteGreenForeground1,
  },
  entityChangeCard: {
    padding: tokens.spacingHorizontalS,
  },
});
