import { makeStyles, tokens } from "@fluentui/react-components";

export const useHomeStyles = makeStyles({
  loginActions: {
    marginTop: tokens.spacingVerticalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  docLink: {
    marginTop: tokens.spacingVerticalM,
    display: "inline-block",
  },
});
