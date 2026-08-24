/**
 * 功能页（FeaturesPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useFeaturesStyles = makeStyles({
  groups: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  groupCard: {
    padding: tokens.spacingHorizontalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  groupTitle: {
    marginBottom: tokens.spacingVerticalXXS,
  },
  featureRow: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalM,
  },
  leftActions: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
});
