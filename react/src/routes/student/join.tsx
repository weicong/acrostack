import { createRoute } from "@tanstack/react-router";
import { Route as studentRoute } from "./route";
import { StudentJoinPage } from "@/pages/classroom/student-join/StudentJoinPage";

/** 学员加入页（/student/join?code=XXXXXX）：课堂码 + 昵称加入。 */
export const Route = createRoute({
  getParentRoute: () => studentRoute,
  path: "/join",
  component: StudentJoinPage,
});
