/**
 * 测验管理页（QuizzesPage）与测验表单对话框共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useQuizzesStyles = makeStyles({
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
  actions: { display: "flex", gap: tokens.spacingHorizontalXS },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
  dialogBody: { maxHeight: "70vh", overflowY: "auto" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "520px",
    maxWidth: "640px",
  },
  picker: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    maxHeight: "240px",
    overflowY: "auto",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalS,
  },
  pickerRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingVerticalXS,
    borderRadius: tokens.borderRadiusMedium,
  },
  pickerFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
  },
  selectedList: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
  selectedRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingVerticalXS + " " + tokens.spacingHorizontalS,
    background: tokens.colorNeutralBackground3,
    borderRadius: tokens.borderRadiusMedium,
  },
});
