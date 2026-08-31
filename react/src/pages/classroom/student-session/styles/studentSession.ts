/**
 * 学员答题页（StudentSessionPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useStudentSessionStyles = makeStyles({
  page: {
    minHeight: "100vh",
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalM,
    maxWidth: "640px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalXXL,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
  },
  card: {
    padding: tokens.spacingVerticalL + " " + tokens.spacingHorizontalL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  options: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS },
  optionButton: {
    justifyContent: "flex-start",
    minHeight: "48px",
    fontSize: tokens.fontSizeBase300,
  },
  statistics: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalXS },
  statRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  statBar: {
    height: "12px",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground,
    transitionProperty: "width",
    transitionDuration: "500ms",
  },
  explanation: {
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalS,
  },
  countdown: { fontSize: tokens.fontSizeHero700, fontWeight: tokens.fontWeightBold },
  center: { textAlign: "center", padding: tokens.spacingVerticalXXL },
  viewTabs: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
  summaryRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  historyOptions: { display: "flex", flexDirection: "column", gap: tokens.spacingVerticalXS },
  historyOptionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  historyOptionText: { flex: 1 },
  // ── 随机点名：点到自己时的醒目提醒卡片 ─────────────────────
  pickedCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    background: tokens.colorPaletteMarigoldBackground2,
    borderLeft: `4px solid ${tokens.colorPaletteMarigoldBorder1}`,
    animationName: "tdPop",
    animationDuration: "320ms",
    animationFillMode: "both",
  },
  pickedIcon: {
    fontSize: tokens.fontSizeHero700,
    color: tokens.colorPaletteMarigoldForeground1,
  },
  pickedText: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 },
});
