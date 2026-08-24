/**
 * 教师课堂列表页（TeacherSessionsPage）共享样式。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useTeacherSessionsStyles = makeStyles({
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
  classroomCode: {
    fontFamily: tokens.fontFamilyMonospace,
    fontWeight: tokens.fontWeightBold,
    fontSize: tokens.fontSizeBase400,
    letterSpacing: "0.08em",
  },
  empty: {
    textAlign: "center",
    padding: tokens.spacingVerticalXXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    alignItems: "center",
  },
});
