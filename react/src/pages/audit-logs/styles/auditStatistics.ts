/**
 * 审计日志统计面板（AuditLogStatisticsPanel）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useAuditStatisticsStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  filterBar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
  datePicker: {
    minWidth: "220px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: tokens.spacingHorizontalM,
  },
  statCard: {
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  statLabel: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
  },
  statValue: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: 600,
  },
  sectionTitle: {
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalXS,
    fontWeight: 600,
  },
  listCard: {
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
  },
  urlRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
    paddingBlock: tokens.spacingVerticalXS,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  urlText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "monospace",
    fontSize: tokens.fontSizeBase200,
  },
  methodBadges: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalXS,
  },
  errorState: {
    color: tokens.colorPaletteRedForeground1,
  },
});
