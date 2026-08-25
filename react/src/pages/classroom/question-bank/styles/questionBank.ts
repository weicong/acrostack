/**
 * 题库管理页（QuestionBankPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useQuestionBankStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalL + " " + tokens.spacingHorizontalL,
    maxWidth: "1080px",
    margin: "0 auto",
    width: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    alignItems: "center",
  },
  filterInput: { width: "240px" },
  empty: {
    textAlign: "center",
    padding: tokens.spacingVerticalXXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "520px",
    maxWidth: "640px",
  },
  optionRow: {
    display: "grid",
    gridTemplateColumns: "32px 1fr auto",
    gap: tokens.spacingHorizontalXS,
    alignItems: "center",
  },
  optionKey: { fontWeight: tokens.fontWeightBold },
  actions: { display: "flex", gap: tokens.spacingHorizontalXS },
  dialogBody: { maxHeight: "70vh", overflowY: "auto" },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});
