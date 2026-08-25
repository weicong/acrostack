/**
 * 教师驾驶舱（TeacherDashboardPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useTeacherDashboardStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalM,
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    paddingBottom: tokens.spacingVerticalXXL,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  classroomCode: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightBold,
    letterSpacing: "0.12em",
    lineHeight: 1,
  },
  card: {
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  controls: {
    display: "flex",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: tokens.spacingHorizontalS,
  },
  statItem: {
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  statValue: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
    lineHeight: 1.1,
  },
  statLabel: { color: tokens.colorNeutralForeground3 },
  distribution: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS },
  statRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  statBar: {
    height: "16px",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground,
    transitionProperty: "width",
    transitionDuration: "500ms",
    minWidth: 0,
  },
  countdown: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
    fontVariantNumeric: "tabular-nums",
  },
  participants: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    maxHeight: "420px",
    overflowY: "auto",
  },
  participantRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingVerticalXS + " " + tokens.spacingHorizontalS,
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorNeutralBackground3,
  },
  center: { textAlign: "center", padding: tokens.spacingVerticalXXL },
});
