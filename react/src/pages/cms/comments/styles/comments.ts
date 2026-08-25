/**
 * 评论管理页（CommentsPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useCommentsStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingHorizontalM,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
  entityTypeInput: {
    minWidth: "180px",
  },
  stateFilter: {
    minWidth: "160px",
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});
