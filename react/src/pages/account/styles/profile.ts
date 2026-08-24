import { makeStyles, tokens } from "@fluentui/react-components";

/** 个人信息页样式。 */
export const useProfileStyles = makeStyles({
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
  sectionTitle: {
    marginBottom: tokens.spacingVerticalS,
  },
});
