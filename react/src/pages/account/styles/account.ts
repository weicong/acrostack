import { makeStyles, tokens } from "@fluentui/react-components";

/** account 目录各认证页共享的卡片内容样式。 */
export const useAccountCardStyles = makeStyles({
  body: {
    padding: `0 ${tokens.spacingHorizontalL} ${tokens.spacingVerticalL}`,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  errorAlert: {
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorPaletteRedBackground1,
    padding: tokens.spacingVerticalS,
    fontSize: "0.875rem",
    color: tokens.colorPaletteRedForeground3,
  },
  fullWidthButton: {
    width: "100%",
  },
  link: {
    fontWeight: 500,
    color: tokens.colorBrandForegroundLink,
  },
});
