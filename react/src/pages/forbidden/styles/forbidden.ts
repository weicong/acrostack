import { makeStyles, tokens } from "@fluentui/react-components";

export const useForbiddenStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalXL,
  },
  icon: {
    fontSize: "4rem",
    color: tokens.colorPaletteRedForeground3,
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    textAlign: "center",
  },
});
