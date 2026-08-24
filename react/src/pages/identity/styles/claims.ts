import { makeStyles, tokens } from "@fluentui/react-components";

/** UserClaimsDialog / RoleClaimsDialog 共享样式。 */
export const useClaimsStyles = makeStyles({
  body: {
    minWidth: "560px",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  addRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr auto",
    gap: tokens.spacingHorizontalS,
    alignItems: "flex-end",
  },
  table: {
    marginTop: tokens.spacingVerticalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});
