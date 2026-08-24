/**
 * 投屏端（PresentationPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const usePresentationStyles = makeStyles({
  screen: {
    minHeight: "100vh",
    background: tokens.colorNeutralBackground1,
    display: "flex",
    flexDirection: "column",
    padding: tokens.spacingVerticalXXL + " " + tokens.spacingHorizontalXXL,
    gap: tokens.spacingVerticalL,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalL,
    flexWrap: "wrap",
  },
  questionNumber: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightBold,
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalL,
    flexWrap: "wrap",
  },
  countdown: {
    fontSize: tokens.fontSizeHero900,
    fontWeight: tokens.fontWeightBold,
    fontVariantNumeric: "tabular-nums",
  },
  stem: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: 1.4,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  optionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeHero700,
    padding: tokens.spacingVerticalS + " " + tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusLarge,
  },
  optionCorrect: {
    background: tokens.colorPaletteGreenBackground2,
    color: tokens.colorPaletteGreenForeground2,
    fontWeight: tokens.fontWeightBold,
  },
  distribution: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    marginTop: tokens.spacingVerticalL,
  },
  statRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase500,
  },
  statBar: {
    height: "28px",
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground,
    transitionProperty: "width",
    transitionDuration: "500ms",
    minWidth: 0,
  },
  explanation: {
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusLarge,
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase500,
    whiteSpace: "pre-wrap",
  },
  center: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingVerticalM,
    textAlign: "center",
  },
});
