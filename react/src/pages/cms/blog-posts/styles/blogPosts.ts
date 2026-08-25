/**
 * 博客文章页（BlogPostsPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useBlogPostsStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    minWidth: 0,
    gap: tokens.spacingHorizontalS,
  },
  search: {
    flex: 1,
    minWidth: 0,
  },
  blogFilter: {
    minWidth: "200px",
  },
  actionButtons: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});
