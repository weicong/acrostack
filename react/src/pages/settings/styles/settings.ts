/**
 * 系统设置页（SettingsPage）共享样式。
 */
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useSettingsStyles = makeStyles({
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
    gap: tokens.spacingVerticalL,
    alignContent: "start",
  },
  sectionTitle: { marginBottom: tokens.spacingVerticalS },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  rowItem: { width: "100%" },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});
