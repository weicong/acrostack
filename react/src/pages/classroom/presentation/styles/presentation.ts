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
  // ── 随机点名横幅（大屏醒目） ──────────────────────────────
  pickBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingHorizontalL,
    flexWrap: "wrap",
    padding: tokens.spacingVerticalM + " " + tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusXLarge,
    background: `linear-gradient(130deg, ${tokens.colorBrandBackground2}, ${tokens.colorBrandBackground})`,
    boxShadow: "0 14px 36px -16px rgba(67, 40, 157, 0.7)",
    animationName: "tdPop",
    animationDuration: "320ms",
    animationFillMode: "both",
  },
  pickBannerLabel: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "0.3em",
    color: tokens.colorNeutralForegroundOnBrand,
    opacity: 0.85,
  },
  pickBannerName: {
    fontSize: tokens.fontSizeHero900,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorNeutralForegroundOnBrand,
    textShadow: "0 2px 24px rgba(0, 0, 0, 0.35)",
  },
  pickBannerGroup: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForegroundOnBrand,
    opacity: 0.9,
    border: `2px solid ${tokens.colorNeutralForegroundOnBrand}`,
    borderRadius: tokens.borderRadiusCircular,
    padding: "2px " + tokens.spacingHorizontalM,
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
